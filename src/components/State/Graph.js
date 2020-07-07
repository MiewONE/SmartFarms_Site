import React from 'react';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
    SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const dats = ['2020-07-01 06:13:11', '2020-07-02 06:15:21', '2020-07-02 06:45:04', '2020-07-02 15:49:59', '2020-07-02 15:55:00', '2020-07-02 15:55:01', '2020-07-02 15:55:01', '2020-07-02 15:55:04', '2020-07-02 15:55:05', '2020-07-02 15:55:07', '2020-07-02 15:55:08', '2020-07-02 15:55:10', '2020-07-02 15:55:11', '2020-07-02 15:55:12', '2020-07-02 15:55:14', '2020-07-02 15:55:15', '2020-07-02 15:55:17', '2020-07-02 15:55:18', '2020-07-02 15:55:19', '2020-07-02 15:55:21', '2020-07-02 15:55:22', '2020-07-02 15:55:24', '2020-07-02 15:55:25', '2020-07-02 15:55:26', '2020-07-02 15:55:28', '2020-07-02 17:55:29', '2020-07-02 22:58:15'];
const values = [];
for (let i = 0; i < 50; i += 1) {
    values.push(i);
}
const generateData = () => {
    const data = [];
    // for (let i = start; i < end; i += step) {
    //     data.push({ splineValue: i, lineValue: i*2, argument: i+2 });
    // }
    const temp = [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36, 36, 36, 36, 36, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37];
    const humi = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 25, 25, 25, 25, 25, 25, 25, 23, 23, 23, 23, 23, 23, 23, 32, 32];
    // const dats=['2020-07-02 06:37:21','2020-07-02 06:45:04','2020-07-02 오후 3:49:59','2020-07-02 오후 3:55:00','2020-07-02 오후 3:55:01','2020-07-02 오후 3:55:03','2020-07-02 오후 3:55:04','2020-07-02 오후 3:55:05','2020-07-02 오후 3:55:07','2020-07-02 오후 3:55:08','2020-07-02 오후 3:55:10','2020-07-02 오후 3:55:11','2020-07-02 오후 3:55:12','2020-07-02 오후 3:55:14','2020-07-02 오후 3:55:15','2020-07-02 오후 3:55:17','2020-07-02 오후 3:55:18','2020-07-02 오후 3:55:19','2020-07-02 오후 3:55:21','2020-07-02 오후 3:55:22','2020-07-02 오후 3:55:24','2020-07-02 오후 3:55:25','2020-07-02 오후 3:55:26','2020-07-02 오후 3:55:28','2020-07-02 오후 3:55:29','2020-07-02 오후 3:55:31'];
    for (let i = 0; i < 26; i = i + 1) {
        data.push({ splineValue: temp[i], lineValue: humi[i], argument: i })
    }
    return data;
};
const state = {
    data: generateData()
};
const Graph = () => {
    const { data: chartData } = state;
    const cell_values = values.map(
        (p) => (
            <TableRow>
                <TableCell align="center">
                    {dats[2]}
                </TableCell>
                <TableCell align="center">
                    on
                </TableCell>
                <TableCell align="center">
                    on
                </TableCell>
                <TableCell align="center">
                    on
                </TableCell>
                <TableCell align="center">
                    on
                </TableCell>
            </TableRow>
        )
    )
    return (
        <div style={{backgroundColor:'#f3f3f3'}}>
            <div style={{ width: "80%", margin: '0% 10% 0% 10%' }}>
            <Paper>
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis />
                    <LineSeries
                        name="line"
                        valueField="lineValue"
                        argumentField="argument"

                    />
                    <SplineSeries
                        name="spline"
                        valueField="splineValue"
                        argumentField="argument"
                    />
                </Chart>
                </Paper>
            </div>
            <div>
                빨간 : 온도 / 파랑 : 습도
            </div>
            <div style={{ width: '90%', margin: '0% 5% 5% 5%', display: 'inline-block' }}>
                <Paper>
                    <TableContainer style={{ maxHeight: 440 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">
                                        시간
                                </TableCell>
                                    <TableCell align="center">
                                        급수기
                                </TableCell>
                                    <TableCell align="center">
                                        LED
                                </TableCell>
                                    <TableCell align="center">
                                        팬
                                </TableCell>
                                    <TableCell align="center">
                                        난방기
                                </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cell_values}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>


            </div>
        </div>
    );
};

export default Graph;