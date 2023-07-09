import styled from '@emotion/styled';

export const List = styled.ul`
  width: 425px;
  height: 450px;
  margin: 0 auto;
  margin-top: 30px;
`;

export const Item = styled.li`
  display: flex;
  gap: 40px;
  width: 400px;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  margin-bottom: 10px;
  border-radius: 6px;
  background-color: whitesmoke;
`;

export const Icon = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
