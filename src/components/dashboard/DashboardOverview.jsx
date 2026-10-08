import React from 'react';
import SummaryCard from './SummaryCard';
import OverallProgress from './OverallProgress';
import { useQuestions } from '../../hooks/useQuestions';
import {
  CodeIcon,
  ServerIcon,
  LaptopIcon,
  BookOpenIcon,
} from '../../assets/icons';

const DashboardOverview = () => {
  const { metrics } = useQuestions();

  const getMachineCodingBadgeVariant = () => {
    if (metrics.machineCodingStatus === 'Completed') return 'success';
    if (metrics.machineCodingStatus === 'In Progress') return 'warning';
    return 'neutral';
  };

  return (
    <section className="mb-8" aria-label="Dashboard Overview">
      {/* 4 Summary Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Metric 1: Total Questions Added */}
        <SummaryCard
          title="Total Questions Added"
          value={metrics.totalQuestions}
          subtext={`${metrics.totalCompleted} done · ${Math.max(0, metrics.totalQuestions - metrics.totalCompleted)} remaining`}
          icon={BookOpenIcon}
          colorScheme="indigo"
          badgeText={`${metrics.overallPercentage}% Done`}
          badgeVariant="info"
        />

        {/* Metric 2: Completed DSA Problems */}
        <SummaryCard
          title="Completed DSA Problems"
          value={metrics.completedDSA}
          subtext={`${metrics.completedDSA} of ${metrics.totalDSA} problems solved`}
          icon={CodeIcon}
          colorScheme="emerald"
          badgeText={metrics.totalDSA > 0 ? `${Math.round((metrics.completedDSA / metrics.totalDSA) * 100)}%` : '0%'}
          badgeVariant="success"
        />

        {/* Metric 3: Completed Technical Questions */}
        <SummaryCard
          title="Completed Technical Questions"
          value={metrics.completedTechnical}
          subtext={`${metrics.completedTechnical} of ${metrics.totalTechnical} questions revised`}
          icon={ServerIcon}
          colorScheme="teal"
          badgeText={metrics.totalTechnical > 0 ? `${Math.round((metrics.completedTechnical / metrics.totalTechnical) * 100)}%` : '0%'}
          badgeVariant="info"
        />

        {/* Metric 4: Machine Coding Status */}
        <SummaryCard
          title="Machine Coding Status"
          value={metrics.machineCodingStatus}
          subtext={
            metrics.totalMachineCoding > 0
              ? `${metrics.completedMachineCoding} of ${metrics.totalMachineCoding} tasks completed`
              : 'No machine coding tasks yet'
          }
          icon={LaptopIcon}
          colorScheme="amber"
          badgeText={metrics.totalMachineCoding > 0 ? `${metrics.completedMachineCoding}/${metrics.totalMachineCoding} Done` : 'Pending'}
          badgeVariant={getMachineCodingBadgeVariant()}
        />
      </div>

      {/* Visual Progress Bar Section */}
      <OverallProgress metrics={metrics} />
    </section>
  );
};

export default DashboardOverview;
