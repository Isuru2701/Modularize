import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Background from "./components/Background";
import Profiler from "./components/Profiler";
function App() {
  return (
    <>
      <Background />
      <Navigation />
      <Profiler/>
    </>
  );
}

export default App;
