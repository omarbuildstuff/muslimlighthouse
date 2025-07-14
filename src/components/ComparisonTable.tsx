import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <div className="relative z-10 px-4 sm:px-6 lg:px-8 bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-[0_10px_30px_0_rgba(0,0,0,0.1),_10px_0_30px_0_rgba(0,0,0,0.1)] hover:scale-[1.01] transition-transform duration-300 ease-in-out overflow-hidden border-transparent">
        {/* Table Header */}
        <div className="grid grid-cols-3 sm:grid-cols-4 text-center">
          <div className="p-6 md:p-8 font-extrabold text-lg md:text-3xl text-gray-900 bg-white rounded-tl-3xl flex items-center justify-center">Features</div>
          <div className="p-6 md:p-8 font-extrabold text-lg md:text-3xl text-white bg-lighthouse-500 flex items-center justify-center">Muslim Lighthouse</div>

          <div className="p-6 md:p-8 font-extrabold text-lg md:text-3xl text-gray-900 bg-gray-100 hidden sm:block flex items-center justify-center">YouTube</div>
          <div className="p-6 md:p-8 font-extrabold text-lg md:text-3xl text-gray-900 bg-gray-100 rounded-tr-3xl flex items-center justify-center">Other Platforms</div>
        </div>

        {/* Table Rows */}
        {[
          {
            emoji: "💡",
            label: "Actionable knowledge",
            lighthouse: "✅",
            youtube: "❌",
            other: "❌"
          },
          {
            emoji: "🗺️",
            label: "Structured roadmap",
            lighthouse: "✅",
            youtube: "❌",
            other: "✅"
          },
          {
            emoji: "👨",
            label: "Live teacher access",
            lighthouse: "✅",
            youtube: "❌",
            other: "🟠"
          },
          {
            emoji: "💪",
            label: "Habit building",
            lighthouse: "✅",
            youtube: "❌",
            other: "❌"
          },
          {
            emoji: "🤝",
            label: "Engaged community",
            lighthouse: "✅",
            youtube: "❌",
            other: "🟠"
          }
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 sm:grid-cols-4 text-center items-stretch border-transparent">
            <div className="flex items-center gap-4 justify-center py-4 md:py-6 text-gray-800 bg-white">
              <span className="hidden text-xl md:block md:text-3xl">{row.emoji}</span>
              <span className="text-sm md:text-xl font-semibold text-black">{row.label}</span>
            </div>
            <div className="py-4 md:py-6 text-xl md:text-3xl font-extrabold text-white bg-lighthouse-500 flex items-center justify-center">{row.lighthouse}</div>

            <div className="py-4 md:py-6 text-xl md:text-3xl font-extrabold text-gray-700 bg-gray-100 flex items-center justify-center hidden sm:flex">{row.youtube}</div>
            <div className="py-4 md:py-6 text-xl md:text-3xl font-extrabold text-gray-700 bg-gray-100 flex items-center justify-center">{row.other}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;
