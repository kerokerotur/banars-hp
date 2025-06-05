import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
    {/* // <div className="min-h-screen bg-[#1A0B13]"> */}
      {/* <Header /> */}
      {/* <main className="flex-grow"> */}
        <Outlet />
      {/* </main> */}
      {/* <Footer /> */}
    {/* // </div> */}
    </div>
  );
}
