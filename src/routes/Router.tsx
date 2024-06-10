// src/routes/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import AlignTable from '../pages/AlignTable';
import Example from '../pages/Example';

const AppRouter: React.FC = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<AlignTable />} />
          <Route path="/example" element={<Example />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
};

export default AppRouter;
