import React, { useState } from "react";
import {
  Box,
  Typography,
  Popper,
  Paper,
  ClickAwayListener,
  MenuItem,
  Menu,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import Arrowforward from "@mui/icons-material/ArrowForward";

const LowerNav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const uppertabs = [
    {
      title: "Consulting",
      options: ["Advisory", "Transformation", "Technology", "Operations"],
    },
    {
      title: "Capabilities",
      options: [
        "AI & Automation",
        "Cloud",
        "Cybersecurity",
        "Data",
        "Analytics",
        "Blockchain",
      ],
    },
    {
      title: "Industries",
      options: [
        "Banking",
        "Healthcare",
        "Retail",
        "Automotive",
        "Government",
        "Energy",
      ],
    },
    {
      title: "Strategic Partners",
      options: ["AWS", "Microsoft", "SAP", "Salesforce", "Adobe", "Oracle"],
    },
    {
      title: "Insights",
      options: ["Research", "Reports", "Case Studies", "Blog", "Podcasts"],
    },
    {
      title: "Careers",
      options: ["Life at IGS", "Jobs", "Internships", "Leadership", "Culture"],
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  const handleClickd = (event, index) => {
    // Toggle the dropdown only if it's not tab 3 or 5
    if (index === 0 || index === 5) return;

    if (anchorEl && activeTab === index) {
      setAnchorEl(null);
      setActiveTab(null);
    } else {
      setAnchorEl(event.currentTarget);
      setActiveTab(index);
    }
  };

  const handleClosed = () => {
    setAnchorEl(null);
    setActiveTab(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTab(null);
  };

  const handleTabClick = (tabIndex) => {
    setSelectedTab(tabIndex);
  };

  if (isMobile) {
    return (
      <Box sx={{ borderTop: "1px solid #ccc", px: 2, py: 1 }}>
        <Box
          onClick={handleClick}
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          <Typography>Explore</Typography>
          <ArrowDropDownIcon />
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {uppertabs.map((tab, index) => (
            <div
              key={index}
              style={{
                width: "800px",
                borderBottom: "1px solid rgb(200,200,200)",
              }}
            >
              <MenuItem
                sx={{ width: "100%" }}
                onClick={() => handleTabClick(index)}
              >
                <Typography>{tab.title}</Typography>
              </MenuItem>
              {selectedTab === index &&
                tab.options.map((option, i) => (
                  <MenuItem key={i} sx={{ pl: 4, gap: 2 }}>
                    <Arrowforward /> {option}
                  </MenuItem>
                ))}
            </div>
          ))}
        </Menu>
      </Box>
    );
  }

  // Desktop version (as in your original)
  return (
    <Box
      sx={{
        borderBottom: "1px solid rgb(200, 200, 200)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", pt: 2.5 }}>
        <Box sx={{ display: "flex" }}>
          {uppertabs.map((tab, index) => {
            const isDropdown = index !== 0 && index !== 5;
            const isActive = activeTab === index;

            return (
              <Box
                key={index}
                onClick={(e) => handleClickd(e, index)}
                sx={{
                  px: 2,
                  py: 1,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                  fontWeight: 500,
                  cursor: isDropdown ? "pointer" : "default",
                  "&:hover": {
                    backgroundColor: isDropdown ? "#e0e0e0" : "transparent",
                  },
                  borderBottom: isActive
                    ? "2px solid blue"
                    : "2px solid transparent",
                  transition: "border-bottom 0.2s ease-in-out",
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
        {/* Dropdown Panel */}
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="bottom-start"
          disablePortal
          sx={{ zIndex: 200 }}
        >
          <ClickAwayListener onClickAway={handleClosed}>
            <Paper
              sx={{
                mt: 1,
                p: 2,
                minWidth: "100%",
                backgroundColor: "",
                borderRadius: 2,
              }}
            >
              {activeTab !== null && (
                <>
                  <Typography fontWeight="bold" gutterBottom>
                    {uppertabs[activeTab]?.title} Options
                  </Typography>

                  <Box
                    display="flex"
                    flexWrap="wrap"
                    alignItems="flex-start"
                    width={"100%"}
                    gap={2}
                  >
                    {uppertabs[activeTab]?.options?.map((option, index) => (
                      <Box
                        key={index}
                        sx={{
                          flex: "1 1 250px",
                          padding: 1,
                          borderRadius: 1,
                        }}
                      >
                        <Typography variant="body2">{option}</Typography>
                      </Box>
                    ))}
                  </Box>
                </>
              )}
            </Paper>
          </ClickAwayListener>
        </Popper>
      </Box>
      <Box
        sx={{
          backgroundColor: "#0050E6",
          py: 2.5,
          px: 1.5,
          color: "white",
          position: "relative",
          left: "40%",
        }}
      >
        Contact IBM Consulting
      </Box>
    </Box>
  );
};

export default LowerNav;
