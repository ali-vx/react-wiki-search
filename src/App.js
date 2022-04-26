function App() {
	return (
		<div className="App">
			<header>
				<h1>Wiki Search</h1>
				<form className="search-box">
					<input type="search" placeholder="Search Wikipedia..." />
				</form>
				<p>Search Results: 0</p>
			</header>
			<div className="results">
				<div className="result">
					<h3>Title</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
						mattis nec felis at laoreet. Nunc vel lacus a dolor commodo
						facilisis eget et velit. Aenean ut ante magna.
					</p>
					<a href="#">Read More</a>
				</div>
			</div>
		</div>
	);
}

export default App;
