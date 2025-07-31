import Preset from "@/components/Preset";
import { AlertTriangle, Clock, MapPin, ThumbsUp, HelpCircle } from "lucide-react";

export default function DashboardHome() {
  return (
    <Preset>
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl p-6 shadow-md">
        <h1 className="text-3xl font-bold">Hello, John!</h1>
        <p className="mt-1 text-white/90 text-sm">Welcome back to RoadWatch</p>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-start gap-4">
          <MapPin className="text-indigo-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-black">There are 12 road issues around you!</h2>
            <p className="text-sm text-gray-600 mt-1">Stay alert and avoid high-risk areas nearby.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-start gap-4">
          <Clock className="text-pink-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-black">8 issues were reported in the last hour</h2>
            <p className="text-sm text-gray-600 mt-1">Reports include potholes, blockages and malfunctioning signals.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center gap-3 mb-3">
          <AlertTriangle className="text-yellow-500 w-6 h-6" />
          <h2 className="text-lg font-semibold text-black">Reported Breakdown</h2>
        </div>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
          <li><span className="font-medium text-black">30</span> potholes</li>
          <li><span className="font-medium text-black">10</span> traffic lights broken</li>
          <li><span className="font-medium text-black">22</span> road obstructions</li>
          <li><span className="font-medium text-black">6</span> accidents</li>
        </ul>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 flex items-start gap-4">
          <ThumbsUp className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-black">Thanks for your help!</h2>
            <p className="text-sm text-gray-600 mt-1">You helped report <span className="text-black font-medium">5</span> road issues. <span className="text-black font-medium">3</span> have already been resolved.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
          <div className="flex items-start gap-3 mb-2">
            <HelpCircle className="text-blue-600 w-6 h-6 mt-1" />
            <h2 className="text-lg font-semibold text-black">Do these issues still exist?</h2>
          </div>
          <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mt-2">
            <li>Main Street pothole</li>
            <li>Broken signal at 4th Ave</li>
            <li>Blocked lane near Elm Park</li>
          </ul>
        </div>
      </div>
    </Preset>
  );
}
