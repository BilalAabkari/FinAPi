import { CustomTableProps } from "./Types.ts";
import { flexRender } from "@tanstack/react-table";
import { styled } from "@mui/material";

const StyledTable = styled("table")({
  width: "100%",
  color: "#4c4c4c",
  borderCollapse: "collapse",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
  borderRadius: "6px",
  overflow: "hidden",
});
const StyledHead = styled("thead")({
  backgroundColor: "#252525",
  color: "#dddddd",
});

interface HeaderCellProps {
  width?: number;
}

const HeaderCell = styled("th", {
  shouldForwardProp: (prop) => prop !== "width",
})<HeaderCellProps>(({ width }) => ({
  textAlign: "left",
  padding: 6,
  fontWeight: 600,
  width: width,
}));
const BodyCell = styled("td")({
  padding: 8,
});

const StyledRow = styled("tr")({
  borderBottom: "1px solid #a5a5a5",
  td: {
    borderRight: "1px solid #a5a5a5",
  },
  "td:last-child": {
    borderRight: "none",
  },
});

const StyledHeaderRow = styled("tr")({
  th: {
    borderRight: "1px solid white",
  },
  "th:last-child": {
    borderRight: "none",
  },
});

const StyledBody = styled("tbody")({
  "tr:last-child": {
    borderBottom: "none",
  },
});

const CustomTable = <T,>({ table }: CustomTableProps<T>) => {
  return (
    <StyledTable>
      <StyledHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <StyledHeaderRow key={headerGroup.id}>
            {headerGroup.headers.map(
              (
                header, // map over the headerGroup headers array
              ) => (
                <HeaderCell
                  key={header.id}
                  colSpan={header.colSpan}
                  width={header.column.columnDef.size}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </HeaderCell>
              ),
            )}
          </StyledHeaderRow>
        ))}
      </StyledHead>
      <StyledBody>
        {table.getRowModel().rows.map((row) => (
          <StyledRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <BodyCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </BodyCell>
            ))}
          </StyledRow>
        ))}
      </StyledBody>
    </StyledTable>
  );
};

export default CustomTable;
