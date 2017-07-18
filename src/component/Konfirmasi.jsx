import React from 'react';
import {Header} from './Header';

class Konfirmasi extends React.Component {
  render(){
    return (
      <div>
        <Header type="h2" title="Konfirmasi Pembelian" />
        <div className="container col-md-offset-4 col-md-4">
          <div className="form">
            <div className="form-group">
              <label htmlFor="kode_pesan">Kode Pembelian</label>
              <input type="text" className="form-control" name="kode_pesan" required />
            </div>
            <div className="form-group">
              <label htmlFor="identitas">No. Identitas</label>
              <input type="text" className="form-control" name="identitas" required />
            </div>
            <input type="button" className="btn btn-success" name="konfirmasi" value="Konfirmasi" />
          </div>
        </div>
      </div>
    );
  }
}

export default Konfirmasi;