import ActionButton from './components/ActionButton';
import './App.css';

function App() {
  // Heavy lifting

  return (
    <div class="ui container">
      <div class="ui raised segment">Hallo, Welt!</div>
      <div class="ui segment">{2 + 2}</div>
      <div class="ui segment"><ActionButton /></div>
    </div>
  );
}

export default App;
