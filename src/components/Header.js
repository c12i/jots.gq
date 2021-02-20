import React from 'react'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'
import { Link as DefaultLink, withRouter } from 'react-router-dom'

import Button from '../components/Button'
import logo from '../img/logo.png'

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`

const Link = styled(DefaultLink)`
    text-decoration: none;
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

const LogoText = styled.h1`
    margin: 0;
    padding: 0 0 0 0.4em;
    display: inline;
`

const UserState = styled.div`
    margin-left: auto;
`

const Img = styled.img`
    height: 40px;
`

const Header = ({ history }) => {
    const {
        data: { isLoggedIn },
        client
    } = useQuery(IS_LOGGED_IN)
    return (
        <HeaderBar>
            <Img src={logo} alt="logo" />
            <LogoText>Jots</LogoText>
            <UserState>
                {isLoggedIn ? (
                    <Button
                        onClick={() => {
                            localStorage.removeItem('token')
                            client.writeData({
                                data: {
                                    isLoggedIn: !!localStorage.getItem('token')
                                }
                            })
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
