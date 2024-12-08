import styled from "styled-components";
import { CSSObjectWithLabel } from "react-select";

export const Option = styled.div<{ $isFocused: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.$isFocused ? "#F6F7F8" : "white")};
  z-index: 10px;
`;

export const CategoryValue = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  margin-left: 8px;
  font-size: var(--font-size-medium);
  color: var(--color-black);
`;

export const Div = styled.div`
  marginbottom: "20px";
  width: 150px;
`;

export const customsControl: (
  base: CSSObjectWithLabel,
  state: { isFocused: boolean }
) => CSSObjectWithLabel = (provided, state) => ({
  ...provided,
  border: state.isFocused
    ? "1px solid var(--color-primary-hover)"
    : "1px solid var(--color-primary)",
  boxShadow: "none",
  minHeight: "30px",
  borderRadius: "10px",
  transition: " 0.3s ease",
  "&:hover": {
    borderColor: "var(--color-primary-hover)",
  },
});

export const customContainer: (
  base: CSSObjectWithLabel
) => CSSObjectWithLabel = (provided) => ({
  ...provided,
  display: "flex",
  alignItems: "center",
  padding: "0 8px",
  overflow: "hidden",
});

export const customValue: (base: CSSObjectWithLabel) => CSSObjectWithLabel = (
  provided
) => ({
  ...provided,
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});