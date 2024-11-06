import { Box, Drawer, styled, useTheme } from "@mui/material";

import { Link } from "react-router-dom";
import Scrollbar from "../scrollbar";
import SidebarMenu from "./sidebar-menu";
import SidebarTopSection from "./sidebar-top-section";

const LogoWrapper = styled(Link)(
  () => `
        text-decoration: none;
`,
);

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.sidebar.textColor};
        background: ${theme.sidebar.background};
        box-shadow: ${theme.sidebar.boxShadow};
        position: relative;
        z-index: 7;
        height: 100%;
        @media (min-width: ${theme.breakpoints.values.lg}px) {
          height: calc(100% - ${theme.header.height});
          margin-top: ${theme.header.height};
        }
`,
);

const TopSection = styled(Box)(
  ({ theme }) => `
        margin: ${theme.spacing(2)};
`,
);

function Sidebar({ sidebarToggle, toggleSidebar, user, menuItems }: any) {
  const closeSidebar = () => toggleSidebar();

  const theme = useTheme();

  return (
    <>
      <SidebarWrapper
        sx={{
          display: {
            xs: "none",
            lg: "inline-block",
          },
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <Scrollbar>
          <TopSection>
            <SidebarTopSection user={user} />
          </TopSection>
          <SidebarMenu closeSidebar={closeSidebar} menuItems={menuItems} />
        </Scrollbar>
      </SidebarWrapper>
      <Drawer
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
        }}
        anchor={theme.direction === "rtl" ? "right" : "left"}
        open={sidebarToggle}
        onClose={closeSidebar}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper>
          <Scrollbar>
            <TopSection>
              <Box
                sx={{
                  width: 52,
                  ml: 1,
                  mt: 1,
                  mb: 3,
                }}
              >
                <Box sx={{ width: "100px", height: "50px" }}>
                  <LogoWrapper to="/">
                    <img
                      //@ts-ignore
                      src={import.meta.env.VITE_LOGO_WHITE_URL}
                      alt="logo"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </LogoWrapper>
                </Box>
              </Box>
              <SidebarTopSection user={user} />
            </TopSection>
            <SidebarMenu
              closeSidebar={closeSidebar}
              menuItems={menuItems}
            />
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </>
  );
}

export default Sidebar;
