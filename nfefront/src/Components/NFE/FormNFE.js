import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'materialize-css';
import TableNFE from './TableNFE';
import ExportExcel from '../ExportExcel';
import Header from '../Header';

export default function FormNFE() {

const  [cnpj,Setcnpj] =  useState("");
const  [texto,SetTexto] = useState("");
const  [dados,SetDados] = useState([{}]);

const token = localStorage.getItem('token');
const username = localStorage.getItem('usuario');


useEffect(() => {
  
  let vetordados = {};
  let arraydados = [{}];

  if (texto != null) {

    if (texto != "") { 
      let i =0;
      for (i=0; i < texto.length - 2; i++) {

        let nfes = JSON.parse(texto[i])

        vetordados = {
          "chaveNfe":(JSON.stringify(
            texto[i].substring(
              texto[i].indexOf("chNFe\"\:") + 7,
              texto[i].indexOf(",\"xMotivo\"")
            ))),
          "dataemissao": nfes.nfeProc.protNFe.infProt.dhRecbto,
          "numeroprotocolo": nfes.nfeProc.protNFe.infProt.nProt,        
          "tipo": nfes.nfeProc.NFe.infNFe.ide.natOp,
          "valor": nfes.nfeProc.NFe.infNFe.pag.detPag.vPag,
          "status": nfes.nfeProc.protNFe.infProt.xMotivo,
          "emitentecnpj": nfes.nfeProc.NFe.infNFe.emit.CNPJ,
          "emitente": nfes.nfeProc.NFe.infNFe.emit.CNPJ,
          "emitenteIE": nfes.nfeProc.NFe.infNFe.emit.IE,
          "emitenteUF": nfes.nfeProc.NFe.infNFe.emit.enderEmit.UF,
          "destinatario": nfes.nfeProc.NFe.infNFe.dest.xNome,
          "destinatariocnpj": nfes.nfeProc.NFe.infNFe.dest.CNPJ,
          "destinatarioIE": nfes.nfeProc.NFe.infNFe.dest.IE,
          "destinatarioUF": nfes.nfeProc.NFe.infNFe.dest.enderDest.UF 
        }  
          
          arraydados.push(vetordados)


         }



        }

  }
  SetDados(arraydados)

  return () => {
    //
  }
}, [texto]) 
 
const handleSubmit = (event) => {

           axios.get(`http://localhost:8082/nfe/${cnpj}`)
        .then(function (response) {
            SetTexto(response.data);

          })
          .catch(function (error) {
            console.log(error);
            alert(error);
          }); 

    event.preventDefault();
    }

    const handleChange = (e) => {

        Setcnpj(e.target.value);
    }

    if (token != null) {

        return (
            <div>
                <Header />


               
                <div class="container my-4">
                    <h4>Pesquisar NFE por CNPJ</h4>

                    <div class="input-field w-25">
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Pesquisar por CNPJ"  value={cnpj} onChange={handleChange} />        
                            <button class="btn waves-effect waves-light" type="submit" >Pesquisar
                                    <i class="material-icons right">send</i>
                            </button>
                        </form>  
                    </div>
                </div>
                <br></br>

                <div>
      
                {/*    <textarea value={dados && dados.length}></textarea> 
                  <br></br>  */}

                      <table class="responsive-table">
                        <thead>
                          <tr>
                                <th>Chave</th>
                                <th>Data Emissão</th>
                                <th>Número</th>
                                <th>Série</th>
                                <th>Tipo</th> 
                                <th>Valor</th>
                                <th>Emitente CNPJ</th>
                                <th>Emitente</th>
                                <th>Emitente IE</th>
                                <th>Emitente UF</th> 
                                <th>Destinatário CNPJ</th> 
                                <th>Destinatário</th>
                                <th>Destinarário IE</th>
                                <th>Destinatário UF</th>
                          </tr>
                        </thead>
                        <tbody>

                            {dados &&  dados.map(
                                  (result) => {
                                                                  
                                    const {
                                      chaveNfe,
                                      dataemissao,
                                      numeroprotocolo,
                                      tipo,
                                      valor,
                                      status,
                                      emitentecnpj,
                                      emitente,
                                      emitenteIE,
                                      emitenteUF,
                                      destinatario,
                                      destinatariocnpj,
                                      destinatarioIE,
                                      destinatarioUF
                                    } = result;

                                    return(
                                      <tr>
                                        <td>{chaveNfe}</td>
                                        <td>{new Date(dataemissao).getDay() + 
                                          "/" + new Date(dataemissao).getMonth() +
                                          "/" + new Date(dataemissao).getFullYear() }</td>
                                        <td>{numeroprotocolo}</td>
                                        <td>{tipo}</td>
                                        <td>{valor}</td> 
                                        <td>{status}</td> 
                                        <td>{emitentecnpj}</td> 
                                        <td>{emitente}</td> 
                                        <td>{emitenteIE}</td> 
                                        <td>{emitenteUF}</td> 
                                        <td>{destinatariocnpj}</td> 
                                        <td>{destinatario}</td> 
                                        <td>{destinatarioIE}</td> 
                                        <td>{destinatarioUF}</td> 

                                      </tr>
                                    )
                                    
                                  })       
                            }
      
                  </tbody> 
                </table>
                    <ExportExcel dataSet={dados && dados}/>   
                </div>

            </div>

                          
        )

    }
    else {

      return (
        <div>
          <h3>Acesso não autorizado</h3>
        </div>
      )
    }
}    