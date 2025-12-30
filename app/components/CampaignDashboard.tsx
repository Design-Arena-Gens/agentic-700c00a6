'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, Eye, MousePointer, ShoppingCart, DollarSign } from 'lucide-react';

export default function CampaignDashboard() {
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Premium Headphones - Sponsored Products',
      status: 'active',
      budget: 150,
      spend: 127.43,
      impressions: 45230,
      clicks: 892,
      orders: 34,
      sales: 1854.20,
      acos: 6.87,
      roas: 14.55,
      ctr: 1.97,
      aiOptimizations: 12,
      lastOptimized: '2 hours ago'
    },
    {
      id: 2,
      name: 'Wireless Earbuds - Sponsored Display',
      status: 'active',
      budget: 100,
      spend: 89.21,
      impressions: 32100,
      clicks: 567,
      orders: 18,
      sales: 892.50,
      acos: 10.0,
      roas: 10.0,
      ctr: 1.77,
      aiOptimizations: 8,
      lastOptimized: '5 hours ago'
    },
    {
      id: 3,
      name: 'Smart Watch - Sponsored Brands',
      status: 'optimizing',
      budget: 200,
      spend: 178.92,
      impressions: 62340,
      clicks: 1234,
      orders: 52,
      sales: 3249.80,
      acos: 5.51,
      roas: 18.16,
      ctr: 1.98,
      aiOptimizations: 15,
      lastOptimized: '30 mins ago'
    },
    {
      id: 4,
      name: 'Fitness Tracker - Auto Campaign',
      status: 'active',
      budget: 75,
      spend: 62.34,
      impressions: 18900,
      clicks: 423,
      orders: 14,
      sales: 623.40,
      acos: 10.0,
      roas: 10.0,
      ctr: 2.24,
      aiOptimizations: 6,
      lastOptimized: '1 hour ago'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Campaigns</h2>

        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      campaign.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {campaign.status === 'active' ? 'Active' : 'AI Optimizing'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <span className="font-medium">Budget:</span>
                      <span>${campaign.budget}/day</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="font-medium">Spend:</span>
                      <span>${campaign.spend.toFixed(2)}</span>
                    </span>
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      {campaign.aiOptimizations} AI optimizations today
                    </span>
                    <span className="text-xs text-gray-500">
                      Last optimized: {campaign.lastOptimized}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                <MetricBox
                  icon={Eye}
                  label="Impressions"
                  value={campaign.impressions.toLocaleString()}
                  color="blue"
                />
                <MetricBox
                  icon={MousePointer}
                  label="Clicks"
                  value={campaign.clicks.toLocaleString()}
                  color="purple"
                />
                <MetricBox
                  icon={ShoppingCart}
                  label="Orders"
                  value={campaign.orders.toString()}
                  color="green"
                />
                <MetricBox
                  icon={DollarSign}
                  label="Sales"
                  value={`$${campaign.sales.toFixed(0)}`}
                  color="emerald"
                />
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">CTR</div>
                  <div className="text-lg font-semibold text-gray-900">{campaign.ctr}%</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">ACoS</div>
                  <div className="text-lg font-semibold text-green-600">{campaign.acos}%</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="text-xs text-gray-600 mb-1">ROAS</div>
                  <div className="text-lg font-semibold text-green-600">{campaign.roas.toFixed(2)}x</div>
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-orange-100 p-3 rounded-lg border border-primary/20">
                  <div className="text-xs text-orange-700 mb-1">AI Score</div>
                  <div className="text-lg font-semibold text-orange-700">
                    {Math.round(campaign.roas * 5)}/100
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI Insights Panel */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <span>AI Insights & Recommendations</span>
        </h3>
        <div className="space-y-3">
          <InsightCard
            type="success"
            message="Campaign #3 ROAS increased by 15% after AI bid optimization"
            action="View Details"
          />
          <InsightCard
            type="info"
            message="Detected 3 new high-performing keywords. Auto-adding to campaigns..."
            action="Review Keywords"
          />
          <InsightCard
            type="warning"
            message="Campaign #2 CTR declining. Suggesting creative refresh and bid adjustment"
            action="Apply Suggestions"
          />
        </div>
      </div>
    </div>
  );
}

function MetricBox({ icon: Icon, label, value, color }: any) {
  const colorClasses = {
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    green: 'text-green-600',
    emerald: 'text-emerald-600',
  };

  return (
    <div className="bg-gray-50 p-3 rounded-lg">
      <div className="flex items-center space-x-1 mb-1">
        <Icon className={`h-3 w-3 ${colorClasses[color as keyof typeof colorClasses]}`} />
        <div className="text-xs text-gray-600">{label}</div>
      </div>
      <div className="text-lg font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function InsightCard({ type, message, action }: any) {
  const typeStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  };

  return (
    <div className={`border rounded-lg p-4 ${typeStyles[type as keyof typeof typeStyles]}`}>
      <div className="flex items-start justify-between">
        <p className="text-sm flex-1">{message}</p>
        <button className="ml-4 text-xs font-medium underline hover:no-underline whitespace-nowrap">
          {action}
        </button>
      </div>
    </div>
  );
}
