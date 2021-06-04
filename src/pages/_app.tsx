import { AppProps } from "next/app";

import "@styles/globals.scss";
import "@styles/water.css";
import "@styles/variables.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
