import logo from './logo.svg';
import './App.css';
import './Upper.css';
import Upper from './components/Upper';
import 'fomantic-ui-css/semantic.css';
import './assets/fomantic/dist/semantic.css';
import { Container, Header } from 'semantic-ui-react';


function App() {
  return (
    <div>
    <h1>Hello world</h1>

      <Upper/>
    </div>
  );
}

export default App;
