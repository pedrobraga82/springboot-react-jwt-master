import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import axios from 'axios';


export default function User() {

    const [empresa,SetEmpresa] = useState("");
    const [password,SetPassword] = useState("");
    const [cnpj,SetCnpj] = useState("");
    const [ie,SetIe] = useState("");
    const [endereco,SetEndereco] = useState("");
    const [role,SetRole] = useState("USER");


    const     onChange = (e) => {

        switch(e.target.name) {

            case "empresa":
                SetEmpresa(e.target.value)
                break;
            case "password":
                SetPassword(e.target.value)
                break;
            case "cnpj":
                SetCnpj(e.target.value)
                break;
            case "ie":
               SetIe(e.target.value)
                  break;              
            case "endereco":
               SetEndereco(e.target.value)
                break;              
                            
            default:
                break;


        }

    }


    const onClick = () => {

        let user = {
            empresa,
            password,
            role,
            cnpj,
            password,
            ie,
            endereco,
            username:"admin40"
        }

     
          let url =  'http://localhost:8082/api/caduser' 
          //+  this.state.username +  '&password=' 
          //+ base64.encode(utf8.encode(this.state.password))    
        axios.post(url,user)
           .then((response) => {    

            localStorage.removeItem( "token" )       
             localStorage.setItem( "token", response.data.token );   
             this.props.history.push("/cadusers");
            })
            .catch((err) => {

                alert("Erro ao cadastrar usuário " + err)
            })
/*            .catch((err) => {
             alert('Erro ao cadastrar usuário')
           })  } */


    }

    return (
        <div>
            <Header />

            <React.Fragment>
  
                <Container maxWidth="xs">
                    <Typography variant="h4" style={styles.center}>Cadastro de Usuários</Typography>
                    <form>
                        <TextField variant="outlined" type="text" label="Empresa" fullWidth margin="normal" name="empresa" value={empresa} onChange={onChange}/>

                        <TextField variant="outlined" type="password" label="PASSWORD" fullWidth margin="normal" name="password" value={password} onChange={onChange}/>
                        <TextField variant="outlined" type="text" label="CNPJ" fullWidth margin="normal" name="cnpj" value={cnpj} onChange={onChange}/>
                        <TextField variant="outlined" type="text" label="IE" fullWidth margin="normal" name="ie" value={ie} onChange={onChange}/>
                        <TextField variant="outlined" type="text" label="Endereço" fullWidth margin="normal" name="endereco" value={endereco} onChange={onChange}/>

 
                        <Button variant="contained" color="secondary" onClick={onClick}>Cadastrar</Button>
                    </form>
                </Container>
            </React.Fragment>
  

        </div>
    )
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