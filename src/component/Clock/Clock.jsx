import {Component} from 'react';

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            et:1
        };
    }

    componentDidMount() {
        this.timerId = setInterval(()=>this.tick(), 1000);
        this.setState({et:2});
        console.log("componenetDidMount()", this.state.et); // call only once after render
    }

    componentWillMount() {
        clearInterval(this.timerId);
        console.log("componenetWillMount()", this.state.et); // call only once before render
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        console.log("render()");
        return (
            <div className="component-with-label-msg">
                <h2> Digital Time: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}