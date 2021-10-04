import {Component} from "react";
export default class ClockA extends Component {
    rotateS() {
        let s = this.props.time.getSeconds();
        return 360 / 60 * s + "deg";
    }
    rotateM() {
        let m = this.props.time.getMinutes();
        return 360 / 60 * m + "deg";
    }
    rotateH() {
        let h = this.props.time.getHours();
        return 360 / 12 * h + "deg";
    }
    render() {
        return <div className="analog">
            <div className="arrow arrowH" style={{transform: `rotate(${this.rotateH()})`}}/>
            <div className="arrow arrowM" style={{transform: `rotate(${this.rotateM()})`}}/>
            <div className="arrow arrowS" style={{transform: `rotate(${this.rotateS()})`}}/>
            <div className="nail"/>
        </div>
    }
}