import { ThemeProvider } from "./components/atoms/ThemeProvider";
import Routes from "./Routes";

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
