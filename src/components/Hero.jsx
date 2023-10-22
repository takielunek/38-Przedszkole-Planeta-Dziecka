
import picture5 from '../assets/picture5.png';
import styles from '../style';



function Hero() {

	return (

		<section className={`${styles.marginY}`}>
			
			<div className={`${styles.flexRowCol} ${styles.marginX} `}>
				<div>
					<div className='flex flex-col' data-aos="zoom-out">
						<button
							type='button'
							className={`${styles.paragraph} ${styles.button} ${styles.hover} bg-green my-1 md:my-3`}>
							Sprawdź co u nas
						</button>
						<button
							type='button'
							className={`${styles.paragraph} ${styles.button} ${styles.hover} bg-purple my-1 md:my-3`}>
							Zapisz maluszka
						</button>
						<button
							type='button'
							className={`${styles.paragraph} ${styles.button} ${styles.hover} bg-yellow mt-1 mt:my-3 mb-6 md:mb-14`}>
							Kontakt
						</button>
					</div>
					<h1 className={`${styles.heroHeading}`}>
						Szczęśliwi Rodzice <br /> mają radosne dzieci,
						<br />a one mają...
					</h1>
				</div>

				<div className={`${styles.picture}`}>
					<img src={picture5} data-aos="fade-left" alt='child' className={`${styles.pictureHeight} `}/>
				</div>
			</div>

			<h1 className={`${styles.heading1} text-purple text-center`}>
				PLANETĘ DZIECKA
			</h1>
		</section>
	);
}

export default Hero;
