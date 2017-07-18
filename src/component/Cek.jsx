import React from 'react';
import axios from 'axios';

class Cek extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      kode: '',
      isCheck: false,
      data: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.getCheck = this.getCheck.bind(this);
  }

  handleChange(e){
    var val = e.target.value;
    this.setState({
      kode: val
    });
  }

  getCheck(){
    var self = this;
    axios.get('http://localhost/data_apotek/api/cek', {
      params: {
        kode: self.state.kode
      }
    })
    .then(function(response){
      self.state.data = response.data;
      self.setState({data: self.state.data});
    });
  }

  render(){
    console.log(this.props.foo);
    return (
      <div className="jumbotron text-center">
        <h2>Cek Pembelian</h2>
        <div>
          <div className="col-sm-offset-4 col-sm-4">
            <div className="input-group">
              <input type="text" className="form-control" name="kode_pesan" placeholder="Kode Pesan" size="10" onChange={this.handleChange} />
              <div className="input-group-btn">
                <input type="button" className="btn btn-primary" name="cek" value="Cek" onClick={this.getCheck} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cek;