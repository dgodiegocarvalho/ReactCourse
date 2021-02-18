import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import Param from '../../views/examples/Param'

import './Content.css'

export default props => {
    return(
        <main className="Content">
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/param/:id">
                    <Param />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    )
}