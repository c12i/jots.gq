import React from 'react'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'
import { Link, withRouter } from 'react-router-dom'
import { FaPen } from 'react-icons/fa'

import Button from '../components/Button'

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 64px;
    position: fixed;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`

const LogoText = styled.h2`
    margin: 0;
    padding: 0 0 0 0.4em;
    display: inline;
`

const UserState = styled.div`
    margin-left: auto;
`

const Header = ({ history }) => {
    const {
        data: { isLoggedIn },
        client
    } = useQuery(IS_LOGGED_IN)
    return (
        <HeaderBar>
            <FaPen />
            <LogoText>Jots</LogoText>
            <UserState>
                {isLoggedIn ? (
                    <Button
                        onClick={() => {
                            localStorage.removeItem('token')
                            client.resetStore()
                            client.writeData({ data: { isLoggedIn: false } })
                            history.push('/')
                        }}
                        asLink
                    >
                        Log Out
                    </Button>
                ) : (
                    <p>
                        <Link to="/signin">Sign In</Link> or{' '}
                        <Link to="/signup">Sign Up</Link>
                    </p>
                )}
            </UserState>
        </HeaderBar>
    )
}

export default withRouter(Header)
