import React, {useState} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import axios from 'axios';


export default function UserEdit({user}) {

    let formData = new FormData();

    const onClick = () => {

    }

    const onChange = (e) => {

        switch(e.target.name) {

            case "user.empresa":
                user.empresa = e.target.value
                break;
            case "user.password":
                user.password = e.target.value
                break;
            case "user.cnpj":
                user.cnpj =e.target.value
                break;
            case "user.ie":
                user.ie =e.target.value
                  break;              
            case "user.endereco":
                user.endereco = e.target.value
                break;     
            case "user.arquivo":
               formData.append("file",e.target.files[0])
                break;     
                         
            default:
                break;
        }


    }

    return (
        <div>
            <React.Fragment>
            
            <Container maxWidth="xs">
                <Typography variant="h4" style={styles.center}>Cadastro de Usuários</Typography>
                <form>
                    <TextField variant="outlined" type="text" label="Empresa" fullWidth margin="normal" name="empresa" value={user.empresa} onChange={onChange}/>

                    <TextField variant="outlined" type="password" label="PASSWORD" fullWidth margin="normal" name="password" value={user.password} onChange={onChange}/>
                    <TextField variant="outlined" type="text" label="CNPJ" fullWidth margin="normal" name="cnpj" value={user.cnpj} onChange={onChange}/>
                    <TextField variant="outlined" type="text" label="IE" fullWidth margin="normal" name="ie" value={user.ie} onChange={onChange}/>
                    <TextField variant="outlined" type="text" label="Endereço" fullWidth margin="normal" name="endereco" value={user.endereco} onChange={onChange}/>
                    <TextField variant="outlined" type="file" label="Arquivo" fullWidth margin="normal" name="arquivo" value={user.arquivo} onChange={onChange}/>


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