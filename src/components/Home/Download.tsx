import { FC } from "react";

import LinkButton from "@components/LinkButton";

import { AiFillAndroid } from "react-icons/ai";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

export const Download: FC = () => {
	const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=nl.noxus.argo";
	const APP_STORE = "";
	const ANDROID_LATEST = "";

	return (
		<>
			<h2 id="download">Download</h2>
			<LinkButton href={GOOGLE_PLAY}>
				<FaGooglePlay size={25} />
			</LinkButton>
			<LinkButton href={APP_STORE}>
				<FaAppStoreIos size={25} />
			</LinkButton>
			<LinkButton href={ANDROID_LATEST}>
				<AiFillAndroid size={25} />
			</LinkButton>
		</>
	);
};
