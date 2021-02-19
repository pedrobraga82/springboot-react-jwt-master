import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import axios from 'axios';
import { FormControl } from '@material-ui/core';


export default function User() {

    const [empresa,SetEmpresa] = useState("");
    const [password,SetPassword] = useState("");
    const [cnpj,SetCnpj] = useState("");
    const [ie,SetIe] = useState("");
    const [endereco,SetEndereco] = useState("");
    const [role,SetRole] = useState("USER");
    const [senhacert,SetSenhaCert] = useState("");
    const [username,SetUsername] = useState("");
    
//    const [arquivo,SetArquivo] = useState(undefined);
//    let formData = new FormData();

    const     onChange = (e) => {

        e.preventDefault();

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
            case "senhacert":
                SetSenhaCert(e.target.value)   
                break;
            case "username":
                SetUsername(e.target.value)   
                break;              
            case "endereco":
               SetEndereco(e.target.value)
                break;                          
            default:
                break;
        }

    }


    const onClick = (e) => {

        e.preventDefault()

         let user = {
            empresa,
            password,
            role,
            cnpj,
            password,
            ie,
            endereco,
            username:username,
        }

        let url =  'http://localhost:8082/api/caduser' 

        axios.post(url, user)
        
        .then((response) => {    
            this.props.history.push("http://localhost:3000/listusers");

        })
        .catch((err) => {

            alert("Erro ao cadastrar usuário " + err)
        }) 

    

    }

    return (
        <div>
            <Header />

            <React.Fragment>
  
                <Container maxWidth="xs">
                    <div>
                    <Typography variant="h4" style={styles.center}>Cadastro de Usuários</Typography>
                        <FormControl>
                        <TextField variant="outlined" type="text" label="Empresa" fullWidth  size="small" margin="dense" name="empresa" value={empresa} onChange={onChange}/>
                        <TextField variant="outlined" type="text" label="Username" fullWidth margin="dense" name="username" value={username} onChange={onChange}/>
                        <TextField variant="outlined" type="password" label="PASSWORD" fullWidth margin="dense" name="password" value={password} onChange={onChange}/>
                        <TextField variant="outlined" type="text" label="CNPJ" fullWidth margin="dense" name="cnpj" value={cnpj} onChange={onChange}/>
                        <TextField variant="outlined" type="text" label="IE" fullWidth margin="dense" name="ie" value={ie} onChange={onChange}/>
                        <TextField variant="outlined" type="text" label="Endereço" fullWidth margin="dense" name="endereco" value={endereco} onChange={onChange}/>
                        {/* <TextField variant="outlined" type="file" label="Arquivo" fullWidth margin="normal" name="arquivo" value={arquivo} onChange={onChange}/> */}
                        <TextField variant="outlined" type="text" label="Senha Certificado" fullWidth margin="dense" name="senhacert" value={senhacert} onChange={onChange}/>

 
                        <Button variant="contained" color="secondary" onClick={onClick}>Cadastrar</Button>
                        </FormControl>
                    </div>
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
