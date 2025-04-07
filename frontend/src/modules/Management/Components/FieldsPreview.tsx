import React, { useState } from "react";
import { Box, IconButton, Paper, Popper, styled } from "@mui/material";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { TrackingItem } from "../../../API";

const StyledPreview = styled(Paper)(({ theme }) => ({
    backgroundColor: "#FFFFFF",
    color: theme.palette.text.primary,
    minWidth: 140,
    minHeight: 160,
    padding: "16px",
}));

interface FieldsPreviewProps {
    data: TrackingItem;
}

const FieldsPreview = ({ data }: FieldsPreviewProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const showPreview = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    console.log(data);

    const open = Boolean(anchorEl);
    const id = open ? "preview" : undefined;

    return (
        <Box>
            <IconButton onClick={showPreview}>
                <OpenInNewRoundedIcon />
            </IconButton>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <StyledPreview>aasdadasdhadgas</StyledPreview>
            </Popper>
        </Box>
    );
};

export default FieldsPreview;
