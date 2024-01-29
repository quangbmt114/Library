import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { PresentationChartBarIcon, PowerIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function DefaultSidebar() {
  const router = useRouter();
  return (
    <Card
      className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 h-dvh"
      placeholder={undefined}
      shadow={false}
    >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" placeholder={undefined}>
          <Link href="/">Home</Link>
        </Typography>
      </div>
      <List placeholder={undefined}>
        <ListItem placeholder={undefined}>
          <ListItemPrefix placeholder={undefined}>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem
          placeholder={undefined}
          onClick={() => {
            localStorage.clear();
            router.push("/login");
          }}
        >
          <ListItemPrefix placeholder={undefined}>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
