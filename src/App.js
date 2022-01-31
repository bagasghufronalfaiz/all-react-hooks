import './App.css';
import StateTutorial from './components/useState/StateTutorial';
import ReducerTutorial from './components/useReducer/ReducerTutorial';
const App = () => {
  return (
   <div className="App">
     <h1>All React Hooks Crash Course</h1>
     <hr width="20%" />
     {/* <StateTutorial /> */}
     <hr width="20%" />
     <ReducerTutorial />
    </div>
  );
}

export default App;

