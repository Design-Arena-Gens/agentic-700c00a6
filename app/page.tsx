'use client';

import { useState } from 'react';
import { Bot, TrendingUp, DollarSign, Target, Zap, BarChart3, Settings, Play } from 'lucide-react';
import CampaignDashboard from './components/CampaignDashboard';
import AutomationControls from './components/AutomationControls';
import PerformanceMetrics from './components/PerformanceMetrics';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-primary to-orange-600 p-2 rounded-lg">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Amazon PPC AI Agent</h1>
                <p className="text-sm text-gray-600">Intelligent Advertising Automation</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Agent Active</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8" aria-label="Tabs">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
              { id: 'automation', name: 'Automation', icon: Zap },
              { id: 'metrics', name: 'Performance', icon: TrendingUp },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatCard
            icon={DollarSign}
            title="Total Ad Spend"
            value="$12,459"
            change="+8.2%"
            positive={false}
            color="blue"
          />
          <StatCard
            icon={TrendingUp}
            title="ROAS"
            value="3.84x"
            change="+15.3%"
            positive={true}
            color="green"
          />
          <StatCard
            icon={Target}
            title="ACoS"
            value="26.4%"
            change="-3.1%"
            positive={true}
            color="purple"
          />
          <StatCard
            icon={Zap}
            title="Optimizations"
            value="127"
            change="+24"
            positive={true}
            color="orange"
          />
        </div>

        {/* Tab Content */}
        {activeTab === 'dashboard' && <CampaignDashboard />}
        {activeTab === 'automation' && <AutomationControls />}
        {activeTab === 'metrics' && <PerformanceMetrics />}
      </div>
    </main>
  );
}

function StatCard({ icon: Icon, title, value, change, positive, color }: any) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  };

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`flex-shrink-0 ${colorClasses[color as keyof typeof colorClasses]} p-3 rounded-md`}>
            <Icon className="h-6 w-6" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
                <div className={`ml-2 flex items-baseline text-sm font-semibold ${positive ? 'text-green-600' : 'text-red-600'}`}>
                  {change}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
