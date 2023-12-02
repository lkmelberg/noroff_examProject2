import { Flex, Text, Image, Divider, Stack } from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Meta } from "../Meta";
import { Location } from "../Location";

export function VenueRender({ isLoading, isError, venue }) {
  const { name, description, media, price, maxGuests, meta, location } = venue;

  let images = null;
  if (venue && media && media.length >= 1) {
    images = media.slice(0, 4);
  }

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  };

  const flexInfoStyle = {
    flexDirection: "column",
    flexWrap: "nowrap",
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : (
        //   main cont
        <Flex direction={"column"} margin={"2rem"}>
          {/* header cont */}
          <Text as={"h1"} textStyle={"playfair"} pb={3} color="brand.beige">
            {name}
          </Text>
          {/* price cont */}
          <Text textStyle={"lato"}>Price per night: ${price}</Text>
          {/* image cont  */}
          <Flex wrap={"wrap"}>
            {images ? (
              images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Image ${index}`}
                  boxSize="10rem"
                  m="2"
                />
              ))
            ) : (
              <Text>No media</Text>
            )}
          </Flex>

          {/* top divider        */}
          <Divider orientation="horizontal" />

          {/* description, features, locations cont  */}
          <Flex
            direction={"row"}
            mt={1}
            mb={5}
            wrap={"wrap"}
            gap={"1rem"}
            alignItems={"center"}
            justifyContent={"space-around"}>
            {/* description cont  */}
            <Flex style={flexInfoStyle}>
              <Text textStyle={"lato"}>Description</Text>
              <Text mb={3} textStyle={"bodyText"}>
                Max Guests: {maxGuests}
              </Text>
              <Text maxW={"20rem"} textStyle={"bodyText"}>
                {description}
              </Text>
            </Flex>
            <Flex direction={"row"} wrap={"wrap"} gap={"4rem"}>
              {/* description and features divider        */}
              <Stack direction="row" h="8rem">
                <Divider orientation="vertical" />
                {/* features cont  */}
                <Flex style={flexInfoStyle}>
                  <Text textStyle={"lato"}>Features</Text>

                  <Meta meta={meta} listItemStyle={listItemStyle} />
                </Flex>
              </Stack>

              {/* features and location divider        */}
              <Stack direction="row" h="8rem">
                <Divider orientation="vertical" />

                {/* locations cont  */}
                <Flex style={flexInfoStyle}>
                  <Text textStyle={"lato"}>Location</Text>
                  <Location location={location} listItemStyle={listItemStyle} />
                </Flex>
              </Stack>
            </Flex>
          </Flex>
          {/* top divider        */}
          <Divider orientation="horizontal" />
        </Flex>
      )}
    </div>
  );
}
