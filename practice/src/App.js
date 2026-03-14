import './App.css';
import Clickhandler from './components/Clickhandler';
import Cr from './components/Conditionalrender';
import Cus from './components/CounterUseState';
import Sl from './components/StringLiteral';
import Fd from './components/FetchData';
import Parent from './components/Parent';
import SimpleForm from './components/SimpleForm';
import ListRender from './components/ListRender';
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
      <div><Parent/></div>
      <div><SimpleForm/></div>
      <div><ListRender/></div>
  </>
  );
}

export default App;
