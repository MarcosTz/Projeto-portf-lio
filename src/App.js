import RoutesApp from './routes';
import React from 'react';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="app">
      <div className="content">
        <RoutesApp />
      </div>

      <Footer />
    </div>
  );
}

export default App;