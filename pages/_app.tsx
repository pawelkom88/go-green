import AuthContextProvider from "@context/AuthContext";
import UserLocationContextProvider from "@context/UserLocationContext";
import "@fontsource/nunito";
import "@fontsource/odibee-sans";
import "@styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <UserLocationContextProvider>
        <Component {...pageProps} />
      </UserLocationContextProvider>
    </AuthContextProvider>
  );
}
