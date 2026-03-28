import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { toolCategories } from "@/lib/tools";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "Tools — Ingenious Tools",
};

export default function ToolsPage() {
  return (
    <div className="p-6 md:p-8 lg:p-10">
      <div className="mb-10">
        <h1 className="text-2xl font-bold">All Tools</h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Browse all available tools by category.
        </p>
      </div>

      <div className="space-y-10">
        {toolCategories.map((category) => (
          <section key={category.id} id={category.id}>
            <h2 className="text-lg font-semibold mb-4 text-foreground/80">
              {category.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link key={tool.id} href={tool.href}>
                    <Card className="group h-full transition-all hover:border-foreground/20 hover:shadow-md">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                          <div className="flex size-10 items-center justify-center rounded-lg bg-muted group-hover:bg-primary/10 transition-colors">
                            <Icon className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <ArrowRight className="size-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <CardTitle className="text-base mt-3">
                          {tool.name}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {tool.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
