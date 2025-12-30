'use client';

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign, Target, Zap } from 'lucide-react';

const performanceData = [
  { date: '12/23', sales: 2400, spend: 580, orders: 45, roas: 4.14 },
  { date: '12/24', sales: 2210, spend: 620, orders: 42, roas: 3.56 },
  { date: '12/25', sales: 1890, spend: 480, orders: 35, roas: 3.94 },
  { date: '12/26', sales: 3200, spend: 710, orders: 58, roas: 4.51 },
  { date: '12/27', sales: 2980, spend: 690, orders: 52, roas: 4.32 },
  { date: '12/28', sales: 3520, spend: 780, orders: 64, roas: 4.51 },
  { date: '12/29', sales: 3890, spend: 820, orders: 71, roas: 4.74 },
  { date: '12/30', sales: 4100, spend: 850, orders: 78, roas: 4.82 },
];

const keywordData = [
  { keyword: 'wireless headphones', impressions: 12450, clicks: 287, orders: 23, sales: 1245, acos: 8.2 },
  { keyword: 'bluetooth earbuds', impressions: 9870, clicks: 234, orders: 18, sales: 892, acos: 9.8 },
  { keyword: 'noise cancelling', impressions: 8920, clicks: 198, orders: 16, sales: 784, acos: 10.5 },
  { keyword: 'gaming headset', impressions: 7650, clicks: 176, orders: 14, sales: 672, acos: 11.2 },
  { keyword: 'sport earphones', impressions: 6540, clicks: 145, orders: 11, sales: 534, acos: 12.1 },
];

const hourlyData = [
  { hour: '12am', roas: 2.8, orders: 3 },
  { hour: '4am', roas: 1.9, orders: 2 },
  { hour: '8am', roas: 4.2, orders: 12 },
  { hour: '12pm', roas: 5.1, orders: 18 },
  { hour: '4pm', roas: 4.8, orders: 16 },
  { hour: '8pm', roas: 5.4, orders: 22 },
];

export default function PerformanceMetrics() {
  return (
    <div className="space-y-6">
      {/* Performance Trends */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <span>Sales & Spend Trends</span>
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#10b981" strokeWidth={2} name="Sales ($)" />
            <Line yAxisId="right" type="monotone" dataKey="spend" stroke="#ef4444" strokeWidth={2} name="Ad Spend ($)" />
            <Line yAxisId="left" type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2} name="Orders" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ROAS Trends */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Target className="h-5 w-5 text-green-600" />
          <span>ROAS Performance</span>
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="roas" fill="#10b981" name="ROAS (Return on Ad Spend)" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-sm text-green-800">
            <strong>AI Insight:</strong> ROAS improved by 16.4% over the past 7 days due to automated bid optimizations and keyword refinements.
          </p>
        </div>
      </div>

      {/* Hourly Performance */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Zap className="h-5 w-5 text-orange-600" />
          <span>Dayparting Analysis</span>
        </h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hour" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="roas" fill="#f59e0b" name="ROAS" />
            <Bar yAxisId="right" dataKey="orders" fill="#3b82f6" name="Orders" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>AI Recommendation:</strong> Peak performance occurs between 12pm-8pm. Consider increasing bids by 20-30% during these hours.
          </p>
        </div>
      </div>

      {/* Top Keywords Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <DollarSign className="h-5 w-5 text-purple-600" />
          <span>Top Performing Keywords</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Keyword
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Impressions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clicks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sales
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACoS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {keywordData.map((keyword, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{keyword.keyword}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {keyword.impressions.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {keyword.clicks}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {keyword.orders}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${keyword.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      keyword.acos < 10 ? 'bg-green-100 text-green-800' :
                      keyword.acos < 12 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {keyword.acos}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Optimization Summary */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-md p-6 border border-purple-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">AI Optimization Impact (Last 7 Days)</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-sm text-gray-600 mb-1">Total Optimizations</div>
            <div className="text-2xl font-bold text-purple-600">247</div>
            <div className="text-xs text-green-600 mt-1">+18% vs last week</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-sm text-gray-600 mb-1">Cost Saved</div>
            <div className="text-2xl font-bold text-purple-600">$1,243</div>
            <div className="text-xs text-green-600 mt-1">From negative keywords</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-sm text-gray-600 mb-1">Revenue Gained</div>
            <div className="text-2xl font-bold text-purple-600">$4,892</div>
            <div className="text-xs text-green-600 mt-1">From bid optimizations</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-purple-100">
            <div className="text-sm text-gray-600 mb-1">Time Saved</div>
            <div className="text-2xl font-bold text-purple-600">12.5h</div>
            <div className="text-xs text-green-600 mt-1">Manual work automated</div>
          </div>
        </div>
      </div>
    </div>
  );
}
