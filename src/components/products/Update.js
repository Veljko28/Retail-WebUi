import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';


export default function Update() {


    const initForm = {
        Id: '',
        productName: '',
        description: '',
        retailPrice: '',
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
        </div>
    </Grid>.

    <Grid item xs={1} />
       </Grid> 
    );
}