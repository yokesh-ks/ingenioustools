import Link from "next/link";
import { ArrowRight, Wrench, Shield, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { toolCategories, allTools } from "@/lib/tools";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-base">Ingenious Tools</span>
          <div className="flex items-center gap-4">
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

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Tools that just work.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {allTools.length}+ free, browser-based utilities for images, colour, text, PDFs, and more.
            No logins. No tracking. No data leaves your machine.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Browse all tools
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="border-t bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-8 sm:grid-cols-3">
          <div className="space-y-2">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <Zap className="size-4 text-primary" />
            </div>
            <h3 className="font-semibold">Fast &amp; local</h3>
            <p className="text-sm text-muted-foreground">
              Everything runs in your browser. No uploads, no servers, no waiting.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="size-4 text-primary" />
            </div>
            <h3 className="font-semibold">Private by design</h3>
            <p className="text-sm text-muted-foreground">
              No accounts, no tracking, no data collection — ever.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10">
              <Wrench className="size-4 text-primary" />
            </div>
            <h3 className="font-semibold">{toolCategories.length} categories</h3>
            <p className="text-sm text-muted-foreground">
              Images, colour, text, PDF, QR codes, maths, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Category preview */}
      <section className="max-w-6xl mx-auto px-6 py-16 w-full">
        <h2 className="text-xl font-semibold mb-8">What can you do?</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {toolCategories.map((category) => {
            const First = category.tools[0]?.icon;
            return (
              <Link
                key={category.id}
                href={`/tools#${category.id}`}
                className="group flex items-center gap-3 rounded-lg border p-4 hover:border-foreground/20 hover:bg-muted/50 transition-all"
              >
                {First && (
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-muted group-hover:bg-primary/10 transition-colors">
                    <First className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-medium text-sm">{category.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {category.tools.length} tool{category.tools.length !== 1 ? "s" : ""}
                  </p>
                </div>
                <ArrowRight className="size-3.5 ml-auto text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>© 2026 <a href="https://www.ingeniousclan.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">IngeniousClan</a>. All rights reserved.</span>
          <span>Made with ♥ by <a href="https://www.yokesh.in/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Yokesh</a></span>
        </div>
      </footer>
    </div>
  );
}
