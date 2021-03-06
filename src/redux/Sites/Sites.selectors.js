import { createSelector } from "reselect";

export const selectSites = (state) => state.sites;

export const selectSitesMemo = createSelector(
  [selectSites],
  (sites) => sites.sites
);

export const selectSitesList = createSelector(
  [selectSites],
  (sites) => sites.sitesList
);
