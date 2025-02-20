import {
    Box,
    Button,
    Divider,
    IconButton,
    Typography,
    useTheme,
} from "@mui/material";
import { useState } from "react";
import CreateTrackingItemModal from "./CreateTrackingItemModal.tsx";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import {
    createColumnHelper,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { CustomTable } from "../../../components/CustomTable";
import { useAuth } from "../../../contexts";
import { useQuery } from "@tanstack/react-query";
import { TrackingItem, TrackingItemApi } from "../../../API";

const TrackingItemsList = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const { user } = useAuth();
    const trackingItemApi = new TrackingItemApi(user);

    const { data: trackingItems } = useQuery({
        queryKey: ["trackingItems"],
        queryFn: trackingItemApi.getTrackingItems,
    });

    const showMoreDetails = (item: TrackingItem) => {
        console.log(item);
    };

    const theme = useTheme();
    const columnHelper = createColumnHelper<TrackingItem>();

    const columns = [
        columnHelper.accessor("name", {
            id: "name",
            header: "Name",
        }),
        columnHelper.accessor("identifier", {
            id: "identifier",
            header: "Identifier",
        }),
        columnHelper.accessor("type", {
            id: "type",
            header: "Type",
        }),
        columnHelper.accessor("category", {
            id: "category",
            header: "Category",
        }),
        columnHelper.accessor("description", {
            id: "description",
            header: "Description",
        }),
        columnHelper.display({
            id: "actions",
            cell: (props) => (
                <IconButton onClick={() => showMoreDetails(props.row.original)}>
                    <OpenInNewRoundedIcon />
                </IconButton>
            ),
            size: 15,
        }),
    ];

    const table = useReactTable({
        columns,
        data: trackingItems || [],
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Box sx={{ padding: 3, width: "100%" }}>
            <Typography color={"#353535"} variant={"h5"} paddingBottom={1}>
                Your tracking items
            </Typography>
            <Divider sx={{ width: "100%", marginBottom: 2 }}></Divider>
            <Box sx={{ paddingBottom: 2 }}>
                <Button
                    sx={{
                        backgroundColor: theme.extraColors.detail,
                        color: theme.palette.text.primary,
                    }}
                    onClick={() => {
                        console.log("Clicking");
                        setOpenModal(true);
                    }}
                >
                    Add new item
                </Button>
            </Box>
            <Box sx={{ width: "80%" }}>
                <CustomTable table={table} columnsResizable={true} />
            </Box>
            {
                <CreateTrackingItemModal
                    open={openModal}
                    onClose={() => setOpenModal(false)}
                />
            }
        </Box>
    );
};

export default TrackingItemsList;
