const stations = [
  {
    id: "kexp",
    name: "KEXP 90.3",
    location: "Seattle, US",
    genre: "Eclectic / Alternative",
    category: "music",
    quality: "160k AAC",
    frequency: "90.3 FM",
    url: "https://kexp.streamguys1.com/kexp160.aac",
    homepage: "https://www.kexp.org/",
    description: "Human-curated music from Seattle. Independent, adventurous, and always live.",
  },
  {
    id: "nts-one",
    name: "NTS 1",
    location: "London, UK",
    genre: "Underground / Global",
    category: "music",
    quality: "256k MP3",
    frequency: "Channel 1",
    url: "https://stream-relay-geo.ntslive.net/stream?client=direct",
    homepage: "https://www.nts.live/radio",
    description: "Boundary-free live radio from an international community of artists, selectors, and music lovers.",
  },
  {
    id: "nts-two",
    name: "NTS 2",
    location: "London, UK",
    genre: "Experimental / Global",
    category: "music",
    quality: "256k MP3",
    frequency: "Channel 2",
    url: "https://stream-relay-geo.ntslive.net/stream2?client=direct",
    homepage: "https://www.nts.live/schedule/2",
    description: "NTS's second live channel: adventurous selectors, experimental sounds, and scenes from around the world.",
  },
  {
    id: "all-classical",
    name: "All Classical",
    location: "Portland, US",
    genre: "Classical / Public radio",
    category: "music",
    quality: "128k MP3",
    frequency: "89.9 FM",
    url: "https://allclassical.streamguys1.com/ac128kmp3",
    homepage: "https://www.allclassical.org/",
    description: "Orchestral works, chamber music, and contemporary composers from a listener-supported station.",
  },
  {
    id: "wrti-jazz",
    name: "WRTI Jazz",
    location: "Philadelphia, US",
    genre: "Jazz / Public radio",
    category: "music",
    quality: "128k MP3",
    frequency: "90.1 FM",
    url: "https://wrti-live.streamguys1.com/jazz-mp3",
    homepage: "https://www.wrti.org/listen-live-to-wrti",
    description: "A round-the-clock public-radio jazz stream spanning the tradition, new voices, and deep cuts.",
  },
  {
    id: "swiss-jazz",
    name: "Radio Swiss Jazz",
    location: "Basel, Switzerland",
    genre: "Jazz / Soul / Blues",
    category: "music",
    quality: "128k MP3",
    frequency: "DAB+",
    url: "https://stream.srg-ssr.ch/srgssr/rsj/mp3/128",
    homepage: "https://www.radioswissjazz.ch/en/",
    description: "An ad-free blend of jazz, swing, soul, blues, Latin, and world music from Switzerland.",
  },
  {
    id: "kcrw-eclectic24",
    name: "KCRW Eclectic24",
    location: "Santa Monica, US",
    genre: "Eclectic / Music discovery",
    category: "music",
    quality: "192k MP3",
    frequency: "89.9 HD2",
    url: "https://streams.kcrw.com/e24_mp3",
    homepage: "https://www.kcrw.com/shows/eclectic24/about",
    description: "KCRW's always-on music channel, handpicked across new releases, deep cuts, eras, and scenes.",
  },
  {
    id: "fip",
    name: "FIP",
    location: "Paris, France",
    genre: "Eclectic / French radio",
    category: "music",
    quality: "128k MP3",
    frequency: "105.1 FM",
    url: "https://icecast.radiofrance.fr/fip-midfi.mp3",
    homepage: "https://www.radiofrance.fr/fip",
    description: "A seamless, human-curated journey through jazz, soul, world music, chanson, electronic, and beyond.",
  },
  {
    id: "atma-ambient",
    name: "Atma FM Ambient",
    location: "Prague, CZ",
    genre: "Ambient / Experimental",
    category: "focus",
    quality: "128k MP3",
    frequency: "Channel 1",
    url: "https://atma.fm/channel1",
    homepage: "https://atma.fm/",
    description: "Handpicked atmospheric, droning, and electroacoustic music from an independent Prague signal.",
  },
  {
    id: "kalizo-lofi",
    name: "Kalizo Lo-Fi",
    location: "France",
    genre: "Lo-fi / Chillhop",
    category: "focus",
    quality: "192k MP3",
    frequency: "Online",
    url: "https://streams.dez.ovh/listen/chillofi/radio.mp3",
    homepage: "https://www.kalizoradio.com/radio/lofi/",
    description: "Dusty beats, soft jazz samples, and an uninterrupted backdrop for work, reading, or rest.",
  },
  {
    id: "yourclassical-relax",
    name: "YourClassical Relax",
    location: "Minnesota, US",
    genre: "Calm classical / Focus",
    category: "focus",
    quality: "128k MP3",
    frequency: "Online",
    url: "https://relax.stream.publicradio.org/relax.mp3",
    homepage: "https://www.yourclassical.org/playlist/relax-stream",
    description: "Quiet classical selections chosen for concentration, decompression, and slower moments.",
  },
  {
    id: "bbc-world",
    name: "BBC World Service",
    location: "London, UK",
    genre: "Global news / Analysis",
    category: "news",
    quality: "56k MP3",
    frequency: "Digital",
    url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    homepage: "https://www.bbc.com/audio/stations",
    description: "Live international reporting, interviews, and analysis from BBC News around the clock.",
  },
  {
    id: "cnn",
    name: "CNN",
    location: "Atlanta, US",
    genre: "Live news / Current affairs",
    category: "news",
    quality: "96k MP3",
    frequency: "Digital",
    url: "https://tunein.cdnstream1.com/2868_96.mp3",
    homepage: "https://www.cnn.com/audio",
    description: "The live audio simulcast of CNN's rolling news coverage, distributed by TuneIn.",
  },
  {
    id: "iran-international",
    name: "Iran International",
    location: "London / Tehran",
    genre: "Persian news / Analysis",
    category: "news",
    quality: "Live MP3",
    frequency: "Digital",
    url: "https://n02.radiojar.com/dfnrphnr5f0uv",
    homepage: "https://www.iranintl.com/radio",
    description: "Live Persian-language reporting, interviews, and analysis covering Iran and the wider world.",
  },
  {
    id: "radio-shoma",
    name: "Radio Shoma 93.4",
    location: "Dubai, UAE",
    genre: "Persian pop / Culture",
    category: "music",
    quality: "Live MP3",
    frequency: "93.4 FM",
    url: "https://stream.radiojar.com/rzcfw4cbsxquv",
    homepage: "https://www.radioshoma934.ae/en/",
    description: "Persian hits, conversation, and culture from the UAE's first Farsi music station.",
  },
  {
    id: "radio-yar",
    name: "Radio Yar",
    location: "Los Angeles, US",
    genre: "Persian music / Talk",
    category: "music",
    quality: "Live MP3",
    frequency: "Online",
    url: "https://stream.zeno.fm/oyb5oh6ne3tuv",
    homepage: "https://radioyar.com/",
    description: "Independent Persian radio pairing timeless music with live talk, culture, and community voices.",
  },
  {
    id: "wfmu",
    name: "WFMU Freeform",
    location: "New Jersey, US",
    genre: "Freeform / Community",
    category: "music",
    quality: "128k MP3",
    frequency: "91.1 FM",
    url: "https://stream0.wfmu.org/freeform-128k.mp3",
    homepage: "https://www.wfmu.org/",
    description: "Independent freeform radio where curious DJs follow ideas instead of algorithms.",
  },
  {
    id: "rp-main",
    name: "Radio Paradise",
    location: "California, US",
    genre: "Eclectic / Curated",
    category: "music",
    quality: "192k MP3",
    frequency: "Main Mix",
    url: "https://stream.radioparadise.com/mp3-192",
    homepage: "https://radioparadise.com/",
    description: "A listener-supported blend of modern and classic rock, world music, and electronic sound.",
  },
  {
    id: "rp-mellow",
    name: "RP Mellow Mix",
    location: "California, US",
    genre: "Mellow / Acoustic",
    category: "focus",
    quality: "192k MP3",
    frequency: "Mellow Mix",
    url: "https://stream.radioparadise.com/mellow-192",
    homepage: "https://radioparadise.com/",
    description: "A softer handpicked mix for late nights, slow mornings, and everything in between.",
  },
  {
    id: "rp-rock",
    name: "RP Rock Mix",
    location: "California, US",
    genre: "Rock / Alternative",
    category: "music",
    quality: "192k MP3",
    frequency: "Rock Mix",
    url: "https://stream.radioparadise.com/rock-192",
    homepage: "https://radioparadise.com/",
    description: "Deep album cuts, enduring classics, and modern rock selected by people who listen closely.",
  },
  {
    id: "rp-global",
    name: "RP Global Mix",
    location: "California, US",
    genre: "Global / World",
    category: "music",
    quality: "192k MP3",
    frequency: "Global Mix",
    url: "https://stream.radioparadise.com/global-192",
    homepage: "https://radioparadise.com/",
    description: "A borderless selection of voices, rhythms, and traditions from around the world.",
  },
];

