import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';

function App() {
  return (
    <Layout header={(<Header />)} sideBar={(<div>side bar</div>)}>
      body
    </Layout>
  );
}

export default App;
