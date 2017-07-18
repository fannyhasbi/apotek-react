import React from 'react';
import {IndexLink} from 'react-router';

export class Nav extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/"><span className="navbar-brand">APOTEK</span></IndexLink>
          </div>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="nav navbar-nav navbar-right">
              <li><IndexLink to="/konfirmasi">KONFIRMASI</IndexLink></li>
              <li><IndexLink to="/cek">CEK</IndexLink></li>
              <li><IndexLink to="/obat">OBAT</IndexLink></li>
              <li><IndexLink to="/beli">BELI <span className="glyphicon glyphicon-shopping-cart"></span></IndexLink></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}