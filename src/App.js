import React from 'react'
import ReactDOM from 'react-dom'

import Pages from './pages'
import GlobalStyles from './components/GlobalStyles'

const App = () => (
    <React.Fragment>
        <GlobalStyles />
        <Pages />
    </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))
