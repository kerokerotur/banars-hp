import { Outlet } from "react-router";
import Header from "~/routes/layout/header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#1A0C13]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="text-center py-4 text-gray-500 text-sm">
        © 2024 Team Manager. All rights reserved.
      </footer>
    </div>
  );
}
