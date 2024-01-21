import styled from "@emotion/styled";
import React from "react";
import { Typography } from "./Typography";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rtl: boolean;
}

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

const StyledLogo = styled.div<{ rtl?: boolean }>`
  width: 35px;
  min-width: 35px;
  height: 35px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #ffb4ad;
  font-size: 24px;
  font-weight: 700;
  background-color: #36311f;
  background: linear-gradient(45deg, rgb(54, 49, 31) 0%, rgb(54, 49, 31) 100%);
  ${({ rtl }) =>
    rtl
      ? `
      margin-left: 10px;
      margin-right: 4px;
      `
      : `
      margin-right: 10px;
      margin-left: 4px;
      `}
`;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  children,
  rtl,
  ...rest
}) => {
  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <StyledLogo rtl={rtl}>A</StyledLogo>
        <Typography variant="subtitle1" fontWeight={700} color="#ffb4ad">
          Almighty
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};
