import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaHome, FaBook, FaStar, FaPlus } from 'react-icons/fa'

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`

const Nav = styled.nav`
    padding: 1em;
    background: #f5f4f0;

    @media (max-width: 700px) {
        padding-top: 64px;
    }

    @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
        overflow-y: scroll;
    }
`

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;

    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1em;
        color: #333;
    }

    a:visited {
        color: #333;
    }

    a:hover,
    a:focus {
        color: #0077cc;
    }
`

const NavLink = styled.span`
    font-size: 1rem;
    padding: 0 0 1.2rem 1rem;
`

const Navigation = () => {
    const {
        data: { isLoggedIn }
    } = useQuery(IS_LOGGED_IN)
    return (
        <Nav>
            <NavList>
                <li>
                    <Link to="/">
                        <FaHome />
                        <NavLink>home</NavLink>
                    </Link>
                </li>
                <li>
                    <Link to="/mynotes">
                        <FaBook />
                        <NavLink>my notes</NavLink>
                    </Link>
                </li>
                <li>
                    <Link to="/favorites">
                        <FaStar />
                        <NavLink>favorites</NavLink>
                    </Link>
                </li>
                {isLoggedIn && (
                    <li>
                        <Link to="/new">
                            <FaPlus />
                            <NavLink>new note</NavLink>
                        </Link>
                    </li>
                )}
            </NavList>
        </Nav>
    )
}

export default Navigation