const audio = document.querySelector("#radio");
const page = document.body;
const stationList = document.querySelector("#stationList");
const stationName = document.querySelector("#stationName");
const stationDescription = document.querySelector("#stationDescription");
const artworkTag = document.querySelector("#artworkTag");
const statusLabel = document.querySelector("#statusLabel");
const broadcastLabel = document.querySelector("#broadcastLabel");
const playButton = document.querySelector("#playButton");
const previousButton = document.querySelector("#previousButton");
const nextButton = document.querySelector("#nextButton");
const favoriteButton = document.querySelector("#favoriteButton");
const shareButton = document.querySelector("#shareButton");
const randomButton = document.querySelector("#randomButton");
const stationSource = document.querySelector("#stationSource");
const muteButton = document.querySelector("#muteButton");
const volumeSlider = document.querySelector("#volumeSlider");
const volumeValue = document.querySelector("#volumeValue");
const toast = document.querySelector("#toast");
const stationSearch = document.querySelector("#stationSearch");
const stationSummary = document.querySelector("#stationSummary");
const emptyState = document.querySelector("#emptyState");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const installButton = document.querySelector("#installButton");
const installDialog = document.querySelector("#installDialog");
const installDialogTitle = document.querySelector("#installDialogTitle");
const installInstructions = document.querySelector("#installInstructions");
const installConfirmButton = document.querySelector("#installConfirmButton");
const installCloseButton = document.querySelector("#installCloseButton");
const sleepTimerButton = document.querySelector("#sleepTimerButton");
const sleepTimerStatus = document.querySelector("#sleepTimerStatus");
const sleepTimerDialog = document.querySelector("#sleepTimerDialog");
const sleepTimerCloseButton = document.querySelector("#sleepTimerCloseButton");
const sleepTimerCancelButton = document.querySelector("#sleepTimerCancelButton");
const sleepTimerForm = document.querySelector("#sleepTimerForm");
const sleepTimerMinutes = document.querySelector("#sleepTimerMinutes");
const timerPresetButtons = [...document.querySelectorAll("[data-minutes]")];

