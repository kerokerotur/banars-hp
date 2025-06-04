import { Outlet } from "react-router";
import Header from "../layout/header";
import Footer from "../layout/footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#1A0B13]">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
