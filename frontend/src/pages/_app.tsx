import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { ComponentType } from "react";

interface MyAppProps extends AppProps {
  Component: ComponentType;
}

export default function App({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}
