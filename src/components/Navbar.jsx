import { useState } from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import { navLinks } from '../constants/index.js';
import styles from '../style';

function Navbar() {
	const [active, setActive] = useState('U nas');
	const [toggle, setToggle] = useState(false);

	return (
		<nav className='w-full flex justify-between items-center uppercase py-4 px-10 ss:px-20 navbar bg-purple '>
			<img src={logo1} alt='logo' className='xs:h-[60px] h-[40px] mr-4' />
			<img src={logo2} alt='logo' className='xs:h-[60px] h-[40px]' />
			<ul className='list-none sm:flex hidden justify-end items-center flex-1'>
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`${styles.paragraph1}  cursor-pointer ${styles.hover} ${
							active === nav.title ? 'text-yellow' : 'text-white'
						} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
						onClick={() => setActive(nav.title)}>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>

			<div className='sm:hidden flex flex-1 justify-end items-center z-10 '>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[23px] h-[23px]'
					onClick={() => setToggle(!toggle)}
				/>
				<div
					className={`${
						!toggle ? 'hidden' : 'flex'
					} p-10 bg-green absolute top-20 right-0  min-w-[200px] h-full rounded-l-xl`}>
					<ul className='list-none flex justify-start items-start flex-1 flex-col'>
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`${styles.paragraph1} text-white cursor-pointer  ${
									active === nav.title ? 'font-bold' : 'font-normal'
								} ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
								onClick={() => setActive(nav.title)}>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
