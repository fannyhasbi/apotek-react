import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

import {Header} from './Header';

class Obat extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      obat: []
    }
  }

  componentDidMount(){
    var self = this;
    axios.get('http://localhost/data_apotek/api/obat').then(function(response){
      self.state.obat = response.data;
      self.setState({obat: self.state.obat});
    });
  }

  render(){ 
    const obat = this.state.obat;
    
    const data = obat.map((item, id) => 
      <tr key={item.kode_obat}>
        <td>{item.nama}</td>
        <td>{item.bentuk}</td>
        <td>{item.konsumen}</td>
        <td>{item.harga}</td>
        <td>
          <Link to={'/obat/'+item.kode_obat}><span className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-search"></span> Detail</span></Link>&nbsp;
          <a href="#a" className="btn btn-success btn-sm"><span className="glyphicon glyphicon-shopping-cart"> Beli</span></a>
        </td>
      </tr>
    );

    const konten = (
      <div>
        <Header type="h1" title="Daftar Obat" />

        <div className="container" style={{marginBottom: 50}}>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Nama</th>
                <th>Bentuk</th>
                <th>Dikonsumsi Oleh</th>
                <th>Harga</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data}
            </tbody>
          </table>
        </div>
      </div>
    );

    // Loading content
    const waiting = (
      <div>
        <Header type="h1" title="Daftar Obat" />

        <div className="text-center">
          <i className="fa fa-spinner fa-pulse fa-5x"></i>
        </div>
      </div>
    );

    if(obat.length > 0){
      return konten;
    } else {
      return waiting;
    }
  }
}

class ObatDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      obat: []
    }
  }

  componentDidMount(){
    var self = this;

    axios.get('http://localhost/data_apotek/api/obat-detail', {
      params: {
        kode: self.props.params.kode
      }
    })
    .then(function(response){
      self.state.obat = response.data;
      self.setState({obat: self.state.obat});
    });
  }

  render(){
    var obat = this.state.obat;

    // Loading content
    const waiting = (
      <div>
        <Header type="h1" title="Daftar Obat" />

        <div className="text-center">
          <i className="fa fa-spinner fa-pulse fa-5x"></i>
        </div>
      </div>
    );

    const content = (
      <div>
        <Header type="h1" title={obat.nama} />

        <div className="container">
          <h3>Manfaat</h3>
          <p>{obat.manfaat}</p>
          <ul>
            <li>Bentuk obat : {obat.bentuk}</li>
            <li>Dikonsumsi oleh : {obat.konsumen}</li>
            <li>Harga satuan : {obat.harga}</li>
          </ul>
          <Link to={'/obat'}><span className="btn btn-warning">Kembali</span></Link>
        </div>
      </div>
    );

    if(typeof(obat) === 'object'){
      return content;
    } else {
      return waiting;
    }

  }
}

export {Obat, ObatDetail}