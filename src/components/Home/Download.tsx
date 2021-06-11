import { FC } from "react";

import LinkButton from "@components/LinkButton";

import { AiFillAndroid } from "react-icons/ai";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";

export const Download: FC = () => (
	<>
		<h2 id="download">Download</h2>
		<LinkButton href="https://play.google.com/store/apps/details?id=nl.noxus.argo">
			<FaGooglePlay size={25} />
		</LinkButton>
		<LinkButton href="">
			<FaAppStoreIos size={25} />
		</LinkButton>
		<LinkButton href="">
			<AiFillAndroid size={25} />
		</LinkButton>
	</>
);
