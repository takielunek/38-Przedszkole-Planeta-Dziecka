import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Numbers from './components/Numbers';
import About from './components/About';
import Quote from './components/Quote';
import Methods from './components/Methods';
import Leanguage from './components/Leanguage';
import Classes from './components/Classes';
import More from './components/More';
import Prices from './components/Prices';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollButton';
import styles from './style';

function App() {
	return (
		<div className={`${styles.boxWidth} bg-white`}>
			<Navbar />
			<Hero />
			<Numbers />
			<About />
			<Quote />
			<Methods />
			<Leanguage />
			<Classes />
			<More />
			<Prices />
			<SignUp />
			<Footer />
			<ScrollButton />
		</div>
	);
}

export default App;
