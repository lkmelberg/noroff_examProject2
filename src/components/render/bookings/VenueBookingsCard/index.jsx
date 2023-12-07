// BookingCard.jsx
import React from "react";
import { Box, Center, Stack, Flex } from "@chakra-ui/react";

import { BookingDates } from "../BookingDates";

export default function VenueBookingsCard({ booking }) {
  const { id, dateFrom, dateTo, guests } = booking;

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
          {/* <Box
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
            }}></Box> */}
          <Stack pt={5} align={"center"}>
            <BookingDates dateFrom={dateFrom} dateTo={dateTo} guests={guests} />
          </Stack>
        </Box>
      </Center>
    </Flex>
  );
}
