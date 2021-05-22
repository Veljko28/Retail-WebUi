import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import SideBar from '../frontpage/SideBar';

export default function Products() {
const [products,handleProducts] = React.useState([
        {
            name: 'Polo Shirt',
            price: '$25',
            quantity: 171 
        },
        {
            name: 'Black Jeans',
            price: '$35',
            quantity: 72 
        },
        {
            name: 'Thin Jacket',
            price: '$50', 
            quantity: 218 
        },
        {
            name: 'Hoodie',
            price: '$45',
            quantity: 123 
        },
    ]);

    return (
        <Grid container>
            <Grid item xs={1}>
                <SideBar/>
            </Grid>
            <Grid item xs={10}>
                <div style={{display: 'flex', justifyContent: 'space-around', borderBottom: '2px solid #888'}}>
                <Typography variant="h3" className="blue">Retail</Typography>
                <Typography variant="h4" style={{color: "#888"}}>Products 
                <span style={{fontSize:"20px",marginLeft: '10px'}}>{products.length}</span></Typography>
                <button>Add Product</button>
                </div>
            </Grid>

            <Grid item xs={1}/>
        </Grid>
    );
}