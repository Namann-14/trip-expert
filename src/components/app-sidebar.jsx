import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { HomeIcon, SettingsIcon, ChartIcon } from "./ui/icons"
import Link from "next/link"
  
  export function AppSidebar() {
    const navigationItems = [
      { icon: HomeIcon, label: "Dashboard", href: "/dashboard" },
      { icon: ChartIcon, label: "Analytics", href: "/dashboard/analytics" },
      { icon: SettingsIcon, label: "Settings", href: "/dashboard/settings" },
    ]
  
    return (
      <Sidebar>
        <SidebarHeader>
          <div className="p-4">
            <h2 className="text-xl font-bold">Trip Expert</h2>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="p-4 border-t">
            <p className="text-sm text-gray-500">© 2025 Trip Expert</p>
          </div>
        </SidebarFooter>
      </Sidebar>
    )
  }