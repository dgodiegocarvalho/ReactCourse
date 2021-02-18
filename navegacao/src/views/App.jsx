import React from 'react'
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Param from './examples/Param'

export default props => {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Content />
            </Router>
        </div>
    )
}