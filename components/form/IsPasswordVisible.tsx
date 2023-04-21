import HidePasswordIcon from "@components/ui/icons/HidePasswordIcon";
import ShowPasswordIcon from "@components/ui/icons/ShowPasswordIcon";

export default function IsPasswordVisible({ showPassword }: { showPassword: boolean }) {
  return (
    <>
      {showPassword ? (
        <HidePasswordIcon className="absolute top-[.4rem] right-[.2rem] z-50" size={20} />
      ) : (
        <ShowPasswordIcon size={28} />
      )}
    </>
  );
}
