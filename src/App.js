
import { useState } from 'react';
import Accordion from './Accordion';
import './App.css';

function App() {
  const [acor, setAcor] = useState("Question1")
  return (
    <div className="App">
      <h1>FAQ APP</h1>
      <Accordion title="Question 1" acor={acor}  setAcor={setAcor}/>
      <Accordion title="Question 1" acor={acor}  setAcor={setAcor}/>
      <Accordion title="Question 1" acor={acor}  setAcor={setAcor}/>
      <Accordion title="Question 1" acor={acor}  setAcor={setAcor}/>
      <Accordion title="Question 1" acor={acor}  setAcor={setAcor}/>
    </div>
  );
}

export default App;
