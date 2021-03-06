import { createSelector } from "reselect";

const dossiers = (state) => state.dossiers;

export const selectDossiers = createSelector(
  [dossiers],
  (dossiers) => dossiers.dossiers
);

export const selectFactures = createSelector(
  [dossiers],
  (dossiers) => dossiers.factures
);

export const selectInfos = createSelector(
  [dossiers],
  (dossiers) => dossiers.infos
);

export const selectPop = createSelector(
  [dossiers],
  (dossiers) => dossiers.population
);
