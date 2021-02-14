import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import LoginComponent from './Components/Login/LoginComponent';
import FormNFE from './Components/NFE/FormNFE';
import User from './Components/User/User';
import UserList from './Components/User/UserList';
import UserEdit from './Components/User/UserEdit';





const AppRouter = () => {
    return(
            <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/nfeview" exact component={FormNFE} />
                        <Route path="/cadusers" exact component={User} />
                        <Route path="/listusers" exact component={UserList} />
                        <Route path="/edituser/:id" exact component={UserEdit} />
                    </Switch>
            </Router>
    )
}

export default AppRouter;