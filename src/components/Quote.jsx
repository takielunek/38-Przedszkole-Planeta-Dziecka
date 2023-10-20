import styles from "../style";

function Quote() {
	return (
		<section className={` ${styles.paddingTB} bg-purple`}>
		
			<h2 className={` ${styles.paragraph} ${styles.marginX} text-white `}>
				" To nie wiedza, ale <span className={` ${styles.heading2} text-yellow `}>sposób</span> w jaki dzieci się uczą zdecyduje, <span className={` ${styles.heading2} text-yellow `}>kim</span> będą i
				jak poradzą sobie w życiu." ~ Paul Epstein 
			</h2>
		
		</section>
	);
}

export default Quote;
