import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/use-auth";

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center">
              <i className="ri-magic-line text-primary text-2xl mr-2"></i>
              <span className="font-bold text-xl text-primary">HomeGenie</span>
            </a>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/">
            <a className="px-4 py-2 rounded-md hover:bg-gray-100 transition font-medium">Home</a>
          </Link>
          <Link href="/book">
            <a className="px-4 py-2 rounded-md hover:bg-gray-100 transition font-medium">Book</a>
          </Link>
          <Link href="/community">
            <a className="px-4 py-2 rounded-md hover:bg-gray-100 transition font-medium">Community</a>
          </Link>
          <Link href="/history">
            <a className="px-4 py-2 rounded-md hover:bg-gray-100 transition font-medium">History</a>
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" className="rounded-full">
                <i className="ri-notification-3-line text-xl"></i>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {user?.fullName.split(' ').map(n => n[0]).join('').toUpperCase() || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <a className="w-full cursor-pointer">Profile</a>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a className="cursor-pointer" onClick={() => logout()}>Log out</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link href="/register">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
