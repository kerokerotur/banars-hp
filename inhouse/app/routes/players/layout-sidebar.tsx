import { Sidebar } from "lucide-react";
import { Outlet } from "react-router";

export default function LayoutSidebar() {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
