import "@/styles/globals.css";
import AppProps from "next/app";
import type { NextComponentType, NextPageContext } from "next";
import type { ComponentType } from "react";

interface MyAppProps extends AppProps {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}
