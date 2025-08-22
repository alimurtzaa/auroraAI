import { 
  Box, 
  Button, 
  Typography, 
  Paper, 
  Grid, 
  TextField, 
  InputAdornment, 
  IconButton,
  Chip,
  Stack
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function Landing() {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestions = [
    "Modern login page with glassmorphism",
    "E-commerce product card",
    "Dashboard with dark theme",
    "Landing page for SaaS app"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      setIsTyping(true);
      // Simulate processing
      setTimeout(() => {
        setIsTyping(false);
        setInputValue("");
      }, 2000);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 🔹 Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 4,
          py: 2,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            style={{ borderRadius: "8px", marginRight: "10px" }}
          />
          <Typography variant="h6" fontWeight={700}>
            NLP → Figma SaaS
          </Typography>
        </Box>
        {/* Buttons */}
        <Box>
          <Button color="secondary" variant="text" sx={{ mr: 2 }}>
            Login
          </Button>
          <Button color="primary" variant="contained">
            Get Started
          </Button>
        </Box>
      </Box>

      {/* 🔹 Hero Section */}
      <Grid
        container
        sx={{
          flexGrow: 1,
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background abstract icons */}
        <ChatBubbleOutlineIcon
          sx={{
            position: "absolute",
            top: "15%",
            left: "10%",
            fontSize: 60,
            opacity: 0.1,
          }}
        />
        <DesignServicesIcon
          sx={{
            position: "absolute",
            bottom: "20%",
            right: "15%",
            fontSize: 80,
            opacity: 0.1,
          }}
        />
        <AutoAwesomeIcon
          sx={{
            position: "absolute",
            top: "30%",
            right: "35%",
            fontSize: 50,
            opacity: 0.08,
          }}
        />

        {/* Middle Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Convert Conversations into{" "}
            <span style={{ color: "#ffffff" }}>Designs</span> ✨
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Turn natural language prompts into stunning Figma-ready designs in seconds.
          </Typography>

          {/* Enhanced Interactive Chat Box */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 4,
              maxWidth: "600px",
              mx: "auto",
              bgcolor: "background.paper",
              border: "1px solid #222222",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Chat Messages */}
            <Box sx={{ mb: 3, textAlign: "left" }}>
              

              

              {/* Typing Indicator */}
              {/* in this when typing ... display a page and navigate to other page */}
              {isTyping && (
                <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}>
                  <Box
                    sx={{
                      bgcolor: "#222222",
                      border: "1px solid #333333",
                      borderRadius: "16px 16px 16px 4px",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 0.5 }}>
                      {[1, 2, 3].map((dot) => (
                        <Box
                          key={dot}
                          sx={{
                            width: 6,
                            height: 6,
                            bgcolor: "#666666",
                            borderRadius: "50%",
                            animation: `typing 1.4s infinite ease-in-out ${dot * 0.2}s`,
                            "@keyframes typing": {
                              "0%, 80%, 100%": { opacity: 0.3, transform: "scale(0.8)" },
                              "40%": { opacity: 1, transform: "scale(1)" },
                            },
                          }}
                        />
                      ))}
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      Creating your design...
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>


            {/* Enhanced Input Field */}
            <TextField
              fullWidth
              multiline
              maxRows={3}
              placeholder="Describe the design you want to create..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                  pr: 1,
                  "& textarea": {
                    fontSize: "1rem",
                    lineHeight: 1.5,
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleSend}
                      disabled={!inputValue.trim() || isTyping}
                      sx={{
                        bgcolor: inputValue.trim() ? "#ffffff" : "transparent",
                        color: inputValue.trim() ? "#000000" : "#666666",
                        "&:hover": {
                          bgcolor: inputValue.trim() ? "#f0f0f0" : "#111111",
                        },
                        "&.Mui-disabled": {
                          bgcolor: "transparent",
                          color: "#333333",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      <SendIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {/* Quick Suggestions */}
            <Box sx={{ mt: 3 , display:"flex", flexDirection:"column" ,justifyContent:"center", alignItems:"center"}}>
              <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: "block" }}>
                Try these prompts:
              </Typography>
              <Stack direction="row" spacing={1} sx={{  flexWrap: "wrap", gap: 3 }}>
                {suggestions.map((suggestion, index) => (
                  <Chip
                    key={index}
                    label={suggestion}
                    variant="outlined"
                    size="small"
                    onClick={() => handleSuggestionClick(suggestion)}
                    sx={{
                      cursor: "pointer",
                      fontSize: "0.75rem",
                      "&:hover": {
                        bgcolor: "#333333",
                        borderColor: "#555555",
                      },
                    }}
                  />
                ))}
              </Stack>
            </Box>

        
          </Paper>

          {/* Call to Action */}
          {/* <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<AutoAwesomeIcon />}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: 3,
              }}
            >
              Start Creating for Free
            </Button>
            <Typography variant="caption" display="block" sx={{ mt: 1, color: "text.secondary" }}>
              No credit card required • 5 free designs
            </Typography>
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
}