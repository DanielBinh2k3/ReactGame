import "./App.css";
import Main from "./components/Main";
function GameTenzies({onNextPhase}) {
	return (
		<div className="App">
			<Main onNextPhase={onNextPhase}/>
		</div>
	);
}

export default GameTenzies;
