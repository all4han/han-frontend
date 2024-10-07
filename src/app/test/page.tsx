'use client'

import { useState, useEffect } from 'react'

export default function TestPage() {
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        fetch('http://localhost:8080/api/test',{credentials: 'include'})
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(err => setError('API 호출 실패: ' + err.message))
    }, [])
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">스프링 연동 테스트</h1>
            {message && <p className="text-green-600">{message}</p>}
            {error && <p className="text-red-600">{error}</p>}
        </div>
    )
}