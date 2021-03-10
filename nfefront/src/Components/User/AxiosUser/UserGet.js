
import axios from 'axios';
//import React, {useState} from 'react';
import UserList from '../UserList';

//const [user,SetUsers] = useState(null)

export default function UserGet() {

    let url =  'http://localhost:8082/api/userslist' 

    axios.get(url)
  .then((response) => {    
        let data = response.data;
        let dados = [{}]

      data.forEach(obj => {
        dados.push(obj)
      })

      return dados;
        
          })
    .catch((err) => {
        alert("Erro ao listar usuários " + err)
    })  



}