import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from 'apollo-link-context'

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

export default client
