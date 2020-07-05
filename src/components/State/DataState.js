import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import '../../css/DataState.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f3f3f3',
    },
    Cellback: {
        backgroundColor: 'white',
        width: '10px',
        height: '10px',
        maxWidth: '5%'
    },
    cellSize: {
        width: '100px'
    }
}));
const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 10, value: 30 },
];

const DataState = () => {
    const classes = useStyles();
    const [Tmppercentage, setTempPer] = useState(41);
    const [Humipercentage, setHumiPer] = useState(91);
    const graphwidth = '20%';
    return (
        <div style={{ backgroundColor: '#f3f3f3' }}>
            <div style={{ margin: '0% 2% 2% 2%' }}>
                <span > 
                    <br />
                    현재 시스템의 상태를 보여줍니다.
                </span>
            </div>
            <div style={{ display: 'inline-block', backgroundColor: 'white', margin: '0% 0% 5% 5%', width: '30%' }}>
                <Paper
                    elevation={3}
                    variant="outlined"
                >
                    <span class="data_span">
                        온도와 습도
                        </span>
                    <div>
                        <div class="div_chart">

                            <CircularProgressbarWithChildren
                                maxValue='100'
                                value={Tmppercentage}
                                styles={buildStyles({
                                    pathColor: '#f00',
                                })}
                            >
                                <div style={{ fontSize: '1.2em', marginTop: -5 }}>
                                    <strong>온도</strong>
                                </div>
                                <div style={{ fontSize: '1.2em', marginTop: -5 }}>
                                    <strong>{Tmppercentage}℃</strong>
                                </div>
                                {/* <Button onClick={() => setTempPer(Tmppercentage + 1)} size="large">+</Button>
                        <Button onClick={() => setTempPer(Tmppercentage - 1)} size="large">-</Button> */}
                            </CircularProgressbarWithChildren>
                        </div>
                        <div class="div_chart">
                            <CircularProgressbarWithChildren
                                value={Humipercentage}
                                styles={buildStyles({
                                    pathColor: '#3e98c7',
                                })}
                                style={{
                                    display: 'inline-block'
                                }}
                            >
                                <div style={{ fontSize: '1.2em', marginTop: -5 }}>
                                    <strong>습도</strong>
                                </div>
                                <div style={{ fontSize: '1.2em', marginTop: -5 }}>
                                    <strong>{Humipercentage}%</strong>
                                </div>
                                {/* <Button onClick={() => setHumiPer(Humipercentage + 1)} size="large">+</Button> */}
                            </CircularProgressbarWithChildren>
                        </div>
                    </div>


                </Paper>
            </div>
            <div style={{ display: 'inline-block', backgroundColor: 'white', margin: '0% 5% 5% 2%', width: '50%' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                                <TableCell>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLv6QwhaahoPicmw_nNNwNUq467NaSwFA6YA&usqp=CAU" alt="pump" /><br/>
                                    펌프
                                </TableCell>
                                <TableCell>
                                    <img src="https://i.ibb.co/p1w6hYw/led.jpg" alt="LED"/>
                                    LED
                                </TableCell>
                                <TableCell>
                                    난방기
                                </TableCell>
                                <TableCell>
                                    팬
                                </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                                <TableCell>
                                    펌프
                                </TableCell>
                                <TableCell>
                                    LED
                                </TableCell>
                                <TableCell>
                                    난방기
                                </TableCell>
                                <TableCell>
                                    팬
                                </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default DataState;