import './App.css';
import { useState, useRef} from 'react';



function App() {
  
  const [value, setValue] = useState('')
  const inputRef = useRef(null)

  return (
    <div>
      <input type="text" ref={inputRef} />
      {console.log(inputRef.current)}
    </div>
  );

}

export default App;
