import styled from 'styled-components';

import blur from '../../../images/blur.jpg';

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background: url(${blur}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: rgba(81, 81, 159, 0.5);
  background-blend-mode: multiply;
`;