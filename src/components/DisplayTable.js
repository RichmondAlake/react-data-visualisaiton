import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {connect} from 'react-redux';
import {filterData} from '../actions/filter';
import {sortData} from '../actions/sort';
import Pagination from "react-bootstrap/Pagination";
import Button from 'react-bootstrap/Button'


class DisplayTable extends Component {

    tempSnapShot = [];

    componentDidMount() {
        this.props.filterData("");
        this.paginateMockData();
    }

    paginateMockData = () => {
        let pageNumber = 1;
        let amountInEachRow = 9;
        this.tempSnapShot = {};
        for (let i = 1; i < this.props.filterReducer.mockData.length; i++) {
            // Paginate by 10 rows
            if (i % amountInEachRow === 0) {
                this.tempSnapShot[pageNumber] = [...this.props.filterReducer.mockData.slice(i - amountInEachRow, i + 1)];
                pageNumber++;
            }
        }
        this.tempSnapShot = [this.tempSnapShot];
        console.log('Pagination result is show below');
        console.log('Amount in each row is also modifiable, by the amountInEachRow variable');
        console.log(this.tempSnapShot);
    };

    filterTable = (e) => this.props.filterData(e.target.value);

    sortData = (field) => this.props.sortData(field);

    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="text" placeholder="Enter First or Last name" onKeyUp={this.filterTable}/>
                </div>

                {/*{this.tempSnapShot.map((pageInformation, index) => (*/}
                {/*    <Pagination key={index}>*/}
                {/*        <Pagination.Item>{index}</Pagination.Item>*/}
                {/*    </Pagination>*/}
                {/*))}*/}

                <Button variant="dark" onClick={this.sortData.bind(this, 'salary')}>Sort By Salary</Button>
                <Button variant="dark" onClick={this.sortData.bind(this, 'years_of_experience')}>Sort By Years of
                    Experience</Button>
                <Button variant="dark" onClick={this.sortData.bind(this, 'date_of_birth')}>Sort By DOB</Button>
                <Button variant="dark" onClick={this.sortData.bind(this, 'industry')}>Sort By Industry</Button>

                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Industry</th>
                        <th>Salary</th>
                        <th>Years of Experience</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.filterReducer.mockData.map(data => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.email}</td>
                            <td>{data.date_of_birth}</td>
                            <td>{data.industry}</td>
                            <td>{data.salary}</td>
                            <td>{data.years_of_experience}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    filterReducer: state.filterReducer,
    sortReducer: state.sortReducer
});

export default connect(mapStateToProps, {filterData, sortData})(DisplayTable)
