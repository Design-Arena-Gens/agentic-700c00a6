'use client';

import { useState } from 'react';
import { Zap, ToggleLeft, ToggleRight, Settings, DollarSign, Target, TrendingUp, Brain, Clock } from 'lucide-react';

export default function AutomationControls() {
  const [rules, setRules] = useState([
    {
      id: 1,
      name: 'Auto Bid Optimization',
      description: 'Automatically adjust bids based on performance and competition',
      enabled: true,
      frequency: 'Every 2 hours',
      lastRun: '15 mins ago',
      actions: 23,
      category: 'bidding'
    },
    {
      id: 2,
      name: 'Keyword Harvesting',
      description: 'Identify high-performing search terms and add as exact match keywords',
      enabled: true,
      frequency: 'Daily',
      lastRun: '3 hours ago',
      actions: 8,
      category: 'keywords'
    },
    {
      id: 3,
      name: 'Negative Keyword Mining',
      description: 'Automatically add poor-performing search terms as negative keywords',
      enabled: true,
      frequency: 'Daily',
      lastRun: '5 hours ago',
      actions: 12,
      category: 'keywords'
    },
    {
      id: 4,
      name: 'Budget Reallocation',
      description: 'Shift budget from underperforming to high-ROAS campaigns',
      enabled: false,
      frequency: 'Weekly',
      lastRun: '2 days ago',
      actions: 0,
      category: 'budget'
    },
    {
      id: 5,
      name: 'Dayparting Optimization',
      description: 'Adjust bids based on time-of-day performance patterns',
      enabled: true,
      frequency: 'Hourly',
      lastRun: '45 mins ago',
      actions: 156,
      category: 'bidding'
    },
    {
      id: 6,
      name: 'Placement Optimization',
      description: 'Optimize bid adjustments for different ad placements',
      enabled: true,
      frequency: 'Every 6 hours',
      lastRun: '2 hours ago',
      actions: 34,
      category: 'bidding'
    }
  ]);

  const toggleRule = (id: number) => {
    setRules(rules.map(rule =>
      rule.id === id ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'bidding': return DollarSign;
      case 'keywords': return Target;
      case 'budget': return TrendingUp;
      default: return Zap;
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Agent Settings */}
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-md p-6 border border-orange-200">
        <div className="flex items-center space-x-3 mb-4">
          <Brain className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold text-gray-900">AI Agent Configuration</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg p-4 border border-orange-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Optimization Aggressiveness</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Conservative</option>
              <option selected>Balanced</option>
              <option>Aggressive</option>
            </select>
          </div>
          <div className="bg-white rounded-lg p-4 border border-orange-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Target ACoS</label>
            <input
              type="number"
              defaultValue="25"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="bg-white rounded-lg p-4 border border-orange-100">
            <label className="block text-sm font-medium text-gray-700 mb-2">Min ROAS Target</label>
            <input
              type="number"
              defaultValue="3.0"
              step="0.1"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-between bg-white rounded-lg p-4 border border-orange-100">
          <div>
            <h3 className="font-medium text-gray-900">Master AI Automation</h3>
            <p className="text-sm text-gray-600">Enable all automated optimizations</p>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Enabled
          </button>
        </div>
      </div>

      {/* Automation Rules */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Automation Rules</h2>
          <button className="flex items-center space-x-2 bg-primary hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            <Zap className="h-4 w-4" />
            <span>Create New Rule</span>
          </button>
        </div>

        <div className="space-y-4">
          {rules.map((rule) => {
            const CategoryIcon = getCategoryIcon(rule.category);
            return (
              <div key={rule.id} className={`border rounded-lg p-5 transition-all ${
                rule.enabled ? 'border-gray-200 bg-white' : 'border-gray-100 bg-gray-50'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`p-3 rounded-lg ${
                      rule.enabled ? 'bg-blue-100' : 'bg-gray-200'
                    }`}>
                      <CategoryIcon className={`h-5 w-5 ${
                        rule.enabled ? 'text-blue-600' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-semibold mb-1 ${
                        rule.enabled ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {rule.name}
                      </h3>
                      <p className={`text-sm mb-3 ${
                        rule.enabled ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {rule.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span className="font-medium">Frequency:</span>
                          <span>{rule.frequency}</span>
                        </span>
                        <span className={rule.enabled ? 'text-gray-600' : 'text-gray-400'}>
                          <span className="font-medium">Last run:</span> {rule.lastRun}
                        </span>
                        {rule.enabled && (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                            {rule.actions} actions today
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 ml-4">
                    <button
                      onClick={() => toggleRule(rule.id)}
                      className={`transition-colors p-2 rounded-lg ${
                        rule.enabled ? 'hover:bg-gray-100' : 'hover:bg-gray-200'
                      }`}
                    >
                      {rule.enabled ? (
                        <ToggleRight className="h-8 w-8 text-green-500" />
                      ) : (
                        <ToggleLeft className="h-8 w-8 text-gray-400" />
                      )}
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <Settings className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent AI Actions</h2>
        <div className="space-y-3">
          {[
            { time: '10 mins ago', action: 'Increased bid for keyword "wireless headphones" by 15%', campaign: 'Premium Headphones', result: '+12% CTR' },
            { time: '25 mins ago', action: 'Added 3 negative keywords to reduce wasted spend', campaign: 'Smart Watch', result: '-$23 spend' },
            { time: '1 hour ago', action: 'Harvested "bluetooth earbuds waterproof" as new keyword', campaign: 'Wireless Earbuds', result: '+8 orders' },
            { time: '2 hours ago', action: 'Adjusted dayparting bids - increased 8am-10am by 20%', campaign: 'Fitness Tracker', result: '+18% ROAS' },
          ].map((log, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
              <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{log.action}</p>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-xs text-gray-500">{log.time}</span>
                  <span className="text-xs text-gray-600">
                    <span className="font-medium">Campaign:</span> {log.campaign}
                  </span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">
                    {log.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
