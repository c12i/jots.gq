import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        {' '}
                        <span aria-hidden="true" role="img">
                            🏡
                        </span>{' '}
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/mynotes">
                        <span aria-hidden="true" role="img">
                            📝
                        </span>{' '}
                        my notes
                    </Link>
                </li>
                <li>
                    <span aria-hidden="true" role="img">
                        ⭐️
                    </span>
                    <Link to="/favorites">favorites</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
