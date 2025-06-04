"use client";

import { useState } from "react";
import TabToggle from "~/features/players/tab-toggle";
import GameResultsTable from "./game-results-table";
import type { GameResult } from "./game-results-table";
import Header from "~/layout/header";
import Footer from "~/layout/footer";

export default function GameResultsPage() {
  const [activeTab, setActiveTab] = useState("past");

  const pastGames: GameResult[] = [
    {
      id: "1",
      date: "2024-07-20",
      opponent: "Tigers",
      result: "win",
      score: "5-2",
    },
    {
      id: "2",
      date: "2024-07-15",
      opponent: "Bears",
      result: "loss",
      score: "1-3",
    },
    {
      id: "3",
      date: "2024-07-10",
      opponent: "Wolves",
      result: "win",
      score: "4-0",
    },
    {
      id: "4",
      date: "2024-07-05",
      opponent: "Panthers",
      result: "loss",
      score: "2-4",
    },
    {
      id: "5",
      date: "2024-06-30",
      opponent: "Lions",
      result: "win",
      score: "6-3",
    },
    {
      id: "6",
      date: "2024-06-25",
      opponent: "Eagles",
      result: "loss",
      score: "0-2",
    },
    {
      id: "7",
      date: "2024-06-20",
      opponent: "Hawks",
      result: "win",
      score: "3-1",
    },
    {
      id: "8",
      date: "2024-06-15",
      opponent: "Ravens",
      result: "loss",
      score: "1-5",
    },
    {
      id: "9",
      date: "2024-06-10",
      opponent: "Dolphins",
      result: "win",
      score: "7-4",
    },
    {
      id: "10",
      date: "2024-06-05",
      opponent: "Seahawks",
      result: "loss",
      score: "2-3",
    },
  ];

  const upcomingGames: GameResult[] = [
    {
      id: "11",
      date: "2024-08-01",
      opponent: "Sharks",
      result: "win",
      score: "TBD",
    },
    {
      id: "12",
      date: "2024-08-05",
      opponent: "Bulls",
      result: "win",
      score: "TBD",
    },
    {
      id: "13",
      date: "2024-08-10",
      opponent: "Rams",
      result: "win",
      score: "TBD",
    },
  ];

  const tabOptions = [
    { label: "Past Games", value: "past" },
    { label: "Upcoming Games", value: "upcoming" },
  ];

  const handleGameClick = (gameId: string) => {
    console.log(`Game clicked: ${gameId}`);
    // ゲーム詳細ページに遷移
  };

  const handleNavigate = (section: string) => {
    console.log(`Navigating to: ${section}`);
  };

  const handleJoinUs = () => {
    console.log("Join Us clicked");
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Social media clicked: ${platform}`);
  };

  const handleFooterLinkClick = (link: string) => {
    console.log(`Footer link clicked: ${link}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">Game Results</h1>

        <TabToggle
          options={tabOptions}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      <GameResultsTable
        games={activeTab === "past" ? pastGames : upcomingGames}
        onGameClick={handleGameClick}
      />
    </div>
  );
}
