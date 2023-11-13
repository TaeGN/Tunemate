package kr.co.tunemate.tunemategroupservice.service;

import kr.co.tunemate.tunemategroupservice.dto.layertolayer.GroupParticipationRequestDto;
import kr.co.tunemate.tunemategroupservice.entity.Group;
import kr.co.tunemate.tunemategroupservice.entity.GroupParticipation;
import kr.co.tunemate.tunemategroupservice.entity.GroupParticipationRequest;
import kr.co.tunemate.tunemategroupservice.exception.BaseException;
import kr.co.tunemate.tunemategroupservice.exception.code.GroupErrorCode;
import kr.co.tunemate.tunemategroupservice.repository.GroupParticipationRepository;
import kr.co.tunemate.tunemategroupservice.repository.GroupParticipationRequestRepository;
import kr.co.tunemate.tunemategroupservice.repository.GroupRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class GroupParticipationRequestServiceImpl implements GroupParticipationRequestService {
    private final GroupRepository groupRepository;
    private final GroupParticipationRepository groupParticipationRepository;
    private final GroupParticipationRequestRepository groupParticipationRequestRepository;
    private final ModelMapper modelMapper;

    private static boolean canParticipate(Group group) {
        return group.getClosedByHost() || group.getDeadline().isBefore(LocalDateTime.now()) || group.getParticipantsCnt() >= group.getCapacity();
    }

    /**
     * 사용자가 공고에 대해 참여 요청을 생성합니다.
     *
     * @param userId  요청자 UUID
     * @param groupId 공고 UUID
     */
    @Override
    public void saveGroupParticipationRequest(String userId, String groupId) {
        Group group = groupRepository.findByGroupId(groupId).orElseThrow(() -> new BaseException("존재하지 않는 공고입니다.", GroupErrorCode.NO_SUCH_ITEM_EXCEPTION.getHttpStatus()));

        if (canParticipate(group)) {
            throw new BaseException("마감일 지남/작성자에 의한 마감/인원 초과 로 인해 참가 요청을 생성할 수 없습니다.", GroupErrorCode.ILLEGAL_REQUEST.getHttpStatus());
        }

        groupParticipationRepository.findByUserIdAndGroup(userId, group).ifPresent(groupParticipation -> {
            throw new BaseException("이미 참여중인 공고입니다.", GroupErrorCode.ILLEGAL_REQUEST.getHttpStatus());
        });

        groupParticipationRequestRepository.findByUserIdAndGroup(userId, group).ifPresent(groupParticipationRequest -> {
            throw new BaseException("이미 참여요청이 존재합니다.", GroupErrorCode.ILLEGAL_REQUEST.getHttpStatus());
        });

        GroupParticipationRequest groupParticipationRequest = GroupParticipationRequest.builder().groupParticipationRequestId(UUID.randomUUID().toString()).group(group).userId(userId).build();

        log.info("사용자(userId: {})가 공고 {} 에 대해서 참여 요청을 생성했습니다.", userId, group);

        groupParticipationRequestRepository.save(groupParticipationRequest);
    }

    /**
     * 사용자가 보낸 공고참여요청 목록을 조회합니다.
     *
     * @param userId 사용자 UUID
     * @return
     */
    @Override
    public List<GroupParticipationRequestDto> findAllByUserId(String userId) {
        return groupParticipationRequestRepository.findAllByUserId(userId).stream().map(
                groupParticipationRequest -> modelMapper.map(groupParticipationRequest, GroupParticipationRequestDto.class)
        ).toList();
    }

    /**
     * 사용자가 받은 공고참여요청 목록을 조회합니다.
     *
     * @param userId 사용자 UUID
     * @return
     */
    @Override
    public List<GroupParticipationRequestDto> findAllRequestedParticipationByUserId(String userId) {
        List<Group> groups = groupRepository.getReferencesByHostId(userId);

        return groupParticipationRequestRepository.findAllByGroupIn(groups).stream().map(groupParticipationRequest ->
                modelMapper.map(groupParticipationRequest, GroupParticipationRequestDto.class)
        ).toList();
    }

    /**
     * 공고에 대한 참여요청을 공고 작성자가 수락합니다.
     *
     * @param userId                      수락을 요청한 사용자 UUID
     * @param groupParticipationRequestId 수락 대상 참여요청 UUID
     */
    @Transactional
    @Override
    public void acceptGroupParticipationRequest(String userId, String groupParticipationRequestId) {
        GroupParticipationRequest groupParticipationRequest = groupParticipationRequestRepository.findByGroupParticipationRequestId(groupParticipationRequestId).orElseThrow(() -> new BaseException("존재하지 않는 참여요청입니다.", GroupErrorCode.NO_SUCH_ITEM_EXCEPTION.getHttpStatus()));

        if (!groupParticipationRequest.getGroup().getHostId().equals(userId)) {
            throw new BaseException("공고 작성자만 공고에 대한 참여요청을 수락할 수 있습니다.", GroupErrorCode.NO_AUTHORIZATION_FOR_ITEM_EXCEPTION.getHttpStatus());
        }

        groupParticipationRequestRepository.delete(groupParticipationRequest);

        groupParticipationRepository.findByUserIdAndGroup(userId, groupParticipationRequest.getGroup()).ifPresentOrElse(groupParticipation -> {
                }, // 이미 참여중인 공고에 대한 참여요청을 수락하려 하는 경우
                () -> {
                    GroupParticipation groupParticipation = GroupParticipation.builder().groupParticipationId(UUID.randomUUID().toString()).group(groupParticipationRequest.getGroup()).userId(groupParticipationRequest.getUserId()).build();
                    groupParticipationRepository.save(groupParticipation);
                });
    }

    /**
     * 공고에 대한 참여요청을 공고 작성자가 거절합니다.
     *
     * @param userId                      거절을 요청한 사용자 UUID
     * @param groupParticipationRequestId 거절 대상 참여요청 UUID
     */
    @Transactional
    @Override
    public void denyGroupParticipationRequest(String userId, String groupParticipationRequestId) {
        groupParticipationRequestRepository.findByGroupParticipationRequestId(groupParticipationRequestId).ifPresentOrElse(groupParticipationRequest -> {
            if (!groupParticipationRequest.getGroup().getHostId().equals(userId)) {
                throw new BaseException("공고 작성자만 공고에 대한 참여요청을 거절할 수 있습니다.", GroupErrorCode.NO_AUTHORIZATION_FOR_ITEM_EXCEPTION.getHttpStatus());
            }

            groupParticipationRequestRepository.delete(groupParticipationRequest);
        }, () -> {
            throw new BaseException("존재하지 않는 공고참여 요청입니다.", GroupErrorCode.NO_SUCH_ITEM_EXCEPTION.getHttpStatus());
        });
    }
}
