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
            <div style={{ margin: '0% 2% 2% 2%',marginLeft:'40%' }}>
                <span> 
                    <br />
                    현재 시스템의 상태를 보여줍니다.
                </span>
            </div>
            <div style={{ display: 'inline-block', backgroundColor: 'white', margin: '0% 0% 5% 5%', width: '50%' }}>
                <Paper
                    elevation={3}
                    variant="outlined"
                >
                    <span class="data_span">
                     온습도
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
            <div style={{ display: 'inline-block', backgroundColor: 'white', margin: '0% 5% 5% 5%', width: '30%' }}>
            <Paper
                    elevation={3}
                    variant="outlined"
                >
                <img src="https://tekladesign.net/wp-content/uploads/2017/03/server.png" alt="server" class="server_icon"/><br/>
                <span style={{fontSize:'2em',margin:'0% 0% 10% 10%'}}>
                서버 정상 작동중
                </span>
                
                </Paper>
            </div>
            <div style={{ display: 'inline-block', backgroundColor: 'white', margin: '0% 5% 5% 5%', width: '90%' }}>
            <Paper
                    elevation={3}
                    variant="outlined"
                >
                <Table>
                    <TableHead>
                        <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLv6QwhaahoPicmw_nNNwNUq467NaSwFA6YA&usqp=CAU" alt="pump" class="img_head"/><br/>
                                    펌프
                                </TableCell>
                                <TableCell align="center">
                                    <img src="https://i.ibb.co/p1w6hYw/led.jpg" alt="LED" class="img_head"/><br/>
                                    LED
                                </TableCell>
                                <TableCell align="center">
                                    <img src="https://www.sifmdc.com/uploads/preheater_sm.png" alt="preheater" class="img_head"/><br/>
                                    난방기
                                </TableCell>
                                <TableCell align="center">
                                    <img src="https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160303563/52956169-%EC%9D%B8%EA%B3%B5-%ED%98%B8%ED%9D%A1%EA%B8%B0-%EC%97%90%EC%96%B4%EC%BB%A8-%EB%B2%A1%ED%84%B0-%EC%95%84%EC%9D%B4%EC%BD%98.jpg?ver=" alt="fan" class="img_head"/> <br/>
                                    팬
                                </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                                <TableCell align="center">
                                    상태
                                </TableCell>
                                <TableCell align="center">
                                    <img src="https://i.ibb.co/hfZMHtJ/on.png" alt="off" />
                                </TableCell>
                                <TableCell align="center">
                                    <img src="https://i.ibb.co/NZPGRk7/off.png" alt="on"/>
                                </TableCell>
                                <TableCell align="center">
                                    <img src="https://i.ibb.co/hfZMHtJ/on.png" alt="off" />
                                </TableCell>
                                <TableCell align="center">
                                    <img src="https://i.ibb.co/hfZMHtJ/on.png" alt="off" />
                                </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                </Paper>
            </div>
        </div>
    );
};

export default DataState;