import React from 'react';

export class Header extends React.Component {
  render(){
    return (
      <div className="jumbotron text-center">
        {this.props.type === 'h1' && <h1>{this.props.title}</h1>}
        {this.props.type === 'h2' && <h2>{this.props.title}</h2>}
        {this.props.desc && <p>{this.props.desc}</p>}
      </div>
    );
  }
}

Header.defaultProps = {
  type: 'h1',
  title: 'APOTEK SUMBER MARI'
}