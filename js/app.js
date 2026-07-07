(() => {
  "use strict";
  const data = window.LINEUP;
  if (!data || !Array.isArray(data.days) || !data.days.length) return;

  const zoomScales = [20, 30, 40, 60];
  const state = { dayId: data.days[0].id, stages: new Set(), query: "", pixelsPer15: 30 };
  const currentDay = () => data.days.find(day => day.id === state.dayId) || data.days[0];

  function render() {
    const day = currentDay();
    const visible = LineupFilters.filterStages(day, state.stages, state.query);
    LineupRenderer.renderDays(data.days, state.dayId, selectDay);
    LineupRenderer.renderStageFilters(day.stages, state.stages, toggleStage);
    LineupRenderer.renderZoom(zoomScales, state.pixelsPer15, selectZoom);
    LineupRenderer.renderTimeline(day, visible, state.pixelsPer15);
  }

  function selectDay(dayId) {
    state.dayId = dayId;
    state.stages.clear();
    render();
  }

  function toggleStage(stage) {
    state.stages.has(stage) ? state.stages.delete(stage) : state.stages.add(stage);
    render();
  }

  function selectZoom(pixelsPer15) {
    if (!zoomScales.includes(pixelsPer15) || pixelsPer15 === state.pixelsPer15) return;
    const timeline = document.getElementById("timeline");
    const oldScale = state.pixelsPer15;
    const oldScroll = timeline.scrollLeft;
    state.pixelsPer15 = pixelsPer15;
    render();
    timeline.scrollLeft = oldScroll * (pixelsPer15 / oldScale);
  }

  LineupRenderer.renderHeader(data);
  document.getElementById("search").addEventListener("input", event => {
    state.query = event.target.value;
    render();
  });
  render();
})();
