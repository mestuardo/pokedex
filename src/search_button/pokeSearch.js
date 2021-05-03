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


  

export default function Layout({handleDetailsChange}) {
  const router = useRouter()

  function handleClick(url) {
    // Se bloquea el boton para evitar que el usuario 
    // manipule el input cuando está cargando la página
    
    handleDetailsChange(url)
    setDisabled(true)
    
  
  }
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [disabled,setDisabled] = React.useState(false)
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon');
      const poke = await res.json();

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${poke.count}`);
      const total_poke = await response.json()
      if (active) {
        setOptions(total_poke.results);
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
      noOptionsText={'This pokemon does not exist'}
      loadingText={'Searching pokémon...'}
      closeText={'Close'}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      // inputValue={busqueda}
      // onInputChange={(e,value)=>setBusqueda(value)}
      onChange={(e,op) => {op ? handleClick(op.url): null}}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search pokémon"
          placeholder='Write a name'
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
