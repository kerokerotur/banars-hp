"use client"

import type React from "react"

import { useState } from "react"
import { ImageIcon } from "lucide-react"
import  { Label } from "@radix-ui/react-label"
import  { Button } from "~/ui/button"
import  { Card, CardContent } from "~/ui/card"
import  { Input } from "~/ui/input"
import { Textarea } from "~/ui/textarea"

export default function PlayerForm() {
  const [playerData, setPlayerData] = useState({
    name: "",
    position: "",
    jerseyNumber: "",
    profile: "",
    image: null as File | null,
  })

  const handleInputChange = (field: string, value: string) => {
    setPlayerData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPlayerData((prev) => ({ ...prev, image: file }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Player data:", playerData)
  }

  const handlePreview = () => {
    console.log("Preview player:", playerData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          選手名
        </Label>
        <Input
          id="name"
          placeholder="例：山田 太郎"
          value={playerData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="position" className="text-white">
          ポジション
        </Label>
        <Input
          id="position"
          placeholder="例：ピッチャー"
          value={playerData.position}
          onChange={(e) => handleInputChange("position", e.target.value)}
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jerseyNumber" className="text-white">
          背番号
        </Label>
        <Input
          id="jerseyNumber"
          placeholder="例：10"
          value={playerData.jerseyNumber}
          onChange={(e) => handleInputChange("jerseyNumber", e.target.value)}
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="profile" className="text-white">
          プロフィール
        </Label>
        <Textarea
          id="profile"
          placeholder="選手の詳細情報、アピールポイントなど"
          value={playerData.profile}
          onChange={(e) => handleInputChange("profile", e.target.value)}
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 min-h-[120px]"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-white">画像</Label>
        <Card className="bg-gray-800 border-gray-600 border-dashed">
          <CardContent className="p-8">
            <div className="text-center">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
              <label htmlFor="image-upload" className="cursor-pointer">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-pink-500 mb-2">クリックしてアップロード またはドラッグ&ドロップ</p>
                <p className="text-gray-400 text-sm">PNG, JPG, GIF (最大 5MB)</p>
              </label>
              {playerData.image && (
                <p className="text-green-400 text-sm mt-2">ファイルが選択されました: {playerData.image.name}</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={handlePreview}
          className="bg-gray-700 border-gray-600 text-white hover:bg-gray-600"
        >
          プレビュー
        </Button>
        <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
          更新する
        </Button>
      </div>
    </form>
  )
}
