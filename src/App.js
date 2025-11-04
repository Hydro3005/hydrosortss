import logo from './logo.svg';
import './App.css';
import bubbleSortCode from './bubblesort';

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
      <section id="bubbleSort">
        <h1 class="sortTitle">Bubble Sort Algorithm</h1>
        <div className="section__vid-container">
          <video 
            loop
            src={`${process.env.PUBLIC_URL}/Bubble Sort.mp4`}
            controls
            width="640"
            height="360"
          />
        </div>

        <p class="summary">Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. 
          This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.
        </p>

        <p class="summary">
          We sort the array using multiple passes. After the first pass, the maximum element goes to end (its correct position). 
          Same way, after second pass, the second largest element goes to second last position and so on.
        </p>

        <p class="summary">
          In every pass, we process only those elements that have already not moved to correct position. 
          After k passes, the largest k elements must have been moved to the last k positions.
        </p>

        <p class="summary">
          In a pass, we consider remaining elements and compare all adjacent and swap if larger element is before a smaller element. 
          If we keep doing this, we get the largest (among the remaining elements) at its correct position.
        </p>

        <div class="codeBlock">
          <pre><code>{bubbleSortCode}</code></pre>
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