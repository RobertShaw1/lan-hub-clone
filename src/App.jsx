import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages';

export const App = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
};
