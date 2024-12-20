import { UserInfo } from "../../API";
import { Avatar, Button, useTheme } from "@mui/material";
import BrokenImage from "../../assets/broken-image.png";
import { Theme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import UserMenu from "./UserMenu.tsx";

interface UserInfoProps {
  user: UserInfo | null;
}

const UserInfoAvatar = ({ user }: UserInfoProps) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const theme: Theme = useTheme();

  const paperRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      paperRef.current &&
      avatarRef.current &&
      !paperRef.current.contains(event.target as Node) &&
      !avatarRef.current.contains(event.target as Node)
    ) {
      setUserMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Button
        sx={{
          "&:focus": {
            outline: "none",
          },
        }}
        onClick={() => setUserMenuOpen(!userMenuOpen)}
      >
        <Avatar
          ref={avatarRef}
          src={BrokenImage}
          sx={{
            borderColor: theme.extraColors.detail,
            borderWidth: 3,
            borderStyle: "solid",
          }}
        />
      </Button>
      <UserMenu show={userMenuOpen} user={user} ref={paperRef}></UserMenu>
    </div>
  );
};

export default UserInfoAvatar;
