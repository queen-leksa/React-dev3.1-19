import React from "react";
class Data extends React.Component {
    render() {
        const cardStyle = {
            borderRadius: 16,
            padding: 16,
            background: "cyan"
        };
        return <div style={cardStyle}>
            <h2>{this.props.name}</h2>
            <p>{this.props.description}</p>
        </div>
    }
}

export default Data;