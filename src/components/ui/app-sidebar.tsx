import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { DashboardIcon } from "@radix-ui/react-icons";
import { CircleDollarSign, Cog, Home, UserRoundPen, Users } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: DashboardIcon,
    enabled: true,
  },
  {
    title: "Characters",
    url: "/characters",
    icon: UserRoundPen,
    enabled: true,
  },
  {
    title: "Party",
    url: "/party",
    icon: Users,
    enabled: true,
  },
  {
    title: "Boosts",
    url: "/boosts",
    icon: CircleDollarSign,
    enabled: false,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                if (!item.enabled) return;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              {/*              <a href={"/settings"}>
                <Cog />
                <span>Settings</span>
              </a>*/}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
