import { AuthErrorMessage, Coords } from "domain/types";
import { FirebaseError } from "firebase/app";

export function handleLocation(start: Coords, end: Coords): undefined | string {
  if (start == undefined) return;

  return `https://www.google.com/maps/dir/?api=1&origin=${start.lat},${start.lng}&destination=${end.lat},${end.lng}&travelmode=driving`;
}

export function splitStringBySymbol<T>(value: T, symbol: string) {
  if (typeof value === "string") {
    const splittedName = value.split(symbol)[0];

    return splittedName.charAt(0).toUpperCase() + splittedName.slice(1);
  }
}

export function handleAuthError(error: FirebaseError) {
  const authErrorMessage: AuthErrorMessage = {
    email: "",
    password: "",
    auth: "",
  };

  switch (error.code) {
    case "auth/email-already-in-use":
      authErrorMessage.email = `This email address already exists.`;
      break;
    case "auth/invalid-email":
      authErrorMessage.email = `Email address is invalid.`;
      break;
    case "auth/invalid-password":
      authErrorMessage.password = `Invalid password.`;
      break;
    case "auth/operation-not-allowed":
      authErrorMessage.auth = `Error during sign up.`;
      break;
    case "auth/weak-password":
      authErrorMessage.password =
        "Password is not strong enough. Add additional characters including special characters and numbers.";
      break;
    default:
      authErrorMessage.auth = "";
      break;
  }

  return authErrorMessage;
}
