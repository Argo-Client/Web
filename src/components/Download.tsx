import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import { FC } from "react";

import { FiDownload } from "react-icons/fi";

import { APP_REPO, REGISTER_URL } from "@src/app.config";

import Register from "@interfaces/register";

import Button from "@components/Button";

import styles from "./Download.module.scss";

const Download: FC<{ file: Register }> = ({ file }) => {
	const { t } = useTranslation("downloads");

	const message = file.commitMessage.split("\n");

	return (
		<div className={styles.download}>
			<div className="row">
				<div className="col">
					<p className={styles.header}>
						<span className={styles.title}>{message.shift()}</span>
						<span className={styles.timestamp}>
							{new Date(file.timestamp).toLocaleDateString()}
							<> - </>
							{new Date(file.timestamp).toLocaleTimeString()}
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
							<Link href={`${REGISTER_URL}${file.downloadURL}`}>
								<a>
									<Button
										className={styles.downloadButton}
										title={file.commitID}
									>
										<FiDownload className={styles.downloadButton} />
										Download
									</Button>
								</a>
							</Link>

							<Link
								href={`https://github.com/${APP_REPO}/commit/${file.commitID}`}
							>
								<a>{t("github")}</a>
							</Link>
						</div>

						<Link href={`https://github.com/${file.author}`}>
							<a className={styles.authorContainer}>
								<Image
									className={styles.author}
									src={file.authorImg}
									width={40}
									height={40}
									alt="author"
								></Image>
								<p>{file.author}</p>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Download;
