import { Box, Divider, IconButton, Typography } from "@mui/material";
import { CustomTable } from "../../../components/CustomTable";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

interface TrackingItemTBL {
  id: number;
  name: string;
  identifier: string;
  description: string;
}

const TrackingItemsList = () => {
  const showMoreDetails = (item: TrackingItemTBL) => {
    console.log(item);
  };

  const data: TrackingItemTBL[] = [
    {
      id: 1,
      name: "test1",
      identifier: "asda",
      description: "asdas asjdasjk ashd jkahj",
    },
    {
      id: 2,
      name: "test2",
      identifier: "asda",
      description: "asdas asjdasjk ashd jkahj",
    },
    {
      id: 3,
      name: "test3",
      identifier: "asda",
      description: "asdas asjdasjk ashd jkahj",
    },
  ];

  const columnHelper = createColumnHelper<TrackingItemTBL>();

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: "Name",
    }),
    columnHelper.accessor("identifier", {
      id: "identifier",
      header: "Identifier",
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
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box sx={{ padding: 3, width: "100%" }}>
      <Typography color={"#353535"} variant={"h5"} paddingBottom={1}>
        Your tracking items
      </Typography>
      <Divider sx={{ width: "100%", marginBottom: 2 }}></Divider>
      <Box sx={{ width: "40%" }}>
        <CustomTable table={table} />
      </Box>
    </Box>
  );
};

export default TrackingItemsList;
