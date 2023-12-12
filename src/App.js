import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    <>
      <Navbar title="Text Formatter" />
      <div className='container my-3'>
        <TextForms heading="Enter the Text that you Have to Analyze" />
      </div>
    </>
  );
}

export default App;
