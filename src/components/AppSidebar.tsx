"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar";

import {
    ChevronDown,
    PanelLeft,
    LayoutDashboard,
    Trophy,
    Swords,
    Users,
    Briefcase,
    Shield,
    CreditCard,
    Flag,
    BarChart3,
    Bell,
    Settings,
    ShieldAlert
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const sidebarItems = [
    { title: "Dashboard", url: "/", icon: LayoutDashboard },
    { title: "Tournaments", url: "#", icon: Trophy },
    { title: "Matches", url: "/matches", icon: Swords },
    { title: "Players", url: "/players", icon: Users },
    { title: "Organizers", url: "#", icon: Briefcase },
    { title: "Guilds / Teams", url: "#", icon: Shield },
    { title: "Finance", url: "#", icon: CreditCard },
    { title: "Disputes & Reports", url: "#", icon: Flag },
    { title: "Analytics", url: "#", icon: BarChart3 },
    { title: "Notifications", url: "#", icon: Bell },
    { title: "Settings", url: "#", icon: Settings },
    { title: "Admin Tools", url: "#", icon: ShieldAlert },
];

export function AppSidebar() {
    const { toggleSidebar } = useSidebar();
    const pathname = usePathname();

    return (
        <Sidebar collapsible="icon" className="border-r border-white/5 bg-zinc-950/70 backdrop-blur-md text-zinc-400">
            <SidebarHeader className="h-16 flex-row items-center justify-between px-4 border-b border-white/5 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
                <div className="flex items-center gap-3 group-data-[collapsible=icon]:hidden">
                    <div className="flex items-center justify-center">
                        <Image src="/logo.svg" alt="Corpse Logo" width={32} height={32} className="h-8 w-8" />
                    </div>
                    <span className="text-lg font-semibold tracking-tight text-white">
                        Corpse
                    </span>
                </div>

                {/* Mobile toggle */}
                <button onClick={toggleSidebar} className="ml-auto md:hidden">
                    <PanelLeft className="h-5 w-5" />
                </button>

                {/* Desktop toggle */}
                <button
                    onClick={toggleSidebar}
                    className="hidden md:flex items-center justify-center p-1.5 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors group-data-[collapsible=icon]:ml-0"
                >
                    <PanelLeft className="h-5 w-5" />
                </button>
            </SidebarHeader>

            <SidebarContent className="px-2 py-4 gap-4 scrollbar-none group-data-[collapsible=icon]:px-0">
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        tooltip={item.title}
                                        isActive={pathname === item.url}
                                        className="data-[active=true]:bg-gradient-to-r data-[active=true]:from-brand-red/10 data-[active=true]:to-transparent data-[active=true]:text-white data-[active=true]:shadow-[inset_2px_0_0_0_#D7333A] hover:bg-white/5 hover:text-white transition-all duration-300 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2 relative overflow-hidden"
                                    >
                                        <Link href={item.url} className="flex items-center gap-2 w-full relative z-10">
                                            <item.icon className="h-4 w-4 shrink-0" />
                                            <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-zinc-900/50 group-data-[collapsible=icon]:hidden">
                {/* Optional footer content */}
            </SidebarFooter>
        </Sidebar >
    );
}


