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
  const [priceFilter, setPriceFilter] = useState(1000);
  const [spaceFilter, setSpaceFilter] = useState("seoul");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Box>
      <Box align="right" height="80px">
        <Select
          placeholder="가격을 선택해주세요"
          w="200px"
          defaultValue={priceFilter}
        >
          {[1000, 2000, 3000].map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Select>
        <Select
          placeholder="공간을 선택해주세요"
          w="200px"
          defaultValue={spaceFilter}
        >
          {["서울", "부산", "대구"].map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
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
