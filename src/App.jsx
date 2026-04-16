import { Routes, Route, Navigate } from 'react-router-dom';
// Admin/Academy Pages
import Login from './pages/Login';
import Students from './pages/Students';
import Attendance from './pages/Attendance';
import Schedule from './pages/Schedule';
import StudentDetail from './pages/StudentDetail';

// Public Market Pages
import Home from './pages/public/Home';
import SportsListing from './pages/public/SportsListing';
import VenueDetails from './pages/public/VenueDetails';
import AboutUs from './pages/public/AboutUs';
import Contact from './pages/public/Contact';

// Layouts & Auth
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import PublicLayout from './components/public/PublicLayout';
import { useAuth } from './context/AuthContext';

function AcademyRedirect() {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;
  if (!user) return <Navigate to="/login" replace />;
  return <Navigate to={user.role === 'admin' ? '/students' : '/student/me'} replace />;
}

function App() {
  return (
    <Routes>
      {/* Public Platform Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<SportsListing />} />
        <Route path="/venue/:id" element={<VenueDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Academy / Admin Authentication */}
      <Route path="/login" element={<Login />} />

      {/* Academy / Admin Protected Routes */}
      <Route element={<Layout />}>
        {/* Helper route to figure out where logged in users should go */}
        <Route path="/dashboard" element={<AcademyRedirect />} />
        
        <Route 
          path="/students" 
          element={<ProtectedRoute allowedRoles={['admin']}><Students /></ProtectedRoute>} 
        />
        <Route 
          path="/attendance" 
          element={<ProtectedRoute allowedRoles={['admin']}><Attendance /></ProtectedRoute>} 
        />
        <Route 
          path="/schedule" 
          element={<ProtectedRoute allowedRoles={['admin', 'student']}><Schedule /></ProtectedRoute>} 
        />
        <Route 
          path="/student/:id" 
          element={<ProtectedRoute allowedRoles={['admin', 'student']}><StudentDetail /></ProtectedRoute>} 
        />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

