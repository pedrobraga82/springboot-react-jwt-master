import React,{useEffect,useState, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Header from '../Header';
import NFETable from './NFETable';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { DatePicker,MuiPickersUtilsProvider,KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DatensUtils from '@date-io/date-fns';
import ExportExcel from '../ExportExcel';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    selectEmpty: {
        marginTop: theme.spacing(2),
      },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function NFEListAdmin() {

    const classes = useStyles();
    const [dataini,SetDataIni] = useState(null)
    const [datafim,SetDataFim] = useState(null)
    const [data,SetData] = useState([{}])
    const [cnpj,SetCnpj] = useState("")
    const [users,SetUsers] = useState("")
    const [nfe,SetNfe] = [{}]
    const params = useParams();

    const [selectedDate, handleDateChange] = useState(new Date());



    useEffect(() => {

        if (users === "") {
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
        }    
    
        

        return () => {
            //cleanup
        }
    }, [dataini,datafim,cnpj])


   const GetNfes = (e) => {

    e.preventDefault()

    
     let url = `http://localhost:8082/nfelist/${cnpj}/${dataini}/${datafim}`;

//    alert(dataini.toLocaleDateString("pt-BR"))


  //  let  di = dataini.toLocaleDateString("en-US");
  //  let  df = datafim.toLocaleDateString("en-US");
    
    alert(url)
     axios.get(url, {
        params: {
          cnpj,
          dataini,
          datafim
        }
      })
    .then((response) => {

        SetData(response.data);

    })
    .catch((err) => {

        alert("Erro ao trazer dados das nfes " + err);
    })  
 
   }
    

    const handleChange = (e) => {
       // setAge(event.target.value);

       e.preventDefault();

       switch(e.target.name) {

           case "dataini":
                SetDataIni(e.target.value)
                 break;
           case "datafim":
                SetDataFim(e.target.value)
                 break;
           case "cnpj":
                 SetCnpj(e.target.value)
                 break;
           default:
               break;
       }



    };

    return (
        <div>
            <div>
                <Header />
            </div>
            <br></br>
            <br></br>
            <div>
                    
                <form className={classes.container} noValidate>
                  {/*   <MuiPickersUtilsProvider utils={DatensUtils}> 
                    <div>

                        <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label="Data Inicial"
                                format="dd-MM-yyyy"
                                value={dataini}
                                InputAdornmentProps={{ position: "start" }}
                                onChange={date => SetDataIni(date)}
                            />

                    
                    </div>
                    <div>    

                        <KeyboardDatePicker
                                autoOk
                                variant="inline"
                                inputVariant="outlined"
                                label="Data Final"
                                format="dd-MM-yyyy"
                                value={datafim}
                                InputAdornmentProps={{ position: "start" }}
                                onChange={date => SetDataFim(date)}
                            />


                    </div>
                    </MuiPickersUtilsProvider>  */}



                     <TextField
                    name="dataini"
                    id={dataini}
                    value={dataini}
                    label="Data Inicial"
                    type="date"
                    format="dd/MM/yyyy"
                    defaultValue="24-05-2018"
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    /> 
                    <TextField
                    name="datafim"
                    id={datafim}
                    value={datafim}
                    label="Data Final"
                    type="date"
                    defaultValue="24-05-2018"
                    onChange={handleChange}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    />

                    <Select
                        name="cnpj"
                        value={cnpj}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                         <MenuItem value="">
                            <em>Selecionar CNPJ</em>
                        </MenuItem>
                        {users && users.map((user) => {
                            return(
                                 <MenuItem value={user.cnpj}>{user.cnpj}</MenuItem>

                            );   
                        })}

                        {/* <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>

                </form>
                <br></br>
                <br></br>
                <div>
                        <Button variant="contained" color="default" size='small'  onClick={GetNfes}>Listar Nfe</Button>
                    </div>
            </div>  
            <div>
                <NFETable dados={data && data} />
            </div>
            <div>
            <ExportExcel dataSet={data && data}/>   

            </div>
        </div>

        )
}
