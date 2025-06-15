import { Plus, Users, TrendingUp } from "lucide-react";
import { Button } from "@project/common/ui/button";
import RecentMatches from "./recent-matches";
import StatsCard from "./stats-card";
import { dashboardSystem, createDashboardGrid } from "~/design-system";

export default function DashboardPage() {
  return (
    <div className={dashboardSystem.layouts.main.section}>
      <div className="flex justify-between items-center">
        <h1 className={dashboardSystem.typography.pageTitle}>Dashboard</h1>
        <Button className={dashboardSystem.buttons.primary}>
          <Plus className="w-4 h-4 mr-2" />
          New Match
        </Button>
      </div>

      <div className={createDashboardGrid({ cols: 3, gap: "lg" })}>
        <StatsCard
          title="Total Players"
          value="25"
          icon={<Users className="w-6 h-6 text-pink-500" />}
        />
        <StatsCard
          title="Matches Played"
          value="10"
          icon={
            <div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-pink-600"></div>
          }
        />
        <StatsCard
          title="Win Rate"
          value="70%"
          icon={<TrendingUp className="w-6 h-6 text-pink-500" />}
        />
      </div>

      <RecentMatches />
    </div>
  );
}
