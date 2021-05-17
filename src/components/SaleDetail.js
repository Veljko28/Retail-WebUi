import React from 'react';
import { Grid,Typography } from '@material-ui/core';
import Navbar from '../frontpage/Navbar';
import Footer from '../frontpage/Footer';
import { useParams } from 'react-router-dom';


export default function SaleDetail() {

    let { id } = useParams();

    const rand = Math.round(Math.random() * 10); 

    const [details, handleDetails] = React.useState([
    {
        Id: Math.round(Math.random()*100),
        SaleId: "#"+ id.toString(),
        ProductId: "ProductId from Api " + rand,
        Quantity: "Quantity from Api " + rand,
        PurchasePrice: "PurchasePrice from Api " + rand,
        Tax: "Tax from Api " + rand
    },
    {
        Id: Math.round(Math.random()*10),
        SaleId: "#"+ id.toString(),
        ProductId: "ProductId from Api " + (rand+1).toString(),
        Quantity: "Quantity from Api " + (1 + rand).toString(),
        PurchasePrice: "PurchasePrice from Api " + (rand+1).toString(),
        Tax: "Tax from Api " + (rand+1).toString()
    },
     {
        Id: Math.round(Math.random()*10),
        SaleId: "#"+ id.toString(),
        ProductId: "ProductId from Api " + (rand+2).toString(),
        Quantity: "Quantity from Api " + (2+ rand).toString(),
        PurchasePrice: "PurchasePrice from Api " + (rand+2).toString(),
        Tax: "Tax from Api " + (rand+2).toString()
    },
    ]); 

    // const callApi = () => {
    //   axios.post('localhost:5000', form).then(res => {
    //         const response = res.json();
    //   })
    // }


    return (
       <Grid container>
             <Grid item xs={1} />

    <Grid item xs={10}>
        <Navbar loggedIn={true}/>
        <div className="center">
            <Typography variant="h2" className="title">Sale Detail #{id}</Typography>

             <table className="table">
                <thead>
                    <tr style={{backgroundColor: "#0d7dd4", color: "#fff", textAlign: 'center'}}>
                        <td>Id</td>
                        <td>Product Id</td>
                        <td>Quantity</td>
                        <td>Purchase Price</td>
                        <td>Tax</td>
                    </tr>
                </thead>
                <tbody>
                    {details.map(x => {
                        return (
                            <tr>
                                <td>{x.Id}</td>
                                <td>{x.ProductId}</td>
                                <td>{x.Quantity}</td>
                                <td>{x.PurchasePrice}</td>
                                <td>{x.Tax}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    </Grid>.

    <Grid item xs={1} />
    <Footer/>
       </Grid> 
    );
}