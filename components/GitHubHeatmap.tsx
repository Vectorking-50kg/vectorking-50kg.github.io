import React, { useMemo } from 'react';
import { HeatmapDay } from '../types';

const GitHubHeatmap: React.FC = () => {
  // Generate simulated data for the last 365 days
  const data: HeatmapDay[] = useMemo(() => {
    const days: HeatmapDay[] = [];
    // We want roughly 53 weeks of data
    const totalDays = 53 * 7; 
    const today = new Date();
    
    for (let i = 0; i < totalDays; i++) {
       // Create data going backwards, then we reverse it or map correctly
       // Actually, usually heatmaps start from left (one year ago) to right (today)
       const d = new Date(today);
       d.setDate(d.getDate() - (totalDays - 1 - i));
       
       const rand = Math.random();
       let count = 0;
       if (rand > 0.7) count = 1;
       if (rand > 0.85) count = 2;
       if (rand > 0.95) count = 3;
       if (rand > 0.98) count = 4;

       days.push({
         date: d.toISOString().split('T')[0],
         count: count
       });
    }
    return days;
  }, []);

  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-100 dark:bg-[#2d2d2d]';
    if (count === 1) return 'bg-green-200 dark:bg-green-900/40';
    if (count === 2) return 'bg-green-300 dark:bg-green-800/60';
    if (count === 3) return 'bg-green-400 dark:bg-green-600/80';
    return 'bg-green-500 dark:bg-green-500';
  };

  // Group data into weeks [ [Sun, Mon...], [Sun, Mon...] ]
  const weeks = useMemo(() => {
      const result = [];
      for (let i = 0; i < data.length; i += 7) {
          result.push(data.slice(i, i + 7));
      }
      return result;
  }, [data]);

  return (
    <div className="w-full mt-4 select-none">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-notion-gray flex items-center gap-2">
          Contribution Activity
        </h3>
        <span className="text-xs text-notion-gray font-mono">1,243 commits</span>
      </div>
      
      {/* 
         Container Logic:
         Mobile: overflow-x-auto (scrollable)
         Desktop (md): w-full, justify-between (try to fit everything visually)
      */}
      <div className="w-full overflow-x-auto md:overflow-visible custom-scrollbar pb-2 md:pb-0">
        <div className="flex md:grid md:grid-cols-[repeat(53,minmax(0,1fr))] gap-[2px] md:gap-[3px] min-w-max md:min-w-0">
           {weeks.map((week, weekIndex) => (
             <div key={weekIndex} className="flex flex-col gap-[2px] md:gap-[3px]">
                {week.map((day) => (
                    <div
                      key={day.date}
                      className={`w-[10px] h-[10px] md:w-full md:h-auto md:aspect-square rounded-[1px] md:rounded-[2px] ${getColor(day.count)} transition-colors hover:ring-1 hover:ring-notion-gray/50`}
                      title={`${day.date}: ${day.count} contributions`}
                    />
                ))}
             </div>
           ))}
        </div>
      </div>

      <div className="flex justify-end items-center gap-2 mt-3 text-[10px] text-notion-gray">
           <span>Less</span>
           <div className="w-2 h-2 bg-gray-100 dark:bg-[#2d2d2d] rounded-[1px]"></div>
           <div className="w-2 h-2 bg-green-200 dark:bg-green-900/40 rounded-[1px]"></div>
           <div className="w-2 h-2 bg-green-300 dark:bg-green-800/60 rounded-[1px]"></div>
           <div className="w-2 h-2 bg-green-400 dark:bg-green-600/80 rounded-[1px]"></div>
           <div className="w-2 h-2 bg-green-500 dark:bg-green-500 rounded-[1px]"></div>
           <span>More</span>
      </div>
    </div>
  );
};

export default GitHubHeatmap;