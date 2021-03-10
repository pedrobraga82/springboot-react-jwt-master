import { BrowserRouter as Router,Switch, Route, Redirect } from 'react-router-dom';
import LoginComponent from './Components/Login/LoginComponent';
import FormNFE from './Components/NFE/FormNFE';
import User from './Components/User/User';
import UserList from './Components/User/UserList';
import UserEdit from './Components/User/UserEdit';
import NFEList from './Components/NFE/NFEList';
import MenuAdmin from './Menu/MenuAdmin';
import NFEListAdmin from './Components/NFE/NFEListAdmin';
import MenuUser from './Menu/MenuUser';


const user = localStorage.getItem("username")
const token = localStorage.getItem("token")
const role = localStorage.getItem("role")


const AppRouter = () => {
    return(
            <Router>
                    <Switch>
                        <Route path="/" exact  component={LoginComponent} />
                        <Route path="/nfeview" exact component={FormNFE} />


{/* 

                        </Route>
                        <Route path="/nfeview" exact component={FormNFE}>

                        { user && token == "USER" && role ? <Redirect to="/nfeview" />
                                :    <LoginComponent />
                                
                        }  
                        </Route>
                     
                        <Route path="/cadusers" exact component={User}>
                            { user && token == "ADMIN" && role ? <Redirect to="/cadusers" />
                                    :    <LoginComponent />
                                    
                            }  

                        </Route>
                        <Route path="/listusers" exact component={UserList}>

                        { user && token  == "ADMIN" && role ? <Redirect to="/listusers" />
                                :    <LoginComponent />
                                
                        }  


                        </Route>

                        <Route path="/edituser/:id" exact component={UserEdit}>
                        { user && token == "ADMIN" && role ? <Redirect to="/edituser/:id" />
                                :    <LoginComponent />
                                
                        }  

                        </Route>
                        <Route path="/nfelist" exact component={NFEList}>

                        { user && token == "USER" && role ? <Redirect to="/nfelist" />
                                :    <LoginComponent />
                                
                        }   */}

                        <Route exact path="/menuadmin" >  
   
                            { role == "ADMIN" ? <MenuAdmin />
                                    :   <MenuUser />
                                    
                            }   

                        </Route>

                        <Route exact path="/nfelistadmin" >  
   
                            { role == "ADMIN" ? <NFEListAdmin />
                                    :   <MenuUser />
                                    
                            }   

                        </Route>
                        
                   {/*       <Route path="/nfelistadmin" exact component={NFEListAdmin}>

                          { user && role == "ADMIN" ? <Redirect to="/nfelistadmin" />
                                :    <LoginComponent />
                                
                          }  
                        
                        </Route>  */}
        
                        
                    </Switch>
            </Router>
    )
}

export default AppRouter;