import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import { FiDownload } from "react-icons/fi";

import { APP_REPO, COMMIT_URL } from "@src/app.config";

import { Commit } from "@models/version";

import Button from "@components/Button";

import styles from "./Download.module.scss";

const Download: FC<{ commit: Commit }> = ({ commit }) => {
	const { t } = useTranslation("downloads");

	const message = commit.message.split("\n");

	return (
		<div className={styles.download}>
			<div className="row">
				<div className="col">
					<p className={styles.header}>
						<span className={styles.title}>{message.shift()}</span>
						<span className={styles.timestamp}>
							{new Date(commit.timestamp).toLocaleDateString()}
							<> - </>
							{new Date(commit.timestamp).toLocaleTimeString()}
						</span>
					</p>
					<p>
						{message.length != 0
							? message.map((description, i) => (
									<span key={i}>
										<span>{description}</span>
										<br />
									</span>
							  ))
							: null}
					</p>

					<div className={styles.info}>
						<div className={styles.buttons}>
							<Link href={commit.download}>
								<a>
									<Button className={styles.downloadButton} title={commit.id}>
										<FiDownload className={styles.downloadButton} />
										Download
									</Button>
								</a>
							</Link>

							<Link href={`https://github.com/${APP_REPO}/commit/${commit.id}`}>
								<a>{t("github")}</a>
							</Link>
						</div>

						<Link href={`https://github.com/${commit.author}`}>
							<a className={styles.authorContainer}>
								<Image
									className={styles.author}
									src={commit.author.avatar}
									width={40}
									height={40}
									alt="author"
								></Image>
								<p>{commit.author.username}</p>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Download;
