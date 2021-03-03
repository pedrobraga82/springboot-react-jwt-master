import MaterialTable from 'material-table';

/* chnfe":"41210211436073000147550010001650891857957586",
"ie":"9083324829",
"tiponf":"1",
"nome":"Econet Publicacoes Periodicas Ltda",
"valor":273.48,
"cnpjremetente":"11436073000147",
"datarecto":null,
"dataemissao":null} */


export default function NFETable({dados}) {
    return (
      <MaterialTable
        title="Visualização de Nfes"
        columns={[
          {
            title: 'Nfe', 
            field: 'chnfe',
//            customFilterAndSearch: (term, rowData) => term == rowData.nfe.length
            
          },
          { title: 'IE', field: 'ie', filtering: false },
          { title: 'CNPJ', field: 'cnpjremetente',filtering: false },
          { title: 'Nome', field: 'nome',filtering: false },
          { title: 'Valor', field: 'valor',filtering: false },
      
          
        ]}
        data={dados}
        options={{
          filtering: true
        }}
      />
    )
  }