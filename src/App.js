import './App.css';
import State from './components/useState/State';
import Reducer from './components/useReducer/Reducer';
import Effect from './components/useEffect/Effect';
import Ref from './components/useRef/Ref';
import LayoutEffect from './components/useLayoutEffect/LayoutEffect';
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
     <hr width="20%" />
     <Ref />
     <hr width="20%" />
     <LayoutEffect />
    </div>
  );
}

export default App;

