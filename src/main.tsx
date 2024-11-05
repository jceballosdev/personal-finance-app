import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.scss';

/**
 * Entry point of the React application.
 *
 * This function renders the root component (`App`) inside a `StrictMode` wrapper
 * to enforce best practices and highlight potential problems in an application.
 *
 * @remarks
 * The root element is selected by its `id`, `root`, which must exist in the HTML file.
 *
 * @example
 * // Basic usage in an HTML file with a root element:
 * // <div id="root"></div>
 *
 * @returns {void}
 */
function renderApp(): void {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

renderApp();
