import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
  MenuItemStyles,
} from "react-pro-sidebar";
import { SidebarHeader } from "./SidebarHeader.tsx";
import { Link, Route, Routes } from "react-router-dom";
import { Greet } from "../greet.tsx";
import AButton from "./AButton.tsx";

const themes = {
  dark: {
    sidebar: {
      backgroundColor: "#000000",
      color: "#ffb4ad",
    },

    menu: {
      menuContent: "#000000",
      icon: "#ffb4ad",
      hover: {
        backgroundColor: "#36311f",
        color: "#fcbeb9",
      },
      disabled: {
        color: "#eaeaea",
      },
    },
  },
};
// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const ATabs: React.FC = () => {
  const theme = themes.dark;

  const [collapsed, setCollapsed] = React.useState(false);

  // handle on RTL change event

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: theme.menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: theme.menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: () => ({ backgroundColor: theme.menu.menuContent }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: theme.menu.disabled.color,
      },
      "&:hover": {
        backgroundColor: hexToRgba(theme.menu.hover.backgroundColor, 1),
        color: theme.menu.hover.color,
      },
      [`&.active`]: {
        backgroundColor: "#13395e",
        color: "#b6c8d9",
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div className="h-full -mb-96">
      <div style={{ display: "flex", height: "100%", direction: "ltr" }}>
        <Sidebar
          breakPoint="md"
          collapsedWidth="25px"
          collapsed={collapsed}
          backgroundColor={hexToRgba(theme.sidebar.backgroundColor, 1)}
          rootStyles={{
            color: theme.sidebar.color,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <AButton
              id="collapse"
              className={collapsed ? "" : "ml-52"}
              onClick={() => setCollapsed(!collapsed)}
              title={collapsed ? ">" : "<"}
            />

            {collapsed ? (
              <>
                <div className="h-screen"></div>
              </>
            ) : (
              <>
                <SidebarHeader
                  rtl={false}
                  style={{
                    marginBottom: "24px",
                    marginTop: "16px",
                  }}
                />
                <div style={{ flex: 1, marginBottom: "32px" }}>
                  <Menu menuItemStyles={menuItemStyles}>
                    <SubMenu label="Tools">
                      <MenuItem component={<Link to="/tools/greet" />}>
                        {" "}
                        Greet{" "}
                      </MenuItem>
                      <MenuItem component={<Link to="/tools/auth0" />}>
                        {" "}
                        Auth0
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="Secrets">
                      <MenuItem component={<Link to="/secrets/settings" />}>
                        {" "}
                        Settings{" "}
                      </MenuItem>
                      <MenuItem component={<Link to="/secrets/values" />}>
                        {" "}
                        Values
                      </MenuItem>
                    </SubMenu>
                    <SubMenu label="Settings">
                      <MenuItem component={<Link to="/settings/general" />}>
                        {" "}
                        General
                      </MenuItem>
                      <MenuItem component={<Link to="/settings/profile" />}>
                        {" "}
                        Profile{" "}
                      </MenuItem>
                    </SubMenu>
                    <div className="h-screen"></div>
                  </Menu>
                </div>
              </>
            )}
          </div>
        </Sidebar>

        <main className="ml-2">
          <Routes>
            <Route path="/tools">
              <Route path="greet" element={<Greet />} />
              <Route
                path="auth0"
                element={
                  <div>
                    <p className="text-me-pink">doc</p>
                  </div>
                }
              />
            </Route>
            <Route path="/secrets">
              <Route
                path="settings"
                element={
                  <div>
                    <p className="text-me-pink">settings</p>
                  </div>
                }
              />
              <Route
                path="values"
                element={
                  <div>
                    <p className="text-me-pink">values</p>
                  </div>
                }
              />
            </Route>

            <Route path="/settings">
              <Route
                path="general"
                element={
                  <div>
                    <p className="text-me-pink">general</p>
                  </div>
                }
              />
              <Route
                path="profile"
                element={
                  <div>
                    <p className="text-me-pink">profile</p>
                  </div>
                }
              />
            </Route>
          </Routes>
        </main>
      </div>
    </div>
  );
};
