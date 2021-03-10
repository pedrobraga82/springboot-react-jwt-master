import Header from '../Components/Header';
import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { SettingsRemoteOutlined } from '@material-ui/icons';


const useStyles = makeStyles({
  root: {
    minWidth: 50,
    margin: '2 10px',

  },
  bullet: {
    display: 'inline-block',
    margin: '2 2px',
    transform: 'scale(0.8)',
    alignContent: 'center'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  center: {

    width: '50%',
    border: '3px solid green',
    padding: '10px',
  },
});

export default function MenuAdmin() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const [usuario,SetUsuario] = useState("");
  const [token,SetToken] = useState("");
  const [role,SetRole] = useState("");
      

  useEffect(() => {
      
       let usuario = localStorage.getItem("username");
       let token = localStorage.getItem("token");
       let role = localStorage.getItem("role");
    
        SetToken(token);
        SetUsuario(usuario);
        SetRole(role);

      return () => {
          //cleanup
      }
  }, [])  

  if (token != "" || token == null || ! token ||
        usuario != "" ||
        role !="") {

    return (
        <div>
            <div>
                <Header /> 
            </div>
            <br></br>
            <br></br>
            
            <div>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Card color='pink'>
                    <CardContent>
                        <Typography className={classes.title} color="primary" gutterBottom>
                        Cadastro de usuários
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <AccountBoxIcon fontSize='large'/>
                    </CardActions>
                    </Card>
                </Grid>
                <br></br>
                <br></br>
                <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                >
                    <Card>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Lista de usuários
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <AccountTreeIcon fontSize='large'/>
                    </CardActions>
                    </Card>

                </Grid>
                <br></br>
                <br></br>

                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    
                        <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Consulta de notas
                            </Typography>
                
                        </CardContent>
                        <CardActions>
                            <FindInPageIcon fontSize='large' /> 
                        </CardActions>
                        </Card>

                </Grid>
        
                </div>
        </div>    
    );
        }
   else {
       return (
       <div>
           <h1>ACESSO NÃO AUTORIZADO</h1>
       </div>
       );
   }     
}
