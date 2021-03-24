import './App.css';
import Label from './component/HOC/Label';
import Image from './component/HOC/Image';
import Clock from './component/Clock';
import CalculateTemp from './component/Extra/CalculateTemp';
import Todo from './component/TodoClass';
import {TodoFunction} from './component/TodoFunction';
import {TicTac} from './component/TicTac/TicTac';

function App() {
  return (
    <div className="App">
        <Image />
        <Label />
        <Clock />
        <CalculateTemp />
        <Todo />
        <TodoFunction />
        <TicTac />
    </div>
  );
}

export default App;
