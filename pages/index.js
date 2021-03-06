import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import fetch from 'node-fetch'

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import Pokemon_card from '../src/cards/PokemonCard'
import Details_card from '../src/cards/DetailsCard'


import { useRouter } from 'next/router'
import Link from 'next/link'
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

import PokeSearch from '../src/search_button/pokeSearch'
import TypeSearch from '../src/search_button/typeSearch'

import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import Head from 'next/head'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F2F2F2',
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor:'#F2F2F2',
  },


  YgridList_left: {
    width: 550,
    maxHeight: theme.spacing(58),
    backgroundColor:'#F2F2F2',
    textAlign:'-webkit-center',
          // Aqu?? se estiliza la scrollbar
    "&::-webkit-scrollbar": {
      width: 10,

          },
    "&::-webkit-scrollbar-track": {
      borderRadius: '8px',
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: '8px',
      backgroundColor:'#FF462C',
  
    },
    '@media only screen and (max-width: 950px)': {

      minWidth:300,
      minHeight: theme.spacing(60),
      maxHeight: theme.spacing(60),
      width:'100%',

      
    },
    
  
},
YgridList_right: {
  maxWidth:300,
  maxHeight: theme.spacing(58),

  textAlign:'-webkit-center',
  alignContent:'center',
        // Aqu?? se estiliza la scrollbar
  "&::-webkit-scrollbar": {
    width: 10
        },
  "&::-webkit-scrollbar-track": {
    borderRadius: '8px',
    boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: '8px',
    backgroundColor:'#FF462C',

  },

},
pagination:{
  '& ul':{
    justifyContent:'center',


  }
},
formControl: {
  margin: theme.spacing(0,1),
  padding:0,
  height: 30,
  minWidth: 120,
  
},

appbar:{
  height: theme.spacing(6),

},



secondToolbar:{
  justifyContent:'center',
  placeContent:'center',
  textAlign:'center'
},
detailCardGrid:{
  paddingTop: theme.spacing(120)
},
title: {
  "&:hover":{
    cursor:'pointer',
    color:'darkgrey',
    
  },
  color:'#FF462C',
},
DialogContent:{
  textAlign:'center',

},
  "&::-webkit-scrollbar": {
    width: 10
        },
  "&::-webkit-scrollbar-track": {
    borderRadius: '8px',
    boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: '8px',
    backgroundColor:'#FF462C',

  },



}));




const MarketPlace = (props)=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.tab);
  const router = useRouter()

  const [details,setDetails] = React.useState(null)



  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue==0){
      router.replace('/')

    }else if (newValue==1){
    router.replace('/?bytype=normal')
    
    }
    setOpen(false)
   
  };

  
  function getCols(screenWidth) {
    if (isWidthUp('lg', screenWidth)) {
      return 4;
    }

    if (isWidthUp('md', screenWidth)) {
      return 4;
    }
    if (isWidthUp('sm', screenWidth)) {
      return 4;
    }


    return 2;
  }

  const cols = getCols(props.width);

  const handleDetailsChange  = (det) => {
    if (isWidthUp('lg', props.width)) {

    }else{
      setOpen(true)
    }
    
    setDetails(det)}

  React.useEffect(()=>{
    if (value==0){
      setDetails(datos_pokedex[0].url)
    }
  
    else if (value==1){
    if (datos_tipo[0]!=undefined){
    setDetails(datos_tipo[0].pokemon.url)
    }else{
      setDetails(null)
    }
  }

  
},[datos_tipo,datos_pokedex])

const datos_tipo = props.pokemon.pokemon
const datos_pokedex = props.pokemon.results


const [shown_poke,setShown_poke] = React.useState(null)

if (datos_tipo!=undefined){
var datos_tipo_nombre_crec =   datos_tipo.slice().sort((a,b)=> a.pokemon.name.localeCompare(b.pokemon.name))
var datos_tipo_nombre_decr =   datos_tipo_nombre_crec.slice().reverse()
}
const [filter, setFilter] = React.useState('');

const handleFilterChange = (event) => {
  setFilter(event.target.value);
  if (event.target.value==1){
    setShown_poke(datos_tipo_nombre_crec)
  }
  else if (event.target.value==2){
    setShown_poke(datos_tipo_nombre_decr)
  }
};

const eraseShownPoke = () => {
  setFilter('')
  setShown_poke(null) }

