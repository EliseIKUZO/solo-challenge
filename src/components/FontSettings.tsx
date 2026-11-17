import { useLocalStorage } from "../hooks/useLocalStorage";

export function FontSettings() {
  const [fontSize, setFontSize] = useLocalStorage<number>(
    "fontSize",
    16
  );

  return (
    <div>
      <h2>Font Settings</h2>

      <p style={{ fontSize: `${fontSize}px` }}>
        This is your selected font size.
      </p>

      <p>Current font size: {fontSize}px</p>

      <button onClick={() => setFontSize(14)}>
        Small
      </button>

      <button onClick={() => setFontSize(16)}>
        Medium
      </button>

      <button onClick={() => setFontSize(22)}>
        Large
      </button>
    </div>
  );
}