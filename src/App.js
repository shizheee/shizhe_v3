import logo from './logo.svg';
import './App.css';

function App() {
  const isMaintenance = true; // Set to false to disable maintenance mode

  if (isMaintenance) {
    return (
      <div style={{
  backgroundColor: '#f0ecfa',
  color: 'black',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}}>
  <img
    src="/logo512.png" // Place this image in the public folder
    alt="Under Maintenance"
    style={{ width: '150px', marginBottom: '20px' }}
  />
  <h1>🚧 shizhe&apos;s Homepage is Under Maintenance</h1>
  <p>We’ll be back soon. Thank you for your patience!</p>
</div>

    );
  }

  // Normal app rendering when not in maintenance mode
  return (
    <div className="App">
      {/* Your actual app UI goes here */}
    </div>
  );
}

export default App;
