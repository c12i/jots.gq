import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'

import client from './gql/client'

const App = () => (
    <ApolloProvider client={client}>
        <GlobalStyles />
        <Pages />
    </ApolloProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
