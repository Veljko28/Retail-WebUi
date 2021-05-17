import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';


export default function Delete() {

    const [productId,changeProductId] = React.useState('');
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
        <div className="center">
                <br/>
                <input type="text" placeholder="Product Id" className="inp-field"
                onChange={e => changeProductId(e.target.value)} />
                <br/>
                <button className="start-btn" onClick={() => callApi()}>
                    {isLoading ? <CircularProgress color="primary" size={20} /> : "Delete"}
                </button>
        </div>
    </Grid>.

    <Grid item xs={1} />
       </Grid> 
    );
}