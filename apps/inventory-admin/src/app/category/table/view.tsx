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
  TableFooter,
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
        id: 'active',
        accessorKey: 'active',
        header: 'Status',
        cell: ({ row }) => (
          <Button
            variant={row.getValue('active') ? 'default' : 'outline'}
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
          <>
            <Show show={row.original.isParent}>
              <Button
                variant="default"
                onClick={() => {
                  setCategoryId(row.original.id);
                  openParentModal();
                }}
              >
                Yes
              </Button>
            </Show>
            <Show show={!row.original.isParent}>
              <Button variant="outline">No</Button>
            </Show>
          </>
        ),
      },
      {
        id: 'isChild',
        accessorKey: 'isChild',
        header: 'Is Child',
        cell: ({ row }) => (
          <>
            <Show show={row.original.isChild}>
              <Button
                variant="default"
                onClick={() => {
                  setCategoryId(row.original.id);
                  openParentModal();
                }}
              >
                Yes
              </Button>
            </Show>
            <Show show={!row.original.isChild}>
              <Button variant="outline">No</Button>
            </Show>
          </>
        ),
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
        <TableFooter>
          <TableRow>
            <TableCell colSpan={6}>&nbsp;</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
