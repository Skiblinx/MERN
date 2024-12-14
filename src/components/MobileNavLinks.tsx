import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { Separator } from "./ui/separator";

const MobileNavLinks = () => {

  const { logout } = useAuth0()
  return (
    <>
      <Link to="/user-profile" className="flex bg-white items-center font-bold hover:text-orange-500">
        User Profile
      </Link>
      <Separator />
      <Link to="/manage-restuarant" className="flex bg-white items-center font-bold hover:text-orange-500">
        Manage Restuarant
      </Link>
      <Separator />
      <Button onClick={() => logout()} className="flex items-center font-bold px-3 hover:bg-gray-500">
        Log Out
      </Button>
    </>
  )
}

export default MobileNavLinks;