import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}> //uses the value of the opacity prop in its style
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1}/> : null}
      </div>
    )
  }

}
