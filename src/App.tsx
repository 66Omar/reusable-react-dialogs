import React from 'react';
import './App.css';
import Posts from './pages/Posts';
import { DialogProvider } from './contexts/DialogContext';
import Dialog from "./components/DialogComponent";
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import Other from './pages/Other';
import Setup from './pages/Setup';

function App() {
  return (
    <div data-bs-theme="dark">
      <DialogProvider>
        <Header />
        <Dialog />

        <div className="container col-sm-6 ">
          <Routes>
            <Route path="/" element={<Posts />}></Route>
            <Route path="/to-do/" element={<TodoPage />}></Route>
            <Route path="/other/" element={<Other />}></Route>
            <Route path="/setup/" element={<Setup />}></Route>
          </Routes>
        </div>
      </DialogProvider>
    </div>
  );
}

export default App;




