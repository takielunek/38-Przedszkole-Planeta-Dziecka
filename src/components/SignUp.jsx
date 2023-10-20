
import styles from "../style";

function SignUp() {
	return (
		<section id="signUp" className={` ${styles.paddingTB} bg-purple`}>
			<div className={`${styles.flexRowCol} ${styles.marginX}`}>
			<div>
				<h2 className={` ${styles.heading2} text-yellow mb-2 text-center md:text-start`}>Zgłoszenie dziecka</h2>
				<p className={`${styles.paragraph}text-white`}>
					Formularz należy wypełnić i dostarczyć
					w oryginale  do sekretariatu  lub wysłac drogą elektroniczną.
				</p>
			</div>
			<div className='flex justify-center mx-10'>
				<button
					type='button'
					className={`${styles.paragraph} ${styles.button} ${styles.hover} bg-green mt-10 md:mt-20`}>
					Formularz
				</button>
			</div>
			</div>
		</section>
	);
}

export default SignUp;
