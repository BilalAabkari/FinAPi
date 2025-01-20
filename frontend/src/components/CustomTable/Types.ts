import { Table } from "@tanstack/react-table";

export interface CustomTableProps<T> {
  table: Table<T>;
  columnsResizable?: boolean;
}
