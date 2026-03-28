import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex-1 overflow-auto">{children}</main>
        <footer className="border-t">
          <div className="px-6 py-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>© 2026 <a href="https://www.ingeniousclan.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">IngeniousClan</a>. All rights reserved.</span>
            <span>Made with ♥ by <a href="https://www.yokesh.in/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Yokesh</a></span>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
