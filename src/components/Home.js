import React from 'react';
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DataState from './DataState';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        flexBasis: '100%',
        flexShrink: 0,
        marginLeft:'20%',
        fontWeight:'bold',
        fontSize:"1.7em",
    },
    headings: {
        fontSize: theme.typography.pxToRem(20),
        flexBasis: '100%',
        flexShrink: 0,
        marginLeft:'40%',
        fontWeight:'bold',
        fontSize:"1.7em",
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    color:{
        // background : 'red',
    },
    iconmargin:{
        marginRight:'10%',
    },
    margin: {
        margin: theme.spacing(1),
        border:"2px",
        fontSize:"1.5em",
      },
}));

const Home = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    // const [comp,setComp] = useState(Login);
    return (
        <div class="body">
            <div class="left">

                <div class="left_top">
                    <img src="https://i.ibb.co/PT8Pvgx/whitefarming.gif" alt="main" />
                </div>

                <div>
                    <Accordion className={classes.color} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            className={classes.iconmargin}
                        >
                            <Typography className={classes.headings}>상태</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <span>
                                <Button  size="large" className={classes.margin}>현재시스템</Button>
                                <Button size="large" className={classes.margin}>통계</Button>
                            </span>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                            className={classes.iconmargin}
                        >
                            <Typography className={classes.heading}>정보 수정</Typography>
                            
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                               </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                    {/* <ul>
                        <li>상태</li>
                        <ul>
                            <li>현재상태</li>
                            <li>통계</li>
                        </ul>
                        <li>사용자 정보</li>
                        <li>통계</li>
                    </ul> */
                    }
                </div>
            </div>
            <div class="right">
                <div class="right_top">
                    <AppBar position="static" color="default">
                        <Toolbar variant="dense">

                            <Typography variant="h6" color="inherit">
                                사용자
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <div>
                    <DataState/>
                </div>
            </div>
        </div>
    );
};

export default Home;