const rememberedStation = localStorage.getItem("kio-station");
const linkedStation = decodeURIComponent(window.location.hash.slice(1));
const initialStation = stations.some((station) => station.id === linkedStation) ? linkedStation : rememberedStation;
let currentIndex = Math.max(0, stations.findIndex((station) => station.id === initialStation));
let shouldResume = false;
let toastTimer;
let activeFilter = "all";
let searchTerm = "";
let deferredInstallPrompt;
let sleepDeadline = 0;
let sleepTimerTimeout;
let sleepTimerTicker;
const favorites = new Set(JSON.parse(localStorage.getItem("kio-favorites") || "[]"));
const rememberedVolume = localStorage.getItem("kio-volume");
const savedVolume = rememberedVolume === null ? Number.NaN : Number(rememberedVolume);

audio.volume = Number.isFinite(savedVolume) && savedVolume >= 0 && savedVolume <= 1 ? savedVolume : 0.72;
volumeSlider.value = audio.volume;

function stationRow(station, index) {
  const row = document.createElement("button");
  row.className = "station-row";
  row.type = "button";
  row.dataset.index = index;
  row.dataset.category = station.category;
  row.innerHTML = `
    <span class="station-number">${String(index + 1).padStart(2, "0")}</span>
    <span class="station-title"><strong>${station.name}</strong><span>${station.location}</span></span>
    <span class="station-genre">${station.genre}</span>
    <span class="frequency-badge">${station.frequency}</span>
    <span class="quality-badge">${station.quality}</span>
    <span class="row-action" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m9 7 8 5-8 5V7Z" /></svg>
    </span>`;
  row.setAttribute("aria-label", `Tune to ${station.name}, ${station.frequency}`);
  row.addEventListener("click", () => selectStation(index, true));
  return row;
}

