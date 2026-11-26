import { BarChart3, MessageCircle, Sparkles, Quote } from 'lucide-react'

const Testimonials = () => {
    const values = [
        {
            icon: BarChart3,
            title: 'Data-Driven Approach',
            description:
                'Every strategy is backed by analytics, keyword research, and real performance metrics — no guesswork, only measurable results.',
            color: 'blue',
        },
        {
            icon: MessageCircle,
            title: 'Transparent Communication',
            description:
                'Clear reporting, honest timelines, and consistent updates throughout our collaboration. You always know what\'s happening and why.',
            color: 'green',
        },
        {
            icon: Sparkles,
            title: 'Continuous Learning',
            description:
                'Always upskilling with the latest digital marketing tools, algorithm updates, and AI-powered strategies to keep your brand ahead.',
            color: 'purple',
        },
    ]

    const colorClasses = {
        blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
        purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    }

    return (
        <section
            id="testimonials"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 text-sm tracking-wide uppercase">
                        Why Choose Me
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
                        What I <span className="text-blue-600">Bring</span> to the Table
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
                        More than just services — here's the mindset and approach I bring to every project.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map(({ icon: Icon, title, description, color }) => (
                        <div
                            key={title}
                            className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
                        >
                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${colorClasses[color]} group-hover:scale-110 transition-transform duration-300`}
                            >
                                <Icon size={30} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Philosophy Quote */}
                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-center shadow-xl">
                        <Quote
                            size={40}
                            className="text-blue-200/40 mx-auto mb-4"
                        />
                        <p className="text-white text-lg md:text-xl font-medium italic leading-relaxed mb-4">
                            "I believe great marketing feels like a conversation — not a sales pitch. Every campaign
                            should add value to the audience first, and results will follow."
                        </p>
                        <p className="text-blue-100 font-semibold text-sm">
                            — Pallavi Banger
                        </p>
                    </div>
                </div>

                {/* Coming Soon Note */}
                <div className="text-center mt-10">
                    <p className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Client testimonials coming soon
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Testimonials