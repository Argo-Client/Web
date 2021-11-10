import { FC, MouseEventHandler } from "react";

import styles from "./Button.module.scss";

const Button: FC<{
	onClick?: MouseEventHandler<HTMLButtonElement>;
	title?: string;
}> = ({ children, onClick, title }) => {
	return (
		<button onClick={onClick} title={title} className={styles.button}>
			{children}
		</button>
	);
};

export default Button;
