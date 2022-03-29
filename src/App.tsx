import { useState } from 'react'
import './App.css'
import Plot from 'react-plotly.js';

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <body>
        
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 700, height: 400, title: 'A Fancy Plot'} }
        />
      </body>
    </div>
  )
}

export default App
