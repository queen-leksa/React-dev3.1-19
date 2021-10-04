import {Component} from "react";

class Card extends Component {
    toggle(e) {
        if (e.target.nodeName === "IMG") {
            e.target.parentElement.classList.add("active");
        }
        e.target.classList.add("active");
    }
    render() {
        return <div className="card" onClick={e => this.toggle(e)}>
            <img src={this.props.pic} alt={this.props.ttl}/>
            <img src={"/images/Tilda_Icons_44_travel_compass.svg"} alt={"back"}/>
        </div>
    }
}

export default Card;