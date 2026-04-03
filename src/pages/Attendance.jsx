import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import api from '../services/api';
import { Check, X } from 'lucide-react';

const mockStudents = [
  { id: 1, name: 'John Doe', status: null },
  { id: 2, name: 'Michael Smith', status: 'Present' },
  { id: 3, name: 'Sarah Lee', status: 'Absent' },
];

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res = await api.get('/attendance/today');
        setStudents(res.data);
      } catch (error) {
        setStudents(mockStudents);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAttendance();
  }, []);

  const markAttendance = async (studentId, status) => {
    try {
      // await api.post(`/attendance`, { studentId, status });
      setStudents(students.map(s => s.id === studentId ? { ...s, status } : s));
      toast.success(`Marked as ${status}`);
    } catch (error) {
      toast.error('Failed to mark attendance');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Today's Attendance</h1>
        <p className="text-gray-500 text-sm mt-1">{today}</p>
      </div>

      <div className="card overflow-hidden !p-0 max-w-4xl">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-gray-50/50 text-gray-500 uppercase">
            <tr>
              <th className="px-6 py-4 font-medium">Student Name</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {isLoading ? (
              <tr><td colSpan="3" className="px-6 py-8 text-center">Loading...</td></tr>
            ) : (
              students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
                  <td className="px-6 py-4">
                    {student.status ? (
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        student.status === 'Present' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {student.status}
                      </span>
                    ) : (
                      <span className="text-gray-400 italic">Not marked</span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right flex justify-end gap-2">
                    <button
                      onClick={() => markAttendance(student.id, 'Present')}
                      className={`p-2 rounded-lg border transition-colors ${
                        student.status === 'Present' 
                          ? 'bg-green-50 border-green-200 text-green-600' 
                          : 'border-gray-200 text-gray-500 hover:bg-green-50 hover:text-green-600 hover:border-green-200'
                      }`}
                      title="Mark Present"
                    >
                      <Check className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => markAttendance(student.id, 'Absent')}
                      className={`p-2 rounded-lg border transition-colors ${
                        student.status === 'Absent' 
                          ? 'bg-red-50 border-red-200 text-red-600' 
                          : 'border-gray-200 text-gray-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200'
                      }`}
                      title="Mark Absent"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
