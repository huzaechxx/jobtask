import React from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const cards = [
    {
      title: "Expertly crafted solutions with global reach",
      description:
        "Our procurement and supply chain processes enhance operations for your organization’s success.",
      linkText: "Let's Co-Create",
      linkUrl: "#",
    },
    {
      title: "Strategic, collaborative, and driven",
      description:
        "We leverage innovative strategies and cutting-edge technology to streamline our processes.",
      linkText: "Business Process Outsourcing",
      linkUrl: "#",
    },
    {
      title: "Fresh perspective for continuous transformation",
      description:
        "Expert teams to develop groundbreaking solutions “Yes, we can do it even better.”",
      linkText: "Direct Procurement",
      linkUrl: "#",
    },
  ];

  return (
    // Scrollable wrapper with hidden scrollbar
    <Box
      sx={{
        height: "84vh",
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {/* Background image section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: 'url("/Magazine cover.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: isSm ? 1200 : isMd ? 850 : 850, // reduce height on smaller screens
          width: "100%",
        }}
      >
        <Box sx={{ position: "relative", height: "100%" }}>
          {/* Text container */}
          <Box
            sx={{
              position: "absolute",
              top: isSm ? "40%" : isMd ? "30%" : "40%",
              left: isSm ? "10%" : isMd ? "25%" : "60%",
              transform: isSm
                ? "translate(0%, -200%)"
                : isMd
                ? "translate(-40%, -50%)"
                : "translate(-90%, -80%)",
              width: isSm ? "90%" : isMd ? "50%" : "50%",
              color: "white",
            }}
          >
            <Typography
              sx={{
                fontSize: isSm ? 20 : isMd ? 24 : 30,
                fontWeight: "bold",

                mb: 2,
              }}
            >
              1IGS exemplifies its dedication to sustainability through
              innovative procurement and supply chain practices that boost
              operational efficiency and drive industry-leading innovation
            </Typography>
            <Typography
              sx={{
                fontSize: isSm ? 12 : 14,
                mb: 3,
              }}
            >
              1IGS is committed to delivery high quality products on time,
              everytime
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "dodgerblue",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Book A Meeting
            </Button>
          </Box>

          {/* Overlay Image */}
          <Box
            component="img"
            src="/banner-images.png"
            alt="Overlay"
            sx={{
              position: "absolute",
              top: isSm ? "25%" : isMd ? "40%" : "50%",
              left: isSm ? "50%" : isMd ? "25%" : "55%",
              transform: "translate(60%, -50%)",
              width: isSm ? "30%" : isMd ? 400 : 400,
              maxWidth: "90vw",
              height: "auto",
            }}
          />

          {/* Cards section */}
          <Box
            sx={{
              position: "absolute",
              top: isSm ? "35%" : isMd ? "-50%" : "35%",
              left: isSm ? "50%" : isMd ? "20%" : "50%",
              transform: isSm ? "translate(-50%, 0%)" : "translate(-50%, 250%)",
              width: isSm ? "35%" : isMd ? "10%" : "70%",
              gap: 3,
              display: "flex",
              flexDirection: isSm ? "column" : "row",
              alignItems: isSm ? "stretch" : "center",
            }}
          >
            {cards.map((card, index) => (
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  flex: isSm ? "unset" : "1 1 0",
                  borderRadius: 1,
                  px: isSm ? 2 : 5,
                  py: 2,
                  mb: isSm ? 2 : 0,
                  color: "white",
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                }}
                key={index}
              >
                <Typography sx={{ mb: 1, fontSize: isSm ? 5 : isMd ? 15 : 10 }}>
                  {card.title}
                </Typography>
                <Typography
                  sx={{ fontSize: 12, mb: 1, lineHeight: 1.4 }}
                  component="p"
                >
                  {card.description}
                </Typography>
                <a
                  href={card.linkUrl}
                  style={{ color: "orangered", textDecoration: "none" }}
                >
                  {card.linkText}
                </a>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
