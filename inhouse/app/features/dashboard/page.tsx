import { Plus, Users, TrendingUp } from "lucide-react"
import { Button } from "~/ui/button"
import DashboardLayout from "../dashboard-layout"
import RecentMatches from "../recent-matches"
import StatsCard from "../stats-card"

export default function DashboardPage() {
  return (
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Match
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard title="Total Players" value="25" icon={<Users className="w-6 h-6 text-pink-500" />} />
          <StatsCard
            title="Matches Played"
            value="10"
            icon={<div className="w-6 h-6 bg-pink-500 rounded-full border-2 border-pink-600"></div>}
          />
          <StatsCard title="Win Rate" value="70%" icon={<TrendingUp className="w-6 h-6 text-pink-500" />} />
        </div>

        <RecentMatches />
      </div>
  )
}
