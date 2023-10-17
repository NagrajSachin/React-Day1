import './App.css';
import HelloFunctional, { HelloClass, Explicit, Implicit } from './components/01Hello/hello';
import x, { welcome } from './components/02Welcome/welcome';

function App() {
  return (
    <div className="App">
      <HelloFunctional/>
      <HelloClass/>
      <Explicit/>
      <Implicit/>
      <h2>{x}</h2>
      {welcome}
    </div>
  );
}

export default App;
