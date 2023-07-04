import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Continent", "Population per Continent"],
  ["Asia", 4730],
  ["Africa", 1419],
  ["Europe", 742],
  ["Latin America", 656],
  ["North America", 372],
  ["Australia and Oceania", 44],
];





function App() {
  return (
    <div className="App">
      <h2 className="piechartheader">Population per Continent, 2021 (mln people)</h2>
    <Chart className="pie-chart"
      chartType="PieChart"
      data={data}
      width={"80%"}
      height={"400px"}
    />
    </div>
  );
}

export default App;
