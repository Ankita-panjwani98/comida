import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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