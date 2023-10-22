import React from 'react';
import picture2 from '../assets/picture2.png';
import pin from '../assets/pin.svg';
import phone from '../assets/phone.svg';
import mail from '../assets/mail.svg';
import facebook from '../assets/facebook.svg';
import styles from '../style';
import logo from '../assets/logo.png';


function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<section id='contact'>
			<div className={`${styles.marginY} ${styles.marginX}`}>
				<h2 className={` ${styles.heading2} text-red text-center`}>Kontakt</h2>
				<div className={`${styles.flexRowCol} `} >
					<div
						className={`${styles.paragraph} flex-1  mt-3 xs:mt-6 md:mt-10`} data-aos="fade-right">
						<div>
							<p className='mt-4 flex flex-row'>
								<img src={pin} alt='pin' className='mr-6' /> ul. Sportowa 1A,
								26-130 Suchedniów
							</p>
						</div>
						<div>
							<p className='mt-4 flex flex-row'>
								<img src={mail} alt='mail' className='mr-4' />
								<a href='mailto:suchedniow@planeta-dziecka.pl'>
									suchedniow@planeta-dziecka.pl
								</a>
							</p>
							<a href='mailto:biuro@planeta-dziecka.pl' className='ml-11'>
								biuro@planeta-dziecka.pl
							</a>
						</div>
						<div>
							<p className='mt-4 flex flex-row'>
								<img src={phone} alt='phone' className='mr-4' />
								<p>+48 501 806 012</p>
							</p>
							<p className='ml-11'>+48 509 123 506</p>
						</div>
						<div className='mt-4 flex flex-row'>
							<img src={facebook} alt='facebook' className='mr-5' />
							<a href='https://www.facebook.com/planetadziecka.suchedniow'>
								Planeta Dziecka Przedszkole Suchedniów
							</a>
						</div>
					</div>
					<div className={`${styles.picture}`}>
						<img src={picture2} alt='child' data-aos="fade-left" className={`${styles.pictureHeight}`}/>
					</div>
				</div>
				<div className='flex justify-center md:justify-start'>
					<img src={logo} alt='logo' className='h-[100px] xs:h-[120px] ss:h-[140px] sm:h-[160px] mt-8 md:mt-0' />
				</div>
			</div>

			<div className=' bg-purple py-5'>
				<div className={`${styles.flexRowCol} ${styles.marginX} justify-between`}>
				<p className={`${styles.paragraph} text-white`}>
					Copyright &copy; {currentYear} PLANETA DZIECKA
				</p>
				<p className={`${styles.paragraph} text-white`}>
					created by Karolina Jesionek
				</p>
				</div>
			</div>
		</section>
	);
}

export default Footer;
