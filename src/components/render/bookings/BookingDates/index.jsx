import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export function BookingDates({ dateFrom, dateTo, guests }) {
  const formattedDateFrom = new Date(dateFrom).toLocaleDateString();
  const formattedDateTo = new Date(dateTo).toLocaleDateString();

  return (
    <Flex direction={"column"} gap={"1rem"}>
      <Flex direction={"row"} wrap={"wrap"} gap={"1rem"}>
        <Text color={"brand.darkBrick"} fontSize={"sm"}>
          From: {formattedDateFrom}
        </Text>
        <Text color={"brand.darkBrick"} fontSize={"sm"}>
          To: {formattedDateTo}
        </Text>
      </Flex>
      <Text color={"brand.darkBrick"} fontSize={"sm"}>
        Guests: {guests}
      </Text>
    </Flex>
  );
}
