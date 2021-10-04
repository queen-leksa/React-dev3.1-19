// import React from "react"; // React.Component
import {Component} from "react";
import './App.css';
import ClockD from "./components/clockDigital";
import ClockA from "./components/clockAnalog";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            now: new Date()
        };
    }
    componentDidMount() {
        this.updateTime();
    }

    updateTime() {
        setInterval(() => {
            this.setState({
                now: new Date()
            })
        }, 1000);
    }
    render() {
        return <div className="wrapper">
            <ClockD time={this.state.now}/>
            <ClockA time={this.state.now}/>
        </div>
    }
}
