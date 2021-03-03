import React,{useEffect, useState} from 'react';
import { TablePagination } from '@material-ui/core';
import NFETable from './NFETable';
import axios from 'axios';

import Header from '../Header';

export default function NFEList() {

    const [data,SetData] = useState([{}])

    useEffect(() => {
        
        let url = "http://localhost:8082/nfelist";

        axios.get(url)
        .then((response) => {

            SetData(response.data);
        })
        .catch((err) => {

            alert("Erro ao trazer dados das nfes " + err);
        })


        return () => {
           // cleanup
        }
    }, [])





    return (
        <div>
            <Header />
            <NFETable  dados={data && data} />
        </div>
    )
}
