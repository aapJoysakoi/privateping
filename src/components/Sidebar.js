import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => (
  <SidebarContainer>
    <h2>Sidebar</h2>
    {/* Add more sidebar content here */}
  </SidebarContainer>
);

export default Sidebar;
