import { AppProps } from "next/app";

import "@styles/fonts.scss";
import "@styles/colors.scss";
import "@styles/globals.scss";

import "bootstrap/dist/css/bootstrap-grid.min.css";

import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
