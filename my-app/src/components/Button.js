import React from 'react';

const apiURL = "https://catfact.ninja/fact";

class Button extends React.Component {
    render() {
        return (
            <div>
                <button
                    className='btn'
                    disabled={this.props.disabled}
                    onClick={() => this.props.onClick()}
                >
                    {this.props.text}
                </button>
            </div>
        )
    }
} 

export default Button; 