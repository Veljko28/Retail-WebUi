import React from 'react';
import { Grid } from '@material-ui/core';
import SideBar from '../frontpage/SideBar';

export default function Products() {


    return (
        <Grid container>
            <Grid item xs={1}>
                <SideBar/>
            </Grid>
            <Grid item xs={10}> 
                  Hello  
            </Grid>

            <Grid item xs={1}/>
        </Grid>
    );
}