import React from "react";
import {
  Box,
  Center,
  Text,
  Stack,
  Image,
  Button,
  Flex,
} from "@chakra-ui/react";
import { CardButtonAction } from "../../../CardButtonAction";
import { BookingDates } from "../BookingDates";

export default function BookingCard({ booking, buttons }) {
  const { id, dateFrom, dateTo, guests, venue, customer } = booking;

  const venueName = venue.name;
  const venueMedia = venue.media.length > 0 ? venue.media[0] : "";

  return (
    <Flex key={id}>
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
              backgroundImage: `url(${venueMedia})`,
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
              src={venueMedia}
              alt={venueName}
            />
          </Box>
          <Stack pt={5} align={"center"}>
            <BookingDates dateFrom={dateFrom} dateTo={dateTo} guests={guests} />
            <Text
              textStyle={"playfair"}
              color={"brand.darkBrick"}
              fontSize={"2xl"}
              fontWeight={500}>
              {venueName}
            </Text>

            {buttons.map((btn, index) => (
              <Button
                key={index}
                variant="button"
                onClick={() =>
                  CardButtonAction({ id: venue.id, action: btn.action })
                }>
                {btn.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Center>
    </Flex>
  );
}
