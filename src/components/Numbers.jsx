import { stats } from '../constants';
import styles from "../style";

const Numbers = () => (
	<section className={`${styles.flexRowCol} ${styles.flexCenter} py-10 px-20 bg-purple`}>
		{stats.map((stat) => (
			<div
				key={stat.id}
				className='flex-1 flex flex-row items-center '>
				<h2 className={` ${styles.heading2} animate-bounce mr-4 text-yellow`}> {stat.value}</h2>
				<p className={`${styles.paragraph} text-white`}>{stat.title}</p>
			</div>
		))}
	</section>
);

export default Numbers;
