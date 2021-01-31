import React,{useEffect} from 'react'

export default function TableNFE({ data }) {

    const [result,SetResult] = {};

    useEffect(() => {
        
        SetResult(data)
        
        alert(result)
        return () => {
           // cleanup
        }
    }, [])

    return (
        <div>
                          <tr>
                              <td>{result.chaveNfe}</td>
                              <td>{new Date(result.dataemissao).getDay() + 
                                "/" + new Date(result.dataemissao).getMonth() +
                                "/" + new Date(result.dataemissao).getFullYear() }</td>
                              <td>{result.numeroprotocolo}</td>
                              <td>{result.tipo}</td>
                              <td>{result.valor}</td> 
                              <td>{result.status}</td> 
                              <td>{result.emitentecnpj}</td> 
                              <td>{result.emitente}</td> 
                              <td>{result.emitenteIE}</td> 
                              <td>{result.emitenteUF}</td> 
                              <td>{result.destinatario}</td> 
                              <td>{result.destinatariocnpj}</td> 
                              <td>{result.destinatarioIE}</td> 
                              <td>{result.destinatarioUF}</td> 
                          </tr>
        </div>
    )
}
