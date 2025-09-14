import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <img 
        src={`${process.env.PUBLIC_URL}/HydroSORTS.png`} 
        alt="HydroSorts Logo" 
        style={{ width: '150px', marginBottom: '20px' }} 
      />
      <h1>HydroSorts</h1>
      <p>Algorithm Visualizer coming to ur endzz soon...</p>
    </div>
  );
}

export default App;
