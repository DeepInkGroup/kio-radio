# Kio Radio

![Kio Radio signal artwork](assets/kio-signal.png)

A focused, dark internet-radio player for human-curated music and live global news.

**[Listen on Kio Radio](https://deepinkgroup.github.io/kio-radio/)**

## What it does

Kio Radio brings eleven independent live signals into one lightweight player. Tune into alternative and world music, settle into classical, ambient, or lo-fi focus streams, or switch directly to BBC and CNN news audio.

- Real HTTPS audio streams—no demo tracks or simulated playback
- Music, Focus, News, and Favorites filters
- Instant station search
- Previous/next controls, mute, and precise volume control
- Shareable station URLs such as `#bbc-world`
- Favorites, last station, and volume remembered locally
- Clear connecting, buffering, playing, paused, and unavailable states
- Responsive layout with keyboard and reduced-motion support
- No frameworks, analytics, accounts, or runtime dependencies

## The dial

| Station | Category | Stream | Broadcaster |
| --- | --- | --- | --- |
| KEXP 90.3 | Eclectic / alternative | 160k AAC | [KEXP](https://www.kexp.org/streaming-urls/) |
| All Classical | Classical | 128k MP3 | [All Classical Radio](https://www.allclassical.org/contact/contact-our-technical-team/) |
| Atma FM Ambient | Ambient / experimental | 128k MP3 | [Atma FM](https://atma.fm/) |
| Kalizo Lo-Fi | Lo-fi / chillhop | 192k MP3 | [Kalizo Radio](https://www.kalizoradio.com/radio/lofi/) |
| BBC World Service | Global news | 56k MP3 | [BBC Audio](https://www.bbc.com/audio/stations) |
| CNN | Live news | 96k MP3 | [CNN Audio](https://www.cnn.com/audio) via TuneIn |
| WFMU Freeform | Freeform / community | 128k MP3 | [WFMU](https://www.wfmu.org/audiostream.shtml) |
| Radio Paradise | Eclectic | 192k MP3 | [Radio Paradise](https://radioparadise.com/) |
| RP Mellow Mix | Mellow / acoustic | 192k MP3 | [Radio Paradise](https://radioparadise.com/) |
| RP Rock Mix | Rock | 192k MP3 | [Radio Paradise](https://radioparadise.com/) |
| RP Global Mix | Global music | 192k MP3 | [Radio Paradise](https://radioparadise.com/) |

Streams remain hosted and operated by their broadcasters. Availability, programming, advertising, and regional access are controlled by each provider. CNN audio is publicly distributed through TuneIn and may contain inserted advertising.

## Run locally

Requirements: Node.js 18 or newer.

```bash
git clone https://github.com/DeepInkGroup/kio-radio.git
cd kio-radio
npm start
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). Browsers require a user click before audio can begin.

## Controls

| Action | Control |
| --- | --- |
| Play or pause | Main player button or `Space` |
| Previous station | Previous button or `←` |
| Next station | Next button or `→` |
| Filter the dial | Category buttons |
| Save a station | Heart button |
| Share a station | Share button |

Keyboard shortcuts are ignored while a form control has focus.

## Development

The project is deliberately small:

```text
index.html                 semantic player markup
style.css                  responsive dark interface
app.js                     station data and playback state
server.js                  dependency-free local server
test/site.test.js          content and security checks
assets/kio-signal.png      original Kio artwork
```

Run the checks with:

```bash
npm test
```

GitHub Pages serves the static files directly from `main`. The local Node server is only a development convenience.

## Privacy

Kio Radio has no analytics and sends no personal information to its own backend. Playback connects your browser directly to the selected broadcaster. Preferences are stored only in your browser using `localStorage`.

## License

The application code is available under the [MIT License](LICENSE). Radio programming, station names, and third-party streams belong to their respective broadcasters.
