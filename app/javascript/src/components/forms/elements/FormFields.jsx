import React from 'react';
import styled from 'styled-components';

import TxtField from './TxtField';

const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15%;
  margin-bottom: 5px;
`;
export default ({ fields }) => {
  return (
    <FieldsContainer>
      {
        fields &&
        fields.map(field => {
          return (
            <TxtField
              key={field.name}
              name={field.name}
              labelName={field.labelName}
              isPassword={field.isPassword}
            />
          );
        })
      }
    </FieldsContainer>
  );
};