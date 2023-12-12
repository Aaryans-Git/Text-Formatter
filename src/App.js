import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, {useState} from 'react'


function App() {
  const [mode, setMode] = useState("light");

  return (
    <>
      <Navbar title="Text Formatter" mode={mode}/>
      <div className='container my-3'>
        <TextForms heading="Enter the Text that you Have to Analyze" />
      </div>
    </>
  );
}

export default App;
