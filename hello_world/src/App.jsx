// https://github.com/kuehnert/2021-informatik-pk

import ActionButton from './components/ActionButton';
import Rechnen from './components/Rechnen';
import './App.css';
import Doppeln from './components/Doppeln';
import Clonen from './components/Clonen';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Temperature from './components/Temperature';

function App() {
  // Heavy lifting

  return (
    <BrowserRouter>
      <div className='ui container'>
        <div className='ui menu'>
          <div className="header item">Toolbar</div>
          <Link to='/temp' className="item">Temp</Link>
          <Link to='/seite1' className="item">Seite 1</Link>
          <Link to='/seite2' className="item">Seite 2</Link>
          <Link to='/seite3' className="item">Seite 3</Link>
          <Link to='/seite4' className="item">Seite 4</Link>
        </div>

        <div className='ui segment'>
          <Route path='/temp'>
            <h1>Temprature</h1>
            <Temperature />
          </Route>

          <Route path='/seite1'>
            <h1>Seite 1</h1>
            <Clonen />
          </Route>

          <Route path='/seite2'>
            <h1>Seite 2</h1>
            <Doppeln />
          </Route>

          <Route path='/seite3'>
            <h1>Seite 3</h1>
            <Rechnen />
          </Route>

          <Route path='/seite4'>
            <h1>Seite 4</h1>
            <div className='segment'>
              <div className=''>Hallo, Welt!</div>
              <div className=''>{2 + 2}</div>
              <div className=''>
                <ActionButton />
              </div>
            </div>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
