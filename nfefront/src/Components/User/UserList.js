import React,{useState,useEffect} from 'react';
import Header from '../Header';
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import UserEdit from './UserEdit'
import Modal from 'react-modal';


export default function UserList() {
  const { useState } = React;

  

  const [columns, setColumns] = useState([
    { title: 'id', field: 'id' },
    { title: 'arquivo', field: 'arquivo'},
    { title: 'cnpj', field: 'cnpj' },
    { title: 'endereco', field: 'endereco'},
    { title: 'ie', field: 'ie', width: 130 },
    { title: 'password', field: 'password' },
    { title: 'role', field: 'role'},
    { title: 'salt', field: 'salt'},
    { title: 'token', field: 'token' },
    { title: 'empresa', field: 'empresa' }
    
  ]);

  const [users,SetUsers] = useState("")


  
  

  function EditUser() {



    <div className="row">

            <Modal
         
         
            contentLabel="Example Modal"
            >


              <p>kdsfjds</p>    



            </Modal>
            
        </div>


    
  } 



   function Dados() {

    {  
       return users.map((result) =>  {

        return(
         <tr>
            <td>{result.username} </td>
            <td>{result.empresa} </td> 
            <td> {result.cnpj} </td> 
            <td> {result.ie}</td> 
            <Button variant="secondary" size="sm" onClick={EditUser}>
              Editar
           </Button>
         </tr> ) 
       

     })

 }



   }

  useEffect(() => {


        let url =  'http://localhost:8082/api/userslist' 

        axios.get(url)
      .then((response) => {    
            let data = response.data;
            let dados = [{}]
          data.forEach(obj => {
            dados.push(obj)
          })

          SetUsers(dados);
            
              })
        .catch((err) => {
            alert("Erro ao listar usuários " + err)
        })  
        


        return () => {
            //cleanup
        }
    }, [])


  return (

    <div>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Username</th>
          <th>Empresa</th>
          <th>CNPJ</th>
          <th>IE</th>  
        </tr>
      </thead>
      <tbody>

        {users && Dados()}
     </tbody> 

    </Table>



  </div>


  )
}

