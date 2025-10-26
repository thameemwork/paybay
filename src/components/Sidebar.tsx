import React, { useState } from "react";
import logo from '../assets/img/logo.svg';
import {
  LayoutDashboard,
  Clock,
  CreditCard,
  Building2,
  Users,
  UserPlus,
  FileText,
  HelpCircle,
  Settings,
  Power,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}
export const Sidebar = () => {
   const [openSections, setOpenSections] = useState({
    merchant: false,
    customer: false,
    user: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const mainMenu: MenuItem[] = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-4 h-4" />, active: true },
    { label: "Manual Transaction", icon: <Clock className="w-4 h-4 navlist " /> },
    { label: "Subscription Count", icon: <CreditCard className="w-4 h-4 navlist" /> },
  ];

  const merchantMenu: MenuItem[] = [
    { label: "Create Merchant profile", icon: <Building2 className="w-4 h-4 navlist" /> },
  ];

  const customerMenu: MenuItem[] = [
    { label: "Create Customer profile", icon: <Users className="w-4 h-4 navlist" /> },
  ];

  const userMenu: MenuItem[] = [
    { label: "Create User", icon: <UserPlus className="w-4 h-4 navlist" /> },
    { label: "Reports", icon: <FileText className="w-4 h-4 navlist" /> },
  ];

  const bottomMenu: MenuItem[] = [
    { label: "Support", icon: <HelpCircle className="w-4 h-4 navlist" /> },
    { label: "Settings", icon: <Settings className="w-4 h-4 navlist" /> },
    { label: "Logout", icon: <Power className="w-4 h-4 navlist" /> },
  ];
  return (
    <div className="w-64 bg-white text-white fixed shadow">
       <div className="p-4 text-2xl font-bold border-b border-gray-700 logo">
      <img src={logo} alt="Logo" className="h-8" /> 
      </div> 
      <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between">
      {/* Scrollable Main Section */}
      <div className="px-4 py-6 overflow-y-auto flex-1">
        {/* Main Menu */}
        <nav className="space-y-2">
          {mainMenu.map((item, i) => (
            <Button
              key={i}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                item.active
                  ? "active-sidebar-item text-white hover:bg-blue-600"
                  : "text-gray-700 hover:bg-gray-100 navlist"
              }`}
            >
              {item.icon}
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Merchant Management */}
        <div className="mt-5">
          <button
            onClick={() => toggleSection("merchant")}
            className="w-full flex items-center justify-between text-gray-600 text-sm font-medium mb-2"
          >
            <span className="text-xs text-gray-500 uppercase">Merchant Management</span>
            {openSections.merchant ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {openSections.merchant && (
            <div className="space-y-1">
              {merchantMenu.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer navlist"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Customer Management */}
        <div className="mt-5">
          <button
            onClick={() => toggleSection("customer")}
            className="w-full flex items-center justify-between text-gray-600 text-sm font-medium mb-2"
          >
            <span className="text-xs text-gray-500 uppercase">Customer Management</span>
            {openSections.customer ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {openSections.customer && (
            <div className="space-y-1">
              {customerMenu.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer navlist"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User Management */}
        <div className="mt-5">
          <button
            onClick={() => toggleSection("user")}
            className="w-full flex items-center justify-between text-gray-600 text-sm font-medium mb-2"
          >
            <span className="text-xs text-gray-500 uppercase">User Management</span>
            {openSections.user ? (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </button>
          {openSections.user && (
            <div className="space-y-1">
              {userMenu.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer navlist"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Menu */}
      <div className="border-t px-4 py-4 space-y-2">
        {bottomMenu.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer navlist"
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
      
       

     
    </div>
  )
}
export default Sidebar;