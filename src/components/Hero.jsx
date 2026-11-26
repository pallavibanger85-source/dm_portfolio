import { ArrowRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import profile from '../assets/profile.jpeg'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-24 md:pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 relative overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl opacity-20"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="order-2 md:order-1 text-center md:text-left">
                        <p className="inline-block text-blue-600 dark:text-blue-400 font-semibold mb-3 text-sm sm:text-base tracking-wide bg-blue-50 dark:bg-blue-900/20 px-4 py-1.5 rounded-full">
                            👋 Hello, I'm
                        </p>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                            Pallavi <span className="text-blue-600">Banger</span>
                        </h1>

                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6">
                            Digital Marketing Specialist
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto md:mx-0">
                            Turning clicks into customers with data-driven{' '}
                            <span className="text-blue-600 font-semibold">SEO</span> & digital strategy.
                        </p>

                        <p className="text-base text-gray-500 dark:text-gray-500 mb-8 max-w-xl mx-auto md:mx-0">
                            I help brands grow online through SEO, content strategy, and performance marketing — with results you can actually measure.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
                            {/* Primary CTA — Contact */}
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                            >
                                Let's Work Together
                                <ArrowRight size={18} />
                            </a>

                            {/* Secondary CTA — Projects */}
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 px-7 py-3 rounded-full font-semibold transition-all"
                            >
                                View My Work
                            </a>

                            {/* Tertiary CTA — CV */}
                            <Link
                                to="/resume"
                                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 px-7 py-3 rounded-full font-semibold transition-all"
                            >
                                View CV
                                <FileText size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT — Image */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <div className="relative">

                            {/* Glow behind image */}
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl blur-3xl opacity-20 scale-105"></div>

                            {/* Square image container */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-900">
                                <img
                                    src={profile}
                                    alt="Pallavi Banger"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero