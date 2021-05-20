import React from 'react';
import {Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export default function SideBar(){

    return (
        <>
         <Fab size="medium" color="primary" aria-label="add">
             <AddIcon />
         </Fab>
        </>
    );
}