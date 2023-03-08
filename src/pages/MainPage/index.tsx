import { SimpleGrid, Box, Select } from "@chakra-ui/react";
import ProductItem from "./ProductItem";
import mockData from "../../data/mock-data.json";
import { useState } from "react";

const MainPage = () => {
  const [filter, setFilter] = useState("price");

  return (
    <Box>
      <Box align="right" height="80px">
        <Select
          placeholder="필터를 선택해주세요"
          w="200px"
          defaultValue={filter}
        >
          <option value="price">가격</option>
          <option value="spaceCategory">공간</option>
        </Select>
      </Box>
      <SimpleGrid columns={4} spacing={8}>
        {mockData?.map((item: any, i: number) => (
          <ProductItem key={`product` + i} item={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MainPage;
