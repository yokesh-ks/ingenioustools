import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { ToolsSearchBar, ToolsCategoryMenu } from "@/components/tools-search";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-sidebar">
        <div className="px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-16">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <img src="/logo.png" width={28} height={28} alt="Ingenious Tools logo" />
              <span className="font-semibold text-base">Ingenious Tools</span>
            </Link>
            <ToolsSearchBar />
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <ToolsCategoryMenu />
            <ThemeToggle />
            <Link
              href="/tools"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse Tools
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden bg-sidebar pb-2 pr-2 [&_[data-slot=sidebar-container]]:top-14 [&_[data-slot=sidebar-container]]:h-[calc(100svh-3.5rem)]">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="rounded-xl overflow-hidden border">
            <main className="flex-1 overflow-auto">{children}</main>
            <footer className="border-t">
              <div className="px-6 py-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>© 2026 <a href="https://www.ingeniousclan.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">IngeniousClan</a>. All rights reserved.</span>
                <span>Made with ♥ by <a href="https://www.yokesh.in/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Yokesh</a></span>
              </div>
            </footer>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
