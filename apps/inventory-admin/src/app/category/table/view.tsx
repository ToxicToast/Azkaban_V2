import { useCategoryTableViewModel } from './view-model';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
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
import { CategoryTableBodyRowPartial } from './partials/table-body-row.partial';
import { TableBodyEmptyPartial } from './partials/table-body-empty.partial';
import { TableFooterEmptyPartial } from './partials/table-footer-empty.partial';
import { TableHeaderCountPartial } from './partials/table-header-count.partial';
import { TableRowActionsPartial } from './partials/table-row-actions.partial';
import { TableRowButtonFalsePartial } from './partials/table-row-button-false.partial';
import { TableRowButtonTruePartial } from './partials/table-row-button-true.partial';
import { Category } from '@azkaban/inventory-redux';

export function CategoryTableView() {
  const {
    categoryData,
    openStatusModal,
    openParentModal,
    setCategoryId,
    sorting,
    setSorting,
    isAdmin,
    openEditModal,
    openDeleteModal,
    openRestoreModal,
  } = useCategoryTableViewModel();

  const table = useReactTable({
    state: {
      sorting,
    },
    enableSorting: true,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
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
            variant={
              row.original.isDeleted
                ? 'ghost'
                : row.getValue('active')
                ? 'success'
                : 'ghost'
            }
            onClick={() => {
              setCategoryId(row.original.id);
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
                  setCategoryId(row.original.id);
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
                  setCategoryId(row.original.id);
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
                setCategoryId(id);
                openEditModal();
              }}
              onDelete={(id: string) => {
                setCategoryId(id);
                openDeleteModal();
              }}
              onRestore={(id: string) => {
                setCategoryId(id);
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
          count={categoryData.length ?? 0}
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
              <CategoryTableBodyRowPartial
                key={row.id}
                isSelected={Boolean(row.getIsSelected() && 'selected')}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </CategoryTableBodyRowPartial>
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
