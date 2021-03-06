import { Grid, Typography, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/main.css';

// import SalePage from './components/SalePage';
import Products from './components/Products';
import Login from './components/Login';
import About from './components/About';
import SignIn from './components/SignIn';
import Sales from './components/Sales';
import SaleDetail from './components/SaleDetail';

import Navbar from './frontpage/Navbar';
import Footer from './frontpage/Footer';
import Svg from './undraw.svg';


const theme = createMuiTheme({
   palette: {
        primary: {
          main: '#0d7dd4'
        }
      }
    });


function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Router>
       <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/sales/:id" children={<SaleDetail />} />
          
          <Route path="/sales">
            <Sales />
          </Route>

          <Route path="/">
            <Grid container>
              <Grid item xs={0} md={1}/>

              <Grid item xs={12} md={10} >
                <Navbar/>

                <Grid row container>  
                  <Grid item xs={12} md={6}>
                  <div className="front-text">
                    <Typography variant="h2" className="title-main">Get Started</Typography>
                    <div className="subtitle">
                      Register with your work account
                      <br/> and start selling !
                    </div>
                    <Link to="signin">
                      <button className="start-btn">
                       Start Now !  
                      </button>
                    </Link>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img src={Svg} alt="UNDRAW SVG" className="undraw"/>
                  </Grid>
                </Grid>

              </Grid>

              <Grid item xs={0} md={1}/>
              <Footer/>
            </Grid>
          </Route>
        </Switch>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
