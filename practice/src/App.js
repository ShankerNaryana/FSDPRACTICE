import './App.css';
import Clickhandler from './components/Clickhandler';
import Cr from './components/Conditionalrender';
import Cus from './components/CounterUseState';
import Sl from './components/StringLiteral';
import Fd from './components/FetchData';
function App() {
  return (
  <>
      <div><Clickhandler/></div>
      <div><Cr/></div>
      <div>
        <Sl/>
      </div>
      <div><Cus/></div>
      <div><Fd/></div>
  </>
  );
}

export default App;
