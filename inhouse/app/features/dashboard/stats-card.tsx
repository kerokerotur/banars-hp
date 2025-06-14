import type React from "react";
import { Card, CardContent } from "~/ui/card";
import { dashboardSystem } from "~/design-system";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <Card className={dashboardSystem.cards.stats}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className={dashboardSystem.typography.statLabel}>{title}</p>
            <p className={`${dashboardSystem.typography.statValue} mt-2`}>{value}</p>
          </div>
          <div className="flex-shrink-0">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}
