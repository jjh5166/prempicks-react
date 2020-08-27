import React from "react";

import NavBar from '../NavBar';
import { PageContainer, ContentContainer } from './styled';

const Layout = ({ children, hideNav = false }) => (
  <PageContainer>
    {!hideNav && <NavBar />}
    <ContentContainer>
      {children}
    </ContentContainer>
  </PageContainer>
);

export default Layout;