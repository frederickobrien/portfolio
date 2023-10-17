import type { BylineDetails } from "../../data/types";

export const combineBylinesWithWeblogEntries = (
  bylines: BylineDetails[],
  weblogEntries: BylineDetails[]
) => {
  const combined = bylines.concat(weblogEntries);
  const ordered = combined.sort((a, b) => {
    return (
      new Date(b.publicationDate).getTime() -
      new Date(a.publicationDate).getTime()
    );
  });
  return ordered;
};
