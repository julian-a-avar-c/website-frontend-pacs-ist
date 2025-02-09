"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "./ui/input"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export const Header: React.FC = () => {
    return (
        <NavigationMenu className={cn("hidden md:block")}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/articles" className={cn(navigationMenuTriggerStyle(), "bg-transparent border-2 border-transparent hover:border-white font-bold hover:bg-transparent focus:border-white")}>
                        {/* PACS &and; IST
                        PACS &times; IST
                        PACS &plus; IST
                        PACS &dash; IST
                        PACS &#128626; IST */}
                        IST &#128627; PACS
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/articles" className={cn(navigationMenuTriggerStyle(), "bg-transparent border-2 border-transparent hover:border-white font-bold hover:bg-transparent focus:border-white")}>
                        Articles
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/library" className={cn(navigationMenuTriggerStyle(), "bg-transparent border-2 border-transparent hover:border-white font-bold hover:bg-transparent focus:border-white")}>
                        Library
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/catalog" className={cn(navigationMenuTriggerStyle(), "bg-transparent border-2 border-transparent hover:border-white font-bold hover:bg-transparent focus:border-white")}>
                        IST Catalog
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/solutions">
                        <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), "bg-transparent font-bold border-2 border-transparent hover:border-white focus:bg-transparent focus:border-white")}>Solutions</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <ListItem href="/solutions/energy" title="Energy Saving">
                                    ...
                                </ListItem>
                                <ListItem href="/solutions/waste" title="Waste Reduction">
                                    ...
                                </ListItem>
                                <ListItem href="/solutions/sustainability" title="Sustainability">
                                    ...
                                </ListItem>
                                <ListItem href="/solutions/throughput" title="Increased Throughput">
                                    ...
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Input type="text" placeholder="Search library & catalog" className="rounded-full pl-3 text-slate-500 border-2 border-transparent hover:border-black focus:border-black" />
                </NavigationMenuItem>

                {/* <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Icons.logo className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that you can copy and
                                            paste into your apps. Accessible. Customizable. Open
                                            Source.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
                        Documentation
                    </NavigationMenuLink>
                </NavigationMenuItem> */}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
