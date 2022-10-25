import './App.css';
import Header from './components/Header'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Header />
     <Counter buttonText="Click Me"/>
    </div>
  );
}

export default App;
