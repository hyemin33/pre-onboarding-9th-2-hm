import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <Grid
      templateAreas={`"header""main"`}
      gridTemplateRows={"90px 1fr"}
      h="100vh"
      fontWeight="bold"
    >
      <GridItem bg="#789bfb" area={"header"}>
        라이크어로컬
      </GridItem>
      <GridItem area={"main"} w="100%" padding="50px">
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default DefaultLayout;