function showPokemon(shown,original){

  if (shown){

    return (  shown.map((poke) => (
      <GridListTile key={poke.pokemon.name}>
  
  
    <Pokemon_card 
    key={poke.pokemon.name} 
    handleDetailsChange={handleDetailsChange}
  
    details={poke.pokemon.url}
    name={poke.pokemon.name}
  
      />
      </GridListTile>)))
  }else{

    return (  original.map((poke) => (
      <GridListTile key={poke.pokemon.name}>
  
  
    <Pokemon_card 
    key={poke.pokemon.name} 
    handleDetailsChange={handleDetailsChange}
  
    details={poke.pokemon.url}
    name={poke.pokemon.name}
  
      />
      </GridListTile>)))


    }

    
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInicio =(e) => {
    e.preventDefault()
    router.replace('/')
    setValue(0)

  }

  const [open, setOpen] = React.useState(false);
        

  

  return (
    <React.Fragment>
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>

            <AppBar className={classes.appbar} color='background' position="static">
        <Toolbar>

          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Button onClick={handleInicio}>
          <Typography className={classes.title}  variant="h6" noWrap>
            Pok??Dex
          </Typography>
          </Button>
 

                <Hidden lgUp>
                  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Full Pok??Dex" {...a11yProps(0)} />
          <Tab label="By Type" {...a11yProps(1)} />
          

        </Tabs>
        </Hidden>
        </Toolbar>
      </AppBar>
          <Toolbar style={{justifyContent:'center', minHeight:30}}>
      {props.pokemon.pokemon != undefined ? ( 
              <React.Fragment>
            <TypeSearch eraseShownPoke={eraseShownPoke}/>
            <FormControl className={classes.formControl}>
            <InputLabel id="poke-select-label">Sort</InputLabel>
            <Select
              labelId="poke-select-label"
              id="poke-select"
              value={filter}
              onChange={handleFilterChange}
         
            >
              <MenuItem value={1}>By name A-Z</MenuItem>
              <MenuItem value={2}>By name Z-A</MenuItem>

            </Select>
          </FormControl>
          </React.Fragment>
           
            ): null}

        {props.pokemon.results != undefined ? (    

          <PokeSearch handleDetailsChange={handleDetailsChange}/>):null}
                </Toolbar>
      <div className={classes.root}>
      <Hidden mdDown>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Full PokeDex" {...a11yProps(0)} />
 
        <Tab label="By Type" {...a11yProps(1)} />

      </Tabs>
      </Hidden>
      <TabPanel value={value} index={0}>


    
        <Grid
         container
         direction="row"
         justify="center"
         alignItems="flex-start"
         maxWidth='900px'
         >



      {props.pokemon.results != undefined ? ( 
        <GridList 
        cellHeight={'auto'} 
        cols={cols} 
        className={classes.YgridList_left}>        
        
        {props.pokemon.results.map((poke) => (
                <GridListTile key={poke.name}>
          
            
              <Pokemon_card 
              key={poke.name} 
              handleDetailsChange={handleDetailsChange}
              // img = {data.sprites.other["official-artwork"].front_default}
              details={poke.url}
              name={poke.name}
              // type={data.types[0].type.name}
                />

                    

                </GridListTile>
              ))} 

          
          </GridList>
          ): <GridList 
          cellHeight={'auto'} 
          cols={cols} 
          className={classes.YgridList_left}>        </GridList>}

        <Hidden mdDown>
          <GridList 
          cellHeight={'auto'} 
          cols={1} 
          className={classes.YgridList_right}
          >
        
        

                <GridListTile>
                <div className={classes.detailCardGrid}>
              <Details_card
              details={details}
              ></Details_card>
                </div>
                    

                </GridListTile>
     

          
          </GridList>
          </Hidden>



          
            

   
          </Grid>

          <Pagination
              className={classes.pagination}
              size="small"
              page={props.page}
              count={10>props.page? 10 : (props.pokemon.next? props.page+1 :props.page) }
              renderItem={(item) => (
                <Link href={'/?page='+item.page}>
                <PaginationItem
                {...item}
                  />
                  </Link>
                  )}
                />
          <Hidden lgUp>
          <Dialog
 
        open={open}
        onClose={handleClose}
        aria-labelledby="pokemon-details"
      >
        <DialogTitle id="pokemon-details" style={{textAlign:'center', color:"#FF462C"}}>Pok??mon details</DialogTitle>
        <DialogContent className={classes.DialogContent}>
     

              <Details_card
              details={details}
              ></Details_card>

                    

 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </Hidden>
      

      </TabPanel>
      <TabPanel value={value} index={1}>
      
      <Grid
         container
         direction="row"
         justify="center"
         alignItems="center"
         maxWidth='900px'
         >

           {props.pokemon.pokemon != undefined ? ( 


        <GridList 
        cellHeight={'auto'} 
        cols={cols} 
        className={classes.YgridList_left}>        
        
        { showPokemon(shown_poke,props.pokemon.pokemon)} 
              
           
          
          </GridList>
             ) :         <GridList 
             cellHeight={'auto'} 
             cols={1} 
             className={classes.YgridList_left}>    
         
             
             </GridList> }

             <Hidden mdDown>
          <GridList 
          cellHeight={'auto'} 
          cols={1} 
          className={classes.YgridList_right}
          >
        
        

                <GridListTile>
                  <div className={classes.detailCardGrid}>
              <Details_card
              details={details}
              ></Details_card>
                </div>
                    

                </GridListTile>
     

          
          </GridList>

          </Hidden>


   
          </Grid>
          <Pagination
              size="small"
              className={classes.pagination}
              page={props.page}
              count={1}
              renderItem={(item) => (

                <PaginationItem
                {...item}
                  />
           
                  )}
                />
        <Hidden lgUp>
          <Dialog
        // fullWidth={fullWidth}
        // maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="pokemon-details"
      >
        <DialogTitle id="pokemon-details" style={{textAlign:'center', color:"#FF462C"}} >Pok??mon details</DialogTitle>
        <DialogContent className={classes.DialogContent}>
     

              <Details_card
              details={details}
              ></Details_card>

                    

 
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </Hidden>
      </TabPanel>

    </div>
    </React.Fragment>
  );
}


export default withWidth()(MarketPlace)



// export async function getStaticProps() {
//   const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100')
//   const data = await res.json()


//   return {
//     props: {
//       pokemon: data
//     },
//     revalidate: 3600,
//   };
// }



export const getServerSideProps = async ({ query }) => {
  // Fetch the first page as default
  const page = query.page || 1
  const type = query.bytype 
  let data = null

  // Fetch data from external API
  try {
    if (type){
      var res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
      var tab = 1
    }else{
    var res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${(page-1)*100}&limit=100`)
    var tab = 0

    }
    if (res.status !== 200) {
      throw new Error("Failed to fetch")
    }
  
    

    

    data = await res.json()





  } catch (err) {
    data = { error: { message: err.message } }
  }
  // Pass data to the page via props
  return {
    props: {
      pokemon: data,
      tab: tab,
      page: Number(page),
    },

  };
}
