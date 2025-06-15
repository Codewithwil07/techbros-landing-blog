    "use client";

    import React, { useEffect, useState } from "react";
    import { stats } from "../../shared/data";

    const StatsSection: React.FC = () => {
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        setIsVisible(true);
      }, []);

      return (
        <section className="pt-30 bg-section-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center transition-all duration-700 delay-${
                      index * 100
                    } ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <div className="relative stats-icon-group w-16 h-16 flex items-center justify-center shrink-0 mb-4">
                      <div className="relative z-10 w-16 h-16 bg-primary rounded-sm rotate-45 flex items-center justify-center">
                        <Icon className="w-6 h-6 rotate-[315deg] text-white" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    };

    export default StatsSection;
