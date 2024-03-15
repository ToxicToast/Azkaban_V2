import {
  Button,
  Show,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableTitleSort,
} from '@azkaban/ui-components';
import { TableHeaderCountPartial } from './partials/table-header-count.partial';
import { useLocationTableViewModel } from './view-model';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { LocationTableBodyRowPartial } from './partials/table-body-row.partial';
import { TableRowButtonTruePartial } from './partials/table-row-button-true.partial';
import { TableRowButtonFalsePartial } from './partials/table-row-button-false.partial';
import { Category } from '@azkaban/inventory-redux';
import { TableRowActionsPartial } from './partials/table-row-actions.partial';
import { TableBodyEmptyPartial } from './partials/table-body-empty.partial';

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
              <TableRowButtonTruePartial />
            ) : (
              <TableRowButtonFalsePartial />
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
                <TableRowButtonTruePartial />
              </Button>
            </Show>
            <Show show={!row.original.isParent}>
              <Button variant="ghost" disabled={row.original.isDeleted}>
                <TableRowButtonFalsePartial />
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
                <TableRowButtonTruePartial />
              </Button>
            </Show>
            <Show show={!row.original.isChild}>
              <Button variant="ghost" disabled={row.original.isDeleted}>
                <TableRowButtonFalsePartial />
              </Button>
            </Show>
          </>
        ),
      },
      {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
          const category = row.original as Category;
          return (
            <TableRowActionsPartial
              id={category.id}
              isAdmin={isAdmin}
              isDeleted={!!category.deleted_at}
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
              <LocationTableBodyRowPartial
                key={row.id}
                isSelected={Boolean(row.getIsSelected() && 'selected')}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </LocationTableBodyRowPartial>
            ))}
          </Show>
          <Show show={table.getRowModel().rows?.length === 0}>
            <TableBodyEmptyPartial length={table.getAllColumns().length} />
          </Show>
        </TableBody>
      </Table>
    </div>
  );
}
