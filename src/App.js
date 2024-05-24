import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
  
const LandingPage = lazy(() => import('./Components/LandingPage/LandingPage'));
const LogIn = lazy(() => import('./Components/Login/Login'));
const SignUp = lazy(() => import('./Components/SignUp/SignUp'));
const Dashboard = lazy(() => import('./Components/Dashboard/Dashboard'));
const Test = lazy(() => import('./Components/Test/Test'))

function App() {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path="/test/:sectionId" element={<Test />} />
        </Routes>
      </Suspense>
  );
}

export default App;

//<Route path="/dashboard" element={<Dashboard />} />
