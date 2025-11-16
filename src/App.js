import './App.css';
import bubbleSortCode from './bubblesort';

function App() {
  return (
    <div className="app-container">

      {/* Sidebar Navigation */}
      <div className="sidebar">
        <a href="#bubbleSort">Bubble Sort</a>
        <a href="#selectionSort">Selection Sort</a>
      </div>



      {/* Main Content */}
      <main className="main-content">
        <header>
          <img
            src={`${process.env.PUBLIC_URL}/HydroSORTS.png`}
            alt="HydroSorts Logo"
            title="HydroSorts"
          />
          <h1>HydroSorts</h1>
          <p>Algorithm Visualizer coming to your endz soon...</p>
        </header>

        {/* Bubble Sort Section */}
        <section id="bubbleSort">
          <h2 className="sortTitle">Bubble Sort Algorithm</h2>
          <div className="section__vid-container">
            <video 
              loop
              src={`${process.env.PUBLIC_URL}/Bubble Sort.mp4`}
              controls
            ></video>
          </div>
          <div className="summary">
            <p>Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order.</p>
            <p>This algorithm is not suitable for large data sets as its average and worst-case time complexity are quite high.</p>
            <p>After each pass, the largest elements are moved to their correct positions.</p>
            <p>We continue passes until the array is sorted.</p>
          </div>
          <div className="codeBlock">
            <pre><code>{bubbleSortCode}</code></pre>
          </div>
        </section>

        {/* Selection Sort Section */}
        <section id="selectionSort">
          <h2 className="sortTitle">Selection Sort Algorithm</h2>
          <div className="section__vid-container">
            <video
              loop
              src={`${process.env.PUBLIC_URL}/Selection Sort.mp4`}
              controls
            ></video>
          </div>
          <div className="summary">
            <p>Selection Sort repeatedly selects the smallest element from the unsorted portion and swaps it into its correct position.</p>
            <p>It continues this process until the array is fully sorted.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;