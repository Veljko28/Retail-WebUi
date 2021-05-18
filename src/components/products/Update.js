import React from 'react';
import { Grid, CircularProgress, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


export default function Update() {


    const initForm = {
        Id: '',
        productName: '',
        description: '',
        retailPrice: '',
    };

    const [form, handleForm] = React.useState(initForm);
    const [isLoading,setLoading] = React.useState(false);
    const [error,displayError] = React.useState(false);
    const [errorMsg, handleErrMsg] = React.useState('Cannot create this product !');

    const url = "localhost:3000";
    const route = "/product";

    const callApi = () => {
        if (form.Id === ""){
            handleErrMsg("Product must have an Id !");
            displayError(true);
        }
        else if (form.productName === ""){
            handleErrMsg("Product must have a name !");
            displayError(true);
        }
        else if (form.description === "") {
            handleErrMsg("Product must have a description !");
            displayError(true);
        }
        else if (form.retailPrice === "") {
            handleErrMsg("Product must have a price !");
            displayError(true);
        }
        else {
            axios.post(url.concat(route), form).then(res => {
                    const response = res.json();
            })
            setLoading(true);
        }
    }


    return (
       <Grid container>
             <Grid item xs={1} />

    <Grid item xs={10}>
        <div className="center">
                <input type="text" placeholder="Product Name" className="inp-field"
                onChange={e => handleForm({...form, productName: e.target.value})} />
                <br/>
                <input type="text" placeholder="Product Id" className="inp-field-sign" 
                onChange={e => handleForm({...form ,Id: e.target.value})}/>
                <input type="number" placeholder="Retail Price" className="inp-field-sign" 
                onChange={e => handleForm({...form, retailPrice: e.target.value})}/>
                <br/>
                <textarea type="text" placeholder="Description" className="inp-field" rows="3"
                onChange={e => handleForm({...form, description: e.target.value})}></textarea>
                <br/>
                <button className="start-btn" onClick={() => callApi()}>
                    {isLoading ? <CircularProgress color="primary" size={20} /> : "Update"}
                </button>
                <Snackbar open={error} autoHideDuration={5000} onClose={() => displayError(false)}>
                    <Alert onClose={() => displayError(false) } severity="error">
                    {errorMsg}
                    </Alert>
                </Snackbar>
        </div>
    </Grid>.

    <Grid item xs={1} />
       </Grid> 
    );
}