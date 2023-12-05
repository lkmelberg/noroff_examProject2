import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Center,
  Text,
  Stack,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";

function VenueCard({ venue }) {
  const id = venue.id;
  const formattedPrice = Math.floor(Number(venue.price));
  const formattedMaxGuests = Math.floor(Number(venue.maxGuests));
  return (
    <Flex key={venue.id}>
      <Center py={12} paddingBottom={4}>
        <Box
          role={"group"}
          p={4}
          maxW={"18rem"}
          w={"full"}
          bg={"brand.beige"}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}>
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: "${venue.media[0]}",
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={venue.media[0]}
              alt={venue.name}
            />
          </Box>
          <Stack pt={5} align={"center"}>
            <Text
              color={"brand.darkBrick"}
              fontSize={"sm"}
              textTransform={"uppercase"}>
              Guest Spaces: {formattedMaxGuests}
            </Text>
            <Text
              textStyle={"playfair"}
              color={"brand.darkBrick"}
              fontSize={"2xl"}
              fontWeight={500}>
              {venue.name}
            </Text>
            <Stack direction={"row"} align={"center"}>
              <Text color={"brand.brick"} fontWeight={800} fontSize={"xl"}>
                ${formattedPrice}
              </Text>
              <Text color={"brand.brick"}>Per Night</Text>
            </Stack>

            <Button variant="button">
              <Link to={`/venues/${id}`}>See more</Link>
            </Button>
          </Stack>
        </Box>
      </Center>
    </Flex>
  );
}

export default VenueCard;
