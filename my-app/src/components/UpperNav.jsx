import React, { useState } from "react";
import {
  Box,
  Typography,
  Popper,
  Paper,
  ClickAwayListener,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  useMediaQuery,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/PersonOutline";
import LanguageIcon from "@mui/icons-material/ChatOutlined";
import Arrow from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

const UpperNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const uppertabs = [
    {
      title: "AI",
      options: [
        "Consultancy",
        "Agents",
        "Overview",
        "WatonX",
        "Granite Modals",
      ],
    },
    {
      title: "Hybrid Cloud",
      options: [
        "Consultancy",
        "Overview",
        "Hybrid Services",
        "VMware",
        "Granite Modals",
      ],
    },
    {
      title: "Products",
      options: [
        "Overview",
        "WatonX",
        "API Tools",
        "Data Studio",
        "Granite Modals",
      ],
    },
    { title: "Consulting", options: null },
    {
      title: "Support",
      options: ["Agents", "Help Center", "FAQ", "Contact", "Granite Modals"],
    },
    { title: "Think", options: null },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (event, index) => {
    // Toggle the dropdown only if it's not tab 3 or 5
    if (index === 3 || index === 5) return;

    if (anchorEl && activeTab === index) {
      setAnchorEl(null);
      setActiveTab(null);
    } else {
      setAnchorEl(event.currentTarget);
      setActiveTab(index);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveTab(null);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleAccordionToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  if (isMobile) {
    return (
      <Box
        sx={{
          borderBottom: "1px solid #ccc",
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1,
        }}
      >
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <SearchIcon sx={{ mx: 1 }} />
        <LanguageIcon sx={{ mx: 1 }} />
        <AccountCircleIcon sx={{ mx: 1 }} />

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          <Box sx={{ width: 250, p: 2 }}>
            <img
              src="/ibm.png"
              alt="IBM"
              style={{ width: 100, marginBottom: 16 }}
            />
            <List>
              {uppertabs.map((tab, index) => (
                <React.Fragment key={index}>
                  <ListItem button onClick={() => handleAccordionToggle(index)}>
                    <ListItemText primary={tab.title} />
                    {tab.options ? (
                      expandedIndex === index ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItem>
                  {tab.options && (
                    <Collapse
                      in={expandedIndex === index}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {tab.options.map((option, subIndex) => (
                          <ListItem key={subIndex} sx={{ pl: 4 }}>
                            <Arrow fontSize="small" />
                            <Typography sx={{ ml: 1 }}>{option}</Typography>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    );
  }

  // Desktop view (same as your original)
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid  rgb(200, 200, 200)",
        py: 0.5,
      }}
    >
      {/* Logo */}
      <Box sx={{ width: "60px", mr: 3, ml: 3 }}>
        <img src="/ibm.png" alt="IBM" style={{ width: "100%", height: 25 }} />
      </Box>

      <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

      {/* Tabs */}
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {uppertabs.map((tab, index) => {
          const isDropdown = index !== 3 && index !== 5;
          const isActive = activeTab === index;
          return (
            <Box
              key={index}
              onClick={(e) => handleClick(e, index)}
              sx={{
                px: 2,
                py: 1,
                display: "flex",
                alignItems: "center",
                color: "black",
                fontWeight: 500,
                cursor: isDropdown ? "pointer" : "default",
                "&:hover": {
                  backgroundColor: isDropdown ? "#e0e0e0" : "transparent",
                },
                borderRadius: 1,
                position: "relative",
              }}
            >
              <Typography sx={{ color: "grey" }}>{tab.title}</Typography>
              {isDropdown && <ArrowDropDownIcon fontSize="small" />}
            </Box>
          );
        })}
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2, pr: 3 }}>
        <SearchIcon sx={{ cursor: "pointer" }} />
        <LanguageIcon sx={{ cursor: "pointer" }} />
        <AccountCircleIcon sx={{ cursor: "pointer" }} />
      </Box>
      {/* Full-width Dropdown Panel */}
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 0],
            },
          },
        ]}
        sx={{
          zIndex: 200,
          width: "100vw",
          left: 0,
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Paper
            sx={{
              mt: 1,
              p: 2,
              width: "100%",
              backgroundColor: "white",
              borderRadius: 0,
            }}
          >
            {activeTab !== null && (
              <>
                <Typography fontWeight="bold" gutterBottom>
                  {uppertabs[activeTab]?.title} Options
                </Typography>
                <Box
                  display="flex"
                  flexWrap="wrap" // ✅ Enables wrapping
                  alignItems="flex-start"
                  width="80%"
                  gap={2} // optional spacing between boxes
                >
                  {uppertabs[activeTab]?.options?.map((option, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: "1 1 250px", // ✅ Responsive width
                        padding: 1,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ display: "flex", alignItems: "center" }}
                      >
                        {option}
                        <Arrow />
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </>
            )}
          </Paper>
        </ClickAwayListener>
      </Popper>
    </Box>
  );
};

export default UpperNav;
