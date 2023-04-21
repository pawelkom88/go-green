import Button from "@components/button/Button";
import WarningIcon from "@components/ui/icons/WarningIcon";
import { btnUserProfileStyles, signInBtnStyles } from "domain/constants";
import { LogOutMessageProps } from "domain/types";

export default function LogOutMessagePopUp({ onManageLogOut, onHandleLogOut }: LogOutMessageProps) {
  return (
    <div className="text-center">
      <WarningIcon />
      <h3 className="mb-5 text-lg font-normal">Are you sure you want to log out ?</h3>
      <Button
        onClick={() => {
          onManageLogOut(manageLogOutState => ({
            ...manageLogOutState,
            isUserLoggedOut: true,
          }));

          onHandleLogOut();
        }}
        className={`${signInBtnStyles} inline-flex items-center mr-4`}>
        Yes, I&apos;m sure
      </Button>
      <Button
        onClick={() =>
          onManageLogOut(manageLogOutState => ({
            ...manageLogOutState,
            showLogOutPopUpMessage: false,
          }))
        }
        className={btnUserProfileStyles}>
        No, cancel
      </Button>
    </div>
  );
}
