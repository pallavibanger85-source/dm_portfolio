import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 text-center px-4">
            <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full font-semibold transition-all"
            >
                Back to Home
            </Link>
        </div>
    )
}

export default NotFound