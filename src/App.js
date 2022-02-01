import './App.css';
import State from './components/useState/State';
import Reducer from './components/useReducer/Reducer';
import Effect from './components/useEffect/Effect';
const App = () => {
  return (
   <div className="App">
     <h1>All React Hooks Crash Course</h1>
     <hr width="20%" />
     <State />
     <hr width="20%" />
     <Reducer />
     <hr width="20%" />
     <Effect />
    </div>
  );
}

export default App;

