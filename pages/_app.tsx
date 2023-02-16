import type { AppProps } from "next/app";
import "@fontsource/odibee-sans";
import "@fontsource/nunito";
import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
