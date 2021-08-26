<Grid container spacing={10} mt={10}>
        <Grid item xs={12} sm={6} md={4} lg={12}>
        {restaurants.map((rest) => {
            <Grid item xs={12} sm={6} md={4} lg={12}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={rest.imageUrl}
                    title=""
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {rest.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {rest.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions></CardActions>
              </Card>
            </Grid>
            })}
        </Grid>
        </Grid>






import React,{useState,useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import M from 'materialize-css';
const useStyles = makeStyles(theme => ({
    myrests:{
        marginBottom: '30px'
    }
}));
const Carousel=() =>{
    useEffect(()=>{
        let elements = document.querySelectorAll('.carousel');
        M.Carousel.init(elements);

       
    },[]);
    const classes = useStyles();
        return(
            <div className="frests mt-5">
            <div className="section white center">
          
                    <div className="carousel myrests">
                            <a className="carousel-item" href="#one!">
                                <div className="row">
                                    <div className="col 12">
                                        <div className="card panel teal">
                                                 <img width="100px" height="100px" className="center" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                           
                                        </div>  
                                    </div>
                                </div>
                            </a>
                            <a class="carousel-item" href="#two!"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
                            <div className="row">
                                    <div className="col 12">
                                        <div className="card panel teal">
                                                 <img width="100px" height="100px" className="center" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                           
                                        </div>  
                                    </div>
                                </div>
                            </a>
                            <a class="carousel-item" href="#three!"><img src="https://images.unsplash.com/photo-1490716961549-5dbd18f53101?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80"/>
                            <div className="row">
                                    <div className="col 12">
                                        <div className="card panel teal">
                                                 <img width="100px" height="100px" className="center" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                           
                                        </div>  
                                    </div>
                                </div>
                            </a>
                            <a class="carousel-item" href="#four!"><img src="https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1268&q=80"/>
                            <div className="row">
                                    <div className="col 12">
                                        <div className="card panel teal">
                                                 <img width="100px" height="100px" className="center" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                           
                                        </div>  
                                    </div>
                                </div>
                            </a>
                            <a class="carousel-item" href="#one!"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                            <div className="row">
                                    <div className="col 12">
                                        <div className="card panel teal">
                                                 <img width="100px" height="100px" className="center" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                           
                                        </div>  
                                    </div>
                                </div>
                            </a> 
                            <a class="carousel-item" href="#one!"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                            <div className="row">
                                    <div className="col 12">
                                        <div className="card panel teal">
                                                 <img width="100px" height="100px" className="center" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                           
                                        </div>  
                                    </div>
                                </div>
                            </a>
                            <a class="carousel-item" href="#one!"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                            <div className="row">
                                    <div className="col 12">
                                        <div className="card panel teal">
                                                 <img width="100px" height="100px" className="center" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                           
                                        </div>  
                                    </div>
                                </div>
                            </a>
                            <a class="carousel-item" href="#one!"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                            <div className="row">
                                    <div className="col 12">
                                        <div className="card panel teal">
                                                 <img width="100px" height="100px" className="center" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                           
                                        </div>  
                                    </div>
                                </div>
                            </a>     
                            <a class="carousel-item" href="#five!"><img src="https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1268&q=80"/>
                            
                            </a>
                            
                    </div>
                  </div>
            </div>
        )
}


export default Carousel;








<Tabs
orientation="vertical"
  value={selectedTab}
  onChange={handleChange}
  classes={{
    indicator: classes.indicator
  }}
>
  <Tab
    fullWidth
    label="Past Orders"
 
  />
  <Tab
    fullWidth
    label="My Profile"
  

  />
</Tabs>

{selectedTab === 0 && <PastOrders />}
{selectedTab === 1 && <MyProfile />}