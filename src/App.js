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
          <video 
            loop
            src={`${process.env.PUBLIC_URL}/Bubble Sort.mp4`}
            controls
            width="640"
            height="360"
          />
        </div>
      </section>
      <section id="Selection Sort">
        <h1>Selection Sort</h1>
          <video 
            loop
            src={`${process.env.PUBLIC_URL}/Selection Sort.mp4`}
            controls
            width="640"
            height="360"
          />z
          <p class='summary'>A selection sort algorithm uses comparisons to sort through an array. It will repeatedly select the largest or smallest element in the unsorted part of the array and switches it with the first unsorted item.</p>
          <p class='summary'>It starts by looking for the smallest or largest (in this case, smallest) element and then swaps it for the first element.</p>
          <p class='summary'>Then, it will look through the remaining elements that have not been sorted, and swap it with the second element.</p>
          <p class='summary'>This is repeated until the array is fully sorted.</p>
      </section>
    </div>
  );
}

export default App;