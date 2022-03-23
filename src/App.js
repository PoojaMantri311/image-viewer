import './App.css';
import Container from './components/Container';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import ImageView from './components/ImageView';

const App = () => {
  const [data, setData] = useState([])
  const [mapData, setMapData] = useState({})
  const [loading,setLoading] = useState(true)

  const convertDataIntoMap = (data) => {
    let tempMapData = {}   
    for(let i=0; i<data.length; i++){
       tempMapData[data[i]['data']['id']] = data[i]['data']
    }
    setMapData(tempMapData)
  }

  async function getImageDataFromApi() {
    try {
      let response = await fetch('http://www.reddit.com/r/pics/.json?jsonp=');
      let responseJson = await response.json();
      setData(responseJson.data.children)
      convertDataIntoMap(responseJson.data.children)
      setLoading(false)
      
     } catch(error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getImageDataFromApi()
  },[])

  return (
    <div className="App">
      {!loading && <Router>
        <Routes>
          <Route exact path="/" element={<Container data={data}/>}/>
          <Route exact path="/:id/" element={<ImageView mapData={mapData}/>}/>
        </Routes>
      </Router>
        }
    </div>
  );
}

export default App;
