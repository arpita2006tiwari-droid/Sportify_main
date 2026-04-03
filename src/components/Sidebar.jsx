import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, UserCheck, CreditCard, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const adminNavItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/students', label: 'Students', icon: Users },
  { path: '/attendance', label: 'Attendance', icon: UserCheck },
  { path: '/payments', label: 'Payments', icon: CreditCard },
];

const studentNavItems = [
  { path: '/my-dashboard', label: 'My Dashboard', icon: User },
];

const Sidebar = () => {
  const { user } = useAuth();
  const navItems = user?.role === 'admin' ? adminNavItems : studentNavItems;

  return (
    <aside className="w-64 bg-[var(--color-bg-card)] border-r border-gray-200 hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">Sports<span className="text-blue-600">Academy</span></h1>
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
