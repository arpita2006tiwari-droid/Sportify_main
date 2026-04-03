import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import MyDashboard from './pages/MyDashboard';
import AdminStudentDetail from './pages/AdminStudentDetail';
import Students from './pages/Students';
import Attendance from './pages/Attendance';
import Payments from './pages/Payments';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import { useAuth } from './context/AuthContext';

function IndexRedirect() {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={user.role === 'admin' ? '/dashboard' : '/my-dashboard'} replace />;
}

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        {/* Dynamic Index Redirect based on role */}
        <Route index element={<IndexRedirect />} />
        
        {/* Admin Routes */}
        <Route 
          path="dashboard" 
          element={<ProtectedRoute allowedRoles={['admin']}><Dashboard /></ProtectedRoute>} 
        />
        <Route 
          path="admin/student/:id" 
          element={<ProtectedRoute allowedRoles={['admin']}><AdminStudentDetail /></ProtectedRoute>} 
        />
        <Route 
          path="students" 
          element={<ProtectedRoute allowedRoles={['admin']}><Students /></ProtectedRoute>} 
        />
        <Route 
          path="attendance" 
          element={<ProtectedRoute allowedRoles={['admin']}><Attendance /></ProtectedRoute>} 
        />
        <Route 
          path="payments" 
          element={<ProtectedRoute allowedRoles={['admin']}><Payments /></ProtectedRoute>} 
        />

        {/* Student Routes */}
        <Route 
          path="my-dashboard" 
          element={<ProtectedRoute allowedRoles={['student']}><MyDashboard /></ProtectedRoute>} 
        />
      </Route>
      <Route path="*" element={<IndexRedirect />} />
    </Routes>
  );
}

export default App;
