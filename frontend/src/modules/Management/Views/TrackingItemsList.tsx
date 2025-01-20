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
  category: string;
  type: string;
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
      type: "income",
      category: "Shoes sells",
      description: "asdas asjdasjk ashd jkahj",
    },
    {
      id: 2,
      name: "test2",
      type: "income",
      identifier: "asda",
      category: "subscription A",
      description: "asdas asjdasjk ashd jkahj",
    },
    {
      id: 3,
      name: "test3",
      type: "expense",
      category: "Hosting",
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
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box sx={{ padding: 3, width: "100%" }}>
      <Typography color={"#353535"} variant={"h5"} paddingBottom={1}>
        Your tracking items
      </Typography>
      <Divider sx={{ width: "100%", marginBottom: 2 }}></Divider>
      <Box sx={{ width: "80%" }}>
        <CustomTable table={table} columnsResizable={true} />
      </Box>
    </Box>
  );
};

export default TrackingItemsList;
