import React from "react";

import routes from "../../config/routes/routesList";

import { GridLayout, NavArea, FooterArea } from "./style";

import switchRoutes from "../../config/routes/Routes";
import Sidebar from "./templates/Sidebar/Sidebar";
import Footer from "./templates/Footer/Footer";

const MainLayout = () => {
  return (
    <GridLayout>
      {switchRoutes}
      <NavArea>
        <Sidebar routes={routes} />
      </NavArea>
      <FooterArea>
        <Footer />
      </FooterArea>
    </GridLayout>
  );
};

export default MainLayout;
