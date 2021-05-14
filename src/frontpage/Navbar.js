import { Grid, Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import '../css/main.css';

export default function Navbar(props) {

    return (
        <Grid container row>
            <Grid item xs={2}>
              <Link to="/"><Typography variant="h4" className="title">Retail</Typography></Link>
            </Grid>

            <Grid item xs={6}/>

            <Grid item xs={4}>
            {!props.loggedIn ? 
            <>
                <Link to="/about" className="text-blue">About</Link>
                <Link to="/login" className="text-blue">Login</Link>
                <Link to="/signin" className="text-blue">Sign-In</Link>
                </> : 
                <>
                <Link to="/add" className="text-blue">Add</Link>
                <Link to="/products" className="text-blue">Products</Link>
                <Link to="/sales" className="text-blue">Sales</Link>
                <Link to="/" className="text-blue">Logout</Link>
                </>}
            </Grid>
        </Grid>
    );
}