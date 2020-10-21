import "./App.css";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./index.css"
import Photo from "./Photo"
import Body from "./Body"

function App() {

  const [nasaData, setNasaData] = useState({});
  const keyNum = 'sFAO8ZgDD247MdlDzhsItT4McB2SIHoTtG0xWy53';

	useEffect(() => {
		axios.get(`https://api.nasa.gov/planetary/apod?api_key=${keyNum}&date=2018-12-28`)
		.then(response => setNasaData(response.data))
		.catch(error => console.log('something went wrong: ', error));
	}, []);
	console.log(nasaData);

  return (
    <div className="App">
      <Photo source={nasaData.url} altData={nasaData.title}/>
      <Body titleTag={nasaData.title} explanation={nasaData.explanation} copyright={nasaData.copyright} date={nasaData.date}/>
    </div>
  );
}

export default App;
