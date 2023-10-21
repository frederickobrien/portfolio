export const formatDateRange = (dateStarted: string, dateFinished: string) => {
  const dateStartedArray = dateStarted.split("-");
  const dateFinishedArray = dateFinished.split("-");
  const dateStartedMonth = new Date(
    Number(dateStartedArray[0]),
    Number(dateStartedArray[1]) - 1,
    Number(dateStartedArray[2])
  ).toLocaleString("default", { month: "long" });
  const dateFinishedMonth = new Date(
    Number(dateFinishedArray[0]),
    Number(dateFinishedArray[1]) - 1,
    Number(dateFinishedArray[2])
  ).toLocaleString("default", { month: "long" });
  const dateStartedYear = dateStartedArray[0];
  const dateFinishedYear = dateFinishedArray[0];
  const dateStartedFormatted = `${dateStartedMonth} ${dateStartedYear}`;
  const dateFinishedFormatted =
    dateFinished === ""
      ? "present"
      : `${dateFinishedMonth} ${dateFinishedYear}`;
  return `${dateStartedFormatted} - ${dateFinishedFormatted}`;
};
