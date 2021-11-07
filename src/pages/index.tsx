import { NextPage } from "next";

import Link from "next/link";

import Page from "@components/Page";

import Image from "next/image";

import styles from "./Index.module.scss";

import { APP_STORE_LINK, PLAY_STORE_LINK } from "@src/app.config";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  return (
    <Page title="Home" description="Ontdek en download de Argo app hier!">
      <div className="container">
        <div className={styles.landing}>
          <div className="row">
            <div className="col-sm-6">
              <div className={styles.header}>
                <Image
                  width={75}
                  height={75}
                  src="/assets/images/logo.png"
                  alt=""
                />
                <h1>{t("title")}</h1>
              </div>

              <div className={styles.download}>
                <Link href={PLAY_STORE_LINK}>
                  <a>
                    <Image
                      width={235}
                      height={70}
                      src="/assets/images/play-store.png"
                      alt=""
                    />
                  </a>
                </Link>

                <Link href={APP_STORE_LINK}>
                  <a>
                    <Image
                      src="/assets/images/app-store.png"
                      width={235}
                      height={70}
                      alt=""
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>

      <div className={styles.features}></div>
    </Page>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default Home;
