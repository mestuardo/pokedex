import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box'
import GridListTileBar from '@material-ui/core/GridListTileBar';
import useSWR from 'swr'
import CircularProgress from '@material-ui/core/CircularProgress';
import Image from 'next/image'
import {orange} from '@material-ui/core/colors'
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
    avatar: {
      backgroundColor: red[200],
      width: theme.spacing(3),
      height: theme.spacing(3),
      margin:0
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
    // subtitle={<span>Type: {type} </span>}

    />

  
    <CardContent className={classes.cardContent}>
    
      
    {/* <Typography variant="caption" component="p"><Box fontWeight='fontWeightMedium' display='inline'>Vacantes:</Box> {vacancies}</Typography>
    <Typography variant="caption" component="p"><Box fontWeight='fontWeightMedium' display='inline'>Duración del trabajo:</Box> {job_duration}</Typography>
    <Typography variant="caption" component="p"><Box fontWeight='fontWeightMedium' display='inline'>Resumen descripción:</Box> {img}</Typography> */}
    {/* <Typography variant="caption" component="p"><Box fontWeight='fontWeightMedium' display='inline'>Fecha creación:</Box> {created_date.toLocaleDateString("es-ES",options)}</Typography> */}

      </CardContent>
    </CardActionArea>

  </Card>
  )


} 