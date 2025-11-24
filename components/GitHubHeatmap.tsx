import React, { useEffect, useState } from 'react';

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

interface ApiResponse {
  total: {
    [year: string]: number;
    lastYear: number;
  };
  contributions: ContributionDay[];
}

const GitHubHeatmap: React.FC = () => {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const CACHE_KEY = 'github_heatmap_data';
    const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours

    // Check cache first
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { timestamp, data, total } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          setData(data);
          setTotalCount(total);
          setLoading(false);
          return;
        }
      } catch (e) {
        // Cache parsing error, ignore and fetch fresh data
        console.error('Cache parsing error', e);
      }
    }

    // 使用第三方公共 API 获取最近一年的贡献数据
    fetch('https://github-contributions-api.jogruber.de/v4/vectorking-50kg?y=last')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((json: ApiResponse) => {
        // Handle API response where total might be structured differently or we calc it manually
        // The API returns total: { [year]: number, lastYear: number }
        const total = json.total?.lastYear || json.contributions.reduce((acc, day) => acc + day.count, 0);
        
        setData(json.contributions);
        setTotalCount(total);
        setLoading(false);
        // Save to cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: Date.now(),
          data: json.contributions,
          total: total
        }));
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // 根据 level (0-4) 获取颜色
  const getColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-gray-100 dark:bg-[#2d2d2d]';
      case 1: return 'bg-green-200 dark:bg-green-900/40';
      case 2: return 'bg-green-300 dark:bg-green-800/60';
      case 3: return 'bg-green-400 dark:bg-green-600/80';
      case 4: return 'bg-green-500 dark:bg-green-500';
      default: return 'bg-gray-100 dark:bg-[#2d2d2d]';
    }
  };

  if (error) return null; // 出错时不显示

  return (
    <div className="w-full mt-4 select-none">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-notion-gray flex items-center gap-2">
          Contribution Activity
        </h3>
        <span className="text-xs text-notion-gray font-mono">
          {loading ? 'Loading...' : `${totalCount} commits`}
        </span>
      </div>
      
      {/* Heatmap Grid */}
      <div className="w-full overflow-x-auto md:overflow-visible custom-scrollbar pb-2 md:pb-0">
        {loading ? (
          // Loading skeleton
          <div className="h-[84px] md:h-auto md:aspect-[53/7] w-full bg-gray-50 dark:bg-[#202020] animate-pulse rounded-md" />
        ) : (
          <div 
            className="grid grid-rows-7 grid-flow-col gap-[2px] md:gap-[3px] h-[84px] md:h-auto min-w-max md:min-w-0 w-full"
            style={{
              // Mobile: auto columns based on content
              // Desktop: forced 53 columns to fill width
            }}
          >
            {data.map((day) => (
              <div
                key={day.date}
                className={`w-[10px] h-[10px] md:w-full md:h-auto md:aspect-square rounded-[1px] md:rounded-[2px] ${getColor(day.level)} transition-colors hover:ring-1 hover:ring-notion-gray/50 relative group`}
                title={`${day.date}: ${day.count} contributions`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Legend */}
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
