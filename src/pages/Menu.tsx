import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className ="mx-auto max-w-5xl px-6 py-20">
            <Link to="/" className = "text-sm font-semibold text-moss-600 hover:underline">
                &larr; Back to Home
            </Link>

            <h1 className="mt-6 text-4xl font-extrabold text-mauve-500 sm:text-5xl">
                Our Menu
            </h1>
            <p className = "mt-4 max-w-xl text-lg text-moss-600">
                Teas &amp; desserts coming soon!
            </p>
        </div>
    )
}

export default Menu