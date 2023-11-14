import BottomNavbar from "@/components/navbar/BottomNavbar/BottomNavbar";
import TopNavbar from "@/components/navbar/TopNavbar/TopNavbar";
import ChatProvider from "@/contexts/ChatContext";
import FriendRequestProvider from "@/contexts/FriendRequestContext";
import StompClientProvider from "@/contexts/StompClientContext";
import "@/styles/globals.css";
import "@/styles/reset.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { useMemo, useEffect, useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import SinglePlayer from "@/components/player/SinglePlayer";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 20000,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const hasNavbar = useMemo(() => {
    if (!pathname) return false;

    // login-page
    if (pathname === "/") {
      return true;
    }

    const pathList = pathname.split("/");

    // chat-page
    if (pathList[1] === "friends" && !isNaN(Number(pathList[2]))) {
      return true;
    }

    return false;
  }, [pathname]);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* <ChatProvider>
          <>
            {!isLoginPage && <TopNavbar />}
            <div className={isLoginPage ? "login" : "main"}>
              
              <Component {...pageProps} style={{ zIndex: 21 }} />
            </div>
            {!isLoginPage && <BottomNavbar />}
          </>
        </ChatProvider> */}
        <StompClientProvider>
          <ChatProvider>
            <FriendRequestProvider>
              <>
                {!hasNavbar && <TopNavbar />}
                <div className={hasNavbar ? "login" : "main"}>
                  <SinglePlayer />
                  <Component {...pageProps} />
                </div>
                {!hasNavbar && <BottomNavbar />}
              </>
            </FriendRequestProvider>
          </ChatProvider>
        </StompClientProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
