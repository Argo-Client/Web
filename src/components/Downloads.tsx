import { useTranslation } from "next-i18next";

import { FC } from "react";

import { FiDownload } from "react-icons/fi";
import Spinner from "react-spinners/ScaleLoader";

import axios from "axios";

import useSWRInfinite from "swr/infinite";

import { COMMIT_PAGE_LENGTH } from "@src/app.config";

import Register from "@interfaces/register";

import Button from "@components/Button";
import Download from "@components/Download";

import styles from "./Downloads.module.scss";

const fetcher = (args) => axios.get(args).then(({ data }) => data);

const getKey = (pageIndex, previousPageData) => {
	if (previousPageData && !previousPageData.length) return null;

	return `/api/commits?page=${pageIndex}&limit=${COMMIT_PAGE_LENGTH}`;
};

const Downloads: FC<{ commits: Register[]; length: number }> = ({
	commits,
	length,
}) => {
	const { t } = useTranslation("downloads");

	const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

	if (data) {
		if (data[size - 1]) {
			commits = data[size - 1];
		} else if (data.length != 0) {
			commits = undefined;
		}
	}

	const pages = Math.ceil(length / COMMIT_PAGE_LENGTH);

	const bottom = size < 2;
	const top = size > Math.floor(length / COMMIT_PAGE_LENGTH);

	return (
		<div className={styles.downloads} id="downloads">
			<div className="container">
				<FiDownload size={40} />
				<h1>{t("title")}</h1>

				<div className={styles.buttons}>
					<Button onClick={() => setSize((size) => (bottom ? size : size - 1))}>
						{t("previous")}
					</Button>

					{Array.from(Array(pages).keys()).map((number) => (
						<button
							onClick={() => setSize(number + 1)}
							className={`${styles.paginator} ${
								size - 1 == number ? styles.selectedPaginator : null
							}`.trim()}
							key={number}
						>
							{number + 1}
						</button>
					))}

					<Button onClick={() => setSize((size) => (top ? size : size + 1))}>
						{t("next")}
					</Button>
				</div>

				{commits && (
					<>
						{commits.map((file) => (
							<Download key={file.artifactID} file={file} />
						))}
					</>
				)}

				{!commits && (
					<div className={styles.spinner}>
						<div>
							<Spinner color="#1484ea" />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Downloads;
