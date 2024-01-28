import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";
import { authState } from "@/store/AuthSlice";
import { ProfileMenu } from "./MenuAccount/page";

function NavList() {
  const stateAuth = useAppSelector(authState);
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {stateAuth ? (
        <ProfileMenu />
      ) : (
        <Typography
          placeholder={undefined}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link
            href="/login"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Login
          </Link>
        </Typography>
      )}
    </ul>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar
      shadow={false}
      className="mx-auto max-w-screen-xl px-6 py-3"
      placeholder={undefined}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          placeholder={undefined}
          as="li"
          variant="h3"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <Link
            href="/"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            Library
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          placeholder={undefined}
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
