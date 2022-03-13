import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Button from '@mui/material/Button'

import NavigationBar from './components/NavigationBar'
import Routes from './Routes'

import './App.css'

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
    return (
        <Router>
            <>
                <NavigationBar />
                <Switch>
                    {Routes.map((route: any) => (
                        <Route exact path={route.path} key={route.path}>
                            <route.component />
                        </Route>
                    ))}
                </Switch>
            </>
        </Router>
    )
}

export default App
