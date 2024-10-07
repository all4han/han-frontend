'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function JoinPage() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // 여기에 회원가입 로직 추가
        console.log('회원가입:', { email, name, password })
    }

    return (
        <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <div className="flex justify-center items-center">
                <div className="img-wrapper w-56 h-48">
                    <Image src="/images/sothat-logo.png" alt="Logo" width={224} height={192} />
                </div>
            </div>

            <section className="flex flex-col items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-[700px] bg-white shadow-md h-4/5 rounded-lg px-32 border border-t-2 mt-4">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            이름 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            비밀번호 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                            비밀번호를 확인하세요 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center mt-8">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                            submit
                        </button>
                        <div className="w-25 text-right">
                            <span className="text-gray-600 text-sm -mr-2">back to</span>
                            <Link href="/login" className="text-blue-400 text-sm font-semibold ml-1 hover:text-blue-600 hover:font-bold transition duration-300">
                                Login
                            </Link>
                        </div>
                    </div>
                </form>
            </section>

            <Link href="/" className="text-gray-600 text-sm hover:text-gray-800 transition duration-300">
                Back to Home
            </Link>
        </div>
    )
}