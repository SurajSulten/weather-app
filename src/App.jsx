import './App.css';
import CitiesBlock from './components/CitiesBlock';
import MainBlock from './components/MainBlock';
function App() {

  return (
    <div className="background">
      <div className="container">
        <MainBlock />
        <CitiesBlock />
      </div>
    </div>
  )
}

export default App
