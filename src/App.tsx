import React from 'react';
import { Input } from './components/ui';

function App(): React.ReactElement {
  return (
    <main>
      <h1>React App</h1>
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2rem',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        <Input name="basic" placeholder="Placeholder" label="Basic Field" />
      </div>
    </main>
  );
}

export default App;
