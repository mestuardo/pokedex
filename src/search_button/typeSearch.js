import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {useRouter} from 'next/router'

import fetch from 'node-fetch'


import CircularProgress from '@material-ui/core/CircularProgress';


import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
    option: {
      fontSize: 15,
      '& > span': {
        marginRight: 10,
        fontSize: 18,
      },
    },
  });


  

export default function Layout({eraseShownPoke}) {
  const router = useRouter()

  function handleClick(option) {
    // Se bloquea el boton para evitar que el usuario 
    // manipule el input cuando está cargando la página
    setValue(option)
    router.replace('/?bytype='+option.name)
    eraseShownPoke()
    setDisabled(true)
    
  
  }
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [disabled,setDisabled] = React.useState(false)
  const loading = open && options.length === 0;
  const [value,setValue] = React.useState({name:'normal',url:'https://pokeapi.co/api/v2/type/1/'})

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch('https://pokeapi.co/api/v2/type/');
      const types = await response.json();

      if (active) {
        setOptions(types.results);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);


  
    
    return    (
        
  <Autocomplete
      id="types"
 
      style={{ width: 200,margin:0,padding:0,height:30 }}
      // disabled={disabled}
      open={open}
      noOptionsText={'This type does not exist'}
      loadingText={'Searching pokemon types...'}
      closeText={'Cerrar'}
      
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      value={value}
      
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}

      // onInputChange={(e,value)=>setBusqueda(value)}
      onChange={(e,op) => {op ? handleClick(op): null}}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          
          label="Search by type"
          placeholder='Search type'
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="secondary" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
        )}
        />

        
      
      
    )
  }
