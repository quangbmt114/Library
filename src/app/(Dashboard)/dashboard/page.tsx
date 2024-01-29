"use client";
import { DefaultSidebar } from "@/components/SideBarDashboard";
import { TableProduct } from "@/components/TableProduct";

function Dashboard() {
  return (
    <div className="flex h-dvh">
      <DefaultSidebar />
      <TableProduct />
    </div>
  );
}

export default Dashboard;
