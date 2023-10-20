import React, { useState, useEffect } from 'react';
import arrowUp from '../assets/arrowUp.svg';

export default function BasicExample() {
	const [showButton, setShowButton] = useState(false);

	const handleScroll = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			setShowButton(true);
		} else {
			setShowButton(false);
		}
	};

	const backToTop = () => {
		document.documentElement.style.scrollBehavior = 'smooth';
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			{showButton && (
				<button
					type='button'
					onClick={backToTop}
					className={` ${
						showButton ? `inline-block` : `hidden`
					} fixed bottom-[40px] right-[40px] py-2 px-3 bg-green rounded-full`}>
					<img src={arrowUp} alt='arrow' />
				</button>
			)}
		</>
	);
}
