import React,{Component} from 'react';
import CardList from "./CardList";
import {robots} from "./robots";
import SearchBox from "./SearchBox";
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
                robots: robots,
                searchField: ''
        }
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render(){
        const filterRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        return (
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobot} />
            </div>
        )
    }
}

export default App;