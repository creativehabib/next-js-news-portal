"use client"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Switch } from "./ui/switch"
import { Button } from "./ui/button"
import {usePathname} from "next/navigation";
import {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  const pathname = usePathname()
  return (
    <header className="py-4 bg-white text-gray-900 shadow-md transition-colors duration-300">
        <nav className="max-7xl mx-auto flex justify-between items-center px-4 sm:px-6">
            {/* Logo */}
            <div className="text-xl font-bold">
                <Link href="/">Daily News</Link>
            </div>

            {/* desktop navigation */}
            <NavigationMenu className="hidden lg:flex">
                <NavigationMenuList className="flex space-x-8">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/news" className={`${pathname === '/news' ? 'text-red-500 font-semibold' : ''} hover: text-gray-600`}>News</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="dark:bg-gray-900 dark:text-white">Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink asChild>
                        <ul className="text-gray-600 shadow-md rounded-md py-4 px-5 space-y-2">
                          <li>
                            <NavigationMenuLink className="hover: text-gray-600" asChild>
                              <Link href="/services/web-development">Web Developers</Link>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink className="hover: text-gray-600" asChild>
                              <Link href="/services/mobile-apps">Mobile Apps</Link>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuLink>

                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href={'/about'} className={`${pathname === '/about' ? 'text-red-500 font-semibold' : ''} hover: text-gray-600`}>About</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href={'/contact'} className={`${pathname === '/contact' ? 'text-red-500 font-semibold' : ''} hover: text-gray-600`}>
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* color switcher and login */}
              <div className="hidden lg:flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="mr-2">Dark Mode</span>
                  <Switch/>
                </div>
                <Button variant="default" className="px-6">Login</Button>
              </div>

              {/* hamburger menu for mobile */}
              <div className="lg:hidden">
                <Button onClick={toggleMobileMenu}>
                  {
                    isMobileMenuOpen ? (<AiOutlineClose size={24}/>) : (<AiOutlineMenu size={24}/>)
                  }
                </Button>
              </div>
        </nav>
    </header>
  )
}

export default Navbar
