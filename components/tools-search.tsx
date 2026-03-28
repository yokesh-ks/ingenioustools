"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { toolCategories } from "@/lib/tools";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function ToolsSearchBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();

  return (
    <Popover open={searchOpen} onOpenChange={setSearchOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 rounded-md border border-sidebar-border bg-sidebar-accent/40 px-3 h-8 text-sm text-muted-foreground w-56 hover:bg-sidebar-accent transition-colors">
          <Search className="size-3.5 shrink-0" />
          <span>Search tools...</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-72" align="start">
        <Command>
          <CommandInput placeholder="Search tools..." autoFocus />
          <CommandList>
            <CommandEmpty>No tools found.</CommandEmpty>
            {toolCategories.map((category) => (
              <CommandGroup key={category.id} heading={category.name}>
                {category.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <CommandItem
                      key={tool.id}
                      value={tool.name}
                      onSelect={() => {
                        router.push(tool.href);
                        setSearchOpen(false);
                      }}
                    >
                      <Icon className="size-4 shrink-0" />
                      <span>{tool.name}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function ToolsCategoryMenu() {
  const router = useRouter();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-8 px-3 text-sm bg-sidebar-accent/40 border border-sidebar-border hover:bg-sidebar-accent data-[state=open]:bg-sidebar-accent">
            Category
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-44 p-1">
              <li>
                <button
                  className="w-full text-left rounded-sm px-3 py-1.5 text-sm hover:bg-accent transition-colors"
                  onClick={() => router.push("/tools")}
                >
                  All Categories
                </button>
              </li>
              {toolCategories.map((category) => (
                <li key={category.id}>
                  <button
                    className="w-full text-left rounded-sm px-3 py-1.5 text-sm hover:bg-accent transition-colors"
                    onClick={() => router.push(`/tools#${category.id}`)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
