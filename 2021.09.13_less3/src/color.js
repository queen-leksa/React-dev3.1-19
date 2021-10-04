import React from "react";

class Letter extends React.Component {
    render() {
        const letterStyle = {
            width: 20,
            borderRadius: 4,
            backgroundColor: "#0002"
        };
        return <div style={letterStyle}>{this.props.char}</div>
    }
}


class Color extends React.Component {
    render() {
        const stl = {
            backgroundColor: this.props.bg,
            display: "flex",
            justifyContent: "center",
            gap: 10
        }

        return (
            <div 
                className="color" 
                style={stl}
            >
                {this.props.bg.split("").map(chr => <Letter char={chr}/>)}
            </div>
        )
    }
}

export default Color;