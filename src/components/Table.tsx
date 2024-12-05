import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';


type Props = {
  data:object[],
  columns:GridColDef[]
}

export default function Table({data, columns}:Props) {

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={data}
        columns={[...columns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar:GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 700 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
}
