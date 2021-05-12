import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Navbar from '../frontpage/Navbar';
import Footer from '../frontpage/Footer';


export default function Sales() {

    const [sales,handleSales] = React.useState([
        {
            Id: "#23874",
            CashierId: "3",
            SaleDate: "04/05/2021",
            SubTotal: '$150',
            Tax: '$25',
            Total: '$125'
        },

        {
            Id: "#29341",
            CashierId: "1",
            SaleDate: "07/05/2021",
            SubTotal: '$135',
            Tax: '$15',
            Total: '$120'
        },


        {
            Id: "#90123",
            CashierId: "4",
            SaleDate: "07/05/2021",
            SubTotal: '$425',
            Tax: '$50',
            Total: '$375'
        },


        {
            Id: "#42387",
            CashierId: "2",
            SaleDate: "08/05/2021",
            SubTotal: '$415',
            Tax: '$55',
            Total: '$360'
        },

    ]);

    return (
        <Grid container>
        <Grid item xs={0} md={1}/>

        <Grid item xs={12} md={10} >
            <Navbar loggedIn={true} />
            <Typography  
            style={{marginTop: '5px', display: 'flex', justifyContent: 'center'}} 
            variant="h2" className="blue">Sales</Typography>
            <table className="table">
                <tr>
                    <td>Id</td>
                    <td>Cashier Id</td>
                    <td>Sale Date</td>
                    <td>Sub Total</td>
                    <td>Tax</td>
                    <td>Total</td>
                </tr>
                {sales.map(x => {
                    return (
                        <tr>
                            <td>{x.Id}</td>
                            <td>{x.CashierId}</td>
                            <td>{x.SaleDate}</td>
                            <td>{x.SubTotal}</td>
                            <td>{x.Tax}</td>
                            <td>{x.Total}</td>
                        </tr>
                    )
                })}

            </table>
            <Footer />
        </Grid>

        <Grid item xs={0} md={1}/>
        </Grid>
    );
}