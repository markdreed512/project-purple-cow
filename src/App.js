import './App.css';
import Header from './components/Header'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <h1 id="title">Project Purple Cow</h1>
        <p className="subtitle">Stand out from the crowd. Stand up and be counted.</p>
        <Counter buttonText="Count Me In!!"/>
      </div>
    </div>
  );
}

export default App;
