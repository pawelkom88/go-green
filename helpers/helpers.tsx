import { Coords } from "domain/types";
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
  let authErrorMessage = "";

  switch (error.code) {
    case "auth/email-already-in-use":
      authErrorMessage = `This email address already exists.`;
      break;
    case "auth/missing-email":
      authErrorMessage = `Enter valid email.`;
      break;
    case "auth/invalid-email":
      authErrorMessage = `Email address is invalid.`;
      break;
    case "auth/user-not-found":
      authErrorMessage = `Email not found.`;
      break;
    case "auth/invalid-password":
      authErrorMessage = `Invalid password.`;
      break;
    case "auth/wrong-password":
      authErrorMessage = `Wrong password.`;
      break;
    case "auth/operation-not-allowed":
      authErrorMessage = `Error during sign up.`;
      break;
    case "auth/weak-password":
      authErrorMessage =
        "Password is not strong enough. Add additional characters including special characters and numbers.";
      break;
    case "auth/too-many-requests":
      authErrorMessage =
        "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
      break;
    default:
      authErrorMessage;
      break;
  }

  return authErrorMessage;
}
