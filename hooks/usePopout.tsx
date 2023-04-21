import { LogOutMetrics } from "domain/types";
import { useState } from "react";

export default function usePopout() {
  const [manageLogOut, setManageLogOut] = useState<LogOutMetrics>({
    openModal: false,
    showLogOutPopUpMessage: false,
    isUserLoggedOut: null,
  });
  return { manageLogOut, setManageLogOut };
}
