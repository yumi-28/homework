import Counter from './Counter';
import './App.css';
import TodoApp from './Todo/TodoApp'
import QuizApp from './Quiz/QuizApp'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoApp/>
        <QuizApp/>
      </header>
    </div>
  );
}

export default App;
