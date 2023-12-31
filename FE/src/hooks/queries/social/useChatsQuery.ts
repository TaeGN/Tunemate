import { getChats } from "@/api/social";
import { QueryKey } from "@/constants/queryKey";
import { Friend } from "@/types/social";
import { useQuery } from "@tanstack/react-query";

// 채팅 기록 조회
const useChatsQuery = (relationId: Friend["relationId"]) => {
  const query = useQuery({
    queryKey: QueryKey.useChatsQuery(relationId),
    queryFn: () => getChats(relationId),
    enabled: relationId >= 0 ? true : false,
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useChatsQuery;
