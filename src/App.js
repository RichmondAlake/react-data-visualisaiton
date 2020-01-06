import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayTable from "./components/DisplayTable"
import DisplayChart from "./components/DisplayChart";
import Button from 'react-bootstrap/Button'

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <h1>Data Site</h1>

                    <React.Fragment>
                        <Link to='/table'>
                            <Button variant="dark">
                                DISPLAY DATA AS TABLE
                            </Button>
                        </Link>
                         |
                        <Link to='/chart'>
                            <Button variant="dark">
                                DISPLAY DATA AS CHART
                            </Button>
                        </Link>
                    </React.Fragment>

                    <Route path='/table' component={DisplayTable}/>
                    <Route path='/chart' component={DisplayChart}/>

                </div>
            </Router>
        );
    }
}

export default App;
