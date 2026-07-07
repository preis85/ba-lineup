window.LineupFilters = (() => {
  const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  function filterStages(day, selectedStages, query) {
    const needle = normalize(query.trim());
    return day.stages
      .filter(stage => selectedStages.size === 0 || selectedStages.has(stage.name))
      .map(stage => ({
        ...stage,
        shows: stage.shows.filter(show => !needle || normalize(show[2]).includes(needle))
      }))
      .filter(stage => stage.shows.length);
  }

  return { filterStages };
})();
