import { UserInfo } from "../../API";
import { Avatar, useTheme } from "@mui/material";
import BrokenImage from "../../assets/broken-image.png";
import { Theme } from "@mui/material/styles";

interface UserInfoProps {
  user: UserInfo | null;
}

const UserInfoAvatar = ({ user }: UserInfoProps) => {
  const theme: Theme = useTheme();
  return (
    <Avatar
      src={BrokenImage}
      sx={{
        borderColor: theme.extraColors.detail,
        borderWidth: 3,
        borderStyle: "solid",
      }}
    />
  );
};

export default UserInfoAvatar;
