import { FC } from "react";

import { FaGithub, FaCoffee, FaTwitter } from "react-icons/fa";

import LinkButton from "@components/LinkButton";

export const Links: FC = () => (
	<>
		<h2 id="links">Links</h2>
		<LinkButton href="https://github.com/argo-client/app">
			<FaGithub size={25} />
		</LinkButton>
		<LinkButton href="https://ko-fi.com/guusvanmeerveld">
			<FaCoffee size={25} />
		</LinkButton>
		<LinkButton href="https://twitter.com/ClientArgo">
			<FaTwitter size={25} />
		</LinkButton>
	</>
);
