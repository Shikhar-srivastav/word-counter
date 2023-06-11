import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	const [count, setCount] = useState(0);

	const handleInputChange = (e) => {
		const str = e.target.value.trim();
		const numWords = str === "" ? 0 : str.split(" ").length;
		setCount(numWords);
	}

  return (
		<div className="vh-100 d-flex align-items-center justify-content-center">
			<span className="d-flex flex-column p-4 border border-dark rounded" style={{width: 450}}>
				<h1 className="fs-2 text-center mb-3">Responsive Paragraph Word Counter</h1>
				<textarea cols="30" rows="8" className="mb-3" onChange={handleInputChange}></textarea>
				<p>Word Count: {count}</p>
			</span>
		</div>
  );
}

export default App;