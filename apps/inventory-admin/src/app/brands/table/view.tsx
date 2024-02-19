import {
  Table,
  TableHeader,
  TableBody,
  Button,
  TableRow,
  TableHead,
  Show,
  TableCell,
  TableTitleSort,
} from '@azkaban/ui-components';
import { useBrandTableViewModel } from './view-model';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { Brand } from '@azkaban/inventory-redux';
import { TableHeaderCountPartial } from './partials/table-header-count.partial';
import { TableBodyEmptyPartial } from './partials/table-body-empty.partial';
import { TableFooterEmptyPartial } from './partials/table-footer-empty.partial';
import { TableRowActionsPartial } from './partials/table-row-actions.partial';
import { BrandTableBodyRowPartial } from './partials/table-body-row.partial';
import { TableRowButtonTruePartial } from './partials/table-row-button-true.partial';
import { TableRowButtonFalsePartial } from './partials/table-row-button-false.partial';

export function BrandsTableView() {
  const { brandData, sorting, setSorting, isAdmin } = useBrandTableViewModel();

  const table = useReactTable({
    state: {
      sorting,
    },
    enableSorting: true,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    data: brandData,
    columns: [
      {
        accessorKey: 'title',
        header: ({ column }) => {
          return (
            <TableTitleSort
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === 'asc')
              }
            />
          );
        },
      },
      {
        id: 'active',
        accessorKey: 'active',
        header: 'Status',
        cell: ({ row }) => (
          <Button
            variant={
              row.original.isDeleted
                ? 'ghost'
                : row.getValue('active')
                  ? 'success'
                  : 'ghost'
            }
            onClick={() => {
              console.error('setBrandId', row.original.id);
              console.error('openStatusModal');
            }}
            disabled={row.original.isDeleted}
          >
            {row.getValue('active') ? (
              <TableRowButtonTruePartial />
            ) : (
              <TableRowButtonFalsePartial />
            )}
          </Button>
        ),
      },
      {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
          const category = row.original as Brand;
          return (
            <TableRowActionsPartial
              id={category.id}
              isAdmin={isAdmin}
              isDeleted={!!category.deleted_at}
              onEdit={(id: string) => {
                console.error('setBrandId', id);
                console.error('openEditModal');
              }}
              onDelete={(id: string) => {
                console.error('setBrandId', id);
                console.error('openDeleteModal');
              }}
              onRestore={(id: string) => {
                console.error('setBrandId', id);
                console.error('openRestoreModal');
              }}
            />
          );
        },
      },
    ],
  });

  return (
    <div className="rounded-md border mt-8">
      <Table>
        <TableHeaderCountPartial
          count={brandData.length ?? 0}
          length={table.getAllColumns().length}
        />
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
                          header.getContext(),
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
              <BrandTableBodyRowPartial
                key={row.id}
                isSelected={Boolean(row.getIsSelected() && 'selected')}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </BrandTableBodyRowPartial>
            ))}
          </Show>
          <Show show={table.getRowModel().rows?.length === 0}>
            <TableBodyEmptyPartial length={table.getAllColumns().length} />
          </Show>
        </TableBody>
        <TableFooterEmptyPartial length={table.getAllColumns().length} />
      </Table>
    </div>
  );
}
