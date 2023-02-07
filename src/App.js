import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from './components/tableDisplay/table';
import Navigation from './components/navBar/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [param, setParam] = useState([]); // Filter Parameter 
  const [selectedInfo, setSelectedInfo] = useState(null); // Selected filter
  const [data, setData] = useState([]); // Filtered Data to be rendered



  const handlefilterSelection = (info) => {
    setSelectedInfo(info);
  };
  

  // Filtered Data
  useEffect(() => {
    axios
      .get(`http://localhost:8080/data/insurance?param=${selectedInfo}`)
      .then((response) => {
        setData(response.data);
      });

  }, [selectedInfo]);

  // Filter Parameters
  useEffect(() => {
    axios
      .get('http://localhost:8080/data/params')
      .then((response) => {
        setParam(response.data);
      });

  }, []);


  
  return (
    <div className="App">
      <Navigation data={param} onfilterSelection={handlefilterSelection} />
      <Table data={data} />
    </div>
  );

}

export default App;
