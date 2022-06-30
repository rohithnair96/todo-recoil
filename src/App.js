import './App.css';
import { RecoilRoot } from 'recoil';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
