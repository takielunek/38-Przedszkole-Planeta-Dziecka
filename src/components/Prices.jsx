import styles from '../style';

function Prices() {
	return (
		<section className={` ${styles.marginY} ${styles.marginX} text-center `}>
			<div>
				<h2 className={` ${styles.heading2} text-red mb-2 md:mb-20`}>Cennik</h2>
			</div>

			<div className={`${styles.flexRowCol} justify-around `}>
				<div>
					<div>
						<h3 className={` ${styles.heading3} ${styles.marginPrices} text-blue`}>
							Przedszkole
						</h3>
						<p className={`${styles.paragraph} `}>od 2,5 do 6 lat</p>
					</div>
					<div>
						<h4 className={`${styles.heading4} ${styles.marginPrices} text-red`}>CZESNE</h4>
						<p className={`${styles.paragraph} `}>
							500 zł pierwsze dziecko, <br className='md:block hidden' />  drugie dziecko -30% tj. 350 zł, <br className='md:block hidden' /> trzecie
							dziecko GRATIS
						</p>
					</div>
				</div>

				<div>
					<div>
						<h3 className={` ${styles.heading3} ${styles.marginPrices} text-blue`}>
							Żłobek
						</h3>
						<p className={`${styles.paragraph} `}>od 1 roku do 2,5 lat</p>
					</div>

					<div>
						<h4 className={`${styles.heading4} ${styles.marginPrices} text-red`}>CZESNE</h4>
						<p className={`${styles.paragraph} `}>820 zł pierwsze i kolejne dziecko</p>
					</div>
				</div>
			</div>

			<div className='mt-5 md:mt-20'>
				<h4 className={` ${styles.heading3} text-green `}>Dodatkowo</h4>
				<div>
					<h4 className={`${styles.paragraph} ${styles.marginPrices}`}>WYŻYWIENIE / STAWKA DZIENNA - 12 zł</h4>
				
				</div>
				<div>
					<h4 className={`${styles.paragraph} ${styles.marginPrices}`}>WPISOWE - 200 zł</h4>
					
				</div>
			</div>
		</section>
	);
}

export default Prices;
