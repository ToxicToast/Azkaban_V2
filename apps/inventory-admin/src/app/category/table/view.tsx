import { useCategoryTableViewModel } from './view-model';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Button,
  Show,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@azkaban/ui-components';
import { ArrowUpDown } from 'lucide-react';

export function CategoryTableView() {
  const { categoryData, openStatusModal, openParentModal, setCategoryId } =
    useCategoryTableViewModel();

  const table = useReactTable({
    getCoreRowModel: getCoreRowModel(),
    data: categoryData,
    columns: [
      {
        id: 'select',
        header: ({ table }) => <>CHECKBOX HERE</>,
        cell: ({ row }) => <>CHECKBOX HERE</>,
        enableSorting: false,
        enableHiding: false,
      },
      {
        id: 'active',
        accessorKey: 'active',
        header: 'Status',
        cell: ({ row }) => (
          <Button
            variant="outline"
            onClick={() => {
              setCategoryId(row.original.id);
              openStatusModal();
            }}
          >
            {row.getValue('active') ? 'Active' : 'Inactive'}
          </Button>
        ),
      },
      {
        id: 'isParent',
        accessorKey: 'isParent',
        header: 'Is Parent',
        cell: ({ row }) => (
          <Button
            variant="outline"
            onClick={() => {
              setCategoryId(row.original.id);
              openParentModal();
            }}
          >
            {row.getValue('isParent') ? 'Yes' : 'No'}
          </Button>
        ),
      },
      {
        id: 'isChild',
        accessorKey: 'isChild',
        header: 'Is Child',
        cell: ({ row }) => (
          <Button
            variant="outline"
            onClick={() => {
              setCategoryId(row.original.id);
            }}
          >
            {row.getValue('isChild') ? 'Yes' : 'No'}
          </Button>
        ),
      },
      {
        accessorKey: 'title',
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            >
              Title
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
      },
      {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
          const category = row.original;
          return <>ACTIONS - {category.id}</>;
        },
      },
    ],
  });

  return (
    <div className="rounded-md border mt-8">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          <Show show={table.getRowModel().rows?.length > 0}>
            {table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </Show>
          <Show show={table.getRowModel().rows?.length === 0}>
            <TableRow>
              <TableCell
                colSpan={table.getAllColumns().length}
                className="h-24 text-center"
              >
                No results.
              </TableCell>
            </TableRow>
          </Show>
        </TableBody>
      </Table>
    </div>
  );
}
