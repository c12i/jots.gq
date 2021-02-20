import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import Pages from './pages'
import GlobalStyles from './components/GlobalStyles'
import client from './gql/client'

const App = () => (
    <ApolloProvider client={client}>
        <GlobalStyles />
        <Pages />
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
