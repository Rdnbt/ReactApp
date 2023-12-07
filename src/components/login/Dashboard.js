import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header' // Header コンポーネントをインポート
import './Login.css'

export default function Dashboard() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <Header />
            <div className="dashboard-container">
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>Profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <div className="email-text">
                            <strong>Email:</strong> {currentUser.email}
                        </div>
                        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                    </Card.Body>
                </Card>
                <div className="logout-button-container">
                    <Button variant="link" onClick={handleLogout}>Log Out</Button>
                </div>
            </div>
        </>
    )
}
