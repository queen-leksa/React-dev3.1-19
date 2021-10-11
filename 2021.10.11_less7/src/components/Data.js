import React from "react";
class Data extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Vasya"
        }
    }
    componentDidMount() {
        // fetch("https://fakerapi.it/api/v1/persons?_quantity=4", {
        //     method: "post",
        //     headers: {
        //
        //     },
        //     data: "{'name':'Ali'}"
        // }, function(res) {
        //     console.log(res);
        // });
        fetch("https://fakerapi.it/api/v1/persons?_quantity=1")
            .then(res => res.json())
            .then(data => {
                let person = data.data[0];
                this.setState({
                    name: person.firstname
                });
            });
    }
    render() {
        const cardStyle = {
            borderRadius: 16,
            padding: 16,
            background: "cyan"
        };
        return <div style={cardStyle}>
            <h2>{this.state.name}</h2>
            {/*<p>{this.props.description}</p>*/}
        </div>
    }
}

export default Data;