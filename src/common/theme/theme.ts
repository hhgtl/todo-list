import type { ThemeMode } from "@/app/app-slice.ts"
import { createTheme } from "@mui/material/styles"

export const getTheme = (themeMode: ThemeMode) => {
  return createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: "#7e57c2",
      },
      secondary: {
        main: "#1a237e",
      },
    },
  })
}
