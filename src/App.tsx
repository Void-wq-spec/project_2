import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ResourceListing from './pages/ResourceListing';
import AddGuide from './pages/AddGuide';
import Footer from './components/Footer';
import { ResourceProvider } from './context/ResourceContext';

function App() {
  return (
    <ResourceProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/resources" element={<ResourceListing />} />
              <Route path="/add-guide" element={<AddGuide />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ResourceProvider>
  );
}

export default App;