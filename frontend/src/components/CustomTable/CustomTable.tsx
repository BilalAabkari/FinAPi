import { CustomTableProps } from "./Types.ts";
import { flexRender } from "@tanstack/react-table";
import { styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const StyledTable = styled("table")({
  // width: "100%",
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
  position: "relative",
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

interface TableSizeProp {
  size: {
    width: number;
    height: number;
  };
}

const ResizeBar = styled("div")<TableSizeProp>(({ size }) => ({
  width: "1px",
  position: "absolute",
  top: 0,
  left: -1,
  cursor: "ew-resize",
  height: size.height,
}));

const CustomTable = <T,>({ table }: CustomTableProps<T>) => {
  const tableRef = useRef<HTMLTableElement | null>(null);
  const [widths, setWidths] = useState(
    table
      .getHeaderGroups()
      [table.getHeaderGroups().length - 1].headers.map((header) => ({
        id: header.id,
        width: header.column.columnDef.size,
      })),
  );

  const getWidth = (headerId) => {
    return widths.find((widthItem) => widthItem.id === headerId);
  };

  const draggingId = useRef<undefined | number>(undefined);
  const initialMouseX = useRef(0);
  const initialWidth = useRef<undefined | number>(undefined);
  const initialWidthAfter = useRef<undefined | number>(undefined);
  const initialWidthBefore = useRef<undefined | number>(undefined);

  const [tableSize, setSize] = useState({ width: 0, height: 0 });

  const dragStarted = (id, event) => {
    const index = widths.findIndex((elem) => elem.id === id.toString());

    initialWidth.current = widths[index].width;
    initialWidthAfter.current = widths[index + 1]?.width;
    initialWidthBefore.current = widths[index - 1]?.width;
    draggingId.current = id;
    initialMouseX.current = event.clientX;
  };

  const handleDrag = (event) => {
    if (draggingId.current) {
      const deltaX = event.clientX - initialMouseX.current;

      const widthListCopy = [...widths];

      const index = widthListCopy.findIndex(
        (elem) => elem.id === draggingId.current.toString(),
      );
      widthListCopy[index].width = initialWidth.current - deltaX;
      if (widthListCopy[index + 1])
        widthListCopy[index + 1].width = initialWidthAfter.current + deltaX;
      if (widthListCopy[index - 1])
        widthListCopy[index - 1].width = initialWidthBefore.current + deltaX;
      setWidths([...widthListCopy]);

      console.log(deltaX);
    }
  };

  const release = () => {
    initialWidth.current = undefined;
    initialWidthAfter.current = undefined;
    initialWidthBefore.current = undefined;
    draggingId.current = undefined;
    initialMouseX.current = 0;
  };

  useEffect(() => {
    if (tableRef.current) {
      const { width, height } = tableRef.current.getBoundingClientRect();
      setSize({ width, height });
    }
  }, []);

  return (
    <StyledTable ref={tableRef}>
      <StyledHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <StyledHeaderRow key={headerGroup.id}>
            {headerGroup.headers.map(
              (
                header,
                index, // map over the headerGroup headers array
              ) => (
                <HeaderCell
                  key={header.id}
                  colSpan={header.colSpan}
                  width={getWidth(header.id)?.width}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                  {index !== 0 && (
                    <ResizeBar
                      size={tableSize}
                      onDragStart={(event) => dragStarted(header.id, event)}
                      // onDragOver={(event) => console.log(event)}
                      onDrag={(event) => handleDrag(event)}
                      // onDragEnter={(event) => console.log(event)}
                      onDragEnd={(event) => release(event)}
                      draggable={true}
                    />
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
