import logo from './logo.svg';
import './App.css';

// Web Component
import './web_components/Button.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <my-button label="Web Component - Click Me"></my-button>
      </header>
    </div>
  );
}

export default App;
