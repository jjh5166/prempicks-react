import React from "react";

import NavBar from '../NavBar';
import { PageContainer, ContentContainer } from './styled';

export default ({ children, hideNav = false }) => (
  <PageContainer>
    {!hideNav && <NavBar />}
    <ContentContainer>
      {children}
    </ContentContainer>
  </PageContainer>
);