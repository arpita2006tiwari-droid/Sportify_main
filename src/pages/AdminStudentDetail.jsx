import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, CalendarCheck, CreditCard, Clock } from 'lucide-react';
import api from '../services/api';

const mockStudentData = {
  id: 1,
  profile: { name: 'John Doe', age: 14, parentName: 'Jane Doe', phone: '555-0101', status: 'Active', enrollmentDate: '2023-01-15' },
  attendance: [
    { date: '2023-10-01', status: 'Present' },
    { date: '2023-10-03', status: 'Present' },
    { date: '2023-10-05', status: 'Absent' },
  ],
  payments: [
    { id: 101, amount: 150, date: '2023-10-01', status: 'Paid' },
    { id: 102, amount: 150, date: '2023-11-01', status: 'Pending' }
  ],
  feeSummary: { totalPaid: 1350, nextDue: 150, dueDate: '2023-11-01' }
};

const AdminStudentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await api.get(`/students/${id}`);
        setStudent(res.data);
      } catch (error) {
        // Fallback to mock data
        setStudent({ ...mockStudentData, profile: { ...mockStudentData.profile, name: `Mocked Student (ID: ${id})` }});
      } finally {
        setIsLoading(false);
      }
    };
    fetchStudent();
  }, [id]);

  if (isLoading) return <div className="p-6">Loading student details...</div>;
  if (!student) return <div className="p-6 text-red-500">Student not found</div>;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">{student.profile.name}</h1>
            <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
              student.profile.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
            }`}>
              {student.profile.status}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">Student ID: #{id} • Enrolled: {new Date(student.profile.enrollmentDate).toLocaleDateString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Profile & Fees */}
        <div className="space-y-6">
          {/* Profile Card */}
          <div className="card space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
              <User className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-gray-900">Profile Information</h2>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-500">Age</span>
                <span className="font-medium text-gray-900">{student.profile.age}</span>
              </div>
              <div className="flex justify-between border-b border-gray-50 pb-2">
                <span className="text-gray-500">Parent</span>
                <span className="font-medium text-gray-900">{student.profile.parentName}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-gray-500">Phone</span>
                <span className="font-medium text-gray-900">{student.profile.phone}</span>
              </div>
            </div>
            <button className="w-full btn-primary !bg-[var(--color-bg-card)] !text-[#E2E8F0] border border-blue-500 hover:!bg-[var(--color-blue-50)]">
              Edit Profile
            </button>
          </div>

          {/* Fee Summary */}
          <div className="card space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
              <CreditCard className="w-5 h-5 text-orange-600" />
              <h2 className="font-semibold text-gray-900">Fee Summary</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500">Total Paid (YTD)</p>
                <p className="text-2xl font-semibold text-gray-900">${student.feeSummary.totalPaid}</p>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 border border-orange-100">
                <div className="flex justify-between items-center text-orange-800">
                  <span className="text-sm font-medium">Next Due</span>
                  <span className="font-bold">${student.feeSummary.nextDue}</span>
                </div>
                <p className="text-xs text-orange-600 mt-1 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Due {new Date(student.feeSummary.dueDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Attendance & Detailed Payments */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Attendance History */}
          <div className="card !p-0 overflow-hidden">
             <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
               <div className="flex items-center gap-2">
                 <CalendarCheck className="w-5 h-5 text-green-600" />
                 <h2 className="font-semibold text-gray-900">Recent Attendance</h2>
               </div>
               <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
             </div>
             <table className="w-full text-left text-sm">
               <tbody className="divide-y divide-gray-100">
                 {student.attendance.map((record, idx) => (
                   <tr key={idx} className="hover:bg-gray-50/50">
                     <td className="px-5 py-3 text-gray-600">{new Date(record.date).toLocaleDateString()}</td>
                     <td className="px-5 py-3 text-right">
                       <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                         record.status === 'Present' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                       }`}>
                         {record.status}
                       </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>

          {/* Payment History */}
          <div className="card !p-0 overflow-hidden">
             <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
               <div className="flex items-center gap-2">
                 <DollarSign className="w-5 h-5 text-blue-600" />
                 <h2 className="font-semibold text-gray-900">Payment History</h2>
               </div>
               <button className="btn-primary py-1.5 px-3 text-xs">Record Payment</button>
             </div>
             <table className="w-full text-left text-sm">
               <thead className="bg-gray-50/50 text-gray-500 uppercase text-xs">
                 <tr>
                   <th className="px-5 py-3 font-medium">Date</th>
                   <th className="px-5 py-3 font-medium">Amount</th>
                   <th className="px-5 py-3 font-medium text-right">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                 {student.payments.map((payment) => (
                   <tr key={payment.id} className="hover:bg-gray-50/50">
                     <td className="px-5 py-3 text-gray-600">{new Date(payment.date).toLocaleDateString()}</td>
                     <td className="px-5 py-3 font-medium text-gray-900">${payment.amount}</td>
                     <td className="px-5 py-3 text-right">
                       <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                         payment.status === 'Paid' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                       }`}>
                         {payment.status}
                       </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminStudentDetail;
