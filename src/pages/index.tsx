/* eslint-disable @next/next/no-img-element */
import AppleStore from "@images/app-store.png";
import Phone from "@images/phone.png";
import GoogleStore from "@images/play-store.png";

import { InferGetStaticPropsType } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import Link from "next/link";

import axios from "axios";

import { SWRConfig } from "swr";

import { APP_STORE_LINK, REGISTER_URL, PLAY_STORE_LINK } from "@src/app.config";
import { Logo } from "@src/svg";

import { RegisterResponse } from "@interfaces/register";

import Downloads from "@components/Downloads";
import Features from "@components/Features";
import Page from "@components/Page";

import styles from "./Index.module.scss";

const Home = ({ fallback }: InferGetStaticPropsType<typeof getStaticProps>) => {
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
							<img
								src={Phone.src}
								className={styles.phoneFrame}
								width={384 * SCALE_PHONE}
								height={480 * SCALE_PHONE}
								alt="phone"
							/>
						</div>
					</div>
				</div>
			</div>

			<Features />

			<SWRConfig value={{ fallback }}>
				<Downloads />
			</SWRConfig>
		</Page>
	);
};

export const getStaticProps = async ({ locale }) => {
	const url = `${REGISTER_URL}/register.json`;

	const data = await axios.get<RegisterResponse>(url).then(({ data }) => data);

	data.files = data.files.reverse().slice(0, 5);

	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"features",
				"downloads",
			])),
			fallback: {
				[url]: data,
			},
		},
	};
};

export default Home;
