import {FormControl,MenuItem,Select} from '@material-ui/core';
import {React,useEffect} from "react"
// https://disease.sh/v3/covid-19/countries
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="app_header">
          <h1>Covid-19 Tracker</h1>
        <FormControl className="app_dropdown">
            <Select
                variant = "outlined"
                value = "abc"
            >
              {/*<MenuItem value="worldwide">worldwide</MenuItem>*/}
              {/*<MenuItem value="worldwide">worldwide</MenuItem>*/}
              {/*<MenuItem value="worldwide">worldwide</MenuItem>*/}
              {/*<MenuItem value="worldwide">worldwide</MenuItem>*/}

              {/*loop through all the countries */}

            </Select>
        </FormControl>
        </div>

    </div>
  );
}

export default App;
