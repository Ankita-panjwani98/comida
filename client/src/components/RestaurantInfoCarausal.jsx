import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
/* import images from '../data/RestCarausalData'; */

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      
      },
      App:{
        marginLeft:'2%', 
          width:'100%',
          height:'50vh',
          backgroundColor:'lightblue'
      },
      carausalInner:{
            height:'100%',
            width:'100%',
            backgroundSize:'cover',
            backgroundRepeat:'norepeat',
            display:'flex',
            '&:hover':{
               // transform: "translate3D(0,-7px,0) scale(1.05)"
            }
      },
      left:{
          display:'grid',
          placeItems:'center',
         cursor:'pointer',
         marginLeft:'2%',
         '&:hover':{
             color:'white',
         }
      },
      right:{
        display:'grid',
        placeItems:'center',
        marginRight:'2%', cursor:'pointer',
        '&:hover':{
            color:'white',
        }
      },
      body:{
        margin:0,
        padding:0
      }
}));

const RestaurantInfoCarausal = ( {images }) => {
    const classes = useStyles();
    const [currImg, setCurrImg] =  useState(0);
             
    return (
         <>
         <Box className={classes.App} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
          <Box className={classes.carausalInner} style={{backgroundImage:`url(${images[currImg].img})`}}>
            <Box className={classes.left} flex='5%' onClick={() => {currImg > 0 && setCurrImg(currImg - 1)}}><ArrowBackIosIcon /></Box>
            <Box flex='90%'></Box>
            <Box className={classes.right}  flex='5%' height='100%' onClick={() => {currImg  < images.length -1 && setCurrImg(currImg + 1)}}><ArrowForwardIosIcon /></Box>
        </Box>
    </Box> 
    </>);
 }
export default RestaurantInfoCarausal;