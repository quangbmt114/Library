"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeState } from "@/store/AuthSlice";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function LayoutRoot({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const patchName = usePathname();
  //   console.log("stateAuth", stateAuth);

  useEffect(() => {
    const access_token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;
    if (access_token) {
      dispatch(changeState(true));
    } else {
      dispatch(changeState(false));
    }
    // console.log("stateAuth2", stateAuth);
  }, [dispatch, router, patchName]);
  return <>{children}</>;
}

export default LayoutRoot;
