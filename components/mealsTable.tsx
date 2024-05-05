"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import useGetAllUser from "@/hooks/user_data/useGetAllUser";
import { Copy, EditIcon } from "lucide-react";

// import gettAllRoles from "@/hooks/user_data/useGetAllRole";
// import { roleList } from "@/data/roles";
// import useGetAllSTS from "@/hooks/dataQuery/useGetAllSTS";

// import useVehicleList from "@/hooks/vehicles/useVehiclesData";
// import useVehicleListForSTS from "@/hooks/vehicles/useGetVeicleForSTS";
// import { DeleteVehicleModalForSTS } from "../modals/DeleteVehicleModalForSTS";
// import { STSVehicleRelease } from "../modals/STSVehicleReleaseModal";
// import useUpcomingVehicle from "@/hooks/landFillDashboard/useUpcomingVehiclesList";
// import { LandfillVehicleEntryModal } from "../modals/LandFillVehicleEntryModal";
// import { getCookie } from "@/lib/cookieFunctions";
// import { landfillId } from "@/data/cookieNames";
import formatTimestamp from "@/lib/formatTimestamp";
import useGetAllMeals from "@/utils/getAllMealsHook";




type MealDetailsTypes = {
  date: string;
  bipulLunch: string;
  bipulLunchCount: number;
  bipulDinner: string;
  bipulDinnerCount: number;
  
  shamimLunch: string;
  shamimLunchCount: number;
  shamimDinner: string;
  shamimDinnerCount: number;

  fardeenLunch: string;
  fardeenLunchCount: number;
  fardeenDinner: string;
  fardeenDinnerCount: number;

  rifaatLunch:string;
  rifaatLunchCount: number;
  rifaatDinner:string;
  rifaatDinnerCount: number;

  nafiLunch: string;
  nafiLunchCount:number;
  nafiDinner: string;
  nafiDinnerCount: number;
}

interface MealContextType {
  data: MealDetailsTypes[];
}


export const columns: ColumnDef<MealDetailsTypes>[] = [
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {/* {row.getValue("date")} */}
        <div className="text-center font-medium">
        {formatTimestamp(row.getValue("date".toLocaleString()),'default')}
      </div>
      </div>
    ),
  },
  {
    accessorKey: "bipulLunch",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Bipul
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("bipulLunch")}
      </div>
    ),
  },
  {
    accessorKey: "shamimLunch",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Shamim
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("shamimLunch")}
      </div>
    ),
  },
  {
    accessorKey: "fardeenLunch",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
           Fardeen
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("fardeenLunch")}
      </div>
    ),
  },
  {
    accessorKey: "rifaatLunch",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Rifaat
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">{row.getValue("rifaatLunch")}</div>
    ),
  },
  {
    accessorKey: "nafiLunch",
    header: ({ column }) => {
      return (
        <div className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="text-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nafi
            <CaretSortIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-center font-medium">
        {row.getValue("nafiLunch")}
      </div>
    ),
  },
  
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
    //   const sts: Vehicle = row.original;

      return (
        <div>
          {/* <DeleteVehicleModalForSTS vehicleInfo={sts} />
          <STSVehicleRelease vehicleInfo={sts} /> */}
          {/* <LandfillVehicleEntryModal vehicleInfo={sts} /> */}
        </div>
      );
    },
  },
];
//function starts from here

const AllMealShow: React.FC<MealContextType> = ({ data }) => {
 // const [data, setData] = React.useState<MealDetailsTypes[]>([]);
//   const { vehicleList, UpcomingVehicle } = useUpcomingVehicle();
const {mealsList, getMealDetails} = useGetAllMeals();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  

  // async function getAllUpcomingVehicles() {
    
  //   await getMealDetails(month,year);
  // }

  // React.useEffect(() => {
  //   getAllUpcomingVehicles();
  // }, []);

  // React.useEffect(() => {
  //   setData(mealsList);
  // }, [mealsList]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 4,
      },
    },
  });
  return (
    <>

      <div className="flex justify-center font-bold text-2xl">
        Lunch Details
      </div>
      <div className="flex items-center pb-4 gap-4">
        <Input
          placeholder="Search by Date.."
          value={
            (table.getColumn("date")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("date")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto text-white">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
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
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing {data.length} entries
        </div>
        <div className="space-x-2 text-white ">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

export default AllMealShow;