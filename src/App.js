import React from 'react';
import './App.css';
import FirstTab from './pages/FirstTab';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        {{
          tab: <FirstTab></FirstTab>,
          name:'jakii'
        }}
      </Layout>
    </div>
  );
}

export default App;
