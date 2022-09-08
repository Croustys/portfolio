import type { ReactNode } from 'react';
import Styles from './styles.module.scss';

type Props = {
	children: ReactNode;
}

function Button({ children }: Props) {
	return <span className={Styles.button}>{children}</span>;
}

export default Button;
