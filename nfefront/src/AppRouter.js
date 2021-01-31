import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import LoginComponent from './Components/Login/LoginComponent';
import FormNFE from './Components/NFE/FormNFE';
import User from './Components/User/User';

const AppRouter = () => {
    return(
            <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/nfeview" exact component={FormNFE} />
                        <Route path="/cadusers" exact component={User} />

                      
                    </Switch>
            </Router>
    )
}

export default AppRouter;