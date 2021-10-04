import {Component} from "react";

export default class ClockD extends Component {
    setHours() {
        let h = this.props.time.getHours() + "";
        return h.length === 1 ? `0${h}` : h;
    }
    setMinutes() {
        let m = this.props.time.getMinutes() + "";
        return m.length === 1 ? "0" + m : m;
    }
    setSeconds() {
        let s = "00" + this.props.time.getSeconds();
        return s.slice(s.length - 2);
    }
    render() {
        return <div className="digital">
            <span>{this.setHours()}</span>
            :
            <span>{this.setMinutes()}</span>
            :
            <span>{this.setSeconds()}</span>
        </div>
    }
}