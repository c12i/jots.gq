import { CURRENT_USER, IS_LOGGED_IN } from './query'

const resolvers = {
    Mutation: {
        setCurrentUser(_parent, { user }, { cache }) {
            const { currentUser } = cache.readQuery({
                query: CURRENT_USER
            })

            cache.writeQuery({
                query: CURRENT_USER,
                data: {
                    currentUser: user
                }
            })

            cache.writeQuery({
                query: IS_LOGGED_IN,
                data: {
                    isLoggedIn: true
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
                    currentUser: null
                }
            })

            cache.writeQuery({
                query: IS_LOGGED_IN,
                data: {
                    isLoggedIn: false
                }
            })

            return currentUser
        }
    }
}

export default resolvers
