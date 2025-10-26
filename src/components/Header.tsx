
import { Bell, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export const Header = () => {
  return (
   <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm">
      {/* Left Section - Logo + Search */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <h1 className="text-2xl font-semibold text-gray-900 header-logo">
          PayBayGoAdmin
        </h1>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-9 w-64 rounded-full bg-gray-50 border-gray-200 text-sm"
          />
        </div>
      </div>

      {/* Right Section - Notifications + Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <div className="relative">
          <Bell className="w-5 h-5 text-blue-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            6
          </span>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
            <AvatarFallback>JJ</AvatarFallback>
          </Avatar>
          <div className="text-sm leading-tight">
            <p className="font-medium text-gray-900">Joe John</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <Button variant="ghost" size="icon" className="h-5 w-5 p-0">
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </Button>
        </div>
      </div>
    </header>
  )
}
export default Header;1