import { useTranslation } from "next-i18next";
import Image from "next/image";

import { FC } from "react";

import { Logo } from "@src/svg";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
	const { t } = useTranslation();

	return (
		<nav className={styles.nav}>
			<div className="container">
				<div className={styles.header}>
					<Logo className={styles.logo} height={50} width={50} />
					<h1>{t("title")}</h1>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
