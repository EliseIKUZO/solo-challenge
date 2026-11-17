import { ThemeSettings } from "./components/ThemeSettings";
import { FontSettings } from "./components/FontSettings";

function App() {
  return (
    <div>
      <h1>My Settings App</h1>

      <ThemeSettings />

      <hr />

      <FontSettings />
    </div>
  );
}

export default App;