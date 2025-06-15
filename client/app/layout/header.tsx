"use client";

import { NavLink } from "react-router";
import { Button } from "@project/common/ui/button";

interface HeaderProps {
  onNavigate?: (section: string) => void;
  onJoinUs?: () => void;
}

export default function Header({ onNavigate, onJoinUs }: HeaderProps) {
  const navItems = [
    { label: "Home", value: "/" },
    { label: "Players", value: "/players" },
    { label: "GameResult", value: "/game-results" },
    { label: "Contact", value: "/contact" },
  ];

  return (
    <header className="bg-[#1A0B13] text-white px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Banars Logo" width={32} height={32} />
          <span className="text-lg font-semibold">Banars</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink to={item.value}>
              <div className="text-gray-300 hover:text-white transition-colors">
                {item.label}
              </div>
            </NavLink>
          ))}
        </nav>

        <Button
          onClick={onJoinUs}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md"
        >
          Join Us
        </Button>
      </div>
    </header>
  );
}
