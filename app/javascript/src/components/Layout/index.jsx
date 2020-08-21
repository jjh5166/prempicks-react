import React from "react";

import NavBar from '../NavBar';
import { PageContainer } from './styled';

export default ({ children, hideNav = false }) => (
  <PageContainer>
    {!hideNav && <NavBar />}
    {children}
  </PageContainer>
);