function renderStationList() {
  const visibleStations = stations.filter((station) => {
    const matchesFilter = activeFilter === "all"
      || station.category === activeFilter
      || (activeFilter === "favorites" && favorites.has(station.id));
    const searchableText = `${station.name} ${station.location} ${station.genre} ${station.frequency}`.toLowerCase();
    return matchesFilter && searchableText.includes(searchTerm);
  });

  stationList.replaceChildren();
  visibleStations.forEach((station) => {
    stationList.appendChild(stationRow(station, stations.indexOf(station)));
  });

  emptyState.hidden = visibleStations.length > 0;
  stationSummary.textContent = visibleStations.length === stations.length
    ? `${stations.length} independent signals, focus music, and global news—streaming live.`
    : `${visibleStations.length} of ${stations.length} signals shown.`;
  updateActiveRow();
}

function updateActiveRow() {
  document.querySelectorAll(".station-row").forEach((row) => {
    const active = Number(row.dataset.index) === currentIndex;
    row.classList.toggle("active", active);
    row.setAttribute("aria-current", active ? "true" : "false");
  });
}

function renderStation() {
  const station = stations[currentIndex];
  stationName.textContent = station.name;
  stationDescription.textContent = station.description;
  artworkTag.textContent = `${station.location} · ${station.frequency}`;
  broadcastLabel.textContent = `${station.genre} / ${station.frequency} / ${station.quality}`;
  stationSource.href = station.homepage;
  stationSource.setAttribute("aria-label", `Visit ${station.name} broadcaster website`);
  playButton.setAttribute("aria-label", `${audio.paused ? "Play" : "Pause"} ${station.name}`);
  document.title = `${station.name} — Kio Radio`;
  localStorage.setItem("kio-station", station.id);
  window.history.replaceState(null, "", `#${station.id}`);
  updateActiveRow();

  const isFavorite = favorites.has(station.id);
  favoriteButton.setAttribute("aria-pressed", String(isFavorite));
  favoriteButton.setAttribute("aria-label", `${isFavorite ? "Remove" : "Add"} ${station.name} ${isFavorite ? "from" : "to"} favorites`);

  if ("mediaSession" in navigator && "MediaMetadata" in window) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: station.name,
      artist: station.genre,
      album: "Kio Radio",
      artwork: [
        { src: "assets/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "assets/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    });
  }
}

