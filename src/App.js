import './App.css';
import HelloFunctional, { HelloClass, Explicit, Implicit } from './components/01Hello/hello';
import x, { welcome } from './components/02Welcome/welcome';
import Greet, { Hello, Car, SimpleTitle } from './components/03Greet/greet_props';
import Checkbox from './components/04checkbox/checkbox_state';
import Counter from './components/05Counter/counter';
import ControlledUnControlledComponent from './components/06Controlled_Uncontrolled/controlled_uncontrolled';
import Todos from './components/07Todos/todos';
import LoginForm from './components/08LoginForm/loginForm';
import Layout from './components/09Layout/layout';
import ParentInstanceMethod from './components/10InstanceMethodForDC/instanceMethod';
import { ComponentOneUsingContext } from './components/11ContextForDataCommunication/usingContext';
import { ComponentOneUsingProps } from './components/11ContextForDataCommunication/usingProps';

function App() {
  return (
    <div className="App">
      {/* <HelloFunctional/>
      <HelloClass/>
      <Explicit/>
      <Implicit/>
      <h2>{x}</h2>
      {welcome} */}

      {/* <Greet/>
      <Hello title='React Developer'/>
      <Car brand={{ name: 'Hyundai', model: 'i20' }}/>
      <SimpleTitle showTitle={true} title='One'/> */}

      {/* <Checkbox /> */}

      {/* <Counter /> */}

      {/* <ControlledUnControlledComponent /> */}

      {/* <Todos /> */}

      {/* <LoginForm /> */}

      {/* <Layout/> */}

      {/* <ParentInstanceMethod /> */}

      {/* <ComponentOneUsingContext /> */}

      {/* <ComponentOneUsingProps /> */}
    </div>
  );
}

export default App;
