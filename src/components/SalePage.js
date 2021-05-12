import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Navbar from '../frontpage/Navbar';
import Footer from '../frontpage/Footer';
import {VictoryChart, VictoryLine, VictoryTheme} from 'victory';
import '../css/main.css';

export default function SalePage() {
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
    const [selectedProduct,changeSelectedProduct] = React.useState(products[0]);
    const [data,ChangeData] = React.useState([

        { x: '5 May', y: 2 },
        { x: '6 May', y: 3 },
        { x: '7 May', y: 5 },
        { x: '8 May', y: 4 },
        { x: '9 May', y: 7 }

        ]);
    const sold = Math.round(data.reduce((a,b) => {return a + b.y;}, 0));
    const tax = Math.round(sold * 0.8 * 100) / 100; 
    const amount = Math.round(parseInt(selectedProduct.price.substring(1))*sold);

    return (
        <Grid container>

        <Grid item xs={1}/>

            <Grid item xs={10}>
                <Navbar loggedIn={true}/>
                <Grid container row>
                    <Grid item xs={4}>
                        <div className="product-list" >
                            {products.map(x => {
                            return (<div className="product-card" onClick={() => {
                                changeSelectedProduct(x)
                                ChangeData([
                                    { x: '5 May', y: (Math.random() * 10)+1},
                                    { x: '6 May', y: (Math.random() * 10)+1},
                                    { x: '7 May', y: (Math.random() * 10)+1},
                                    { x: '8 May', y: (Math.random() * 10)+1},
                                    { x: '9 May', y: (Math.random() * 10)+1}
                                ])
                            }}>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span className="mr-auto">{x.name}</span>
                                        <span style={{color: '#0b8a1a', marginLeft: '0 auto', fontSize: '25px', marginTop: '2px'}}>{x.price}</span>
                                    </div>
                                    <div className="quantity">
                                        Quantity: {x.quantity}
                                    </div>
                                </div>);
                            })}
                        </div>
                    </Grid>

                    <Grid item xs={8} className="center">
                        <Typography style={{marginTop: '5px'}} variant="h3" className="blue">Sold {selectedProduct.name}</Typography>
                     <VictoryChart
                        theme={VictoryTheme.material}
                        padding={10}
                        height={150}
                        width={375}
                        >
                        <VictoryLine
                            style={{
                            data: { stroke: "#0d7dd4" },
                            }}
                            data={data}
                            y={data.y}
                        />
                        </VictoryChart>

                    </Grid>
                 </Grid>   
                        <div className="prices center">

                            <div className="retailPrice">
                                <span>Sold Amout ${amount}</span>    
                            </div>

                            <div className="tax">
                                <span>Tax ${tax}</span>    
                            </div>

                            <div className="profit">
                                <span>Profit ${amount-tax}</span>    
                            </div>

                        </div>
                <Footer/>
            </Grid>

        <Grid item xs={1}/>

        </Grid>
    );
}