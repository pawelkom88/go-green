import { useState } from "react";
import Avatar from "@components/ui/avatar/Avatar";
import Login from "@features/login/Login";

export default function MobileMenu() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  function toggleMobileMenu() {
    setOpenMobileMenu(!openMobileMenu);
  }

  return (
    <>
      <footer className="lg:hidden fixed bottom-0 w-full min-h-[2rem] flex-center bg-primary-clr z-10">
        <Avatar onToggle={toggleMobileMenu} src="file" />
      </footer>
      <Login className={openMobileMenu ? "-translate-y-full" : "translate-y-full"} />
    </>
  );
}
