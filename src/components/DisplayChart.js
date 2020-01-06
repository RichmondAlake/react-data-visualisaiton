import React, {Component} from "react";
import {
    LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import mockData from '../data/MOCK_DATA';
import moment from "moment";

class DisplayChart extends Component {

    state = {
        mockData: mockData.sort((a, b) => {
            a = a['date_of_birth'].split('/')[2];
            b = b['date_of_birth'].split('/')[2];
            return a < b ? -1 : 1
        }),
        expMockData: mockData.sort((a, b) => {
            return a['years_of_experience'] < b['years_of_experience'] ? -1 : 1
        }),

        snapShot: mockData
    };

    formatXAxis = (tickItem) => {
        tickItem = tickItem.split('/')[2];
        return moment(tickItem).format('YYYY')
    };

    filterChart = (e) => {
        // Filter chart by name or year
        console.log(e.target.value);
        this.setState({
            snapShot: [...this.state.mockData.filter(data => {
                return data['first_name'] !== null && data['first_name'].toLowerCase().includes(e.target.value)
            })]
        })
    };


    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="text" placeholder="Enter First or Last name" onKeyUp={this.filterChart}/>
                </div>
                <LineChart
                    width={1000}
                    height={300}
                    data={this.state.expMockData}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date_of_birth" tickFormatter={this.formatXAxis}/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="salary" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="years_of_experience" stroke="#82ca9d"/>
                </LineChart>

                <BarChart
                    width={500}
                    height={300}
                    data={this.state.snapShot}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="years_of_experience"/>
                    <YAxis type="number" domain={[0, 'auto']}/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="years_of_experience" fill="#8884d8"/>
                    {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                </BarChart>
            </React.Fragment>
        )
    }
}

export default DisplayChart
