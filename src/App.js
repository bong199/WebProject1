import React from 'react'
import { BrowserRouter, Switch, Route } from  'react-router-dom'
import MainPage from './MainPage'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'

function App(){
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route path="/signin" component={SignInPage}></Route>
                <Route path="/signup" component={SignUpPage}></Route>
            </Switch>
        </div>
    )
}

export default App;