"use client";

import Header from "~/home/header";
import type { Player } from "./player-card";
import PlayerSection from "./player-section";
import Footer from "~/home/footer";

interface PlayersPageProps {
  players: Player[];
}

export default function PlayersPage({ players }: PlayersPageProps) {
  const handleViewProfile = (playerId: string) => {
    console.log(`View profile clicked for player: ${playerId}`);
    // 選手詳細ページに遷移
  };

  const handleNavigate = (section: string) => {
    console.log(`Navigating to: ${section}`);
    // ここでルーティングやスクロール処理を実装
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
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">選手プロフィール</h1>
        <p className="text-gray-300 text-lg max-w-4xl mx-auto">
          ライジングスターズ・ベースボールチームの才能あふれる選手たちをご紹介します。
          各選手が独自のスキルと情熱をフィールドで発揮し、チームの成功に貢献しています。
        </p>
      </div>

      <PlayerSection
        title="投手"
        players={players.filter(
          (player) =>
            player.position === "Pitcher" ||
            player.position === "Relief Pitcher"
        )}
        onViewProfile={handleViewProfile}
      />

      <PlayerSection
        title="捕手"
        players={players.filter(
          (player) =>
            player.position === "Starting Catcher" ||
            player.position === "Backup Catcher"
        )}
        onViewProfile={handleViewProfile}
      />
    </div>
  );
}
