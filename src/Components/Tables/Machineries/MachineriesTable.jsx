import React from "react";
import Box from "@mui/material/Box";

import { machineriesColumns } from "../TableColumns";
import { DataGrid } from "@mui/x-data-grid";

const MachineriesTable = ({ data, setMachToEdit }) => {
  const editMach = ({ id }) => {
    setMachToEdit(id);
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        "& .super-app.actif": {
          backgroundColor: "rgba(157, 255, 118, 0.49)",
          color: "#1a3e72",
          fontWeight: "600",
          textTransform: "uppercase",
        },
        "& .super-app.occ": {
          backgroundColor: "rgba(224, 183, 60, 0.55)",
          color: "#1a3e72",
          fontWeight: "600",
        },
        "& .super-app.dab": {
          color: "#d30c0c",
          fontWeight: "600",
        },
        "& .dosId": {
          backgroundColor: "rgba(224, 183, 60, 0.308)",
          color: "#091424",
          fontWeight: "600",
        },
      }}
    >
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            autoHeight
            rows={data}
            columns={machineriesColumns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection={false}
            disableColumnMenu
            onRowClick={editMach}
            sx={{
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
                cursor: "pointer",
              },
            }}
          />
        </div>
      </div>
    </Box>
  );
};

export default MachineriesTable;
