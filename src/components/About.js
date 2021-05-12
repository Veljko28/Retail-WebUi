import Navbar from '../frontpage/Navbar';
import Footer from '../frontpage/Footer';
import '../css/main.css';
import {Grid, Typography} from '@material-ui/core';


export default function About() {

    return (
        <Grid container>
            <Grid item xs={1} />

            <Grid item xs={10}>
                <Navbar/>
                 <Typography variant="h2" className="title" style={{marginTop: 25}}>About</Typography>
                  <div className="subtitle" style={{marginTop: 35}}>
                      This is one project in a series of project about a retail store
                      selling various products. The website is used by store employees 
                      / managers that will sign in with their company / work email and
                      manage the products and sales recently made.
                      It's a simple UI react fronend connected to a Retail API.
                      This retail project also comes with the WPF desktop application.
                    </div>
            </Grid>
            
            <Grid item xs={1} />
            <Footer/>
        </Grid>
    );

}