async function selectStation(index, autoPlay = false) {
  const wasPlaying = !audio.paused || shouldResume;
  currentIndex = (index + stations.length) % stations.length;
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  shouldResume = autoPlay || wasPlaying;
  renderStation();

  if (shouldResume) await playStream();
  else setStatus("Ready when you are", "idle");
}

async function playStream() {
  const station = stations[currentIndex];
  shouldResume = true;
  setStatus("Connecting to live signal", "loading");

  if (audio.src !== station.url) audio.src = station.url;

  try {
    await audio.play();
  } catch (error) {
    if (error.name !== "AbortError") {
      shouldResume = false;
      setStatus("Signal unavailable", "error");
      showToast("This signal is unavailable right now. Try another station.");
    }
  }
}

function pauseStream() {
  shouldResume = false;
  audio.pause();
  setStatus("Broadcast paused", "idle");
}

function togglePlayback() {
  if (audio.paused) playStream();
  else pauseStream();
}

function setStatus(message, state) {
  statusLabel.textContent = message;
  page.classList.toggle("is-loading", state === "loading");
  page.classList.toggle("is-playing", state === "playing");
  if ("mediaSession" in navigator) {
    navigator.mediaSession.playbackState = state === "playing" ? "playing" : state === "idle" ? "paused" : "none";
  }
}

function updateVolumeDisplay() {
  const value = audio.muted ? 0 : Math.round(audio.volume * 100);
  volumeValue.textContent = String(value);
  page.classList.toggle("is-muted", audio.muted || audio.volume === 0);
  muteButton.setAttribute("aria-label", audio.muted ? "Unmute" : "Mute");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 3200);
}

function formatTimerRemaining(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function clearSleepTimer(showConfirmation = false) {
  window.clearTimeout(sleepTimerTimeout);
  window.clearInterval(sleepTimerTicker);
  sleepDeadline = 0;
  localStorage.removeItem("kio-sleep-deadline");
  sleepTimerStatus.textContent = "Off";
  sleepTimerButton.setAttribute("aria-label", "Set sleep timer");
  sleepTimerButton.classList.remove("active");
  sleepTimerCancelButton.hidden = true;
  if (showConfirmation) showToast("Sleep timer cancelled.");
}

function finishSleepTimer() {
  clearSleepTimer();
  pauseStream();
  setStatus("Sleep timer ended", "idle");
  showToast("Sleep timer ended. The radio is off.");
}

function updateSleepTimerDisplay() {
  if (!sleepDeadline) return;
  const remaining = sleepDeadline - Date.now();
  if (remaining <= 0) {
    finishSleepTimer();
    return;
  }
  const formatted = formatTimerRemaining(remaining);
  sleepTimerStatus.textContent = formatted;
  sleepTimerButton.setAttribute("aria-label", `Sleep timer, ${formatted} remaining`);
}

function armSleepTimer(deadline, announce = true) {
  window.clearTimeout(sleepTimerTimeout);
  window.clearInterval(sleepTimerTicker);
  sleepDeadline = deadline;
  const remaining = sleepDeadline - Date.now();
  if (remaining <= 0) {
    clearSleepTimer();
    return;
  }
  localStorage.setItem("kio-sleep-deadline", String(sleepDeadline));
  sleepTimerButton.classList.add("active");
  sleepTimerCancelButton.hidden = false;
  sleepTimerTimeout = window.setTimeout(finishSleepTimer, remaining);
  sleepTimerTicker = window.setInterval(updateSleepTimerDisplay, 1000);
  updateSleepTimerDisplay();
  if (announce) showToast(`Sleep timer set for ${Math.ceil(remaining / 60000)} minutes.`);
}

function closeSleepTimerDialog() {
  if (typeof sleepTimerDialog.close === "function") sleepTimerDialog.close();
  else sleepTimerDialog.removeAttribute("open");
}

function setSleepTimer(minutes) {
  armSleepTimer(Date.now() + minutes * 60 * 1000);
  closeSleepTimerDialog();
}

function restoreSleepTimer() {
  const savedDeadline = Number(localStorage.getItem("kio-sleep-deadline"));
  if (Number.isFinite(savedDeadline) && savedDeadline > Date.now()) armSleepTimer(savedDeadline, false);
  else clearSleepTimer();
}

sleepTimerButton.addEventListener("click", () => {
  sleepTimerCancelButton.hidden = !sleepDeadline;
  if (typeof sleepTimerDialog.showModal === "function") sleepTimerDialog.showModal();
  else sleepTimerDialog.setAttribute("open", "");
});
sleepTimerCloseButton.addEventListener("click", closeSleepTimerDialog);
sleepTimerDialog.addEventListener("click", (event) => {
  if (event.target === sleepTimerDialog) closeSleepTimerDialog();
});
timerPresetButtons.forEach((button) => {
  button.addEventListener("click", () => setSleepTimer(Number(button.dataset.minutes)));
});
sleepTimerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const minutes = Number(sleepTimerMinutes.value);
  if (!Number.isInteger(minutes) || minutes < 1 || minutes > 480) {
    sleepTimerMinutes.reportValidity();
    return;
  }
  setSleepTimer(minutes);
  sleepTimerForm.reset();
});
sleepTimerCancelButton.addEventListener("click", () => {
  clearSleepTimer(true);
  closeSleepTimerDialog();
});
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) updateSleepTimerDisplay();
});

function isStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function isIOSDevice() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
}

function openInstallDialog() {
  const isIOS = isIOSDevice();
  const isSafari = /safari/i.test(navigator.userAgent) && !/crios|fxios|edgios/i.test(navigator.userAgent);

  if (deferredInstallPrompt) {
    installDialogTitle.textContent = "Install Kio Radio";
    installInstructions.innerHTML = "<p>Add Kio Radio to your home screen for a focused, full-screen player.</p>";
    installConfirmButton.hidden = false;
  } else if (isIOS) {
    installDialogTitle.textContent = "Add Kio Radio to iPhone";
    installInstructions.innerHTML = isSafari
      ? "<ol><li>Tap Safari's <strong>Share</strong> button.</li><li>Choose <strong>Add to Home Screen</strong>.</li><li>Tap <strong>Add</strong> to install.</li></ol><p>The app shell works offline; live radio still needs an internet connection.</p>"
      : "<p>Open this page in <strong>Safari</strong>, tap Share, then choose <strong>Add to Home Screen</strong>.</p>";
    installConfirmButton.hidden = true;
  } else {
    installDialogTitle.textContent = "Install Kio Radio";
    installInstructions.innerHTML = "<p>Use your browser menu and choose <strong>Install app</strong> or <strong>Add to Home Screen</strong>.</p>";
    installConfirmButton.hidden = true;
  }

  if (typeof installDialog.showModal === "function") installDialog.showModal();
  else installDialog.setAttribute("open", "");
}

function closeInstallDialog() {
  if (typeof installDialog.close === "function") installDialog.close();
  else installDialog.removeAttribute("open");
}

installButton.addEventListener("click", openInstallDialog);
installCloseButton.addEventListener("click", closeInstallDialog);
installDialog.addEventListener("click", (event) => {
  if (event.target === installDialog) closeInstallDialog();
});
installConfirmButton.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = undefined;
  closeInstallDialog();
  installButton.hidden = true;
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (!isStandalone()) installButton.hidden = false;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = undefined;
  installButton.hidden = true;
  showToast("Kio Radio is installed.");
});

if (isIOSDevice() && !isStandalone()) installButton.hidden = false;

if ("mediaSession" in navigator) {
  [
    ["play", playStream],
    ["pause", pauseStream],
    ["previoustrack", () => selectStation(currentIndex - 1, true)],
    ["nexttrack", () => selectStation(currentIndex + 1, true)],
  ].forEach(([action, handler]) => {
    try {
      navigator.mediaSession.setActionHandler(action, handler);
    } catch {
      // Older iOS versions expose Media Session without every action.
    }
  });
}

