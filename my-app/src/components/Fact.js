import React from 'react';

class Fact extends React.Component {
    render() {
        return (
            <div className='fact'>
                {this.props.curr && <p>Current Fact: </p>}
                <p id='fact'>{this.props.fact}</p>
            </div>
        )
    }
} 

export default Fact; 