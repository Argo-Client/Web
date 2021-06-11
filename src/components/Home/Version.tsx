import { FC } from "react";

import useSWR from "swr";
import { HiDownload } from "react-icons/hi";

import APIResponse from "@models/version";

const Versions: FC = () => {
	const API_BASE = "https://argo-magister.net";

	const { data, error } = useSWR<APIResponse>(API_BASE + "/register.json");

	if (error) return <div>Kon de versie info niet ophalen</div>;

	if (data) {
		const successful = data.files
			.filter((commit) => commit.success)
			.reverse()
			.slice(0, 3);

		return (
			<div>
				{successful.map((commit) => (
					<div key={commit.commitID}>
						<table>
							<caption>
								<h3>{commit.commitMessage}</h3>
							</caption>
							<tbody>
								<tr>
									<td>Geauthorizeerd door</td>
									<td>{commit.author}</td>
								</tr>
								<tr>
									<td>Download</td>
									<td>
										<a href={commit.downloadURL}>
											<HiDownload />
										</a>
									</td>
								</tr>
								<tr>
									<td>Ge&uuml;pload</td>

									<td>{new Date(commit.timestamp).toLocaleString()}</td>
								</tr>
							</tbody>
						</table>
					</div>
				))}
			</div>
		);
	}

	return <div>Versie info ophalen...</div>;
};

export const Version: FC = () => {
	return (
		<>
			<h2 id="version">Versies</h2>
			<Versions />
		</>
	);
};
