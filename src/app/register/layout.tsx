import React from "react";
function LayoutLogin({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center h-screen">{children}</div>
  );
}

export default LayoutLogin;
