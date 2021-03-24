import React, {Component} from 'react';


export default class CalculateTemp extends Component {
    constructor(props){
        super(props);
        this.calTemp = this.calTemp.bind(this);
        this.state = {
            temp:""
        }
    }

    calTemp(event) {
        this.setState({
            temp: event.target.value
        });
    }

    render() {
        return(
            <div>
                <label htmlFor="temp-celsis">Enter Temperature: </label>
                <input id="temp-celsis" type="" value={this.state.temp} onChange={this.calTemp} />
                <BoilingVerdict celsis={this.state.temp} />
            </div>
        )
    }
}

const BoilingVerdict = (props)=>(
    <div>
        {props.celsis==="" ? "" : (props.celsis >=100 ? "The water would boil": "The water would not boiled")}
    </div>
)