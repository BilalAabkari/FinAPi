import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import CreateTrackingItemModal from "./CreateTrackingItemModal.tsx";
import {
    createColumnHelper,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { CustomTable } from "../../../components/CustomTable";
import { useQuery } from "@tanstack/react-query";
import { TrackingItem, TrackingItemApi } from "../../../API";
import { TRACKING_ITEM_TYPE_NAMES } from "../../../utils/constants.ts";
import FieldsPreview from "../Components/FieldsPreview.tsx";

const TrackingItemsList = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const { data: trackingItems, refetch } = useQuery({
        queryKey: ["trackingItems"],
        queryFn: TrackingItemApi.getTrackingItems,
    });

    const theme = useTheme();
    const columnHelper = useMemo(() => createColumnHelper<TrackingItem>(), []);

    const columns = useMemo(
        () => [
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
                cell: (props) => (
                    <Typography>
                        {props.row.original.type
                            ? TRACKING_ITEM_TYPE_NAMES[props.row.original.type]
                            : ""}
                    </Typography>
                ),
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
                cell: (props) => <FieldsPreview data={props.row.original} />,
                size: 15,
            }),
        ],
        [columnHelper],
    );

    const table = useReactTable({
        columns,
        data: trackingItems || [],
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <Box sx={{ padding: 3, width: "100%", overflow: "auto" }}>
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
                        setOpenModal(true);
                    }}
                >
                    Add new item
                </Button>
            </Box>
            {trackingItems && (
                <Box sx={{ width: "80%" }}>
                    <CustomTable table={table} columnsResizable={true} />
                </Box>
            )}
            <CreateTrackingItemModal
                open={openModal}
                onClose={() => {
                    setOpenModal(false);
                    void refetch();
                }}
            />
        </Box>
    );
};

export default TrackingItemsList;
