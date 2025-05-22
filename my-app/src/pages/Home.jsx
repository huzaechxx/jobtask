import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  const cards = [
    {
      title: "Expertly crafted solutions with global reach",
      description:
        "Our procurement and supply chain processes enhance operations for your organization’s success.",
      linkText: "Let's Co-Create",
      linkUrl: "#", // Update with actual URL if needed
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
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE/Edge
        "&::-webkit-scrollbar": {
          display: "none", // Chrome/Safari
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
          height: 950,
          width: "100%",
        }}
      >
        <Box>
          <Box width={"40%"}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-90%, -80%)",
                width: "37%",
              }}
            >
              <Typography sx={{ color: "white", fontSize: 30 }}>
                1IGS exemplifies its dedication to sustainability through
                innovative procurement and supply chain practices that boost
                operational efficiency and drive industry-leading innovation
              </Typography>{" "}
              <Typography sx={{ color: "white", fontSize: 14, paddingTop: 2 }}>
                1IGS is committed to delivery high quality products on time,
                everytime
              </Typography>{" "}
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "dodgerblue",
                  marginTop: 2,
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
                top: "50%",
                left: "78%",
                transform: "translate(-50%, -50%)",
                width: 700,
              }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, 250%)",
              width: "70%",
              gap: 5,
              display: "flex",
              alignItems: "center",
            }}
          >
            {cards.map((card, index) => (
              <Box
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)", // translucent white
                  width: "100%",
                  borderRadius: 1,
                  px: 5,
                  py: 1,
                }}
                key={index}
              >
                <h3 style={{ color: "white" }}>{card.title}</h3>
                <p style={{ color: "white", fontSize: 12, marginTop: 15 }}>
                  {card.description}
                </p>
                <a href={card.linkUrl} style={{ color: "orangered" }}>
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
