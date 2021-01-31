

 import React from 'react';
 import AppBar from '@material-ui/core/AppBar';
 import Toolbar from '@material-ui/core/Toolbar';
 import TextField from '@material-ui/core/TextField';
 import Button from '@material-ui/core/Button';
 import Typography from '@material-ui/core/Typography';
 import Container from '@material-ui/core/Container';
 import AuthService from './AuthService';
 import axios from 'axios';
 import { doLogin } from "../../actions/loginActions";
 import base64 from "base-64";
 import utf8 from "utf8";
 import { useHistory } from "react-router-dom";
 import { makeStyles } from '@material-ui/core/styles';
 
 const useStyles = makeStyles((theme) => ({
   root: {
     '& .MuiTextField-root': {
       margin: theme.spacing(1),
       width: '25ch',
     },
   },
 }));
 
 
 function Historico() {
 
     const  history =  useHistory();
     const classes = useStyles();
 
 
 }
 
 
 class LoginComponent extends React.Component {
 
 
     constructor(props){
         super(props);
         this.state = {
             username: '',
             password: '',
             message: '',
         }
         this.login = this.login.bind(this);
     }
 
     componentDidMount() {
         localStorage.clear();
 
     }
 
 
   doLogin() {  	
     //this.props.dispatch(
         let url =  'http://localhost:8082/api/authentication?username=' + this.state.username +  '&password=' + base64.encode(utf8.encode(this.state.password))    
         axios.post(url)
            .then((response) => {    
 
             localStorage.removeItem( "token" )       
              localStorage.setItem( "token", response.data.token );   
              this.props.history.push("/cadusers");
             })
            .catch((err) => {
              alert('fhdjgkdl')
            })  }
 
      login = (e) => {
         e.preventDefault();
         const credentials = {username: this.state.username, password: this.state.password};
         AuthService.login(credentials).then(res => {
             if(res.data.status === 200){
                 localStorage.setItem("userInfo", JSON.stringify(res.data.result));
                 this.props.history.push('/list-user');
             }else {
                 this.setState({message: res.data.message});
             }
 
             console.log(credentials)
         });
     }; 
  
     onChange = (e) => { this.setState({ [e.target.name]: e.target.value}); }


     render() {
         return(
             <React.Fragment>
                 <AppBar position="static">
                     <Toolbar>
                         <Typography variant="h6" align="center">
                             NfView - Visualização de NFes
                         </Typography>
                     </Toolbar>
                 </AppBar>
                 <Container maxWidth="sm">
                     <Typography variant="h6" style={styles.center}>Login</Typography>
                     <form>
                         <Typography variant="h6" style={styles.notification}>{this.state.message}</Typography>
                         
 {/*                         <TextField type="text" label="USERNAME" fullWidth margin="normal" name="username" value={this.state.username} onChange={this.onChange}/>
  */}                    <div>
                         <TextField
                         label="Username"
                         defaultValue="Username"
                         variant="outlined"
                         name="username" 
                         value={this.state.username} 
                         onChange={this.onChange}
                         />
                         </div>
                         <div>
                         <TextField
                         type="password"
                         label="Password"
                         defaultValue="password"
                         variant="outlined"
                         name="password" 
                         value={this.state.password} 
                         onChange={this.onChange}
                         />
                         </div>
 
 {/*                         <TextField type="password" label="PASSWORD" fullWidth margin="normal" name="password" value={this.state.password} onChange={this.onChange}/>
  */}
                        <div>
                         <Button variant="contained" color="secondary" onClick={this.doLogin.bind(this)}>Login</Button>
                         </div>
                     </form>
                 </Container>
             </React.Fragment>
         )
     }
 
 }
 
 const styles= {
     center :{
         display: 'flex',
         justifyContent: 'center'
 
     },
     notification: {
         display: 'flex',
         justifyContent: 'center',
         color: '#dc3545'
     }
     
 }
 
 export default LoginComponent; 