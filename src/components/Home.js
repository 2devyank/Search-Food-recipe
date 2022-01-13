import React from 'react'
import img from "../woman-chef-cooking-vegetables-pan.jpg"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
        <div className="container">
            <div className="leftbar">
                <span className="large-text">

            Let's Start <br />Cooking with <br /> Popular Recipes
                </span>
            <span className='small-text'>
                Want to learn Cook but confused how to start?
             <br />
                    No need to Worry again
              
            </span>
            </div>
            <Card className="card">
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Shahee Paneer
        </Typography>
        <Typography className="type" variant="body2" color="text.secondary">
         delicious,desi <br />
         tasty,ghar ka bana
        </Typography>
      </CardContent>
      
    </Card>
    <Card className="cardrajma">
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       kadi chawal
        </Typography>
        <Typography className="type" variant="body2" color="text.secondary">
         delicious,desi <br />
         tasty,ghar ka bana
        </Typography>
      </CardContent>
      
    </Card>
            <div className="rightbar" style={{backgroundImage:`url(${img}) `, 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
        }}>
           


  
  

                {/* <img src={img} alt="" /> */}
                {/* <a href='https://www.freepik.com/photos/food'>Food photo created by senivpetro - www.freepik.com</a> */}
            </div>
        </div>
    )
}

export default Home
