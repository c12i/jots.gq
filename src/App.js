import React from 'react'
import ReactDOM from 'react-dom'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
    createHttpLink
} from '@apollo/client'
import { setContext } from 'apollo-link-context'

import Pages from './pages'
import GlobalStyles from './components/GlobalStyles'

const uri = process.env.API_URI
const httpLink = createHttpLink({ uri })
const cache = new InMemoryCache()

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('token') || ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    connectToDevTools: true,
    resolvers: {},
    cache
})

const data = {
    isLoggedIn: !!localStorage.getItem('token')
}

cache.writeData({ data })
client.onResetStore(() => client.writeData({ data }))

const App = () => (
    <ApolloProvider client={client}>
        <GlobalStyles />
        <Pages />
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
