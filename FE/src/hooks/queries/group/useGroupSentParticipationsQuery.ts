import { getGroupSentParticipations } from "@/api/group";
import { QueryKey } from "@/constants/queryKey";
import { GroupParticipation } from "@/types/group";
import { useQuery } from "@tanstack/react-query";

// 보낸 참여 요쳥 목록 조회
const useGroupSentParticipationsQuery = () => {
  const query = useQuery<GroupParticipation[]>({
    queryKey: QueryKey.useGroupSentParticipationsQuery(),
    queryFn: getGroupSentParticipations,
  });

  return query;
};

export default useGroupSentParticipationsQuery;