window.addEventListener("offline", () => {
  if (audio.paused) setStatus("Offline — connect to tune in", "error");
  showToast("You are offline. The saved app stays available, but live radio needs a connection.");
});
window.addEventListener("online", () => {
  if (audio.paused) setStatus("Back online — ready when you are", "idle");
  showToast("Connection restored.");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      showToast("Offline app setup could not finish.");
    });
  });
}

playButton.addEventListener("click", togglePlayback);
previousButton.addEventListener("click", () => selectStation(currentIndex - 1, true));
nextButton.addEventListener("click", () => selectStation(currentIndex + 1, true));
randomButton.addEventListener("click", () => {
  let randomIndex = currentIndex;
  while (randomIndex === currentIndex) randomIndex = Math.floor(Math.random() * stations.length);
  selectStation(randomIndex, true);
});

favoriteButton.addEventListener("click", () => {
  const station = stations[currentIndex];
  if (favorites.has(station.id)) favorites.delete(station.id);
  else favorites.add(station.id);
  localStorage.setItem("kio-favorites", JSON.stringify([...favorites]));
  renderStation();
  if (activeFilter === "favorites") renderStationList();
  showToast(favorites.has(station.id) ? `${station.name} saved to favorites.` : `${station.name} removed from favorites.`);
});

shareButton.addEventListener("click", async () => {
  const station = stations[currentIndex];
  const shareData = {
    title: `${station.name} on Kio Radio`,
    text: `Listen to ${station.name} live on Kio Radio.`,
    url: window.location.href,
  };

  try {
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(shareData.url);
      showToast("Station link copied to your clipboard.");
    }
  } catch (error) {
    if (error.name !== "AbortError") showToast("The station link could not be shared.");
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    renderStationList();
  });
});

stationSearch.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderStationList();
});

muteButton.addEventListener("click", () => {
  audio.muted = !audio.muted;
  updateVolumeDisplay();
});

volumeSlider.addEventListener("input", (event) => {
  audio.volume = Number(event.target.value);
  audio.muted = false;
  localStorage.setItem("kio-volume", String(audio.volume));
  updateVolumeDisplay();
});

audio.addEventListener("playing", () => {
  shouldResume = true;
  setStatus("On air now", "playing");
  renderStation();
});
audio.addEventListener("waiting", () => shouldResume && setStatus("Buffering live signal", "loading"));
audio.addEventListener("stalled", () => shouldResume && setStatus("Reconnecting", "loading"));
audio.addEventListener("pause", () => {
  if (!shouldResume) setStatus("Broadcast paused", "idle");
  renderStation();
});
audio.addEventListener("error", () => {
  shouldResume = false;
  setStatus("Signal unavailable", "error");
  showToast("The station stopped responding. Choose another signal to continue.");
});

document.addEventListener("keydown", (event) => {
  const target = event.target;
  if (target instanceof HTMLInputElement || target instanceof HTMLButtonElement) return;
  if (event.code === "Space") {
    event.preventDefault();
    togglePlayback();
  }
  if (event.code === "ArrowRight") selectStation(currentIndex + 1, true);
  if (event.code === "ArrowLeft") selectStation(currentIndex - 1, true);
  if (!event.ctrlKey && !event.metaKey && !event.altKey && event.key.toLowerCase() === "r") randomButton.click();
});

function updateClock() {
  document.querySelector("#localTime").textContent = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

document.querySelector("#year").textContent = new Date().getFullYear();
window.setInterval(updateClock, 1000);
updateClock();
updateVolumeDisplay();
document.querySelector("#headerStationCount").textContent = `${stations.length} live signals`;
renderStationList();
renderStation();
setStatus(navigator.onLine ? "Ready when you are" : "Offline — connect to tune in", navigator.onLine ? "idle" : "error");
restoreSleepTimer();
