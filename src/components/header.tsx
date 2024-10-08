import Link from 'next/link'

/**
 * @description The header component of the application.
 *
 * This component renders the header part of the application. It includes a navigation menu and a link to the login page.
 *
 * @returns The header component.
 */
export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="flex items-center justify-between container mx-auto px-6 py-4">
                {/* The logo of the application. */}
                <h1 className="text-3xl font-semibold">
                    <Link href="/">
                        <span className="text-blue-600 font-black">So</span>
                        <span className="text-purple-600 font-black">That</span>
                    </Link>
                </h1>
                {/* The navigation menu of the application. */}
                <nav>
                    {/* Link to the login page. */}
                    <Link href="/login_page" className="text-gray-600 hover:text-gray-800 px-3 py-2 transition duration-300">
                        Login
                    </Link>
                    {/* Link to the sign-up page. */}
                    <Link href="/join_page" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition duration-300">
                        Sign Up
                    </Link>
                </nav>
            </div>
        </header>
    )
}