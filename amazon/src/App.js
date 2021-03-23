import logo from './logo.svg';
import './App.css';
import './Upper.css';
import './Lower.css';
import Upper from './components/Upper';
import Lower from './components/Lower';
import 'fomantic-ui-css/semantic.css';
import './assets/fomantic/dist/semantic.css';
import { Container, Header } from 'semantic-ui-react';


function App() {
  return (
    <div>
    

      <Upper/>
      <div>
        <div class="ui divider"></div>
      <Lower/>
      </div>  
    </div>
  );
}

export default App;
