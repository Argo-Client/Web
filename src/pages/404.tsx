import { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";

import Page from "@components/Page";

const NotFound: NextPage = () => {
	const { t } = useTranslation("404");

	return (
		<Page title={t("title")} description={t("description")}>
			<div className="container">
				<h1>{t("title")}</h1>
				<h2>{t("description")}</h2>
				<Link href="/">{t("goBack")}</Link>
			</div>
		</Page>
	);
};

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "404"])),
		},
	};
};

export default NotFound;
