import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Testimonials />
                <Contact />
                < Footer />
            </main>
        </div>
    )
}

export default Home