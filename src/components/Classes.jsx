import { classes } from '../constants';
import chevron from '../assets/chevron.svg';
import picture6 from '../assets/picture6.png';
import styles from '../style';

function Classes() {
	return (
		<section id='classes' className={` ${styles.marginY} ${styles.marginX}`}>
			<h2 className={` ${styles.heading2} text-red text-center`}>
				Zajęcia dodatkowe
			</h2>
			<div >
				{classes.map((p) => (
					<div className=' my-6'>
						<div key={p.id}>
							<p className={`${styles.paragraph} mt-6 flex flex-row`}>
								<img src={chevron} alt='chevron' className='mr-4' />
								{p.title}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className={`${styles.picture}`}>
			<img src={picture6} alt="dog" className='h-[130px] xs:h-[180px] sm:h-[220px] md:h-[250px] mt-5 md:mt-10' />
			</div>
		</section>
	);
}

export default Classes;
