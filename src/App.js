import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <img
        src={`${process.env.PUBLIC_URL}/HydroSORTS.png`}
        alt="HydroSorts Logo"
        title="HydroSorts - BubbleSort"
        style={{ width: "150px", marginBottom: "20px" }}
      />
      <h1>HydroSorts</h1>
      <p>Algorithm Visualizer coming to your endz soon...</p>
      <section id="Algos">
        <div className="section__vid-container">
          <video loop 
            src={`${process.env.PUBLIC_URL}/Bubble Sort.mp4`}
            controls
            width="640"
            height="360"
          />
        </div>
      </section>
    </div>
  );
}

export default App;