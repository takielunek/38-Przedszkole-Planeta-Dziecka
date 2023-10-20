import styles from '../style';

function More() {
	return (
		<section className={` ${styles.paddingTB} bg-purple`}>
			<div className={` ${styles.marginX}`}>
				<h2 className={` ${styles.heading2} text-yellow text-center mb-5`}>
					Sprawdź również
				</h2>
				<div className={`${styles.flexRowCol} justify-around`}>
					<button
						type='button'
						className={`${styles.paragraph} ${styles.button} ${styles.hover} bg-green my-1 xs:my-2 ss:my-3`}>
						Organizacja dnia
					</button>
					<button
						type='button'
						className={`${styles.paragraph} ${styles.button} ${styles.hover} bg-green my-1 xs:my-2 ss:my-3`}>
						Posiłki
					</button>
					<button
						type='button'
						className={`${styles.paragraph} ${styles.button} ${styles.hover} bg-green my-1 xs:my-2 ss:my-3`}>
						Nasz lokal
					</button>
				</div>
				<div className='text-white'>
					<h5 className={` ${styles.heading5} mt-10`}>
						"Dokładamy wszelkich starań, by świat dziecka w Planecie Dziecka był
						bezpieczny, estetyczny, kolorowy i przyjazny. Nasze maluszki to
						doceniają czerpiąc radość z codziennej zabawy i edukacji."
					</h5>
					<h5 className={` ${styles.heading5} text-end mt-2`}>
						~ Małgorzata Adamczyk, Założyciel Przedszkola Planeta Dziecka
					</h5>
				</div>
			</div>
		</section>
	);
}

export default More;
