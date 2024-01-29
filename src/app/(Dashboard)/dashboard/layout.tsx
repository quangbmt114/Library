"use client";
import { useAppSelector } from "@/lib/hooks";
import { authState } from "@/store/AuthSlice";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
function LayoutDashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const stateAuth = useAppSelector(authState);
  useEffect(() => {
    if (stateAuth === false) {
      toast.error("you need login first");
      return router.push("/login");
    }
    {
      console.log("stateAuth", stateAuth);
    }
  }, [stateAuth]);
  return <div className="mx-auto">{children}</div>;
}

export default LayoutDashboard;
