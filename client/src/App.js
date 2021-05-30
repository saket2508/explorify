import Home from "./Home";
import useTheme from "./hooks/useTheme";


function App() {

  const [colorTheme, setTheme] = useTheme()

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
