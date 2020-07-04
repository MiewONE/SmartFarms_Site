import React from 'react';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
    SplineSeries,
  } from '@devexpress/dx-react-chart-material-ui';
const generateData = (start, end, step) => {
const data = [];
for (let i = start; i < end; i += step) {
    data.push({ splineValue: Math.sin(i) / i, lineValue: ((i / 15) ** 2.718) - 0.2, argument: i });
}

return data;
};
const state = {
    data: generateData(2.5, 12, 0.1),
  };
const Graph = () => {
    const { data: chartData } = state;
    return (
        <div>
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
        </div>
    );
};

export default Graph;