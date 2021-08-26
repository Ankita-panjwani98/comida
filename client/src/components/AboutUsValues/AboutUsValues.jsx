import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../components/AboutUsValues/AboutUsValues.style';



export default function Values(props) {
  const classes = useStyles();
  return (


    <div >
    <h1 > Our Values </h1> {


      props.value.map((val) => {
        return <div className = {
            classes.root
          } >
          <Card className = {
            classes.root
          } >
          <CardActionArea >
          <
          CardMedia
        className = {
          classes.media
        }
        image = {
          val.image
        }
        /> <CardContent >
          <Typography gutterBottom variant = "h5"
        component = "h2" > {
            val.name
          } </Typography> <Typography variant = "body2"
        color = "textSecondary"
        component = "p" > {
            val.details
          } </Typography> </CardContent> </CardActionArea> </Card>

          </div>

      })

    } </div>
  );
}
