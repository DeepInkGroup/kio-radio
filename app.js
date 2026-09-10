const stations = [
  {
    id: "kexp",
    name: "KEXP 90.3",
    location: "Seattle, US",
    genre: "Eclectic · Alternative",
    quality: "160k AAC",
    url: "https://kexp.streamguys1.com/kexp160.aac",
    description: "Human-curated music from Seattle. Independent, adventurous, and always live.",
  },
  {
    id: "rp-main",
    name: "Radio Paradise",
    location: "California, US",
    genre: "Eclectic · Curated",
    quality: "192k MP3",
    url: "https://stream.radioparadise.com/mp3-192",
    description: "A listener-supported blend of modern and classic rock, world music, and electronic sound.",
  },
  {
    id: "rp-mellow",
    name: "RP Mellow Mix",
    location: "California, US",
    genre: "Mellow · Acoustic",
    quality: "192k MP3",
    url: "https://stream.radioparadise.com/mellow-192",
    description: "A softer handpicked mix for late nights, slow mornings, and everything in between.",
  },
  {
    id: "wfmu",
    name: "WFMU Freeform",
    location: "New Jersey, US",
    genre: "Freeform · Community",
    quality: "128k MP3",
    url: "https://stream0.wfmu.org/freeform-128k.mp3",
    description: "Independent freeform radio where curious DJs follow ideas instead of algorithms.",
  },
  {
    id: "rp-rock",
    name: "RP Rock Mix",
    location: "California, US",
    genre: "Rock · Alternative",
    quality: "192k MP3",
    url: "https://stream.radioparadise.com/rock-192",
    description: "Deep album cuts, enduring classics, and modern rock selected by people who listen closely.",
  },
  {
    id: "rp-global",
    name: "RP Global Mix",
    location: "California, US",
    genre: "Global · World",
    quality: "192k MP3",
    url: "https://stream.radioparadise.com/global-192",
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
const muteButton = document.querySelector("#muteButton");
const volumeSlider = document.querySelector("#volumeSlider");
const volumeValue = document.querySelector("#volumeValue");
const toast = document.querySelector("#toast");

const rememberedStation = localStorage.getItem("kio-station");
let currentIndex = Math.max(0, stations.findIndex((station) => station.id === rememberedStation));
let shouldResume = false;
let toastTimer;
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
  row.innerHTML = `
    <span class="station-number">${String(index + 1).padStart(2, "0")}</span>
    <span class="station-title"><strong>${station.name}</strong><span>${station.location}</span></span>
    <span class="station-genre">${station.genre}</span>
    <span class="quality-badge">${station.quality}</span>
    <span class="row-action" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m9 7 8 5-8 5V7Z" /></svg>
    </span>`;
  row.setAttribute("aria-label", `Tune to ${station.name}`);
  row.addEventListener("click", () => selectStation(index, true));
  return row;
}

stations.forEach((station, index) => stationList.appendChild(stationRow(station, index)));

function renderStation() {
  const station = stations[currentIndex];
  stationName.textContent = station.name;
  stationDescription.textContent = station.description;
  artworkTag.textContent = station.location;
  broadcastLabel.textContent = `${station.genre} · ${station.quality}`;
  playButton.setAttribute("aria-label", `${audio.paused ? "Play" : "Pause"} ${station.name}`);
  document.title = `${station.name} — Kio Radio`;
  localStorage.setItem("kio-station", station.id);

  document.querySelectorAll(".station-row").forEach((row, index) => {
    const active = index === currentIndex;
    row.classList.toggle("active", active);
    row.setAttribute("aria-current", active ? "true" : "false");
  });

  const isFavorite = favorites.has(station.id);
  favoriteButton.setAttribute("aria-pressed", String(isFavorite));
  favoriteButton.setAttribute("aria-label", `${isFavorite ? "Remove" : "Add"} ${station.name} ${isFavorite ? "from" : "to"} favorites`);
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

playButton.addEventListener("click", togglePlayback);
previousButton.addEventListener("click", () => selectStation(currentIndex - 1, true));
nextButton.addEventListener("click", () => selectStation(currentIndex + 1, true));

favoriteButton.addEventListener("click", () => {
  const station = stations[currentIndex];
  if (favorites.has(station.id)) favorites.delete(station.id);
  else favorites.add(station.id);
  localStorage.setItem("kio-favorites", JSON.stringify([...favorites]));
  renderStation();
  showToast(favorites.has(station.id) ? `${station.name} saved to favorites.` : `${station.name} removed from favorites.`);
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
renderStation();
setStatus("Ready when you are", "idle");
