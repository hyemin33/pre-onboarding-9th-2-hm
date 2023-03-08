import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <Grid
      templateAreas={`"header""main""footer"`}
      gridTemplateRows={"90px 1fr 90px"}
      h="100vh"
      gap="1"
      color="#fff"
      fontWeight="bold"
    >
      <GridItem bg="#789bfb" area={"header"}>
        라이크어로컬
      </GridItem>
      <GridItem bg="#fff" area={"main"}>
        <Outlet />
      </GridItem>
      <GridItem bg="#0c0608eb" area={"footer"}>
        (주) 라이크어로컬
      </GridItem>
    </Grid>
  );
};

export default DefaultLayout;
