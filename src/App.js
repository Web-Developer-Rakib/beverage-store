import "./App.css";
import Answers from "./components/Answers/Answers";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Answers></Answers>
    </div>
  );
}

export default App;
