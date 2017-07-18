import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Container from './component/Container';
import Home from './component/Home';
import Konfirmasi from './component/Konfirmasi';
import Cek from './component/Cek';
import {Obat, ObatDetail} from './component/Obat';
import BeliLayout from './component/BeliLayout';

export class App extends React.Component {
  render(){
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Container}>
          <IndexRoute component={Home} />

          <Route path="/konfirmasi" component={Konfirmasi} />

          <Route path="/cek" component={Cek} />

          <Route path="/obat" exact={true} component={Obat} />
          <Route path="/obat/:kode" component={ObatDetail} />

          <Route path="/beli" component={BeliLayout} />

          <Route path="*" component={Home} />
        </Route>
      </Router>
    );
  }
}

export default App;