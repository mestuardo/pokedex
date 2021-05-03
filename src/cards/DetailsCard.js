import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { red } from '@material-ui/core/colors';

import GridListTileBar from '@material-ui/core/GridListTileBar';
import useSWR from 'swr'
import CircularProgress from '@material-ui/core/CircularProgress';
import Image from 'next/image'

import React from 'react';





const useStyles = makeStyles((theme) =>
({
  
    root: {
      width: 200,
      margin: theme.spacing(3),
      borderRadius: '10px'
    },
    cardHeader:{
      marginBottom:0,
      paddingBottom:0

    },
    gridTileBar:{
        borderRadius: '10px',
        opacity: 0.8,
        backgroundColor: "#FF462C",

    },
    media: {
        height: 140,
      },
    avatar: {
      backgroundColor: red[200],
      width: theme.spacing(3),
      height: theme.spacing(3),
      margin:0
    },
    cardContent:{
      textAlign:'center'
    }
  }));

export default function applicant_card({details}){
    const classes = useStyles();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const { data, error } = useSWR(details)

    

    
    return (
      <div >
    <Card className={classes.root}>
  <CardActionArea>
    
    {!data ? <div style={{height:400}}><CircularProgress color="black" /></div> :(
        <React.Fragment > 
        <Image
        src={data.sprites.other["official-artwork"].front_default ? data.sprites.other["official-artwork"].front_default : data.sprites.front_default}
        alt={data.name}
        width={400}
        height={400}
        />

 
        <GridListTileBar
        className= {classes.gridTileBar}
        title={data.name.charAt(0).toUpperCase()+ data.name.slice(1,data.name.length)}
  
        
    />
    </React.Fragment>
    )}

    </CardActionArea>

  </Card>

  <Card className={classes.root}>
  <CardActionArea>

  {!data ? <div style={{height:400}}><CircularProgress color="black" /></div> :
    <CardContent className={classes.cardContent}>
    
      
    <Typography gutterBottom  variant="caption" component="p" >Type(s):</Typography>
    
    
    {data.types.map((attr)=>(
    <Typography variant="caption" color="textSecondary" component="p" key={attr.type.name}>{attr.type.name}</Typography>))}



      </CardContent> }
    </CardActionArea>

  </Card>
  <Card className={classes.root}>
  <CardActionArea>

  {!data ? <div style={{height:400}}><CircularProgress color="black" /></div> :
    <CardContent className={classes.cardContent}>
    
    <Typography gutterBottom  variant="caption" component="p">Base experience</Typography>

    <Typography variant="caption" component="p" color="textSecondary" >{data.base_experience} points</Typography>
     </CardContent> }
    </CardActionArea>

  </Card>
  
  
  <Card className={classes.root}>
  <CardActionArea>

  {!data ? <div style={{height:400}}><CircularProgress color="black" /></div> :
    <CardContent className={classes.cardContent}>
    
    <Typography gutterBottom  variant="caption" component="p">Base Stats</Typography>
    {data.stats.map((attr)=>(
    <Typography variant="caption" component="p" color="textSecondary" key={attr.stat.name}>{attr.stat.name} : {attr.base_stat}</Typography>))}
      </CardContent> }
    </CardActionArea>

  </Card>

  <Card className={classes.root}>
  <CardActionArea>

  {!data ? <div style={{height:400}}><CircularProgress color="black" /></div> :
    <CardContent className={classes.cardContent}>
    
    <Typography gutterBottom  variant="caption" component="p">Abilities</Typography>
    {data.abilities.map((attr)=>(
    <Typography variant="caption" component="p" color="textSecondary" key={attr.ability.name}>{attr.ability.name}</Typography>))}
      </CardContent> }
    </CardActionArea>

  </Card>

  <Card className={classes.root}>
  <CardActionArea>

  {!data ? <div style={{height:400}}><CircularProgress color="black" /></div> :
    <CardContent className={classes.cardContent}>
    
    <Typography gutterBottom  variant="caption" component="p">Weight</Typography>

    <Typography variant="caption" component="p" color="textSecondary" >{data.weight} pounds</Typography>
     </CardContent> }
    </CardActionArea>

  </Card>
  <Card className={classes.root}>
  <CardActionArea>

  {!data ? <div style={{height:400}}><CircularProgress color="black" /></div> :
    <CardContent className={classes.cardContent}>
    
    <Typography gutterBottom  variant="caption" component="p">Abilities</Typography>
    {data.abilities.map((attr)=>(
    <Typography variant="caption" component="p" color="textSecondary" key={attr.ability.name}>{attr.ability.name}</Typography>))}
      </CardContent> }
    </CardActionArea>

  </Card>

  <Card className={classes.root} style={{minHeight:'400px'}}>
  <CardActionArea>

  {!data ? <div style={{height:400}}><CircularProgress color="black" /></div> :
    <CardContent className={classes.cardContent}>
    
    <Typography gutterBottom  variant="caption" component="p">Game appeareances</Typography>
    {data.game_indices.map((attr)=>(
    <Typography variant="caption" component="p" color="textSecondary" key={attr.version.name}>{attr.version.name}</Typography>))}
      </CardContent> }
    </CardActionArea>

  </Card>

  </div>
  )


} 