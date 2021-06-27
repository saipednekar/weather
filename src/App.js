import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState,useReducer } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { yellow } from '@material-ui/core/colors';


const App=()=> {
    const [city, setCity] = useState("")
    const axios = require('axios');
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                

              
            },
        },
        title: {
            fontSize: 14,
        },
       
        
    }));
    const classes = useStyles();
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])

    const  search = async() => {
        console.log(city)
        // Make a request for a user with a given ID
        axios.get(`https://api.weatherapi.com/v1/current.json?key=cd9fd4e263504efaa18152229212606&q=${city}`)
            .then(function (response) {
                // handle success
                console.log(response);
                setData(response.data.location)
                setData2(response.data.current.condition)
                setData3(response.data.current)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
   
    
           
      
  
  return (
      <div className="App">
          <div className="top">
              {data3.precip_in<="0.098" ? <div className="cloud">
                  <img src="./images/clouds.png" style={{ height: 150, width: 150 }} />
                  <img src="./images/clouds.png" style={{ height: 150, width: 150 }} />
                  <img src="./images/clouds.png" style={{ height: 150, width: 150 }} />
                  <img src="./images/clouds.png" style={{ height: 150, width: 150 }} />
                  <img src="./images/clouds.png" style={{ height: 150, width: 150 }} />
                  <img src="./images/clouds.png" style={{ height: 150, width: 150 }} />
              </div>
                  : <div className="sun">
                      <img src="./images/sun.png" style={{ height: 100, width: 150 }} />
                      <img src="./images/sun.png" style={{ height: 100, width: 150 }} />
                      <img src="./images/sun.png" style={{ height: 100, width: 150 }} />
                      <img src="./images/sun.png" style={{ height: 100, width: 150 }} />
                      <img src="./images/sun.png" style={{ height: 100, width: 150 }} />
                      <img src="./images/sun.png" style={{ height: 100, width: 150 }} />
                  </div>
              }
              <form className={classes.root} style={{ position: 'absolute', top: 170, left:600,borderRadius:150}} noValidate autoComplete="off">
              
                  <TextField id="filled-basic" className="top4"   variant="filled" onChange={(e)=>setCity(e.target.value) }/>
                      
                  </form>
                  <Button variant="contained" color="primary" onClick={() => search()} className="top2">
                  SEARCH
                 </Button>
         
          {city ? <div>
                  <Card className="card" style={{fontSize:20,fontWeight:'bold'}}>
                     <CardContent>
                          <Typography className={classes.title} style={{ fontSize: 20, fontWeight: 'bold' }} gutterBottom>
                          {data2.text} in {data.name}
                      </Typography>
                          <Typography style={{ fontSize: 50, fontWeight: 'bold' }}>
                          {data3.temp_c} degree Celcius
                      </Typography>
                          <Typography  style={{ fontSize: 20, fontWeight: 'bold' }}>
                          HUMIDITY={data3.humidity}<br />PRECIPITATION={data3.precip_in}inch <br />FEELS LIKE={data3.feelslike_c} Celcius
                      </Typography>
                          <Typography style={{ fontSize: 20, fontWeight: 'bold' }}>
                          WINDSPEED={data3.wind_kph}kph  <br />  WINDDEGREE={data3.wind_degree} DEGREE  <br /> UPDATED {data3.last_updated}
                      </Typography>
                    </CardContent>
              </Card>
              </div>

          :<text className="top3">PLEASE ENTER YOUR PLACE</text>}
          </div>
  
          
          
        
          </div>
  );
}

export default App;
