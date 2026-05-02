import './App.css'

import { Routes, Route } from 'react-router-dom';

import Login from './concepts/08. ProtectedRoute/pages/Login';
import Dashboard from './concepts/08. ProtectedRoute/pages/Dashboard';
import ProtectedRoute from './concepts/08. ProtectedRoute/ProtectedRoute';
// import { AuthProvider } from './concepts/08. ProtectedRoute/AuthContext';

function App() {

  return (
    <>  
      <Routes>
        <Route path="/" element={<Login />} />

        <Route 
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;
