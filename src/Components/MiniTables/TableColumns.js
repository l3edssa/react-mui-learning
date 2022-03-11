import { Link } from "react-router-dom";
import { ins1000Sep, formatNum } from "./TableColumnsUtils";

import { GridActionsCellItem } from "@mui/x-data-grid";

import { renderCellExpand } from "./CellExpand";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export const filesTableColumns = [
  {
    field: "actions",
    type: "actions",
    width: 80,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<SearchIcon />}
        component={Link}
        to={`/dossier/${params.id}`}
        label="Afficher"
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Supprimer"
        showInMenu
      />,

      <GridActionsCellItem icon={<EditIcon />} label="Modifier" showInMenu />,
    ],
  },
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "Evenement",
    headerName: "Evenement",
    flex: 1,
    minWidth: 300,
    renderCell: renderCellExpand,
  },
  {
    field: "datEv",
    headerName: "Date évenement",
    type: "date",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    width: 90,
  },
  {
    field: "MR",
    headerName: "Montant réclamé",
    type: "number",
    minWidth: 140,
    valueFormatter: (params) => {
      const valueFormatted = ins1000Sep(formatNum(params.value));
      return `$${valueFormatted}`;
    },
  },
  {
    field: "MA",
    headerName: "Montant admissible",
    type: "number",
    width: 140,
    valueFormatter: (params) => {
      const valueFormatted = currencyFormatter.format(Number(params.value));
      return `${valueFormatted}`;
    },
  },
  {
    field: "MV",
    headerName: "Montant vérsé",
    type: "number",
    width: 140,
    valueFormatter: (params) => {
      const valueFormatted = currencyFormatter.format(Number(params.value));
      return `${valueFormatted}`;
    },
  },
  {
    field: "Participation",
    headerName: "Participation financière",
    type: "number",
    width: 140,
    valueFormatter: (params) => {
      const valueFormatted = currencyFormatter.format(Number(params.value));
      return `${valueFormatted}`;
    },
  },
];

export const facturesColumns = [
  {
    field: "id",
    headerName: "",
    hide: true,
  },
  {
    field: "type",
    headerName: "Préjudice",
    width: 100,
  },
  {
    field: "desc_fact",
    headerName: "Description",
    flex: 1,
    minWidth: 150,
    renderCell: renderCellExpand,
  },
  {
    field: "date_fact",
    headerName: "Date de la facture",
    flex: 1,
    minWidth: 130,
  },
  {
    field: "site_con",
    headerName: "Site concerné",
    flex: 1,
    minWidth: 140,
  },
  {
    field: "montant_rec",
    headerName: "Montant réclamé",
    flex: 1,
    minWidth: 140,
  },
  {
    field: "tax",
    headerName: "Taxable ?",
    type: "boolean",
  },
  {
    field: "actions",
    type: "actions",
    width: 80,
    getActions: (params) => [
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
      <GridActionsCellItem
        icon={<PictureAsPdfIcon />}
        label="Télécharger"
        showInMenu
      />,
    ],
  },
];

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const machineriesColumns = [
  {
    field: "type",
    headerName: "Préjudice",
    width: 100,
  },
  {
    field: "id",
    headerName: "Code et appelation",
  },
  {
    field: "desc",
    headerName: "Description",
    flex: 1,
    minWidth: 150,
    renderCell: renderCellExpand,
  },
  {
    field: "cout",
    headerName: "Côut total",
    flex: 1,
    minWidth: 80,
    valueFormatter: (params) => {
      const valueFormatted = ins1000Sep(formatNum(params.value));
      return `$ ${valueFormatted}`;
    },
  },
  {
    field: "actions",
    type: "actions",
    width: 80,
    getActions: (params) => [
      <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
      <GridActionsCellItem
        icon={<PictureAsPdfIcon />}
        label="Télécharger"
        showInMenu
      />,
    ],
  },
];

export const salairesColumns = [
  {
    field: "id",
    headerName: "",
    hide: true,
  },
  {
    field: "type",
    headerName: "Préjudice",
    width: 100,
  },
  {
    field: "name",
    headerName: "Nom et Prénom",
    minWidth: 140,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "date_per",
    headerName: "Date",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "Hreg",
    headerName: "Hreg",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "Treg",
    headerName: "Treg",
    flex: 1,
    minWidth: 100,
    valueFormatter: (params) => {
      const valueFormatted = ins1000Sep(formatNum(params.value));
      return `$ ${valueFormatted}`;
    },
  },
  {
    field: "Hsup",
    headerName: "Hsup",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "Tsup",
    headerName: "Tsup",
    flex: 1,
    minWidth: 100,
    valueFormatter: (params) => {
      const valueFormatted = ins1000Sep(formatNum(params.value));
      return `$ ${valueFormatted}`;
    },
  },
  {
    field: "taux_vac",
    headerName: "Taux de vacances",
    flex: 1,
    minWidth: 120,
    valueFormatter: (params) => {
      const valueFormatted = params.value * 100;
      return `${valueFormatted} %`;
    },
  },
  {
    field: "montant_rec",
    headerName: "Montant réclamé",
    flex: 1,
    minWidth: 100,
    valueFormatter: (params) => {
      const valueFormatted = ins1000Sep(formatNum(params.value));
      return `$ ${valueFormatted}`;
    },
  },
];
