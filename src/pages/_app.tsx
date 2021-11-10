import { appWithTranslation } from "next-i18next";
import { AppProps } from "next/app";

import "@styles/colors.scss";
import "@styles/fonts.scss";
import "@styles/globals.scss";

import "bootstrap/dist/css/bootstrap-grid.min.css";

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};

export default appWithTranslation(App);
