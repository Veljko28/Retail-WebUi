import Navbar from '../frontpage/Navbar';
import Footer from '../frontpage/Footer';
import '../css/main.css';
import {Grid, Typography, CircularProgress} from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';
// import axios from 'axios';


export default function Login() {
    const initForm = {
        email: '',
        password: '',
    };

    const [form, handleForm] = React.useState(initForm);
    const [isLoading,setLoading] = React.useState(false);

    const callApi = () => {
    //   axios.post('localhost:5000', form).then(res => {
    //         const response = res.json();
    //   })
     setLoading(true);
    }

    return (
        <Grid container>
            <Grid item xs={1} />

            <Grid item xs={10}>
                <Navbar/>
                <div className="center">
                    <Typography variant="h2" className="title">Login Form</Typography>
                    <br/>
                    <input type="text" placeholder="Email" className="inp-field" 
                    onChange={e => handleForm({...form, email: e.target.value})}/>
                    <br/>
                    <input type="password" placeholder="Password" className="inp-field" 
                    onChange={e => handleForm({...form, password: e.target.value})}/>
                    <br/>
                    <Link to="products">
                    <button className="start-btn" onClick={() => callApi()}>
                        {isLoading ? <CircularProgress color="primary" size={20} /> : "Login"}
                    </button>
                    </Link>
                </div>
            </Grid>

            <Grid item xs={1} />
            <Footer/>
        </Grid>
    );

}