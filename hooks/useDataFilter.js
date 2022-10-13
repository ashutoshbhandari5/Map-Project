import { useEffect, useState, useMemo } from "react";

const useDataFilter = (dataSet, initialSort) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({ sortBy: initialSort, order: "asc" });
  const [selectedData, setSelectedData] = useState(null);
  const data = useMemo(
    () =>
      dataSet
        .sort((a, b) => {
          return filter.order === "asc"
            ? a[filter.sortBy].localeCompare(b[filter.sortBy])
            : b[filter.sortBy].localeCompare(a[filter.sortBy]);
        })
        .slice(0, currentPage * 5),
    [currentPage, filter]
  );

  useEffect(() => {
    setSelectedData(null);
  }, [data]);

  const loadData = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSortFilter = (obj) => {
    setFilter((previousState) => {
      return { ...previousState, ...obj };
    });
  };

  return [data, handleSortFilter, loadData, selectedData, setSelectedData];
};

export default useDataFilter;
