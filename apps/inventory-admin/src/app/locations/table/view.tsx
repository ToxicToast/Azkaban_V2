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
import { useLocationTableViewModel } from './view-model';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Location } from '@azkaban/inventory-redux';
export function LocationTableView() {
  const {
    locationData,
    isAdmin,
    sorting,
    setSorting,
    setLocationId,
    openEditModal,
    openDeleteModal,
    openRestoreModal,
    openParentModal,
    openStatusModal,
  } = useLocationTableViewModel();

  const table = useReactTable({
    state: {
      sorting,
    },
    enableSorting: true,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    data: locationData,
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
              setLocationId(row.original.id);
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
        id: 'isParent',
        accessorKey: 'isParent',
        header: 'Is Parent',
        cell: ({ row }) => (
          <>
            <Show show={row.original.isParent}>
              <Button
                variant={row.original.isDeleted ? 'ghost' : 'success'}
                onClick={() => {
                  setLocationId(row.original.id);
                  openParentModal();
                }}
                disabled={row.original.isDeleted}
              >
                <TableRowButtonTrue />
              </Button>
            </Show>
            <Show show={!row.original.isParent}>
              <Button variant="ghost" disabled={row.original.isDeleted}>
                <TableRowButtonFalse />
              </Button>
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
                variant={row.original.isDeleted ? 'ghost' : 'success'}
                onClick={() => {
                  setLocationId(row.original.id);
                  openParentModal();
                }}
                disabled={row.original.isDeleted}
              >
                <TableRowButtonTrue />
              </Button>
            </Show>
            <Show show={!row.original.isChild}>
              <Button variant="ghost" disabled={row.original.isDeleted}>
                <TableRowButtonFalse />
              </Button>
            </Show>
          </>
        ),
      },
      {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
          const location = row.original as Location;
          return (
            <TableActions
              id={location.id}
              isAdmin={isAdmin}
              isDeleted={!!location.deleted_at}
              onEdit={(id: string) => {
                setLocationId(id);
                openEditModal();
              }}
              onDelete={(id: string) => {
                setLocationId(id);
                openDeleteModal();
              }}
              onRestore={(id: string) => {
                setLocationId(id);
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
          title="Locations"
          count={locationData.length ?? 0}
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
