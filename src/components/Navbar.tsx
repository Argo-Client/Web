import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import { FC } from "react";

import { FiGithub, FiTwitter } from "react-icons/fi";

import { APP_REPO, TWITTER } from "@src/app.config";
import { Logo } from "@src/svg";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
	const { t } = useTranslation();

	const router = useRouter();

	return (
		<nav className={styles.nav}>
			<div className="container d-flex">
				<div className={styles.header}>
					{router.pathname != "/" && (
						<>
							<Logo className={styles.logo} height={50} width={50} />
							<h1>{t("title")}</h1>
						</>
					)}
				</div>
				<div className={styles.links}>
					<Link href={"/#features"}>
						<a>Features</a>
					</Link>
					<Link href={"/#downloads"}>
						<a>Downloads</a>
					</Link>
					<Link href={`https://github.com/${APP_REPO}`}>
						<a>
							<FiGithub size={30} />
						</a>
					</Link>
					<Link href={TWITTER}>
						<a>
							<FiTwitter size={30} />
						</a>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
