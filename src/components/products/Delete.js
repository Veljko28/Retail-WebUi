import React from 'react';
import { Grid, CircularProgress, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Delete() {

    const [productId,changeProductId] = React.useState('');
    const [isLoading,setLoading] = React.useState(false);
    const [error,displayError] = React.useState(false);

    const url = "localhost:3000";
    const route = "/product";

    const callApi = () => {
        if (productId.length === 0) {
            displayError(true);
        }
        else{
            axios.delete(url.concat(route), {Id: productId}).then(res => {
            const response = res.text;
            if (response === 'false'){
                displayError(true);
            }
         })
         setLoading(true);
        }
    }


    return (
       <Grid container>
             <Grid item xs={1} />

    <Grid item xs={10}>
        <div className="center">
                <br/>
                <input type="text" placeholder="Product Id" className="inp-field"
                onChange={e => changeProductId(e.target.value)} />
                <br/>
                <button className="start-btn" onClick={() => callApi()}>
                    {isLoading ? <CircularProgress color="primary" size={20} /> : "Delete"}
                </button>
                <Snackbar open={error} autoHideDuration={5000} onClose={() => displayError(false)}>
                    <Alert onClose={() => displayError(false) } severity="error">
                    Cannot find product with this Id !
                    </Alert>
                </Snackbar>
        </div>

    </Grid>

    <Grid item xs={1} />
       </Grid> 
    );
}