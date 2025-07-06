import Header from '../Sliders/Header/Header';
import VideoDownloader from '../Sliders/VideoDownloader/VideoDownloader';
import Footer from '../Sliders/Footer/Footer';
import ContactForm from '../Sliders/ContactForm/ContactForm';
import './Home.css';

function Home() {
    return (
        <>
            <Header />
            <VideoDownloader />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Home;