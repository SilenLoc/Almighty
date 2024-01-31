import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Editor", href: "/editor" },
  { name: "Greet", href: "/greet" },
  { name: "Settings", href: "/settings" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <>
      <div className="mx-auto px-4 bg-slate-900">
        <div className="flex h-16">
          <div className="flex">
            <div className="flex items-center">
              <img className="h-8 w-auto" src="/logo.png" alt="Hurlalot" />
            </div>
            <div className="ml-6 flex items-center space-x-3">
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.href}>
                  {({ isActive }) => (
                    <div
                      className={classNames(
                        isActive
                          ? "bg-dark-accent text-white"
                          : "text-white hover:bg-white hover:text-black",
                        "rounded-md px-4 py-2 text-lg font-medium",
                      )}
                    >
                      <span>{item.name}</span>
                    </div>
                  )}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center bg-neutral"></div>
          </div>
        </div>
      </div>
    </>
  );
}
