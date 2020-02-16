import React from 'react';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <Layout header={(<Header />)} sideBar={(<Sidebar />)}>
      body
    </Layout>
  );
}

export default App;
