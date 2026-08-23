/**
 * ============================================================
 * MAIN SCRIPT
 * TRIP_DATA (js/data.js) の内容をもとに各セクションを描画し、
 * ヒーロー演出・カウントダウン・タブ切替・チェックリスト等を制御する
 * ============================================================
 */
(function () {
  "use strict";

  const TRIP_START = new Date("2026-09-05T00:00:00+09:00");

  document.addEventListener("DOMContentLoaded", () => {
    applyTextFields();
    buildStarField();
    setupHeroReveal();
    startCountdown();
    buildItinerary();
    buildStay();
    buildPacking();
    buildPhotoSpots();
    setupNav();
    setupScrollReveal();
  });

  // ---- data.js の値を data-field 属性を持つ要素へ流し込む ----
  function applyTextFields() {
    const map = TRIP_DATA.meta;
    document.querySelectorAll("[data-field]").forEach((el) => {
      const key = el.getAttribute("data-field");
      if (map[key] !== undefined) el.textContent = map[key];
    });
  }

  // ---- 背景の星屑パーティクル ----
  function buildStarField() {
    const field = document.getElementById("starField");
    if (!field) return;
    const count = 60;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.setProperty("--delay", (Math.random() * 6).toFixed(2) + "s");
      star.style.setProperty("--size", (Math.random() * 2 + 1).toFixed(2) + "px");
      frag.appendChild(star);
    }
    field.appendChild(frag);
  }

  // ---- ヒーロー：封を開ける → 誕生日おめでとう → 行き先発表 の3段演出 ----
  function setupHeroReveal() {
    const openSeal = document.getElementById("openSeal");
    const teasePart = document.getElementById("teasePart");
    const celebratePart = document.getElementById("celebratePart");
    const revealPart = document.getElementById("revealPart");
    const heroStage = document.getElementById("heroStage");
    const flashOverlay = document.getElementById("flashOverlay");
    if (!openSeal) return;

    let opened = false;

    openSeal.addEventListener("click", () => {
      if (opened) return;
      opened = true;

      heroStage.classList.add("is-opening");
      teasePart.classList.add("fade-out");
      flash(flashOverlay);

      // STEP 2: Happy Birthday
      setTimeout(() => {
        teasePart.style.display = "none";
        celebratePart.classList.add("is-visible");
        launchConfetti(["#e8c893", "#f2c94c", "#c9a962", "#f7f3ec", "#e39aa8"]);
      }, 550);

      // STEP 3: 行き先発表
      setTimeout(() => {
        celebratePart.classList.add("fade-out");
        flash(flashOverlay);
      }, 2750);

      setTimeout(() => {
        celebratePart.style.display = "none";
        revealPart.classList.add("is-visible");
        launchConfetti(["#c9a962", "#e8c893", "#7c2d3a", "#f7f3ec", "#8fb8d6"]);
        staggerLetters(revealPart.querySelectorAll("[data-stagger]"));
      }, 3300);
    });
  }

  // ---- 発表の瞬間に光が走るフラッシュ演出 ----
  function flash(el) {
    if (!el) return;
    el.classList.remove("flash-run");
    // 強制リフローで再アニメーションを許可
    void el.offsetWidth;
    el.classList.add("flash-run");
  }

  // ---- 行き先の文字を1文字ずつポップさせる ----
  function staggerLetters(nodes) {
    nodes.forEach((node) => {
      const text = node.textContent;
      node.textContent = "";
      node.classList.add("is-staggered");
      [...text].forEach((char, index) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = char;
        span.style.setProperty("--letter-delay", (index * 0.09).toFixed(2) + "s");
        node.appendChild(span);
      });
    });
  }

  // ---- 紙吹雪演出 ----
  function launchConfetti(colors) {
    const layer = document.getElementById("confettiLayer");
    if (!layer) return;
    const palette = colors || ["#c9a962", "#e8c893", "#7c2d3a", "#f7f3ec", "#8fb8d6"];
    const pieces = 50;
    for (let i = 0; i < pieces; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece" + (i % 4 === 0 ? " is-round" : "");
      piece.style.left = Math.random() * 100 + "%";
      piece.style.background = palette[Math.floor(Math.random() * palette.length)];
      piece.style.setProperty("--fall-duration", (2.6 + Math.random() * 1.8).toFixed(2) + "s");
      piece.style.setProperty("--fall-delay", (Math.random() * 0.6).toFixed(2) + "s");
      piece.style.setProperty("--rotate", Math.floor(Math.random() * 360) + "deg");
      piece.style.setProperty("--drift", (Math.random() * 80 - 40).toFixed(0) + "px");
      layer.appendChild(piece);
      setTimeout(() => piece.remove(), 5200);
    }
  }


  // ---- カウントダウンタイマー ----
  function startCountdown() {
    const els = {
      d: document.getElementById("cdDays"),
      h: document.getElementById("cdHours"),
      m: document.getElementById("cdMinutes"),
      s: document.getElementById("cdSeconds"),
    };
    if (!els.d) return;

    function tick() {
      const diff = TRIP_START.getTime() - Date.now();
      if (diff <= 0) {
        els.d.textContent = "0";
        els.h.textContent = "0";
        els.m.textContent = "0";
        els.s.textContent = "0";
        return;
      }
      const totalSeconds = Math.floor(diff / 1000);
      els.d.textContent = Math.floor(totalSeconds / 86400);
      els.h.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
      els.m.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
      els.s.textContent = String(totalSeconds % 60).padStart(2, "0");
    }
    tick();
    setInterval(tick, 1000);
  }

  // ---- 旅程タブ & タイムライン描画 ----
  function buildItinerary() {
    const tabsEl = document.getElementById("dayTabs");
    const panelsEl = document.getElementById("dayPanels");
    if (!tabsEl || !panelsEl) return;

    TRIP_DATA.itinerary.forEach((day, index) => {
      const tab = document.createElement("button");
      tab.className = "day-tab" + (index === 0 ? " active" : "");
      tab.type = "button";
      tab.setAttribute("role", "tab");
      tab.dataset.dayIndex = String(index);
      tab.innerHTML = `<span class="day-tab-num">DAY ${day.day}</span><span class="day-tab-date">${day.date}</span>`;
      tab.addEventListener("click", () => switchDay(index));
      tabsEl.appendChild(tab);

      const panel = document.createElement("div");
      panel.className = "day-panel" + (index === 0 ? " active" : "");
      panel.dataset.dayIndex = String(index);

      const header = document.createElement("div");
      header.className = "day-panel-header";
      const badges = day.cities
        .map((c) => `<span class="day-city-badge day-city-${c.code}">${c.label}</span>`)
        .join('<span class="day-city-arrow">→</span>');
      header.innerHTML = `
        <div class="day-city-badges">${badges}</div>
        <h3>${day.theme}</h3>
      `;
      panel.appendChild(header);

      const timeline = document.createElement("ol");
      timeline.className = "timeline";
      let currentHalf = null;
      const halfLabel = { am: "AM ・ 京都", pm: "PM ・ 大阪" };
      day.items.forEach((item) => {
        if (item.half && item.half !== currentHalf) {
          currentHalf = item.half;
          const divider = document.createElement("li");
          divider.className = "timeline-divider reveal-up";
          divider.innerHTML = `<span>${halfLabel[item.half] || ""}</span>`;
          timeline.appendChild(divider);
        }
        const li = document.createElement("li");
        li.className = "timeline-item reveal-up";
        li.innerHTML = `
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <span class="timeline-time-badge">${item.time}</span>
            <p class="timeline-title">${item.title}</p>
            <p class="timeline-desc">${item.desc}</p>
            <a class="timeline-place" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapQuery || item.place)}" target="_blank" rel="noopener">
              📍 ${item.place}
            </a>
          </div>
        `;
        timeline.appendChild(li);
      });
      panel.appendChild(timeline);
      panelsEl.appendChild(panel);
    });

    function switchDay(index) {
      tabsEl.querySelectorAll(".day-tab").forEach((t) => t.classList.toggle("active", Number(t.dataset.dayIndex) === index));
      panelsEl.querySelectorAll(".day-panel").forEach((p) => p.classList.toggle("active", Number(p.dataset.dayIndex) === index));
    }
  }

  // ---- ホテル & 移動手段 描画 ----
  function buildStay() {
    const hotelEl = document.getElementById("hotelCards");
    const transportEl = document.getElementById("transportList");
    if (hotelEl) {
      TRIP_DATA.hotels.forEach((hotel) => {
        const card = document.createElement("div");
        card.className = "hotel-card reveal-up";
        const heroImage = hotel.imageUrl
          ? `<div class="hotel-thumb"><img src="${hotel.imageUrl}" alt="${hotel.imageAlt || hotel.name}" loading="lazy" referrerpolicy="no-referrer"></div>`
          : "";
        card.innerHTML = `
          ${heroImage}
          <span class="hotel-city-tag day-city-${hotel.city}">${hotel.cityLabel}</span>
          <p class="hotel-night">${hotel.label}</p>
          <p class="hotel-name">${hotel.name}</p>
          <p class="hotel-area">${hotel.area}</p>
          <div class="hotel-meta">
            <span>IN ${hotel.checkin}</span>
            <span>OUT ${hotel.checkout}</span>
          </div>
          <p class="hotel-note">${hotel.note}</p>
          <a class="hotel-map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.mapQuery)}" target="_blank" rel="noopener">地図で見る ›</a>
        `;
        hotelEl.appendChild(card);
      });
    }
    if (transportEl) {
      TRIP_DATA.transportation.forEach((t) => {
        const row = document.createElement("div");
        row.className = "transport-item reveal-up";
        row.innerHTML = `
          <span class="transport-label">${t.label}</span>
          <span class="transport-type">${t.type}</span>
          <span class="transport-detail">${t.detail}</span>
          <span class="transport-time">${t.time}</span>
        `;
        transportEl.appendChild(row);
      });
    }
  }

  // ---- 持ち物チェックリスト 描画 & 保存 ----
  function buildPacking() {
    const groupsEl = document.getElementById("packingGroups");
    const progressBar = document.getElementById("packingProgressBar");
    const progressText = document.getElementById("packingProgressText");
    if (!groupsEl) return;

    const STORAGE_KEY = "osakaKyotoTrip2026_packingChecked";
    let checkedState = {};
    try {
      checkedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      checkedState = {};
    }

    let totalItems = 0;

    TRIP_DATA.packing.forEach((group, gIndex) => {
      const groupEl = document.createElement("div");
      groupEl.className = "packing-group reveal-up";
      const title = document.createElement("p");
      title.className = "packing-group-title";
      title.textContent = group.category;
      groupEl.appendChild(title);

      const list = document.createElement("ul");
      list.className = "packing-list";
      group.items.forEach((itemLabel, iIndex) => {
        totalItems++;
        const key = `${gIndex}-${iIndex}`;
        const li = document.createElement("li");
        li.className = "packing-item";
        const checked = !!checkedState[key];
        li.innerHTML = `
          <label class="packing-checkbox">
            <input type="checkbox" data-key="${key}" ${checked ? "checked" : ""}>
            <span class="checkbox-visual">✓</span>
            <span class="packing-item-label">${itemLabel}</span>
          </label>
        `;
        list.appendChild(li);
      });
      groupEl.appendChild(list);
      groupsEl.appendChild(groupEl);
    });

    function updateProgress() {
      const checkedCount = Object.values(checkedState).filter(Boolean).length;
      const percent = totalItems ? Math.round((checkedCount / totalItems) * 100) : 0;
      if (progressBar) progressBar.style.width = percent + "%";
      if (progressText) progressText.textContent = `${checkedCount} / ${totalItems}`;
    }

    groupsEl.addEventListener("change", (e) => {
      const target = e.target;
      if (target && target.matches('input[type="checkbox"]')) {
        checkedState[target.dataset.key] = target.checked;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedState));
        updateProgress();
      }
    });

    updateProgress();
  }

  // ---- 写真スポット 描画 ----
  function buildPhotoSpots() {
    const grid = document.getElementById("photoGrid");
    if (!grid) return;
    TRIP_DATA.photoSpots.forEach((spot) => {
      const card = document.createElement("div");
      card.className = "photo-card reveal-up";
      const thumbStyle = spot.imageUrl
        ? `background-image: linear-gradient(180deg, rgba(8, 14, 24, 0.08), rgba(8, 14, 24, 0.48)), url('${spot.imageUrl}'); background-size: cover; background-position: center;`
        : `background: linear-gradient(135deg, ${spot.gradient[0]}, ${spot.gradient[1]});`;
      card.innerHTML = `
        <div class="photo-thumb" style="${thumbStyle}" role="img" aria-label="${spot.imageAlt || spot.name}">
          <span class="photo-area-tag">${spot.area}</span>
        </div>
        <div class="photo-card-body">
          <p class="photo-name">${spot.name}</p>
          <p class="photo-time">📷 ベストタイム：${spot.bestTime}</p>
          <p class="photo-tip">${spot.tip}</p>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // ---- ナビゲーション：表示切替 & アクティブリンク & スムーススクロール ----
  function setupNav() {
    const nav = document.getElementById("siteNav");
    const heroEndMarker = document.getElementById("heroEndMarker");
    if (!nav || !heroEndMarker) return;

    const navObserver = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle("is-visible", !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    navObserver.observe(heroEndMarker);

    const sections = document.querySelectorAll("main .section[id]");
    const links = document.querySelectorAll(".nav-link[data-nav]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
            });
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((section) => sectionObserver.observe(section));

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  // ---- スクロールで要素をふわっと表示 ----
  function setupScrollReveal() {
    const targets = document.querySelectorAll(".reveal-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((target) => observer.observe(target));
  }
})();
