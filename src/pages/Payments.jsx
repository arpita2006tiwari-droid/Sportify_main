import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import api from '../services/api';

const mockPayments = [
  { id: 1, studentName: 'John Doe', amount: 150, date: '2023-10-01', status: 'Paid' },
  { id: 2, studentName: 'Michael Smith', amount: 150, date: '2023-10-05', status: 'Pending' },
  { id: 3, studentName: 'Sarah Lee', amount: 150, date: '2023-09-28', status: 'Paid' },
];

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const res = await api.get('/payments');
        setPayments(res.data);
      } catch (error) {
        setPayments(mockPayments);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPayments();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
          <p className="text-gray-500 text-sm mt-1">Manage student fee payments</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Payment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="card bg-blue-600 text-white border-transparent">
          <p className="text-blue-100 text-sm">Total Collected</p>
          <p className="text-3xl font-semibold mt-1">$12,450</p>
        </div>
        <div className="card">
          <p className="text-gray-500 text-sm">Pending Dues</p>
          <p className="text-3xl font-semibold mt-1 text-gray-900">$2,100</p>
        </div>
      </div>

      <div className="card overflow-hidden !p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50/50 text-gray-500 uppercase">
              <tr>
                <th className="px-6 py-4 font-medium">Student Name</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                <tr><td colSpan="4" className="px-6 py-8 text-center">Loading...</td></tr>
              ) : (
                payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{payment.studentName}</td>
                    <td className="px-6 py-4 text-gray-600">${payment.amount}</td>
                    <td className="px-6 py-4 text-gray-600">{new Date(payment.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        payment.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {payment.status}
                      </span>
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

export default Payments;
