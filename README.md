# TuneMate

> 🎵음악 취향 기반 친구 추천 뮤직플레이어🎵

새로운 친구를 사귀는데에 어려움이 있으셨나요??

음악 듣는 것을 좋아하시나요??

**TuneMate**는 **스트리밍** 기능을 제공하고 **음악 취향 기반**으로 친구를 추천해줍니다.

친구를 사귀고 함께 플레이리스트를 만들어 나가 보세요

![image](https://github.com/TaeGN/Tunemate/assets/110441723/dfcc9156-6d17-45e5-b75f-0eddfc8e2a6d)

## 💡 주요기능

| 구분 | 기능                          | 설명                                                                                                    |
| ---- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1    | 음악 스트리밍                 | Spotify API를 활용한 음악 스트리밍 서비스                                                               |
| 2    | 음악 취향 기반 친구 추천      | 코사인 유사도를 이용하여 대표 플레이리스트 기반 유사한 사용자 추천                                      |
| 3    | 음악 취향 기반 곡 추천        | 콘텐츠 기반 필터링을 이용하여 가수 이름, 템포, 에너지 등 곡의 특징을 벡터화하여 유사도 측정 후 곡 추천  |
| 4    | 플레이리스트 실시간 공동 편집 | SSE(Server-Sent-Event)를 활용하여 플레이리스트 변경 이벤트 발생 시 연결 된 사람에게 변경 된 데이터 전송 |

## 💡 부가기능

| 구분 | 기능           | 설명                                                     |
| ---- | -------------- | -------------------------------------------------------- |
| 1    | 친구와의 채팅  | WebSocket, RabbitMQ 활용하여 구현                        |
| 2    | 공연 정보 제공 | 스케줄러 활용, 인터파크 티켓 사이트 크롤링하여 정보 제공 |
| 3    | 만남 일정 관리 | 공연 정보를 토대로 만남 일정 관리                        |

## 🖥️ 서비스 화면

- 로그인 화면
- 메인화면
- 내 프로필

<p align="center">  
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/708326a3-86bb-40be-bd53-bbb9c087fc3e"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/223689c1-529d-4af8-b1ef-8a297093fabe"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/8ae802ad-24b3-495b-913a-93ab50888542"  width="200" height="400"/>
</p>

---
<br>

- 플레이리스트 설정
- 곡 추가
- 플레이리스트 순서 변경
<p align="center">  
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/f380e0c3-410f-4a12-bc11-3bfdfc908cfc"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/3399c113-c4fd-44da-9ae2-1ca2c086c61b"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/7cdc8892-75cf-41b6-8496-9fc713769ee0"  width="200" height="400"/>
</p>
---
<br>

- 친구목록 화면
- 친구 추천 화면
- 공고 모집 목록
<p align="center">
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/c5f6596c-f3c2-4c0a-983c-8ccabd69a3be"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/2085edd9-e6bf-426c-a196-ff9adbd73005"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/c1086156-75da-49d1-93cf-bebd1094f0c1"  width="200" height="400"/>
</p>
---
<br>

- 공고 상세 화면
- 공고 요청 화면
- 플레이리스트 화면
- 플레이리스트 화면 2
<p align="center">
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/21710e4f-810e-404a-bed7-63b0caa872a6"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/bbf83928-1495-4c14-b3e2-8c8ceccb2d62"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/90d03840-fac2-4e1c-b273-9523a64c1177"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/d96bbeb7-eee3-4fbb-884e-932257dbeac6"  width="200" height="400"/>
</p>

---
<br>

- 채팅 화면
- 공동 플레이리스트 곡 추가(유저 1)
- 공동 플레이리스트 곡 추가(유저 2)

<p align="center">
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/609e5bb5-2cb6-4683-aeea-6c514d1944a2"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/e8d3ffcd-4292-437e-b7ef-42209cb221e2"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/d2078cc9-4202-4f66-b981-794b7d826fe9"  width="200" height="400"/>
</p>

---
<br>

- 공동 플레이리스트 곡 위치 변경(유저 1)
- 공동 플레이리스트 곡 위치 변경(유저 2)

<p align="center">
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/d00211a8-4b88-4e8d-9c79-4e3d85ffcd43"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/17004a9f-7276-443a-8dd1-2a6cd95cea64"  width="200" height="400"/>
</p>

---
<br>

- 공동 플레이리스트 곡 삭제(유저 1)
- 공동 플레이리스트 곡 삭제(유저 2)

<p align="center">
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/ba0afaf9-c484-42fc-90d7-a3ad3f4eec2d"  width="200" height="400"/>
<img src="https://github.com/TaeGN/Tunemate/assets/110441723/d0d3f5a8-e8c9-449a-9de4-da0dae0ed8b3"  width="200" height="400"/>
</p>


## 🐳 아키텍처

![image](https://github.com/TaeGN/Tunemate/assets/110441723/80febaa8-0779-4bc5-b1de-70284b8c3423)

## 🛠️ 기술스택

`Backend`

- IntelliJ IDE
- Springboot 3.1.5
- Spring cloud netflix eureka
- Spring cloud gateway
- Spring cloud openfeign
- Spring security
- Spring Data JPA
- QueryDSL
- Java 17
- WebSocket
- RabbitMQ
- SSE
- JWT
- Gradle
- Swagger
- FastAPI
- Pandas

`Data`

- mySQL
- Redis
- MongoDB

`Frontend`

- visual Studio Code IDE
- Next.js
- React
- Bootstrap
- Spotify API

`Infra`

- Mobaxterm
- AWS EC2
- Nginx
- Jenkins
- Docker
- Docker-compose

`etc`

- Gitlab
- Notion
- Jira
- Mattermost

## 📅 프로젝트 진행 기간

2023.10.10(화) ~ 2023.11.17(금) (6주간 진행)

## 👨‍💻 팀원 소개


![image](https://github.com/TaeGN/Tunemate/assets/110441723/e6719f91-ea0f-4f80-b4aa-2bde9a6f097d)
![image](https://github.com/TaeGN/Tunemate/assets/110441723/76954747-479b-432a-92b1-96eefb566020)
