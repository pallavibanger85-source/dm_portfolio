import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, Phone, MapPin, Printer } from 'lucide-react'

// Brand icons — inline SVG
const Linkedin = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 14} height={props.size || 14} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

const Github = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 14} height={props.size || 14} viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
)

const Resume = () => {
    // Favicon + Title change on mount, restore on unmount
    useEffect(() => {
        const favicon = document.querySelector('link[rel="icon"]')
        const originalFavicon = favicon?.href
        const originalTitle = document.title

        if (favicon) {
            favicon.href = '/favicon-resume.svg'
        }
        document.title = 'CV — Pallavi Banger | Digital Marketing Specialist'

        return () => {
            if (favicon && originalFavicon) {
                favicon.href = originalFavicon
            }
            document.title = originalTitle
        }
    }, [])

    const skills = {
        'SEO & Analytics': ['Google Analytics (GA4)', 'Google Search Console', 'SEMrush', 'Keyword Research', 'Google Sheets / Excel'],
        'Paid Advertising': ['Meta Ads Manager', 'Google Ads'],
        'Content & Design': ['Canva', 'ChatGPT / AI Tools', 'WordPress'],
        'Social Media': ['Instagram Marketing', 'LinkedIn Marketing'],
        'Email Marketing': ['Mailchimp'],
    }

    const projects = [
        {
            title: 'Bloom Café — Local SEO & Social Media Growth',
            duration: '3 Months | Concept Project',
            points: [
                'Optimized Google Business Profile and implemented local keyword targeting',
                'Built a 90-day Instagram content calendar focused on user-generated content',
                'Results: +78% organic traffic, +2.4K followers, Top 3 local ranking',
            ],
        },
        {
            title: 'Lumina Skincare — Content & SEO Strategy',
            duration: '4 Months | Concept Project',
            points: [
                'Conducted keyword research and developed blog content cluster strategy',
                'Optimized product pages for long-tail keywords using SEMrush and GA4',
                'Results: +312% blog traffic, 45+ keywords ranked, -32% bounce rate',
            ],
        },
        {
            title: 'StudyHub — Paid Ads & Email Funnel',
            duration: '2 Months | Concept Project',
            points: [
                'Restructured Meta and Google Ads campaigns with audience segmentation',
                'Built 5-email Mailchimp nurture sequence to convert free trial users',
                'Results: -42% cost per lead, 38% email open rate, +27% trial-to-paid',
            ],
        },
    ]

    const handlePrint = () => {
        window.print()
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

                {/* Top Actions */}
                <div className="flex justify-between items-center mb-6 print:hidden">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        Back to Portfolio
                    </Link>
                    <button
                        onClick={handlePrint}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium text-sm transition-all"
                    >
                        <Printer size={16} />
                        Download as PDF
                    </button>
                </div>

                {/* Resume Card */}
                <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl p-8 md:p-12 print:shadow-none print:p-0">

                    {/* Header */}
                    <header className="border-b-2 border-gray-900 dark:border-white pb-6 mb-8">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
                            Pallavi Banger
                        </h1>
                        <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                            Digital Marketing Specialist
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <span className="inline-flex items-center gap-1.5">
                                <Mail size={14} /> pallavibanger85@gmail.com
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Phone size={14} /> +91 8571074054
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <MapPin size={14} /> Kaithal, Haryana, India
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Linkedin size={14} /> linkedin.com/in/pallavi-banger
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Github size={14} /> github.com/pallavibanger85-source
                            </span>
                        </div>
                    </header>

                    {/* Professional Summary */}
                    <section className="mb-8">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 pb-2 border-b border-gray-200 dark:border-gray-800">
                            Professional Summary
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Passionate Digital Marketing Specialist with a strong foundation in SEO, content strategy, and performance marketing. Skilled in Google Analytics (GA4), SEMrush, Meta Ads, and content creation tools. Focused on helping brands grow online through data-driven strategies and measurable results.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="mb-8">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                            Skills
                        </h2>
                        <div className="space-y-3">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="flex flex-col sm:flex-row gap-2">
                                    <p className="font-semibold text-gray-900 dark:text-white sm:w-48 flex-shrink-0">
                                        {category}:
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {items.join(' • ')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="mb-8">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
                            Projects & Case Studies
                        </h2>
                        <div className="space-y-6">
                            {projects.map((project) => (
                                <div key={project.title}>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                                        <h3 className="text-base font-bold text-gray-900 dark:text-white">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs text-gray-500 dark:text-gray-500 italic">
                                            {project.duration}
                                        </span>
                                    </div>
                                    <ul className="space-y-1.5 ml-4">
                                        {project.points.map((point) => (
                                            <li key={point} className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed list-disc">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-8">
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 pb-2 border-b border-gray-200 dark:border-gray-800">
                            Education
                        </h2>
                        <div>
                            <p className="font-semibold text-gray-900 dark:text-white">
                                Bachelor of Arts (BA)
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                R.K.S.D. College, Kaithal — Kurukshetra University (KUK)
                            </p>
                            <p className="text-gray-500 dark:text-gray-500 text-sm italic">
                                Completed
                            </p>
                        </div>
                    </section>

                    {/* Languages */}
                    <section>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 pb-2 border-b border-gray-200 dark:border-gray-800">
                            Languages
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">English</span> (Professional) • <span className="font-semibold">Hindi</span> (Native)
                        </p>
                    </section>

                </div>

                {/* Print note */}
                <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-6 print:hidden">
                    Tip: Click "Download as PDF" → Choose "Save as PDF" in the print dialog
                </p>

            </div>
        </div>
    )
}

export default Resume