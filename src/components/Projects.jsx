import { Search, PenTool, Target, ArrowRight, ExternalLink, TrendingUp, Clock, Tag } from 'lucide-react'
import { FaSquareInstagram } from "react-icons/fa6";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Bloom Café — Local SEO & Social Growth',
            category: 'SEO + Social Media',
            type: 'Concept Project',
            duration: '3 months',
            icon: Search,
            color: 'blue',
            problem:
                'A local café struggled to appear in Google search results for nearby customers and had minimal Instagram presence, limiting walk-in traffic.',
            strategy:
                'Optimized Google Business Profile, implemented local keyword targeting, and built a 90-day Instagram content calendar focused on user-generated content and location tags.',
            tools: ['Google Business Profile', 'Search Console', 'Canva', 'Instagram'],
            results: [
                { label: 'Organic Traffic', value: '+78%' },
                { label: 'FaSquareInstagram', value: '+2.4K' },
                { label: 'Local Ranking', value: 'Top 3' },
            ],
        },
        {
            id: 2,
            title: 'Lumina Skincare — Content & SEO Strategy',
            category: 'Content Marketing + SEO',
            type: 'Concept Project',
            duration: '4 months',
            icon: PenTool,
            color: 'purple',
            problem:
                'A D2C skincare brand had strong products but zero organic visibility. Their website received minimal traffic and relied entirely on paid ads.',
            strategy:
                'Conducted keyword research around skincare concerns, developed a blog content cluster strategy, optimized product pages, and created AI-assisted pillar content targeting long-tail keywords.',
            tools: ['SEMrush', 'GA4', 'WordPress', 'ChatGPT'],
            results: [
                { label: 'Blog Traffic', value: '+312%' },
                { label: 'Keywords Ranked', value: '45+' },
                { label: 'Bounce Rate', value: '-32%' },
            ],
        },
        {
            id: 3,
            title: 'StudyHub — Paid Ads & Email Funnel',
            category: 'Paid Ads + Email Marketing',
            type: 'Concept Project',
            duration: '2 months',
            icon: Target,
            color: 'green',
            problem:
                'An online learning platform was struggling with high cost-per-lead on ads and low conversion from free trials to paid subscriptions.',
            strategy:
                'Restructured Meta and Google Ads campaigns with audience segmentation, A/B tested creatives, and built a 5-email Mailchimp nurture sequence to convert free trial users.',
            tools: ['Meta Ads Manager', 'Google Ads', 'Mailchimp', 'Google Sheets'],
            results: [
                { label: 'Cost per Lead', value: '-42%' },
                { label: 'Email Open Rate', value: '38%' },
                { label: 'Trial-to-Paid', value: '+27%' },
            ],
        },
    ]

    const colorClasses = {
        blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
        purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
        green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    }

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
        >
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-14">
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 text-sm tracking-wide uppercase">
                        My Work
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white">
                        Featured <span className="text-blue-600">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                    <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
                        A selection of concept case studies demonstrating my approach to SEO, content strategy, social media, and paid advertising.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const Icon = project.icon
                        return (
                            <article
                                key={project.id}
                                className="group bg-white dark:bg-gray-950 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                            >
                                {/* Card Header with Icon + Category */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-start justify-between mb-5">
                                        <div
                                            className={`w-14 h-14 rounded-xl flex items-center justify-center ${colorClasses[project.color]}`}
                                        >
                                            <Icon size={26} />
                                        </div>
                                        <span className="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full">
                                            {project.type}
                                        </span>
                                    </div>

                                    {/* Category */}
                                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">
                                        {project.category}
                                    </p>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                                        {project.title}
                                    </h3>

                                    {/* Duration */}
                                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-4">
                                        <Clock size={14} />
                                        {project.duration}
                                    </div>

                                    {/* Problem */}
                                    <div className="mb-4">
                                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide">
                                            The Challenge
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {project.problem}
                                        </p>
                                    </div>

                                    {/* Strategy */}
                                    <div className="mb-5">
                                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1 uppercase tracking-wide">
                                            My Approach
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {project.strategy}
                                        </p>
                                    </div>

                                    {/* Tools */}
                                    <div className="mb-5">
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                                            <Tag size={12} />
                                            Tools Used
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tools.map((tool) => (
                                                <span
                                                    key={tool}
                                                    className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-full font-medium"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Results Bar */}
                                <div className="mt-auto bg-gradient-to-r from-blue-600 to-blue-700 p-5">
                                    <div className="flex items-center gap-2 text-white mb-3">
                                        <TrendingUp size={16} />
                                        <p className="text-xs font-bold uppercase tracking-wide">
                                            Results Achieved
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        {project.results.map((result) => (
                                            <div key={result.label} className="text-center">
                                                <p className="text-lg font-bold text-white leading-tight">
                                                    {result.value}
                                                </p>
                                                <p className="text-[10px] text-blue-100 uppercase tracking-wide mt-1 leading-tight">
                                                    {result.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>

                {/* Bottom Note */}
                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 italic">
                        These are concept case studies created to demonstrate my strategic approach. Real client work coming soon!
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                    >
                        Start a Project
                        <ArrowRight size={18} />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Projects