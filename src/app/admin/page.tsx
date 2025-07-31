'use client';

import Preset from '@/components/Preset';
import { User, NotepadText, CheckCircle, XCircle, PieChart } from 'lucide-react';
import { PieChart as RePieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Resolved', value: 2120 },
  { name: 'Unresolved', value: 660 },
];

const COLORS = ['#10B981', '#EF4444']; // Green, Red

export default function AdminDashboard() {
  return (
    <Preset>
      {/* Greeting Card */}
      <div className="bg-gradient-to-r from-black via-gray-800 to-gray-900 text-white rounded-xl p-6 shadow-md mb-6">
        <h1 className="text-3xl font-bold">Welcome Admin!</h1>
        <p className="mt-1 text-white/90 text-sm">Here’s an overview of platform activity.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-start gap-4">
          <User className="text-indigo-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-black">Total Users</h2>
            <p className="text-sm text-gray-600 mt-1">4,230 users registered</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-start gap-4">
          <NotepadText className="text-blue-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-black">Reports Submitted</h2>
            <p className="text-sm text-gray-600 mt-1">2,780 reports in total</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-start gap-4">
          <CheckCircle className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-black">Resolved</h2>
            <p className="text-sm text-gray-600 mt-1">2,120 reports resolved</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-start gap-4">
          <XCircle className="text-red-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-black">Unresolved</h2>
            <p className="text-sm text-gray-600 mt-1">660 unresolved reports</p>
          </div>
        </div>
      </div>

      {/* Pie Chart Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <PieChart className="text-purple-600 w-6 h-6" />
          <h2 className="text-lg font-semibold text-black">Resolution Breakdown</h2>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RePieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, percent }) => `${name} (${((percent ?? 0) * 100).toFixed(0)}%)`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Preset>
  );
}
