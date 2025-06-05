import  { Badge } from "lucide-react"
import  { Card, CardHeader, CardTitle, CardContent } from "~/ui/card"

const matches = [
  {
    date: "2024-07-20",
    opponent: "Tigers",
    result: "Win",
    score: "5-3",
  },
  {
    date: "2024-07-15",
    opponent: "Dragons",
    result: "Loss",
    score: "2-4",
  },
  {
    date: "2024-07-10",
    opponent: "Giants",
    result: "Win",
    score: "6-1",
  },
]

export default function RecentMatches() {
  return (
    <Card className="bg-[#1F0F18] border-pink-900/50">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-white">Recent Matches</CardTitle>
      </CardHeader>
      <CardContent className="">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-pink-900/50">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">DATE</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">OPPONENT</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">RESULT</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">SCORE</th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match, index) => (
                <tr key={index} className="border-b border-pink-900/50">
                  <td className="py-4 px-4 text-gray-300">{match.date}</td>
                  <td className="py-4 px-4 text-gray-300">{match.opponent}</td>
                  <td className="py-4 px-4">
                    <Badge
                      // variant={match.result === "Win" ? "default" : "destructive"}
                      className={
                        match.result === "Win" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                      }
                    >
                      {match.result}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-gray-300">{match.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
