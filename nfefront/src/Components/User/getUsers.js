import React,{useState,useEffect} from 'react';
import axios from 'axios';


const GetUsers = () => {

    const [users,SetUsers] = useState(null) 

    let url =  'http://localhost:8082/api/userslist' 
    
    
      axios.get(url)
     .then((response) => {    
            SetUsers(JSON.parse(response.data))  ;  
            return users;
      })
      .catch((err) => {
          alert("Erro ao listar usuários" + err)
          return [{ id: 1, col1: 'Dados Clientes' }] ;
      }) 




}


export default GetUsers;