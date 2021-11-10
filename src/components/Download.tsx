import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

import { FC } from "react";

import { FiDownload } from "react-icons/fi";

import { REGISTER_URL } from "@src/app.config";

import Register from "@interfaces/register";

import Button from "@components/Button";

import styles from "./Download.module.scss";

const Download: FC<{ file: Register }> = ({ file }) => {
	const router = useRouter();

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
							: t("noDescription")}
					</p>

					<div className={styles.info}>
						<Button
							title={file.commitID}
							onClick={() => router.push(`${REGISTER_URL}${file.downloadURL}`)}
						>
							<FiDownload className={styles.downloadIcon} />
							Download
						</Button>

						<div className={styles.authorContainer}>
							<Image
								className={styles.author}
								src={file.authorImg}
								width={40}
								height={40}
								alt="author"
							></Image>
							<p>{file.author}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Download;
