import React from 'react'
import { useQuery } from '@apollo/client'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import Layout from '../components/Layout'
import Home from './home'
import MyNotes from './mynotes'
import Favorites from './favorites'
import NotePage from './note'
import NotFound from './notfound'
import SignUp from './signup'
import SignIn from './signin'
import NewNote from './newnote'
import { IS_LOGGED_IN } from '../gql/query'

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute path="/mynotes" component={MyNotes} />
                    <PrivateRoute path="/favorites" component={Favorites} />
                    <Route path="/notes/:id" component={NotePage} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <PrivateRoute path="/new" component={NewNote} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    const {
        data: { isLoggedIn }
    } = useQuery(IS_LOGGED_IN)

    return (
        <Route
            {...rest}
            render={props =>
                isLoggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    )
}

export default Pages
