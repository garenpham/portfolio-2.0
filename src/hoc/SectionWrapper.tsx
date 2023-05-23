import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

type Props = {
	Component: React.FC;
	idName: string;
};

const style = {
	wrapper: `${styles.padding} max-w-7xl mx-auto relative z-0`,
};

const SectionWrapper = ({ Component, idName }: Props) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={style.wrapper}>
				<span
					className="hash-span"
					id={idName}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
