import picture3 from '../assets/picture3.png';
import { methods } from '../constants';
import chevron from '../assets/chevron.svg';
import styles from '../style';

function Methods() {
	return (
		<section
			className={`${styles.flexRowCol} ${styles.marginY} ${styles.marginX}`}>
			<div className={`flex-1 flex-col place-content-center mx-6 xs:mx-20 mt-10`}>
				<p className={`${styles.paragraph2} text-center md:text-start`}>Wzmacniamy wszystkie typy</p>
				<h2 className={`${styles.heading2} text-red text-center md:text-start`}>inteligencji </h2>
				{methods.map((p) => (
					<div key={p.id}>
						<p className={`${styles.paragraph} mt-4 flex flex-row`}>
							{' '}
							<img src={chevron} alt='chevron' className='mr-4' /> {p.title}
						</p>
					</div>
				))}
			</div>

			<div className={`${styles.picture} mr-0 md:mr-20`}>
				<img src={picture3} alt='child' className={`${styles.pictureHeight}`} />
			</div>
		</section>
	);
}

export default Methods;
