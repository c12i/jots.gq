import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import Pages from './pages'
import GlobalStyles from './components/GlobalStyles'

const uri = process.env.API_URI
const cache = new InMemoryCache()
const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
})

const App = () => (
    <ApolloProvider client={client}>
        <GlobalStyles />
        <Pages />
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
