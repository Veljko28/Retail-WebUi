import Navbar from '../frontpage/Navbar';
import Footer from '../frontpage/Footer';
import '../css/main.css';
import {Grid, Typography, CircularProgress} from '@material-ui/core';
import React from 'react';


export default function SignIn() {
    const initForm = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
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
                    <Typography variant="h2" className="title">Sign in</Typography>
                    <br/>
                    <input type="text" placeholder="First Name" className="inp-field-sign"
                    onChange={e => handleForm({...form, firstName: e.target.value})} />
                    <input type="text" placeholder="Last Name" className="inp-field-sign" 
                    onChange={e => handleForm({...form, lastName: e.target.value})}/>
                    <br/>
                    <input type="text" placeholder="Email" className="inp-field" 
                    onChange={e => handleForm({...form, email: e.target.value})}/>
                    <br/>
                    <input type="password" placeholder="Password" className="inp-field-sign" 
                    onChange={e => handleForm({...form, password: e.target.value})}/>
                    <input type="password" placeholder="Confirm Password" className="inp-field-sign"
                    onChange={e => handleForm({...form, confirmPassword: e.target.value})} />
                    <br/>
                    <button className="start-btn" onClick={() => callApi()}>
                        {isLoading ? <CircularProgress color="primary" size={20} /> : "Sign in !"}
                    </button>
                </div>
            </Grid>

            <Grid item xs={1} />
            <Footer/>
        </Grid>
    );

}