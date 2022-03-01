import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Header />
      <Section backgroundColor="#12263a" title="Section 2" />
      <Section backgroundColor="#12263a" title="Section 4" />
      <Section backgroundColor="#12263a" title="Section 4" />
      <Section backgroundColor="#06bcc1" title="Section 3" id={"section-3"} />
      <Section backgroundColor="#12263a" title="Section 4" />
    </div>
  );
}

export default App;
