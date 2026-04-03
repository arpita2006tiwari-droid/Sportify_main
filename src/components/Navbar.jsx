import { LogOut, Menu, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="h-16 bg-[var(--color-bg-card)] border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center md:hidden">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      <div className="flex-1 px-4 flex justify-between items-center">
        <div className="hidden md:block">
          {/* Search or breadcrumbs could go here */}
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
              <User className="w-5 h-5" />
            </div>
            <div className="hidden sm:block text-sm">
              <p className="text-gray-900 font-medium leading-none">{user?.name || 'Admin'}</p>
              <p className="text-gray-500 text-xs mt-1">{user?.role || 'Administrator'}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="p-2 text-gray-500 hover:bg-gray-50 hover:text-red-600 rounded-lg transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
