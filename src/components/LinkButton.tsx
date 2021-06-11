import { FC } from "react";

const LinkButton: FC<{ href: string; children: JSX.Element }> = ({ href, children }) => (
	<a href={href}>
		<button>{children}</button>
	</a>
);

export default LinkButton;
