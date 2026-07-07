window.LineupRenderer = (() => {
  const el = id => document.getElementById(id);
  const escapeHtml = value => String(value).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

  function renderHeader(data) {
    el("festival-name").textContent = data.festival.name;
    el("festival-meta").textContent = `${data.festival.location} · ${data.festival.edition}`;
    el("footer-name").textContent = `${data.festival.name} · ${data.festival.edition}`;
    document.title = data.festival.name;
  }

  function renderDays(days, activeId, onSelect) {
    const container = el("day-filters");
    container.innerHTML = days.map(day => `<button class="day-tab ${day.id === activeId ? "is-active" : ""}" data-day="${escapeHtml(day.id)}" role="tab" aria-selected="${day.id === activeId}"><span>${escapeHtml(day.date)}</span>${escapeHtml(day.label)}</button>`).join("");
    container.onclick = event => {
      const button = event.target.closest("[data-day]");
      if (button) onSelect(button.dataset.day);
    };
  }

  function renderStageFilters(stages, selected, onToggle) {
    const container = el("stage-filters");
    container.innerHTML = stages.map(stage => `<button class="stage-chip ${selected.has(stage.name) ? "is-active" : ""}" data-stage="${escapeHtml(stage.name)}" aria-pressed="${selected.has(stage.name)}"><i></i>${escapeHtml(stage.name)}</button>`).join("");
    container.onclick = event => {
      const button = event.target.closest("[data-stage]");
      if (button) onToggle(button.dataset.stage);
    };
  }

  function renderZoom(scales, current, onSelect) {
    const container = el("zoom-control");
    container.innerHTML = `<span>ZOOM</span>${scales.map(scale => `<button class="zoom-button ${scale === current ? "is-active" : ""}" data-scale="${scale}" aria-pressed="${scale === current}" title="15 minutos = ${scale} pixels">${scale}</button>`).join("")}`;
    container.onclick = event => {
      const button = event.target.closest("[data-scale]");
      if (button) onSelect(Number(button.dataset.scale));
    };
  }

  function renderTimeline(day, stages, pixelsPer15) {
    el("selected-day").textContent = `${day.label} · ${day.date}${day.note ? ` · ${day.note}` : ""}`;
    const count = stages.reduce((sum, stage) => sum + stage.shows.length, 0);
    el("event-count").textContent = `${count} ${count === 1 ? "show" : "shows"}`;
    el("empty-state").hidden = count > 0;

    if (!count) {
      el("timeline").innerHTML = "";
      return;
    }

    const scale = pixelsPer15 / 15;
    const labelWidth = 210;
    const toMinutes = time => {
      const [hours, minutes] = time.split(":").map(Number);
      const value = hours * 60 + minutes;
      return value < 6 * 60 ? value + 24 * 60 : value;
    };
    const allShows = day.stages.flatMap(stage => stage.shows);
    const startMinute = Math.floor(Math.min(...allShows.map(show => toMinutes(show.start))) / 30) * 30;
    const endMinute = Math.ceil(Math.max(...allShows.map(show => toMinutes(show.end))) / 30) * 30;
    const canvasWidth = (endMinute - startMinute) * scale;
    const formatTime = minute => `${String(Math.floor((minute % 1440) / 60)).padStart(2,"0")}:${String(minute % 60).padStart(2,"0")}`;
    const genres = window.LINEUP.genreGroups || {};
    const genreOf = artist => Object.keys(genres).find(genre => genres[genre].includes(artist)) || "Unknown";
    const genreClass = genre => `genre-${genre.toLowerCase().replace(/[^a-z]/g, "")}`;
    const ticks = [];
    for (let minute = startMinute; minute <= endMinute; minute += 30) {
      ticks.push(`<span class="time-tick ${minute % 60 ? "is-half" : ""}" style="left:${(minute - startMinute) * scale}px"><b>${minute % 60 ? "" : formatTime(minute)}</b></span>`);
    }

    el("timeline").innerHTML = `
      <div class="timeline__content" style="--canvas-width:${canvasWidth}px;--label-width:${labelWidth}px">
        <div class="time-header"><div class="time-header__corner">PALCOS</div><div class="time-axis">${ticks.join("")}</div></div>
        ${stages.map((stage, index) => `
          <article class="stage-row">
            <header class="stage-label"><span>0${index + 1}</span><h3>${escapeHtml(stage.name)}</h3></header>
            <div class="stage-track">
              ${ticks.join("")}
              ${stage.shows.map(show => {
                const start = toMinutes(show.start);
                let end = toMinutes(show.end);
                if (end <= start) end += 1440;
                const left = (start - startMinute) * scale;
                const width = (end - start) * scale;
                const genre = show.genre || genreOf(show.artist);
                const tooltip = `${show.artist} · ${show.start}–${show.end} · ${genre}`;
                const favoriteClass = show.favorite ? "is-favorite" : "";
                return `<div class="show-block ${genreClass(genre)} ${favoriteClass}" style="left:${left}px;width:${width}px" data-tooltip="${escapeHtml(tooltip)}" tabindex="0"><span class="show-block__time">${show.start}–${show.end}</span><strong>${escapeHtml(show.artist)}</strong></div>`;
              }).join("")}
            </div>
          </article>`).join("")}
      </div>`;
  }

  return { renderHeader, renderDays, renderStageFilters, renderZoom, renderTimeline };
})();
