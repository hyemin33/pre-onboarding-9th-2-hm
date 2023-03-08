import { Badge, Image, Box, ButtonGroup, Button } from "@chakra-ui/react";

import { IProductProps } from "../../types";

const ProductItem = ({ item, detailButton }: any) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={item.mainImage} alt={item.mainImage} object-fit={true} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {item.spaceCategory}
          </Badge>
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {item.idx}
        </Box>
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {item.name}
        </Box>

        <Box>{item.price}</Box>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            예약
          </Button>
          {detailButton}
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default ProductItem;
