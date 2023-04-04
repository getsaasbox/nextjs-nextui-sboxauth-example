import { Box } from "./Box.js";
import { AppNavbar } from "./AppNavbar.js"

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    <AppNavbar />
    <main className="flex-1">
      {children}
    </main>
  </Box>
);
