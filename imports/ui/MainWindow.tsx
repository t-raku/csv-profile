import { Route, Routes } from 'react-router-dom';
import React from 'react';
import ImportCsv from './ImportCsv';
import Home from './Home';

export default function MainWindow() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="import-csv" element={<ImportCsv />} />
    </Routes>
  )
}