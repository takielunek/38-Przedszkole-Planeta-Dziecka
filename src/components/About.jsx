import picture4 from '../assets/picture4.png';
import { paragraphs } from '../constants';
import chevron from '../assets/chevron.svg';
import styles from "../style";

function About() {
	return (
		<section id="about" className={`${styles.marginY} ${styles.marginX} flex flex-col-reverse md:flex-row`}>
			<div className={`${styles.picture}`}>
				<img src={picture4} alt='child' className={`${styles.pictureHeight} md:mt-10`}/>
			</div>

			<div className='flex-1 mx-6 xs:mx-20 mt-10'>
				<h2 className={` ${styles.heading2} text-red text-center md:text-start `}>U nas</h2>
				{paragraphs.map((p) => (
					<div key={p.id}>
					<p className={`${styles.paragraph} mt-4 flex flex-row text-black`}> <img src={chevron} alt="chevron" className='mr-4'/> {p.title}</p>
				</div>
				))}
			</div>
		</section>
	);
}

export default About;
