import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';
import { scaleTime } from 'd3-scale';
import { ArgumentScale } from '@devexpress/dx-react-chart';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




const temp = [20, 21, 22, 25, 26, 26, 26, 27, 30, 31, 32, 31, 30, 32, 33, 34, 34, 34, 34, 33, 32, 31, 33, 35, 34, 33, 32];
const dats = ['2020-07-01 06:13:11', '2020-07-02 06:15:21', '2020-07-02 06:45:04', '2020-07-02 15:49:59', '2020-07-02 15:55:00', '2020-07-02 15:55:01', '2020-07-02 15:55:01', '2020-07-02 15:55:04', '2020-07-02 15:55:05', '2020-07-02 15:55:07', '2020-07-02 15:55:08', '2020-07-02 15:55:10', '2020-07-02 15:55:11', '2020-07-02 15:55:12', '2020-07-02 15:55:14', '2020-07-02 15:55:15', '2020-07-02 15:55:17', '2020-07-02 15:55:18', '2020-07-02 15:55:19', '2020-07-02 15:55:21', '2020-07-02 15:55:22', '2020-07-02 15:55:24', '2020-07-02 15:55:25', '2020-07-02 15:55:26', '2020-07-02 15:55:28', '2020-07-02 17:55:29', '2020-07-02 22:58:15'];
const generateData = (n) => {
    const ret = [];
    let y = 0;

    for (let i = 0; i < n; i += 1) {
        const year = String(dats[i]).substring(0, 4) * 1;
        const mons = String(dats[i]).substring(5, 7) * 1;
        const days = String(dats[i]).substring(8, 10) * 1;
        const hours = String(dats[i]).substring(11, 13) * 1;;
        const min = String(dats[i]).substring(14, 16) * 1;;
        const sec = String(dats[i]).substring(17, 19) * 1;;
        const dt = new Date(year, mons, days, hours, min, sec);
        // dt.setDate(dt.getDate() + 1);
        y += Math.round(Math.random() * 10 - 5);
        ret.push({ x: new Date(dt), y: temp[i] });
        console.log('y값 출력' + year + "/" + mons + "/" + days + "/" + hours + "/" + min + "/" + sec);
    }
    return ret;
};
const data = generateData(100);
const values = [];
for (let i = 0; i < 50; i += 1) {
    values.push(i);
}


const getMode = (zoom, pan) => {
    if (zoom && pan) {
        return 'both';
    }
    if (zoom && !pan) {
        return 'zoom';
    }
    if (!zoom && pan) {
        return 'pan';
    }
    return 'none';
};

const chartRootStyle = { marginRight: '20px' };
const inputsContainerStyle = { justifyContent: 'center' };

const ChartRoot = props => (
    <Chart.Root {...props} style={chartRootStyle} />
);

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
            zoomArgument: true,
            panArgument: true,
            zoomValue: false,
            panValue: false,
        };
        this.submit = e => this.setState({
            [e.target.id]: e.target.checked,
        });
    }

    renderInput(id, label) {
        const { [id]: checked } = this.state;
        return (
            <FormControlLabel
                style={{ fontSize: '8%' }}
                control={(
                    <Checkbox
                        id={id}
                        checked={checked}
                        onChange={this.submit}
                        value="checkedB"
                        color="primary"
                    />
                )}
                label={label}
            />
        );
    }

    render() {
        
        const {
            data: chartData, zoomValue, panValue, zoomArgument, panArgument,
        } = this.state;
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
                <div style={{ width: '44%', margin: '5% 1% 5% 5%', display: 'inline-block' }}>
                    <Paper>
                        <div>
                            온도
                        </div>
                        <Chart data={chartData} rootComponent={ChartRoot}>
                            <ArgumentScale factory={scaleTime} />
                            <ArgumentAxis />
                            <ValueAxis />

                            <LineSeries valueField="y" argumentField="x" color="red" />
                            <ZoomAndPan
                                interactionWithArguments={getMode(zoomArgument, panArgument)}
                                interactionWithValues={getMode(zoomValue, panValue)}
                            />
                        </Chart>
                        <FormGroup style={inputsContainerStyle} row>
                            {this.renderInput('zoomArgument', 'x좌표 확대')}
                            {this.renderInput('zoomValue', 'Y좌표 확대')}
                        </FormGroup>
                    </Paper>
                </div>
                <div style={{ width: '44%', margin: '5% 5% 5% 1%', display: 'inline-block' }}>
                    <Paper>
                        <div style={{ marginLeft: '40%' }}>
                            습도
                        </div>
                        <Chart data={chartData} rootComponent={ChartRoot}>
                            <ArgumentScale factory={scaleTime} />
                            <ArgumentAxis />
                            <ValueAxis />

                            <LineSeries valueField="y" argumentField="x" />
                            <ZoomAndPan
                                interactionWithArguments={getMode(zoomArgument, panArgument)}
                                interactionWithValues={getMode(zoomValue, panValue)}
                            />
                        </Chart>
                        <FormGroup style={inputsContainerStyle} row>
                            {this.renderInput('zoomArgument', 'x좌표 확대')}
                            {this.renderInput('zoomValue', 'Y좌표 확대')}
                        </FormGroup>
                    </Paper>
                </div>
                <div style={{ width: '90%', margin: '0% 5% 5% 5%', display: 'inline-block' }}>
                    <Paper>
                    <TableContainer style={{maxHeight: 440}}>
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
    }
}