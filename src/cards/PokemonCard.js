import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import { makeStyles } from '@material-ui/core/styles';



import GridListTileBar from '@material-ui/core/GridListTileBar';
import useSWR from 'swr'

import Image from 'next/image'

import React from 'react'


// const LazyCircularProgress = React.lazy(() => import('@material-ui/CircularProgress'));


const useStyles = makeStyles((theme) =>
({
    root: {
      width: 125,
      margin: theme.spacing(0.5),
      borderRadius: '10px'
    },
    cardHeader:{
      marginBottom:0,
      paddingBottom:0

    },
    gridTileBar:{
        borderRadius: '10px',
        opacity: 0.7,
        backgroundColor: "#FF462C",

    },
    media: {
        height: 130,
      },

    cardContent:{
      textAlign:'left'
    }
  }));

export default function applicant_card({name,details,handleDetailsChange}){
    const classes = useStyles();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const { data, error } = useSWR(details)


    function changeDetail(){
        if (data){
            handleDetailsChange(details)
        }
    }

    
    return (
    <Card className={classes.root}>
  <CardActionArea
  onClick={changeDetail}
  >
    
    {!data ? <div style={{height:130}}></div> :(

        <Image
        src={data.sprites.other["official-artwork"].front_default ? data.sprites.other["official-artwork"].front_default : data.sprites.front_default}
        alt={name}
        width={500}
        height={500}
        />
        )}
      
        <GridListTileBar
        className= {classes.gridTileBar}
        title={name.charAt(0).toUpperCase()+ name.slice(1,name.length)}


    />

  

    </CardActionArea>

  </Card>
  )


} 