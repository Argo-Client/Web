/* eslint-disable @next/next/no-img-element */
import AppleStore from "@images/app-store.png";
import Phone from "@images/phone.png";
import GoogleStore from "@images/play-store.png";

import { InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";

import {
	APP_STORE_LINK,
	COMMIT_PAGE_LENGTH,
	PLAY_STORE_LINK,
} from "@src/app.config";
import { Logo } from "@src/svg";

import fetchCommits from "@utils/commits";

import Downloads from "@components/Downloads";
import Features from "@components/Features";
import Page from "@components/Page";

import styles from "./Index.module.scss";

const Home = ({
	commits,
	length,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { t } = useTranslation("common");

	const SCALE_PHONE = 1;

	return (
		<Page title={t("home")} description={t("description")}>
			<div className={styles.landing}>
				<div className="container">
					<div className="row">
						<div className={"col-lg " + styles.lead}>
							<Logo height={100} width={100} className={styles.logo} />

							<h1 className={styles.title}>{t("title")}</h1>

							<p className={styles.description}>{t("description")}</p>

							<div className={styles.download}>
								<Link href={PLAY_STORE_LINK}>
									<a>
										<Image {...GoogleStore} width={256} height={75} alt="" />
									</a>
								</Link>

								<Link href={APP_STORE_LINK}>
									<a>
										<Image {...AppleStore} width={221} height={75} alt="" />
									</a>
								</Link>
							</div>
						</div>
						<div className={"col-lg " + styles.phone}>
							<Image
								{...Phone}
								className={styles.phoneFrame}
								width={384 * SCALE_PHONE}
								height={480 * SCALE_PHONE}
								quality={100}
								alt="phone"
							/>
						</div>
					</div>
				</div>
			</div>

			<Features />

			<Downloads commits={commits} length={length} />
		</Page>
	);
};

export const getStaticProps = async ({ locale }) => {
	const [commits, length] = await fetchCommits(0, COMMIT_PAGE_LENGTH);

	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"features",
				"downloads",
			])),
			commits,
			length,
		},
	};
};

export default Home;
