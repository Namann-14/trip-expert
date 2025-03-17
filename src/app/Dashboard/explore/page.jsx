"use client";

import Image from "next/image"
import { Heart, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function InspirationPage() {
    const [activeTab, setActiveTab] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    const [savedPlaces, setSavedPlaces] = useState(new Set())

    // Data for cards
    const cardData = [
        {
            id: 1,
            places: 8,
            image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&q=80",
            title: "Cafes in Ottawa Canada",
            location: "Ottawa, Ontario, Canada",
            author: "heather-ems",
            type: "Lists"
        },
        {
            id: 2,
            places: 20,
            image: "https://images.unsplash.com/photo-1575089776834-8be34696ffb9?w=500&q=80",
            title: "Orlando's Top 20 Must-Do Activities",
            location: "Bay Lake, Florida",
            author: "myorlandoadventures",
            type: "Lists"
        },
        {
            id: 3,
            places: 20,
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80",
            title: "Orlando's Top 20 Must-Try Restaurants",
            location: "Orlando, Florida",
            author: "myorlandoadventures",
            type: "Lists"
        },
        {
            id: 4,
            places: 5,
            image: "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=500&q=80",
            title: "Orlando Family Adventure: 5 Days of Fun and Luxury",
            location: "Orlando, Florida",
            author: "myorlandoadventures",
            type: "Itineraries"
        },
        {
            id: 5,
            places: 15,
            image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=500&q=80",
            title: "When in Portugal: Best things to do in Porto and Lisbon",
            location: "Portugal",
            author: "sxshu",
            type: "Lists"
        },
        {
            id: 6,
            places: 13,
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=80",
            title: "Best things to eat in the East Bay",
            location: "Berkeley, California",
            author: "sxshu",
            type: "Lists"
        },
        {
            id: 7,
            places: 21,
            image: "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=500&q=80",
            title: "Guide to Budapest - Food & Activities",
            location: "Budapest, Hungary",
            author: "goaskmarshall",
            type: "Lists"
        },
        {
            id: 8,
            places: 21,
            image: "https://images.unsplash.com/photo-1534131707746-25d604851a1f?w=500&q=80",
            title: "Where to Eat in Amsterdam if you don't like Dutch food",
            location: "Amsterdam, The Netherlands",
            author: "goaskmarshall",
            type: "Lists"
        }
    ];

    // Filter cards based on active tab and search query
    const filteredCards = cardData.filter(card => {
        const matchesTab = activeTab === "All" || card.type === activeTab
        const matchesSearch = card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            card.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            card.author.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesTab && matchesSearch
    })

    // Toggle save/unsave place
    const toggleSave = (id) => {
        setSavedPlaces(prev => {
            const newSet = new Set(prev)
            if (newSet.has(id)) {
                newSet.delete(id)
            } else {
                newSet.add(id)
            }
            return newSet
        })
    }
    return (
        <div className="flex h-screen bg-white">
            {/* Sidebar */}
            <div className="w-[147px] border-r border-gray-200 flex flex-col">
                <div className="p-4">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&q=80"
                            width={24}
                            height={24}
                            alt="Mindtrip logo"
                            className="mr-1"
                        />
                        <span className="font-bold text-lg">mindtrip.</span>
                    </Link>
                </div>

                <nav className="flex-1 px-3 py-2">
                    <Link href="/chat" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span>Chat</span>
                    </Link>

                    <Link
                        href="/explore"
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        <div className="w-5 h-5 flex items-center justify-center">
                            <Search size={18} />
                        </div>
                        <span>Explore</span>
                    </Link>

                    <Link href="/saved" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span>Saved</span>
                    </Link>

                    <Link
                        href="/updates"
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        <div className="w-5 h-5 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M9 16L11 18L15 14M14 2H8.8C6.11984 2 4.77976 2 3.82208 2.32698C2.96341 2.6146 2.21917 3.16229 1.73661 3.90067C1.2 4.72117 1.2 5.86432 1.2 8.15062V17.8494C1.2 20.1357 1.2 21.2788 1.73661 22.0993C2.21917 22.8377 2.96341 23.3854 3.82208 23.673C4.77976 24 6.11984 24 8.8 24H15.2C17.8802 24 19.2202 24 20.1779 23.673C21.0366 23.3854 21.7808 22.8377 22.2634 22.0993C22.8 21.2788 22.8 20.1357 22.8 17.8494V10L14 2Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span>Updates</span>
                    </Link>

                    <Link href="/inspiration" className="flex items-center gap-3 px-3 py-2 rounded-md bg-gray-100 text-gray-900">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.04298 7.74707C9.7051 7.1721 10.7584 7.1721 11.4205 7.74707L14.5795 10.4235C15.2416 10.9985 15.2416 11.9015 14.5795 12.4765L11.4205 15.1529C10.7584 15.7279 9.7051 15.7279 9.04298 15.1529C8.38086 14.5779 8.38086 13.6749 9.04298 13.0999L10.8215 11.5L9.04298 9.90008C8.38086 9.32511 8.38086 8.42204 9.04298 7.74707Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span>Inspiration</span>
                    </Link>

                    <Link href="/create" className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
                        <div className="w-5 h-5 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 8V16M8 12H16M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span>Create</span>
                    </Link>
                </nav>

                <div className="p-3 mt-auto">
                    <button className="w-full py-2 px-4 bg-gray-100 rounded-full text-sm font-medium text-gray-800">
                        New chat
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-2xl font-bold mb-4">Inspiration</h1>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-4">
                        {["All", "Itineraries", "Lists", "People"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                                    activeTab === tab 
                                        ? "bg-black text-white" 
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="Search for location or username"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full py-3 px-4 bg-gray-100 rounded-full text-sm"
                        />
                        <button className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Search size={18} className="text-gray-500" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {filteredCards.slice(0, 8).map((card) => (
        <div key={card.id} className="relative rounded-lg overflow-hidden group">
            <div className="absolute top-2 left-2 z-10 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                {card.places} places
            </div>
            <button 
                onClick={() => toggleSave(card.id)}
                className="absolute top-2 right-2 z-10 p-1.5 bg-black/60 rounded-full text-white"
            >
                <Heart 
                    size={16} 
                    className={savedPlaces.has(card.id) ? "fill-current" : ""} 
                />
            </button>
            <Image
                src={card.image}
                width={300}
                height={400}
                alt={card.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-3">
                <h3 className="font-medium text-sm">{card.title}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none">
                        {/* SVG paths remain unchanged */}
                    </svg>
                    {card.location}
                </div>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                    <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none">
                        {/* SVG paths remain unchanged */}
                    </svg>
                    {card.author}
                </div>
            </div>
        </div>
        
    ))}
</div>
</div>
</div>
</div>

)
}