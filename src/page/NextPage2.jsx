import React from 'react';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/solid';

const metrics = [
  {
    title: 'Managed portfolio carbon footprint',
    unit: 'tCO₂e',
    figure: 45048,
    change: 16,
    direction: 'up',
    footer: 'See full breakdown of carbon footprint',
    items: [
      { year: 2022, value: 45048 },
      { year: 2021, value: 14111 },
      { year: 2020, value: 32813 },
      { year: 2019, value: 38673 },
    ],
  },
  {
    title: 'Managed portfolio energy intensity',
    unit: 'kWh/m²',
    figure: 123,
    change: 22,
    direction: 'down',
    footer: 'Download the data',
    items: [
      { year: 2022, value: 123 },
      { year: 2021, value: 128 },
      { year: 2020, value: 135 },
      { year: 2019, value: 157 },
    ],
  },
  {
    title: 'Managed portfolio energy consumption',
    unit: 'kWh',
    figure: 47_790_662,
    change: 27,
    direction: 'down',
    footer: 'Download the data',
    items: [
      { year: 2022, value: 47_790_662 },
      { year: 2021, value: 49_324_077 },
      { year: 2020, value: 48_784_205 },
      { year: 2019, value: 65_198_706 },
    ],
  },
];

const MetricCard = ({ metric }) => {
  const max = Math.max(...metric.items.map((i) => i.value));

  return (
    <article className="flex flex-col gap-6">
      {/* Heading */}
      <header>
        <h3 className="text-lg font-medium text-gray-800 leading-snug">
          {metric.title}
        </h3>

        <div className="flex flex-wrap items-baseline gap-2 mt-2">
          <span className="text-5xl font-semibold text-gray-800 tabular-nums">
            {metric.figure.toLocaleString()}
          </span>
          <span className="text-base font-medium text-gray-500">{metric.unit}</span>
        </div>

        {/* Change vs 2019 */}
        <div className="flex items-center gap-1 mt-3">
          {metric.direction === 'up' ? (
            <ArrowUpIcon className="h-4 w-4 text-rose-400" />
          ) : (
            <ArrowDownIcon className="h-4 w-4 text-rose-400" />
          )}
          <span className="font-medium text-rose-400">{metric.change}%</span>
          <span className="text-sm text-gray-500">from 2019</span>
        </div>
      </header>

      {/* Year rows */}
      <div className="space-y-4">
        {metric.items.map(({ year, value }) => {
          const pct = (value / max) * 100;
          return (
            <div key={year} className="flex items-center gap-3">
              <span className="w-14 shrink-0 text-sm text-gray-600">{year}</span>

              <div className="relative h-2 flex-1 rounded-full bg-gray-200">
                <div
                  className="absolute left-0 top-0 h-2 rounded-full bg-rose-600"
                  style={{ width: `${pct}%` }}
                />
              </div>

              <span className="w-32 shrink-0 text-right text-sm text-gray-600 tabular-nums">
                {value.toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer link */}
      <footer className="mt-auto pt-4">
        <button
          type="button"
          className="group inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-rose-600 transition-colors"
        >
          {metric.footer}
          {metric.footer.toLowerCase().includes('download') ? (
            <ArrowDownTrayIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          ) : (
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              →
            </span>
          )}
        </button>
      </footer>
    </article>
  );
};

const MetricsSection = () => (
  <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 bg-[#f5f2f2]">
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((m) => (
        <MetricCard key={m.title} metric={m} />
      ))}
    </div>
  </section>
);

export default MetricsSection;