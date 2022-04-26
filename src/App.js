import { useState } from "react";
import Loader from "./loader";

function App() {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [searchInfo, setSearchInfo] = useState({});
	const [toggle, setToggle] = useState(false);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (search === "") return;
		setToggle(true);
		const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`Request rejected with status ${response.status}`);
		}
		const data = await response.json();
		setResults(data.query.search);
		setSearchInfo(data.query.searchinfo);
		await setToggle(false);
	};

	return (
		<div className="App">
			<header>
				<h1 className="noselect" onClick={() => window.location.reload(false)}>
					Wiki Search
				</h1>
				<form className="search-box" onSubmit={handleSearch}>
					<input
						type="search"
						placeholder="Search Wikipedia..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</form>
				{searchInfo.totalhits ? (
					<p>Search Results: {searchInfo.totalhits}</p>
				) : (
					""
				)}
			</header>
			<div className="results">
				{toggle ? (
					<Loader />
				) : (
					results.map((result, i) => {
						const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
						return (
							<div className="result" key={i}>
								<h3>{result.title}</h3>
								<p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
								<a target="_blank" rel="noopener noreferrer" href={url}>
									Read More
								</a>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}

export default App;
