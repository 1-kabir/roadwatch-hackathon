'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Preset from '@/components/Preset';

const COLORS = ['#16a34a', '#dc2626', '#3b82f6', '#f97316', '#a855f7', '#facc15'];

const issueData = [
  { name: 'Pothole', value: 30 },
  { name: 'Road Obstruction', value: 25 },
  { name: 'Signal Malfunction', value: 15 },
  { name: 'Accident', value: 20 },
  { name: 'Other', value: 10 },
];

const resolutionData = [
  { name: 'Resolved', value: 60 },
  { name: 'Unresolved', value: 40 },
];

// Sample statistics
const stats = {
  totalUsers: 500,
  totalReports: 200,
  avgReportsPerUser: (200 / 500).toFixed(2),
};

export default function AnalyticsPage() {
  return (
    <Preset>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-5 shadow border border-gray-200">
          <p className="text-sm text-gray-500">Total Users</p>
          <h2 className="text-2xl font-bold text-black">{stats.totalUsers}</h2>
        </div>
        <div className="bg-white rounded-xl p-5 shadow border border-gray-200">
          <p className="text-sm text-gray-500">Reports Submitted</p>
          <h2 className="text-2xl font-bold text-black">{stats.totalReports}</h2>
        </div>
        <div className="bg-white rounded-xl p-5 shadow border border-gray-200">
          <p className="text-sm text-gray-500">Avg Reports per User</p>
          <h2 className="text-2xl font-bold text-black">{stats.avgReportsPerUser}</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie chart - Resolution */}
        <div className="bg-white rounded-xl p-5 shadow border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Report Status Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={resolutionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {resolutionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie chart - Issue types */}
        <div className="bg-white rounded-xl p-5 shadow border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Issue Type Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={issueData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {issueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Preset>
  );
}
