import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'materialize-css';
import TableNFE from './TableNFE';
import ExportExcel from '../ExportExcel';
import Header from '../Header';
import Table from 'react-bootstrap/Table'
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';


export default function FormNFE() {

const  [cnpj,Setcnpj] =  useState("");
const  [texto,SetTexto] = useState("");
const  [dados,SetDados] = useState([{}]);

const token = 'jfhsdjklfhjsdl' //localStorage.getItem('token');
const username = localStorage.getItem('usuario');


useEffect(() => {
  
  let vetordados = {};
  let arraydados = [{}];

  //let t = "<resNFe xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" versao=\"1.00\" xmlns=\"http://www.portalfiscal.inf.br/nfe\"><chNFe>41210211436073000147550010001650891857957586</chNFe><CNPJ>11436073000147</CNPJ><xNome>Econet Publicacoes Periodicas Ltda</xNome><IE>9083324829</IE><dhEmi>2021-02-08T00:00:00-03:00</dhEmi><tpNF>1</tpNF><vNF>273.48</vNF><digVal>g5VYeLLke5HS8yti0AaivhVEplQ=</digVal><dhRecbto>2021-02-08T11:11:04-03:00</dhRecbto><nProt>141210027215401</nProt><cSitNFe>1</cSitNFe></resNFe>";


  if (texto != null) {

      for (let i=0; i < texto.length ; i++) {

        let t = texto[i]
        

        let cnpjremetente = t.substring(
            t.indexOf("<CNPJ>") , 
            t.lastIndexOf("</CNPJ>")
          ).split(">")[1];

          let chnfe = t.substring(
            t.indexOf("<chNFe>") , 
            t.lastIndexOf("</chNFe>")
          ).split(">")[1];

          let ie = t.substring(
              t.indexOf("<IE>") , 
              t.lastIndexOf("</IE>")
            ).split(">")[1];


            let nome = t.substring(
              t.indexOf("<xNome>") , 
              t.lastIndexOf("</xNome>")
            ).split(">")[1];
          
            let dataemissao = t.substring(
              t.indexOf("<dhEmi>") , 
              t.lastIndexOf("</dhEmi>")
            ).split(">")[1];
          
          
            let valor = t.substring(
                t.indexOf("<vNF>") , 
                t.lastIndexOf("</vNF>")
              ).split(">")[1];
          
              let datarecebto = t.substring(
                t.indexOf("<dhRecbto>") , 
                t.lastIndexOf("</dhRecbto>")
              ).split(">")[1];

              let tiponf = t.substring(
                t.indexOf("<tpNF>") , 
                t.lastIndexOf("</tpNF>")
              ).split(">")[1];

         vetordados = {

          "cnpj": cnpj,
          "chnfe": chnfe,
          "ie": ie,
          "tiponf": tiponf,
          "datarecto": datarecebto,
          "nome": nome,
          "valor": valor,
          "dataemissao": dataemissao,
          "cnpjremetente": cnpjremetente
        }      

        arraydados.push(vetordados)


      }

    }         


    SetDados(arraydados)
  
  return () => {
    //
  }
}, [texto]) 
 
const handleSubmit = (event) => {

  event.preventDefault();

           axios.get(`http://localhost:8082/nfe/${cnpj}`)
        .then(function (response) {
            SetTexto(response.data);


          })
          .catch(function (error) {
            console.log(error);
            alert(error);
          }); 

    }

    const handleChange = (e) => {

        Setcnpj(e.target.value);
    }

    const SaveNfe = (e) => {

        e.preventDefault()

      let url =  'http://localhost:8082/cadnfe' 
      let chave = e.target.id;
      let nf = dados.filter(nfe =>  nfe.chnfe == chave )
        
        //"41201211436073000147550010001425711047416300" ) 




       axios.post(url, nf[0])
          
      .then((response) => {    
              //this.props.history.push("http://localhost:3000/listusers");
      
        })
          .catch((err) => {
              alert("Erro ao cadastrar Nfe " + err)
          }) 
 

    }


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
{/*                 <textarea value={JSON.stringify(dados)}>{dados && dados}</textarea>
 */}                <br></br>
                <div>

                <Table striped bordered hover variant="dark">
                        <thead>
                          <tr>
                                <th>Chave</th>
                                <th>Data Emissão</th>
                              {/*  <th>Número</th> */}
                                <th>Valor</th>
                       {/*          <th>Série</th>
                                <th>Tipo</th> 
                                 <th>Valor</th>
                                <th>Emitente CNPJ</th> */}
                                <th>Emitente</th>
                              {/*  <th>Emitente IE</th> 
                                <th>Emitente UF</th> 
                                 <th>Destinatário CNPJ</th> 
                                <th>Destinatário</th>
                                <th>Destinarário IE</th>
                                <th>Destinatário UF</th>
 */}                          </tr>
                        </thead>
                        <tbody>

                            {dados &&  dados.map(
                                  (result) => {
                                                                  
                                    const {
                                      chnfe: chaveNfe,
                                      dataemissao ,
                                      valor,
                                       nome: emitente
                                                             
                                  } = result;

                                    return(
                                      <tr>
                                        <td>{chaveNfe}</td>
                                        <td>{new Date(dataemissao).getDay() + 
                                          "/" + new Date(dataemissao).getMonth() +
                                          "/" + new Date(dataemissao).getFullYear() }</td>
                                        <td>{valor}</td> 
                                       <td>{emitente}</td> 
                                       {/* <td><SaveIcon id={chaveNfe} name={chaveNfe} onClick={SaveNfe}></SaveIcon></td>     
                                    */}
                                       <td><input type="button" class="btn btn-info" id={chaveNfe}  value="Salvar Nota"  onClick={SaveNfe} /></td>     
                                   
                                      </tr>
                                    )
                                    
                                  })       
                            }
      
                  </tbody> 
                </Table>
                    <ExportExcel dataSet={texto && texto}/>   
                </div>

            </div>

                          
        )

   
        
}    