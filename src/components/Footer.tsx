import { useTranslation } from "next-i18next";
import Link from "next/link";

import { FC } from "react";

import { APP_REPO } from "@src/app.config";
import build from "@src/build.json";
import { Logo } from "@src/svg";

import styles from "./Footer.module.scss";

const Footer: FC = () => {
	const { t } = useTranslation("common");

	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<h1 className={styles.title}>
							<Logo width={50} height={50} className={styles.logo} />
							{t("title")}
						</h1>
						<p>
							{t("by")}{" "}
							{build.devs.map((dev, i) => (
								<span key={dev.name}>
									<Link href={dev.website}>
										<a>{dev.name}</a>
									</Link>
									{build.devs.length - 2 == i
										? " & "
										: build.devs.length - 1 == i
										? "."
										: ", "}
								</span>
							))}
						</p>
					</div>

					<div className="col-lg-3">
						<ul className={styles.list}>
							<li>
								<h3>Socials</h3>
							</li>
							<li>
								<Link href={`https://github.com/${APP_REPO.split("/")[0]}`}>
									<a>Github</a>
								</Link>
							</li>
							<li>
								<Link href={"https://twitter.com/ClientArgo"}>
									<a>Twitter</a>
								</Link>
							</li>
							<li>
								<Link href="https://ko-fi.com/guusvanmeerveld">
									<a>Ko-Fi</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
