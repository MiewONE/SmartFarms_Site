import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren,buildStyles  } from 'react-circular-progressbar';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f3f3f3',
    },
    Cellback: {
        backgroundColor: 'white',
        width: '200',
        maxWidth:'200px'
    },
    cellSize:{
        width:'100px',
    }
}));
const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 10, value: 30 },
];

const DataState = () => {
    const classes = useStyles();
    const [percentage,setPer] = useState(1);
    return (
        <div className={classes.root}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className={classes.Cellback}>
                            <CircularProgressbarWithChildren 
                                value={percentage}
                                styles={buildStyles({
                                    pathColor:'#8b0000',
                                })}
                            >
                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                    <strong>온도</strong>
                                  </div>
                                <div style={{ fontSize: 12, marginTop: -5 }}>
                                    <strong>{percentage}%</strong>
                                  </div>
                            </CircularProgressbarWithChildren>;
                            <Button onClick={()=>setPer(percentage+1)}size="large">+</Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    );
};

export default DataState;
/*import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:'gray',
    }
}));
const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 10, value: 30 },
  ];
  const classes = useStyles();
class DataState extends Component {

    render() {

        return (
            <div className={classes.root}>

                    <Chart data={data} width='200' height='200'>
                        <ArgumentAxis />
                        <ValueAxis />

                        <LineSeries valueField="value" argumentField="argument" />
                    </Chart>

            </div>
        );
    }
}

export default DataState; */