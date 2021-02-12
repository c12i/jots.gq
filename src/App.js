import React from 'react'
import ReactDOM from 'react-dom'

import Pages from './pages'

const App = () => (
    <React.Fragment>
        <Pages />
    </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))
