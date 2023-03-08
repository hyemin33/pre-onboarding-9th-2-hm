import {
  SimpleGrid,
  Box,
  Select,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import ProductItem from "./ProductItem";
import mockData from "../../data/mock-data.json";
import { useState } from "react";
import React from "react";
import ModalComponent from "../../components/Modal";

const MainPage = () => {
  const [filter, setFilter] = useState("price");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

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
          <ProductItem
            key={`product` + i}
            item={item}
            detailButton={
              <Button ref={btnRef} onClick={onOpen}>
                자세히보기
              </Button>
            }
          />
        ))}
      </SimpleGrid>
      <ModalComponent
        item={mockData[0]}
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="inside"
      />
    </Box>
  );
};

export default MainPage;
