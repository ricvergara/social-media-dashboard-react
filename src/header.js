import React from 'react'

function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-grid">
                    <div>
                        <h1>Social Media Dashboard</h1>
                        <p className="header-total">Total Followers 23,004</p>
                    </div>
                    <div className="dark-mode">
                        <p className="dark-mode-title">Dark Mode</p>
                        <input type="checkbox" className="checkbox" id="checkbox" />
                        <label className="switch" htmlFor="checkbox" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header