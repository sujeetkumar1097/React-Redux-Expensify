import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import Header from '../components/Header'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import PageNotFound from '../components/PageNotFound'
import ReducerHome from '../components/ReducerHome'
import Post from '../components/Post'

const AppRouter = () => (
    
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true}/>
                <Route path='/create' component={AddExpensePage}/>
                <Route path='/edit/:id' component={EditExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route path='/reducer' component={ReducerHome } exact={true}/>
                <Route path='/reducer/:post_id' component={Post}/>
                <Route  component={PageNotFound}/>
             </Switch>
            {/* <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true}/>
                <Route path='/create' component={props => <AddExpensePage {...props} />}/>
                <Route path='/edit/:id' component={props => <EditExpensePage {...props}/>}/>
                <Route path='/help' component={HelpPage}/>
                <Route path='/reducer' component={props => <ReducerHome {...props} />} exact={true}/>
                <Route path='/reducer/:post_id' component={props => <Post {...props} />}/>
                <Route  component={PageNotFound}/>
             </Switch> */}
        </div>
        
    </BrowserRouter>
)

export default AppRouter