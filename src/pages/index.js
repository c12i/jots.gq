import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '../components/Layout'
import Home from './home'
import MyNotes from './mynotes'
import Favorites from './favorites'
import NotePage from './note'
import NotFound from './notfound'
import SignUp from './signup'
import SignIn from './signin'

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/mynotes" component={MyNotes} />
                    <Route path="/favorites" component={Favorites} />
                    <Route path="/notes/:id" component={NotePage} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    )
}

export default Pages
