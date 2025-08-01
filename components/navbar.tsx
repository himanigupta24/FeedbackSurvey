"use client"

import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, LayoutDashboard, FileEdit, MessageSquare, Home, BarChart2, Sparkles, ClipboardList, MessageCircle, BarChart3 } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const navItems = [
    { 
      name: "Home", 
      href: "/", 
      icon: Home,
      className: "from-blue-500 to-cyan-400"
    },
    { 
      name: "Give Feedback", 
      href: "/feedback", 
      icon: MessageCircle,
      className: "from-purple-500 to-pink-400"
    },
    ...(user?.role === "admin"
      ? [
          { 
            name: "Create Survey", 
            href: "/create-survey", 
            icon: ClipboardList,
            className: "from-emerald-500 to-teal-400"
          },
          { 
            name: "Analytics", 
            href: "/analytics", 
            icon: BarChart3,
            className: "from-amber-500 to-orange-400"
          },
        ]
      : []),
  ]

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Survox</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 group"
              >
                <div className={`p-1.5 rounded-lg bg-gradient-to-br ${item.className} group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-4 w-4 text-white" />
                </div>
                <span className="text-foreground/80 group-hover:text-foreground transition-colors">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  {user.email} ({user.role})
                </span>
                <Button onClick={logout} variant="outline" size="sm">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="btn-hover">
                    Register
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 hover:bg-muted/50 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`p-1.5 rounded-lg bg-gradient-to-br ${item.className}`}>
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-foreground/90">{item.name}</span>
                </Link>
              ))}
              {user ? (
                <div className="px-3 py-2 space-y-2">
                  <div className="text-sm text-muted-foreground">
                    {user.email} ({user.role})
                  </div>
                  <Button onClick={logout} variant="outline" size="sm" className="w-full bg-transparent">
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="px-3 py-2 space-y-2">
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    <Button size="sm" className="w-full btn-hover">
                      Register
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
