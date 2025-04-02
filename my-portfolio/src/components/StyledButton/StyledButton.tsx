import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

  const StyledButton = styled("button")(({ theme }) => ({
      backgroundColor: "#658d5a",
      border: `1px solid ${theme.palette.primary.contrastText}`,
      borderRadius: "3px",
      padding: "5px 15px",
      width: "100%",
      color: theme.palette.primary.contrastText,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      gap: "10px",
      '&:hover': {
          backgroundColor: "transparent",
    },
  }));
  
    return (
      <>
        <StyledButton>
        {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton