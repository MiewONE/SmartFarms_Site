import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Login.css'
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        
    },
    Papers:{
        width:'60%',
        height:'350px',
        margin:'0 auto',
        maxWidth:'330px'
        
    },
    field: {
        margin:theme.spacing(1),
        width:'100%',
        top:'30%',
        left:'20%',
        display:'block'
        },
    logindiv_left:{
        width:"30%",
        background:'#5c7cfa',

    },
    logindiv_right:{
        width:"70%",
        // background:'Red',

    }
}));

const Login = () => {
    const classes = useStyles();
    return (
        <div>
            <Container fixed>
                <div className={classes.root}>
                    <Paper elevation={4} className={classes.Papers}>
                        {/* <div className={classes.logindiv_left} >
                            
                        </div> */}
                        <img src="https://i.ibb.co/5ky6WWt/farmming.jpg" alt="파밍"/>
                        <div className={classes.logindiv_right}>
                            <form className={classes.text} noValidate autoComplete="off">
                                <TextField  className={classes.field} id="outlined-basic" label="아이디" variant="outlined" size="small"/>
                                <TextField type="password" className={classes.field} id="outlined-password-input" autoComplete="current-password" label="비밀번호" variant="outlined" size="small"/>
                                <Button variant="contained" color="primary" className={classes.field}>
                                    로그인
                                </Button>
                            </form>
                        </div>
                        
                    </Paper>
                </div>
            </Container>
        </div>
    );
};

export default Login;