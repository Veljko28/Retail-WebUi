import React from 'react';
import '../css/main.css';
import {Fab, Avatar, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
  blue: {
      backgroundColor: '#0d7dd4',
      width: '45px',
      height: '45px',
      margin: '7px'
  },
    btn: {
        margin: '7px',
  }
}));


export default function SideBar(){
    const classes = useStyles();

    return (
        <Grid container className="bar">
            <Avatar className={classes.blue}>R</Avatar>
                <Fab size="medium" aria-label="add" className={classes.btn}>
                    <HomeIcon />
                </Fab>
                <Fab size="medium" aria-label="add" className={classes.btn}>
                    <TrendingUpIcon />
                </Fab>
                <Fab size="medium" aria-label="add" className={classes.btn}>
                    <PeopleAltIcon />
                </Fab>
            <Fab size="medium" color="secondary" aria-label="add" className={classes.btn}>
                <AddIcon />
            </Fab>
            <Fab size="medium" color="secondary" aria-label="remove" className={classes.btn}>
                <HighlightOffIcon/>
            </Fab>
            <Fab size="medium" color="secondary" aria-label="sales" className={classes.btn}>
                <AttachMoneyIcon/>
            </Fab>
            <Fab size="medium" color="secondary" aria-label="details" className={classes.btn}>
                <LoyaltyIcon/>
            </Fab>
        </Grid>
    );
}