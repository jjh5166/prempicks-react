import styled from 'styled-components';
import { device } from '../../../../constants';

export const ToastsContainer = styled.div`
  position: absolute;
  top: 0;
  @media only screen and (orientation: landscape), ${device.tablet} {
    right: 0;
  }
`