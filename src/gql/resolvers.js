import { CURRENT_USER } from './query'

const resolvers = {
    Mutation: {
        setCurrentUser(_parent, { user, isLoggedIn }, { cache }) {
            const { currentUser } = cache.readQuery({
                query: CURRENT_USER
            })

            cache.writeQuery({
                query: CURRENT_USER,
                data: {
                    currentUser: user,
                    isLoggedIn
                }
            })

            return currentUser
        },

        resetCurrentUser(_parent, _args, { cache }) {
            const { currentUser } = cache.readQuery({
                query: CURRENT_USER
            })

            cache.writeQuery({
                query: CURRENT_USER,
                data: {
                    currentUser: null,
                    isLoggedIn: !!localStorage.getItem('token')
                }
            })

            return currentUser
        }
    }
}

export default resolvers
