import React from "react";
import {
  MessageCircle,
  Search,
  Heart,
  Bell,
  Compass,
  Plus,
  User,
  MoreVertical,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Send,
  Mic,
  PlusCircle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-60 border-r flex flex-col">
        <div className="p-4 border-b">
          <a href="/" className="flex items-center gap-2">
            <span className="text-black text-2xl font-bold">✧ mindtrip.</span>
          </a>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg mx-2"
              >
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  <span>Chats</span>
                </div>
                <span className="bg-gray-100 text-gray-800 px-2 rounded-full text-xs">1</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg mx-2"
              >
                <Search className="h-5 w-5" />
                <span>Explore</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg mx-2"
              >
                <Heart className="h-5 w-5" />
                <span>Saved</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg mx-2"
              >
                <Bell className="h-5 w-5" />
                <span>Updates</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg mx-2"
              >
                <Compass className="h-5 w-5" />
                <span>Inspiration</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-lg mx-2"
              >
                <Plus className="h-5 w-5" />
                <span>Create</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 mt-auto">
          <button className="w-full py-2 px-4 bg-gray-100 rounded-full text-sm font-medium text-center">
            New chat
          </button>
        </div>

        <div className="p-4 border-t flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <span className="text-sm font-medium">Traveler</span>
          </div>
          <MoreVertical className="h-5 w-5 text-gray-500" />
        </div>

        <div className="px-4 py-2 text-xs text-gray-500 space-y-1">
          <div className="flex gap-2">
            <span>Company</span>
            <span>•</span>
            <span>Contact</span>
            <span>•</span>
            <span>Help</span>
          </div>
          <div className="flex gap-2">
            <span>Terms</span>
            <span>•</span>
            <span>Privacy</span>
          </div>
          <div>© 2025 Mindtrip, Inc.</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="border-b p-4 flex items-center justify-between">
          <div className="font-medium">New chat</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">Where</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">When</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span>2 travelers</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <DollarSign className="h-4 w-4 text-gray-500" />
              <span className="text-gray-500">Budget</span>
            </div>

            <div className="border-l pl-4 ml-2">
              <button className="px-4 py-2 text-sm font-medium">Invite</button>
            </div>
            <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium">
              <Plus className="h-4 w-4" />
              Create a trip
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto p-6">
            {/* For you in section */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-medium">For you in</h2>
                <div className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1">
                  <MapPin className="h-4 w-4" />
                  <span>Chan</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="bg-gray-100 rounded-full px-4 py-1 text-sm font-medium">Map</button>
                <button className="text-sm font-medium">Explore</button>
              </div>
            </div>

            {/* Where to today section */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-6">Where to today?</h1>

              <div className="flex items-start gap-4 mb-8">
                <div className="h-10 w-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">✧</span>
                </div>
                <p className="text-lg">
                  Hey there, where would you like to go? I'm here to assist you
                  <br />
                  in planning your experience. Ask me anything travel related.
                </p>
              </div>
            </div>

            {/* Get started section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Get started</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative h-36 rounded-lg overflow-hidden group">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Travel quiz"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-medium">Take our travel quiz</div>
                </div>

                <div className="relative h-36 rounded-lg overflow-hidden group">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Create a trip"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-medium">Create a trip</div>
                </div>

                <div className="relative h-36 rounded-lg overflow-hidden group">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Creator tools"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white font-medium">Creator tools</div>
                </div>
              </div>
            </div>

            {/* Get inspired section */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Get inspired</h2>
                <button className="text-sm font-medium">See all</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative h-36 rounded-lg overflow-hidden group">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Manila"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="User"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-medium">Manila Unlocked:</div>
                    <div className="text-sm">Top Spots for Food...</div>
                  </div>
                </div>

                <div className="relative h-36 rounded-lg overflow-hidden group">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ubud"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="User"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-medium">The Best of Ubud</div>
                    <div className="text-sm">(Bali): My Full 3-Da...</div>
                  </div>
                </div>

                <div className="relative h-36 rounded-lg overflow-hidden group">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Hallstatt"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute top-4 left-4">
                    <div className="h-8 w-8 rounded-full overflow-hidden">
                      <img
                        src="/placeholder.svg?height=50&width=50"
                        alt="User"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="font-medium">Sights & Highlights</div>
                    <div className="text-sm">Around Hallstatt</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">What can I ask Mindtrip?</div>

              <div className="border rounded-full p-3 flex items-center">
                <input type="text" placeholder="Ask anything..." className="flex-1 px-4 outline-none text-gray-400" />
                <div className="flex items-center gap-2">
                  <button className="p-1 text-gray-400">
                    <PlusCircle className="h-5 w-5" />
                  </button>
                  <button className="p-1 text-gray-400">
                    <Mic className="h-5 w-5" />
                  </button>
                  <button className="p-1 text-gray-400">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-400 text-center mt-2">
              Mindtrip can make mistakes. Check important info.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
