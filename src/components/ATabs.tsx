import { Tab } from "@headlessui/react";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Greet } from "../greet.tsx";

export interface NavigationItem {
  name: string;
  icon: any;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation: NavigationItem[] = [
  { name: "Greet", icon: HomeIcon },
  { name: "Team", icon: UsersIcon },
  { name: "Projects", icon: FolderIcon },
  { name: "Calendar", icon: CalendarIcon },
  { name: "Documents", icon: DocumentDuplicateIcon },
  { name: "Reports", icon: ChartPieIcon },
];

export default function ATabs() {
  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="grid grid-flow-col gap-x-4 rounded-xl bg-blue-900/20 p-1">
          {navigation.map((item) => (
            <Tab
              key={item.name}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg bg-gray-950 ",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-gray-600 hover:text-white",
                )
              }
            >
              <div className="grid grid-cols-7 ml-1 place-items-start py-2">
                <item.icon
                  className="text-indigo-200 text-2xl h-12 w-12 col-start-1 col-end-3"
                  aria-hidden="true"
                />
                <p className="text-4xl col-start-3 col-end-7">{item.name}</p>
              </div>
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel
            key="greet"
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <Greet></Greet>
          </Tab.Panel>

          <Tab.Panel
            key="greetp"
            className={classNames(
              "rounded-xl bg-white p-3",
              "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
            )}
          >
            <EmptyElement></EmptyElement>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

function EmptyElement() {
  return <>Empty</>;
}
