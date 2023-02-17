import type { AppProps } from "next/app";
import AuthContextProvider from "@context/AuthContext";
import "@fontsource/odibee-sans";
import "@fontsource/nunito";
import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}
