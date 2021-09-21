// https://github.com/kuehnert/2021-informatik-pk

import ActionButton from './components/ActionButton';
import Rechnen from './components/Rechnen'
import './App.css';
import Doppeln from './components/Doppeln';
import Clonen from './components/Clonen';

function App() {
  // Heavy lifting

  return (
    <div className="ui container">
      <div className="ui raised segment"><Clonen /></div>
      <div className="ui raised segment"><Doppeln /></div>
      <div className="ui raised segment"><Rechnen /></div>
      <div className="ui raised segment">Hallo, Welt!</div>
      <div className="ui segment">{2 + 2}</div>
      <div className="ui segment"><ActionButton /></div>
    </div>
  );
}

export default App;
