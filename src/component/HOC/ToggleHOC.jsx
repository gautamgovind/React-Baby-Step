import React from 'react';

const ToggleHOC = ToComponent =>{
    return class extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                active: false
            }
        }

        toggleState =()=>{
            const {active} = this.state;
            this.setState({
                active: !active
            })
        }

        render() {
            return <ToComponent active={this.state.active} toggleState={this.toggleState} />;
        }
    }
}

export default ToggleHOC;
