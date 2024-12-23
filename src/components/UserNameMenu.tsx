import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UserNameMenu = () => {
  const { user, logout } = useAuth0()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link to="/manage-restuarant" className="font-bold hover:text-orange-500 border-none">Manage Restuarant</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-orange-500 border-none">User Profile</Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="">
          <Button onClick={() => logout()} className="flex flex-1 font-bold bg-orange-500">
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNameMenu;