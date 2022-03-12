import React from "react";

import { siteColumns } from "../TableColumns";
import { DataGrid } from "@mui/x-data-grid";

const SiteConcerneMiniTable = ({ data }) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          autoHeight
          rows={data}
          columns={siteColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection={false}
        />
      </div>
    </div>
  );
};

export default SiteConcerneMiniTable;