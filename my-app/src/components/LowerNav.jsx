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
            <div key={index}>
              <MenuItem onClick={() => handleTabClick(index)}>
                <Typography>{tab.title}</Typography>
              </MenuItem>
              {selectedTab === index &&
                tab.options.map((option, i) => (
                  <MenuItem key={i} sx={{ pl: 4 }}>
                    {option}
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
          {uppertabs.map((tab, index) => (
            <Box
              key={index}
              sx={{
                px: 2,
                py: 1,
                display: "flex",
                alignItems: "center",
                color: "black",
                fontWeight: 500,
              }}
            >
              <Typography sx={{ color: "grey" }}>{tab.title}</Typography>
              <ArrowDropDownIcon fontSize="small" />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#0050E6",
          py: 2.5,
          px: 1.5,
          color: "white",
          position: "relative",
          left: "39%",
        }}
      >
        Contact IBM Consulting
      </Box>
    </Box>
  );
};

export default LowerNav;
