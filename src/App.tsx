import { Button } from './components/Button';

/**
 * The main application component that renders the primary content.
 * @returns {React.ReactElement} The main application component.
 *
 * @example
 * // Basic usage in your application
 * <App />
 */
function App(): React.ReactElement {
  return (
    <main>
      <h1>React App</h1>
      <Button>Click me</Button>
    </main>
  );
}

export default App;
