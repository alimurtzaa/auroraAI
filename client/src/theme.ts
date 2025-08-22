import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark", // Pure dark elegance 🖤
    primary: {
      main: "#ffffff", // Pure white for contrast
      light: "#f8f9fa", // Off-white
      dark: "#e9ecef", // Light gray
      contrastText: "#000000",
    },
    secondary: {
      main: "#6c757d", // Muted gray
      light: "#adb5bd", // Light gray
      dark: "#495057", // Dark gray
      contrastText: "#ffffff",
    },
    background: {
      default: "#000000", // Pure black
      paper: "#111111", // Near black
    },
    surface: {
      main: "#1a1a1a", // Dark surface
      light: "#222222",
      dark: "#0d0d0d",
    },
    text: {
      primary: "#ffffff", // Pure white text
      secondary: "#b0b0b0", // Light gray
      disabled: "#666666", // Medium gray
    },
    divider: "#333333",
    error: {
      main: "#ff4757", // Subtle red
      light: "#ff6b7d",
      dark: "#c44569",
    },
    warning: {
      main: "#ffa726", // Subtle orange
      light: "#ffcc02",
      dark: "#ff8f00",
    },
    success: {
      main: "#2ed573", // Subtle green
      light: "#7bed9f",
      dark: "#5f27cd",
    },
    info: {
      main: "#70a1ff", // Subtle blue
      light: "#5352ed",
      dark: "#3742fa",
    },
  },
  typography: {
    fontFamily: "'Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', sans-serif",
    h1: { 
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.1,
      letterSpacing: "-0.025em",
      color: "#ffffff",
    },
    h2: { 
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
      color: "#ffffff",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.3,
      letterSpacing: "-0.015em",
      color: "#ffffff",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: 1.4,
      color: "#ffffff",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.00938em",
      color: "#ffffff",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
      color: "#b0b0b0",
    },
    button: { 
      textTransform: "none", 
      fontWeight: 500,
      letterSpacing: "0.01em",
      fontSize: "0.95rem",
    },
    caption: {
      fontSize: "0.75rem",
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
      color: "#666666",
    },
  },
  shape: {
    borderRadius: 8, // Clean, minimal radius
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "12px 24px",
          fontSize: "0.95rem",
          fontWeight: 500,
          textTransform: "none",
          letterSpacing: "0.01em",
          transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        contained: {
          backgroundColor: "#ffffff",
          color: "#000000",
          boxShadow: "0 2px 8px rgba(255, 255, 255, 0.1)",
          "&:hover": {
            backgroundColor: "#f0f0f0",
            transform: "translateY(-1px)",
            boxShadow: "0 4px 16px rgba(255, 255, 255, 0.15)",
          },
          "&:active": {
            transform: "translateY(0px)",
          },
        },
        outlined: {
          borderColor: "#333333",
          color: "#ffffff",
          backgroundColor: "transparent",
          "&:hover": {
            borderColor: "#555555",
            backgroundColor: "#111111",
          },
        },
        text: {
          color: "#b0b0b0",
          "&:hover": {
            backgroundColor: "#111111",
            color: "#ffffff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: "#111111",
          border: "1px solid #222222",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.7)",
            border: "1px solid #333333",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#111111",
          border: "1px solid #222222",
        },
        elevation1: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
        },
        elevation2: {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
        },
        elevation3: {
          boxShadow: "0 6px 16px rgba(0, 0, 0, 0.5)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            backgroundColor: "#0a0a0a",
            border: "1px solid #333333",
            color: "#ffffff",
            transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              border: "1px solid #555555",
            },
            "&.Mui-focused": {
              border: "1px solid #ffffff",
              boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.1)",
            },
            "& fieldset": {
              border: "none",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#666666",
            "&.Mui-focused": {
              color: "#ffffff",
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: "#222222",
          color: "#ffffff",
          border: "1px solid #333333",
          fontSize: "0.875rem",
          "&:hover": {
            backgroundColor: "#333333",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #222222",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.8)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#000000",
          borderRight: "1px solid #222222",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          margin: "2px 8px",
          color: "#b0b0b0",
          "&:hover": {
            backgroundColor: "#111111",
            color: "#ffffff",
          },
          "&.Mui-selected": {
            backgroundColor: "#222222",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#333333",
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #222222",
        },
        indicator: {
          backgroundColor: "#ffffff",
          height: 2,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
          fontSize: "0.95rem",
          color: "#666666",
          minHeight: 48,
          "&.Mui-selected": {
            color: "#ffffff",
          },
          "&:hover": {
            color: "#b0b0b0",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#b0b0b0",
          "&:hover": {
            backgroundColor: "#111111",
            color: "#ffffff",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#ffffff",
            "& + .MuiSwitch-track": {
              backgroundColor: "#333333",
            },
          },
        },
        track: {
          backgroundColor: "#222222",
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
        track: {
          backgroundColor: "#ffffff",
        },
        rail: {
          backgroundColor: "#333333",
        },
      },
    },
  },
});

export default theme;