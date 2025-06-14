"use client";

import type React from "react";

import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Button } from "~/ui/button";
import { Card, CardContent } from "~/ui/card";
import { Input } from "~/ui/input";
import { Textarea } from "~/ui/textarea";
import { dashboardSystem } from "~/design-system";

export default function PlayerForm() {
  const [playerData, setPlayerData] = useState({
    name: "",
    position: "",
    jerseyNumber: "",
    profile: "",
    image: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setPlayerData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPlayerData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Player data:", playerData);
  };

  const handlePreview = () => {
    console.log("Preview player:", playerData);
  };

  return (
    <form onSubmit={handleSubmit} className={dashboardSystem.layouts.form.container}>
      <div className={dashboardSystem.layouts.form.field}>
        <Label htmlFor="name" className={dashboardSystem.labels.required}>
          選手名
        </Label>
        <Input
          id="name"
          placeholder="例：山田 太郎"
          value={playerData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className={dashboardSystem.inputs.default}
        />
      </div>

      <div className={dashboardSystem.layouts.form.field}>
        <Label htmlFor="position" className={dashboardSystem.labels.default}>
          ポジション
        </Label>
        <Input
          id="position"
          placeholder="例：ピッチャー"
          value={playerData.position}
          onChange={(e) => handleInputChange("position", e.target.value)}
          className={dashboardSystem.inputs.default}
        />
      </div>

      <div className={dashboardSystem.layouts.form.field}>
        <Label htmlFor="jerseyNumber" className={dashboardSystem.labels.default}>
          背番号
        </Label>
        <Input
          id="jerseyNumber"
          placeholder="例：10"
          value={playerData.jerseyNumber}
          onChange={(e) => handleInputChange("jerseyNumber", e.target.value)}
          className={dashboardSystem.inputs.default}
        />
      </div>

      <div className={dashboardSystem.layouts.form.field}>
        <Label htmlFor="profile" className={dashboardSystem.labels.default}>
          プロフィール
        </Label>
        <Textarea
          id="profile"
          placeholder="選手の詳細情報、アピールポイントなど"
          value={playerData.profile}
          onChange={(e) => handleInputChange("profile", e.target.value)}
          className={dashboardSystem.inputs.textarea}
        />
      </div>

      <div className={dashboardSystem.layouts.form.field}>
        <Label className={dashboardSystem.labels.default}>画像</Label>
        <Card className={`${dashboardSystem.cards.form} border-dashed`}>
          <CardContent className="p-8">
            <div className="text-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-pink-500 mb-2">
                  クリックしてアップロード またはドラッグ&ドロップ
                </p>
                <p className={`${dashboardSystem.typography.description} text-sm`}>
                  PNG, JPG, GIF (最大 5MB)
                </p>
              </label>
              {playerData.image && (
                <p className="text-green-400 text-sm mt-2">
                  ファイルが選択されました: {playerData.image.name}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className={dashboardSystem.layouts.form.actions}>
        <Button
          type="button"
          variant="outline"
          onClick={handlePreview}
          className={dashboardSystem.buttons.secondary}
        >
          プレビュー
        </Button>
        <Button
          type="submit"
          className={dashboardSystem.buttons.primary}
        >
          更新する
        </Button>
      </div>
    </form>
  );
}
