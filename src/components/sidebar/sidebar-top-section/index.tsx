import {
  Avatar,
  Box,
  Button,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import { useRef } from "react";

const UserBoxButton = styled(Button)(
  ({ theme }) => `
    padding: ${theme.spacing(1)};
    background-color: ${alpha(theme.colors.alpha.black[100], 0.08)};

    .MuiButton-label {
      justify-content: flex-start;
    }

    &:hover {
      background-color: ${alpha(theme.colors.alpha.black[100], 0.12)};
    }
`,
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
    text-align: left;
    padding-left: ${theme.spacing(1)};
`,
);

export const UserBoxItemStyles = styled(Typography)(
  () => `
    width: 200px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
  `,
);

const UserBoxLabel = styled(UserBoxItemStyles)(
  ({ theme }) => `
    font-weight: ${theme.typography.fontWeightBold};
    color: ${theme.sidebar.menuItemColor};
    display: block;
    &.popoverTypo {
      color: ${theme.palette.secondary.main};
    }
  `,
);

const UserBoxEmail = styled(UserBoxItemStyles)(
  ({ theme }) => `
    &.popoverTypo {
      color: ${theme.palette.secondary.light};
    }
  `,
);

function SidebarTopSection({ user }: any) {
  const ref = useRef<any>(null);

  return (
    <>
      <UserBoxButton fullWidth color="secondary" ref={ref}>
        <Avatar
          variant="circular"
          alt={user?.name}
          src={user?.profileImage}
        />
        <Box
          display="flex"
          flex={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <UserBoxText>
            <UserBoxLabel variant="body1">{user?.name}</UserBoxLabel>
            <UserBoxEmail variant="body2">{user?.email}</UserBoxEmail>
          </UserBoxText>
        </Box>
      </UserBoxButton>
    </>
  );
}

export default SidebarTopSection;
