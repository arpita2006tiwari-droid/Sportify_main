import { Users, DollarSign, CalendarCheck, TrendingUp, Search, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="card flex items-center justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500">{title}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        {trend && (
          <span className="text-sm font-medium text-green-600 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            {trend}
          </span>
        )}
      </div>
    </div>
    <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
      <Icon className="w-6 h-6" />
    </div>
  </div>
);

const mockStudents = [
  { id: 1, name: 'John Doe', age: 14, parentName: 'Jane Doe', status: 'Active' },
  { id: 2, name: 'Michael Smith', age: 16, parentName: 'Bob Smith', status: 'Active' },
  { id: 3, name: 'Sarah Lee', age: 15, parentName: 'Tom Lee', status: 'Inactive' },
];

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 142,
    totalRevenue: '$12,450',
    attendanceRate: '89%',
    newEnrollments: '12'
  });
  
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Attempt to fetch from API, fallback to mock data on error
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const statsRes = await api.get('/stats');
        setStats(statsRes.data);
        const studentsRes = await api.get('/students');
        setStudents(studentsRes.data);
      } catch (err) {
        setStudents(mockStudents);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Overview of academy performance and student directory.</p>
      </div>

      {isLoading ? (
        <div className="h-40 flex items-center justify-center">Loading stats...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Students" value={stats.totalStudents} icon={Users} trend="+4%" />
          <StatCard title="Total Revenue" value={stats.totalRevenue} icon={DollarSign} trend="+12%" />
          <StatCard title="Attendance Rate" value={stats.attendanceRate} icon={CalendarCheck} />
          <StatCard title="New Enrollments" value={stats.newEnrollments} icon={TrendingUp} />
        </div>
      )}

      {/* Student Directory Table */}
      <div className="card overflow-hidden !p-0 mt-8">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50/50 gap-4">
          <h2 className="font-semibold text-gray-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-500" />
            Student Directory
          </h2>
          <div className="relative w-full max-w-sm">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50/50 text-gray-500 uppercase flex-col">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Age</th>
                <th className="px-6 py-4 font-medium">Parent Name</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-500">Loading...</td></tr>
              ) : filteredStudents.length === 0 ? (
                <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-500">No students found</td></tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr 
                    key={student.id} 
                    className="hover:bg-gray-50/50 transition-colors cursor-pointer"
                    onClick={() => navigate(`/admin/student/${student.id}`)}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
                    <td className="px-6 py-4 text-gray-600">{student.age}</td>
                    <td className="px-6 py-4 text-gray-600">{student.parentName}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <ChevronRight className="w-5 h-5 ml-auto" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
