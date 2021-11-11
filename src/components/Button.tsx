import { FC, MouseEventHandler } from "react";

import styles from "./Button.module.scss";

const Button: FC<{
	onClick?: MouseEventHandler<HTMLButtonElement>;
	title?: string;
	className?: string;
}> = ({ children, onClick, title, className }) => {
	return (
		<button
			onClick={onClick}
			title={title}
			className={`${styles.button} ${className}`.trim()}
		>
			{children}
		</button>
	);
};

export default Button;
