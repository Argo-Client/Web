import { useTranslation } from "next-i18next";

import { FC } from "react";

import { FiDownload } from "react-icons/fi";

import useSWR from "swr";

import { REGISTER_URL } from "@src/app.config";

import { RegisterResponse } from "@interfaces/register";

import Download from "@components/Download";

import styles from "./Downloads.module.scss";

const Downloads: FC = () => {
	const { t } = useTranslation("downloads");

	const { data } = useSWR<RegisterResponse>(`${REGISTER_URL}/register.json`);

	return (
		<div className={styles.downloads} id="downloads">
			<div className="container">
				{data && (
					<>
						<FiDownload size={40} />
						<h1>{t("title")}</h1>

						{data.files.map((file) => (
							<Download key={file.artifactID} file={file} />
						))}
					</>
				)}
			</div>
		</div>
	);
};

export default Downloads;
