import { useTranslation } from "next-i18next";

import { FC } from "react";

import {
	FiCalendar,
	FiZap,
	FiSettings,
	FiGithub,
	FiEdit3,
	FiMoon,
} from "react-icons/fi";

import styles from "./Features.module.scss";

const Features: FC = () => {
	const { t } = useTranslation("features");

	const ICON_SIZE = 40;

	return (
		<div className={styles.features} id="features">
			<div className="container">
				<div className="row">
					<div className="col">
						<h1>{t("title")}</h1>
					</div>
				</div>
				<div className="row">
					<div className={`col-md-4 ${styles.feature}`}>
						<FiCalendar size={ICON_SIZE} />
						<p>{t("agenda")}</p>
					</div>
					<div className={`col-md-4 ${styles.feature}`}>
						<FiZap size={ICON_SIZE} />
						<p>{t("speed")}</p>
					</div>
					<div className={`col-md-4 ${styles.feature}`}>
						<FiSettings size={ICON_SIZE} />
						<p>{t("settings")}</p>
					</div>
				</div>
				<div className="row">
					<div className={`col-md-4 ${styles.feature}`}>
						<FiGithub size={ICON_SIZE} />
						<p>{t("opensource")}</p>
					</div>
					<div className={`col-md-4 ${styles.feature}`}>
						<FiEdit3 size={ICON_SIZE} />
						<p>{t("customizable")}</p>
					</div>
					<div className={`col-md-4 ${styles.feature}`}>
						<FiMoon size={ICON_SIZE} />
						<p>{t("themes")}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
