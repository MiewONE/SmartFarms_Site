import React from 'react';
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
        backgroundColor:'#f3f3f3',
    },
    Cellback:{
        backgroundColor:'white'
    }
}));
const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 10, value: 30 },
  ];
  
const DataState = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <Table>
                    <TableBody>
                        <TableCell className={classes.Cellback}>
                            <Chart data={data} width='200' height='200'>
                                <ArgumentAxis />
                                <ValueAxis />
                                <LineSeries valueField="value" argumentField="argument" />
                            </Chart>
                        </TableCell>
                        <TableCell>
                            123
                        </TableCell>
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