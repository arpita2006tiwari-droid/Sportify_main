import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Calendar, User, Clock, CheckCircle, CreditCard } from 'lucide-react';
import api from '../services/api';

const mockStudentDetails = {
  profile: { name: 'Student Demo', age: 16, parentName: 'Jane Demo', phone: '555-0909' },
  schedule: [
    { day: 'Monday', time: '16:00 - 18:00', activity: 'Tennis Practice' },
    { day: 'Wednesday', time: '16:00 - 18:00', activity: 'Tennis Practice' },
    { day: 'Friday', time: '17:00 - 19:00', activity: 'Conditioning' }
  ],
  attendance: { present: 24, total: 26 },
  paymentStatus: { amountPaid: 450, totalDue: 600, nextDueDate: '2023-11-01' }
};

const MyDashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyData = async () => {
      try {
        const res = await api.get('/students/me');
        setData(res.data);
      } catch (error) {
        setData(mockStudentDetails);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMyData();
  }, []);

  if (isLoading || !data) return <div className="p-6">Loading...</div>;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
        <p className="text-gray-500 text-sm mt-1">Here is your academy overview.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Profile Info */}
        <div className="card space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><User className="w-5 h-5"/></div>
            <h2 className="font-semibold text-gray-900">My Profile</h2>
          </div>
          <div className="space-y-2 text-sm">
            <p><span className="text-gray-500 w-24 inline-block">Name:</span> {data.profile.name}</p>
            <p><span className="text-gray-500 w-24 inline-block">Age:</span> {data.profile.age}</p>
            <p><span className="text-gray-500 w-24 inline-block">Parent:</span> {data.profile.parentName}</p>
            <p><span className="text-gray-500 w-24 inline-block">Phone:</span> {data.profile.phone}</p>
          </div>
        </div>

        {/* Attendance Summary */}
        <div className="card space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg"><CheckCircle className="w-5 h-5"/></div>
            <h2 className="font-semibold text-gray-900">Attendance</h2>
          </div>
          <div className="text-center py-4">
            <p className="text-4xl font-bold text-gray-900">{Math.round((data.attendance.present / data.attendance.total) * 100)}%</p>
            <p className="text-sm text-gray-500 mt-1">{data.attendance.present} of {data.attendance.total} sessions attended</p>
          </div>
        </div>

        {/* Payment Status */}
        <div className="card space-y-4">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><CreditCard className="w-5 h-5"/></div>
            <h2 className="font-semibold text-gray-900">Payment Status</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-medium text-gray-900">${data.paymentStatus.amountPaid}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Total Fee</span>
              <span className="font-medium text-gray-900">${data.paymentStatus.totalDue}</span>
            </div>
            <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900">Remaining</span>
              <span className="text-lg font-bold text-orange-600">${data.paymentStatus.totalDue - data.paymentStatus.amountPaid}</span>
            </div>
            <p className="text-xs text-gray-500 text-right mt-1">Next due: {new Date(data.paymentStatus.nextDueDate).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Practice Schedule */}
      <div className="card !p-0 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center gap-3 bg-gray-50/50">
          <Calendar className="w-5 h-5 text-gray-400" />
          <h2 className="font-semibold text-gray-900">Practice Schedule</h2>
        </div>
        <div className="p-0">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <tbody className="divide-y divide-gray-100">
              {data.schedule.map((slot, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900 w-1/4">{slot.day}</td>
                  <td className="px-6 py-4 text-gray-600 w-1/3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {slot.time}
                  </td>
                  <td className="px-6 py-4 text-gray-600">{slot.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyDashboard;
