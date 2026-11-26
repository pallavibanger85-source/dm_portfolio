import { Search, Target, PenTool, Share2, BarChart3, Mail } from 'lucide-react'

const About = () => {
    const skillGroups = [
        {
            icon: Search,
            title: 'SEO',
            color: 'blue',
            skills: ['Google Analytics (GA4)', 'Search Console', 'SEMrush', 'Keyword Research'],
        },
        {
            icon: Target,
            title: 'Paid Ads',
            color: 'green',
            skills: ['Meta Ads Manager', 'Google Ads'],
        },
        {
            icon: PenTool,
            title: 'Content & Tools',
            color: 'purple',
            skills: ['Canva', 'ChatGPT / AI Tools', 'WordPress'],
        },
        {
            icon: Share2,
            title: 'Social Media',
            color: 'pink',
            skills: ['Instagram Marketing', 'LinkedIn Marketing'],
        },
        {
            icon: BarChart3,
            title: 'Analytics',
            color: 'orange',
            skills: ['Google Sheets', 'Microsoft Excel'],
        },
        {
            icon: Mail,
            title: 'Email Marketing',
            color: 'red',
            skills: ['Mailchimp'],
        },
    ]

    const colorClasses = {
        blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
        purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
        pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
        orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
        red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    }

    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 text-sm tracking-wide uppercase">
                        Get to know me
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
                        About <span className="text-blue-600">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Bio */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        I'm a passionate <span className="font-semibold text-blue-600">Digital Marketing Specialist</span> with
                        a strong focus on SEO, content strategy, and performance marketing. I love helping brands
                        tell their story online and turn organic traffic into real, measurable customers.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        As a self-taught marketer, I'm constantly learning and experimenting with the latest tools
                        and trends — from GA4 analytics to AI-powered content creation. My approach is simple:
                        understand the audience, craft the right message, and measure what matters.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
                        Skills & Tools
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillGroups.map(({ icon: Icon, title, color, skills }) => (
                            <div
                                key={title}
                                className="bg-white dark:bg-gray-950 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-1"
                            >
                                {/* Icon + Title */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-3 rounded-xl ${colorClasses[color]}`}>
                                        <Icon size={22} />
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                        {title}
                                    </h4>
                                </div>

                                {/* Skills List */}
                                <ul className="space-y-2">
                                    {skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"
                                        >
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Learning Badge */}
                <div className="text-center">
                    <p className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-950 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Continuously learning & upskilling in digital marketing
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About