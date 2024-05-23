import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
const Testing = () => {
	useEffect(() => {
		console.log('Testing123');
	}, []);
	return (
		<div>Testing</div>
	)
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route exact path='home/loanDetails/id' element={<Testing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
