import { useRef } from "react";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper-bundle.min.css";

// @mui material components
import Card from "@mui/material/Card";

// MicroEdge Suite components
import MicroEdgeBox from "components/MicroEdgeBox";
import MicroEdgeTypography from "components/MicroEdgeTypography";

// Images
import bg1 from "assets/images/img-2.jpg";
import bg2 from "assets/images/img-1.jpg";
import bg3 from "assets/images/img-3.jpg";

function Slider() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden" }}>
      <Swiper
        onInit={({ params, navigation }) => {
          const { navigation: nav } = params;

          nav.prevEl = navigationPrevRef.current;
          nav.nextEl = navigationNextRef.current;
          navigation.init();
          navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
        style={{ height: "100%" }}
      >
        <MicroEdgeBox
          display="flex"
          alignItems="center"
          position="absolute"
          top={12}
          right={12}
          zIndex={5}
        >
          <MicroEdgeBox
            width="3.25rem"
            height="3.25rem"
            color="white"
            p={2}
            sx={{ cursor: "pointer" }}
            ref={navigationPrevRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </MicroEdgeBox>
          <MicroEdgeBox
            width="3.25rem"
            height="3.25rem"
            color="white"
            p={2}
            sx={{ cursor: "pointer" }}
            ref={navigationNextRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </MicroEdgeBox>
        </MicroEdgeBox>
        <SwiperSlide>
          <MicroEdgeBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <MicroEdgeBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
              <MicroEdgeBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="32px"
                height="32px"
                bgColor="white"
                borderRadius="md"
                textAlign="center"
                mb={2}
              >
                <MicroEdgeTypography variant="caption" color="dark" lineHeight={0}>
                  <MicroEdgeBox component="i" color="dark" className="ni ni-camera-compact" />
                </MicroEdgeTypography>
              </MicroEdgeBox>
              <MicroEdgeTypography variant="h5" color="white" mb={0.5}>
                Get started with MicroEdge
              </MicroEdgeTypography>
              <MicroEdgeTypography variant="body2" color="white">
                There&apos;s nothing I really wanted to do in life that I wasn&apos;t able to get
                good at.
              </MicroEdgeTypography>
            </MicroEdgeBox>
          </MicroEdgeBox>
        </SwiperSlide>
        <SwiperSlide>
          <MicroEdgeBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <MicroEdgeBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
              <MicroEdgeBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="32px"
                height="32px"
                bgColor="white"
                borderRadius="md"
                textAlign="center"
                mb={2}
              >
                <MicroEdgeTypography variant="caption" lineHeight={0}>
                  <MicroEdgeBox component="i" color="dark" className="ni ni-bulb-61" />
                </MicroEdgeTypography>
              </MicroEdgeBox>
              <MicroEdgeTypography variant="h5" color="white" mb={0.5}>
                Faster way to create web pages
              </MicroEdgeTypography>
              <MicroEdgeTypography variant="body2" color="white">
                That&apos;s my skill. I&apos;m not really specifically talented at anything except
                for the ability to learn.
              </MicroEdgeTypography>
            </MicroEdgeBox>
          </MicroEdgeBox>
        </SwiperSlide>
        <SwiperSlide>
          <MicroEdgeBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg3})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <MicroEdgeBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
              <MicroEdgeBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="32px"
                height="32px"
                bgColor="white"
                borderRadius="md"
                textAlign="center"
                mb={2}
              >
                <MicroEdgeTypography variant="caption" color="dark" lineHeight={0}>
                  <MicroEdgeBox component="i" color="dark" className="ni ni-trophy" />
                </MicroEdgeTypography>
              </MicroEdgeBox>
              <MicroEdgeTypography variant="h5" color="white" mb={0.5}>
                Share with us your design tips!
              </MicroEdgeTypography>
              <MicroEdgeTypography variant="body2" color="white">
                Don&apos;t be afraid to be wrong because you can&apos;t learn anything from a
                compliment.
              </MicroEdgeTypography>
            </MicroEdgeBox>
          </MicroEdgeBox>
        </SwiperSlide>
      </Swiper>
    </Card>
  );
}

export default Slider;
