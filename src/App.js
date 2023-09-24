
import { useState } from 'react';
import Accordion from './Accordion';
import './App.css';

function App() {
  const [acor, setAcor] = useState(0)
  return (
    <div className="App">
      <h1>FAQ APP</h1>
      <Accordion/>
    </div>
  );
}

export default App;
