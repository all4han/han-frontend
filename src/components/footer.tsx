import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between items-center">
                    <div>
                        © 2024 SOTHAT. All rights reserved.
                    </div>
                    <nav>
                        <Link href="#" className="hover:text-gray-300 transition duration-300 mr-4">
                            이용약관
                        </Link>
                        <Link href="#" className="hover:text-gray-300 transition duration-300 mr-4">
                            개인정보처리방침
                        </Link>
                        <Link href="#" className="hover:text-gray-300 transition duration-300">
                            문의하기
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}