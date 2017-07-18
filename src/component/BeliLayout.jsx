import React from 'react';
import {IndexLink} from 'react-router';

class BeliLayout extends React.Component {
  render(){
    return (
      <div>
        <div className="jumbotron text-center" style={{padding: '100px 25px 50px 25px'}} >
          <h1>Pembelian Obat</h1>
          <h2><IndexLink to="/obat"><span className="btn btn-primary btn-lg">Tambah Barang</span></IndexLink></h2>
        </div>
      </div>
    );
  }
}

export default BeliLayout;