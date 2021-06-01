import Head from "next/head";

import { FC } from "react";

const Page: FC<{
  title: string;
  description: string;
  children: JSX.Element[] | JSX.Element;
}> = ({ title, description, children }) => (
  <>
    <Head>
      <title>Argo | {title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://argo-magister.net" />
      <meta property="og:image" content="https://argo-magister.net/assets/images/logo.png" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    {children}
  </>
);
export default Page;
