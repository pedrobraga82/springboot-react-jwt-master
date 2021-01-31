import React from "react";
import ReactExport from "react-data-export";
import 'materialize-css';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



          {/*   Chave	SPED	Emissão	Número	Série	Tipo	Valor	Status	Emitente CNPJ	
            Emitente	Emitente IE	Emitente UF	Destinatário CNPJ/CPF	Destinatário
                Destinatário IE	Destinatário UF */}
 
export default function ExportExcel({dataSet}) {
    return (
        <div>
            
            <ExcelFile element={
                          <div class="card-panel z-depth-2">

                        <a class="waves-effect waves-red waves-light btn-small">
                            <i class="material-icons left">cloud</i>Exportar para Excel</a>
                        </div>
                }>
                <ExcelSheet data={dataSet} name="NFEs">
                    <ExcelColumn label="Chave" numFmt="0" value="chaveNfe"/>
                    <ExcelColumn label="Data Emissão" numFmt="0" value="dataemissao"/>
                    <ExcelColumn label="Número Protocolo" numFmt="0" value="numeroprotocolo"/>
                    <ExcelColumn label="Tipo" numFmt="0" value="tipo" /> 
                    <ExcelColumn label="Valor" numFmt="0"value="valor" />
                    <ExcelColumn label="Status" numFmt="0" value="status" />
                    <ExcelColumn label="Emitente CNPJ" numFmt="0" value="emitentecnpj" />
                    <ExcelColumn label="Emitente" numFmt="0" value="emitente" />
                    <ExcelColumn label="Emitente IE" numFmt="0" value="emitenteIE" />
                    <ExcelColumn label="Emitente UF" numFmt="0" value="emitenteUF" />
                    <ExcelColumn label="Destinatário" numFmt="0" value="destinatario" />
                    <ExcelColumn label="Destinatário CNPJ" numFmt="0" value="destinatariocnpj" />
                    <ExcelColumn label="Destinatário IE" numFmt="0" value="destinatarioIE" />
                    <ExcelColumn label="Destinatário UF" numFmt="0" value="destinatarioUF" />
                </ExcelSheet>
              
              
            </ExcelFile>






        </div>
    )
}



