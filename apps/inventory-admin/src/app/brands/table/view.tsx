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
  TableBodyRow,
  TableBodyEmpty,
  TableRowButtonTrue,
  TableRowButtonFalse,
  TableHeaderCount,
  TableActions,
  TableFooterEmpty,
} from '@azkaban/ui-components';
import { useBrandTableViewModel } from './view-model';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Brand } from '@azkaban/inventory-redux';

export function BrandsTableView() {
  const {
    brandData,
    sorting,
    setSorting,
    isAdmin,
    openEditModal,
    openDeleteModal,
    openRestoreModal,
    openStatusModal,
    setBrandId,
  } = useBrandTableViewModel();

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
              setBrandId(row.original.id);
              openStatusModal();
            }}
            disabled={row.original.isDeleted}
          >
            {row.getValue('active') ? (
              <TableRowButtonTrue />
            ) : (
              <TableRowButtonFalse />
            )}
          </Button>
        ),
      },
      {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
          const brand = row.original as Brand;
          return (
            <TableActions
              id={brand.id}
              isAdmin={isAdmin}
              isDeleted={!!brand.deleted_at}
              onEdit={(id: string) => {
                setBrandId(id);
                openEditModal();
              }}
              onDelete={(id: string) => {
                setBrandId(id);
                openDeleteModal();
              }}
              onRestore={(id: string) => {
                setBrandId(id);
                openRestoreModal();
              }}
              onForceDelete={console.error}
            />
          );
        },
      },
    ],
  });

  return (
    <div className="rounded-md border mt-8">
      <Table>
        <TableHeaderCount
          title="Brands"
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
              <TableBodyRow
                key={row.id}
                isSelected={Boolean(row.getIsSelected() && 'selected')}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableBodyRow>
            ))}
          </Show>
          <Show show={table.getRowModel().rows?.length === 0}>
            <TableBodyEmpty length={table.getAllColumns().length} />
          </Show>
        </TableBody>
        <TableFooterEmpty length={table.getAllColumns().length} />
      </Table>
    </div>
  );
}
