import { Search, PenTool, Share2, Target, BarChart3, Mail, ArrowRight } from 'lucide-react'

const Services = () => {
    const services = [
        {
            icon: Search,
            title: 'SEO Optimization',
            description:
                'Enhance your website\'s search visibility through comprehensive keyword research, on-page optimization, and technical audits that drive sustainable organic growth.',
            features: ['Keyword Research', 'On-Page SEO', 'Technical Audits'],
            color: 'blue',
        },
        {
            icon: PenTool,
            title: 'Content Marketing',
            description:
                'Develop high-quality content that ranks on search engines and resonates with your target audience — from blog articles to website copy and AI-assisted writing.',
            features: ['Blog Writing', 'Website Copy', 'AI-Assisted Content'],
            color: 'purple',
        },
        {
            icon: Share2,
            title: 'Social Media Management',
            description:
                'Establish a strong social presence on Instagram and LinkedIn with strategic content planning, consistent posting, and meaningful audience engagement.',
            features: ['Instagram Strategy', 'LinkedIn Growth', 'Content Calendar'],
            color: 'pink',
        },
        {
            icon: Target,
            title: 'Paid Advertising',
            description:
                'Design, launch, and optimize high-converting campaigns on Meta and Google Ads — ensuring your message reaches the right audience at the right time.',
            features: ['Meta Ads', 'Google Ads', 'Campaign Optimization'],
            color: 'green',
        },
        {
            icon: BarChart3,
            title: 'Analytics & Reporting',
            description:
                'Gain actionable insights through GA4 tracking, custom dashboards, and clear performance reports that support confident, data-driven decisions.',
            features: ['GA4 Setup', 'Custom Dashboards', 'Performance Reports'],
            color: 'orange',
        },
        {
            icon: Mail,
            title: 'Email Marketing',
            description:
                'Nurture your audience and drive conversions with well-crafted email campaigns, automation workflows, and newsletters designed to deliver real value.',
            features: ['Mailchimp Campaigns', 'Email Automation', 'Newsletters'],
            color: 'red',
        },
    ]

    const colorClasses = {
        blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white',
        purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white',
        pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 group-hover:bg-pink-600 group-hover:text-white',
        green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white',
        orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 group-hover:bg-orange-600 group-hover:text-white',
        red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white',
    }

    return (
        <section
            id="services"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 text-sm tracking-wide uppercase">
                        What I Offer
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
                        My <span className="text-blue-600">Services</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive digital marketing services designed to strengthen your brand's online presence — from SEO and content to paid advertising and analytics.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map(({ icon: Icon, title, description, features, color }) => (
                        <div
                            key={title}
                            className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-7 border border-gray-100 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            {/* Icon */}
                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${colorClasses[color]}`}
                            >
                                <Icon size={26} />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                                {description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6 flex-grow">
                                {features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                                    >
                                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Link */}
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:gap-3 transition-all"
                            >
                                Get Started
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-600 dark:text-gray-400 mb-5">
                        Need something tailored to your goals? Let's discuss how I can help.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                    >
                        Get In Touch
                        <ArrowRight size={18} />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Services