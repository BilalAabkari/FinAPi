import { CustomTableProps } from "./Types.ts";
import { flexRender } from "@tanstack/react-table";
import { styled } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";

const StyledTable = styled("table")({
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
    right: 0,
    cursor: "ew-resize",
    height: size.height,
}));

interface DraggingResizeEvent {
    draggingItem: string;
    initialWidth: number;
    initialMouseX: number;
}

const MIN_WIDTH = 5;

const CustomTable = <T,>({ table, columnsResizable }: CustomTableProps<T>) => {
    const tableRef = useRef<HTMLTableElement | null>(null);

    const initialWidths = useMemo(() => {
        const lastHeaderGroupIndex = table.getHeaderGroups().length - 1;
        const headers =
            table.getHeaderGroups()[lastHeaderGroupIndex]?.headers ?? [];
        return headers.map((header) => ({
            id: header.id,
            width: header.column.columnDef.size ?? 150,
        }));
    }, [table]);

    const [widths, setWidths] = useState(initialWidths);
    const [tableSize, setSize] = useState({ width: 0, height: 0 });

    const getWidth = (headerId: string) => {
        return widths.find((widthItem) => widthItem.id === headerId);
    };

    const draggingEvent = useRef<DraggingResizeEvent | undefined>(undefined);

    const dragStarted = (id: string, event: React.MouseEvent) => {
        event.preventDefault();
        document.addEventListener("mousemove", handleDrag);
        document.addEventListener("mouseup", release);

        const index = widths.findIndex((elem) => elem.id === id.toString());

        draggingEvent.current = {
            initialWidth: widths[index].width ?? 0,
            draggingItem: id,
            initialMouseX: event.clientX,
        };
    };

    const handleDrag = (event: MouseEvent) => {
        if (draggingEvent.current) {
            const deltaX = event.clientX - draggingEvent.current.initialMouseX;

            const widthListCopy = [...widths];

            const index = widthListCopy.findIndex(
                (elem) => elem.id === draggingEvent.current?.draggingItem,
            );

            widthListCopy[index].width =
                draggingEvent.current.initialWidth + deltaX;
            if (widthListCopy[index].width > MIN_WIDTH)
                setWidths([...widthListCopy]);
        }
    };

    const release = () => {
        document.removeEventListener("mousemove", handleDrag);
        document.removeEventListener("mouseup", release);
        draggingEvent.current = undefined;
    };

    useEffect(() => {
        if (tableRef.current) {
            const { width, height } = tableRef.current.getBoundingClientRect();
            console.log("Setting size to", { height, width });
            setSize({ width, height });
        }
    }, []);

    return (
        <StyledTable ref={tableRef}>
            <StyledHead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <StyledHeaderRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <HeaderCell
                                key={header.id}
                                colSpan={header.colSpan}
                                width={getWidth(header.id)?.width}
                            >
                                {flexRender(
                                    header.column.columnDef.header,
                                    header.getContext(),
                                )}

                                {columnsResizable && (
                                    <ResizeBar
                                        size={tableSize}
                                        onMouseDown={(event) =>
                                            dragStarted(header.id, event)
                                        }
                                    />
                                )}
                            </HeaderCell>
                        ))}
                    </StyledHeaderRow>
                ))}
            </StyledHead>
            <StyledBody>
                {table.getRowModel().rows.map((row) => (
                    <StyledRow key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <BodyCell key={cell.id}>
                                {flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext(),
                                )}
                            </BodyCell>
                        ))}
                    </StyledRow>
                ))}
            </StyledBody>
        </StyledTable>
    );
};

export default CustomTable;
