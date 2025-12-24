# MISSION BOARD — JAMMMING (Spotify Playlist App)

## LANE RULES (ANTI-FATIGUE)

- **Terminal Lane**: setup, run server, git only
- **VS Code Lane**: components, state, API module only
- **Browser Lane**: test UI + DevTools only
- **GitHub Lane**: repo polish only (after push)

---

# 0) PRE-FLIGHT (Terminal Lane)

- [ ] `dir -Name` → must see `package.json`
- [ ] `npm run` → confirm scripts
- [ ] Start app:
  - [ ] CRA: `npm start`
  - [ ] Vite: `npm run dev`
- [ ] Confirm app loads in browser

---

# 1) SETUP + VERSION CONTROL

## Local Environment (Terminal Lane)

- [ ] Create React project (CRA or Vite)
- [ ] Run app successfully

## Git (Terminal Lane)

- [ ] `git init`
- [ ] Add `.gitignore` (node_modules + env)
- [ ] First commit: "Initial commit"
- [ ] Create GitHub repo: `jammming` (public)
- [ ] Add remote + push `main`

✅ Done when: repo exists, app runs locally, first push succeeds

---

# 2) STATIC COMPONENTS (UI SKELETON) — NO API YET

## Component Tree (VS Code Lane)

- [ ] App
- [ ] SearchBar
- [ ] SearchResults
- [ ] Playlist
- [ ] TrackList
- [ ] Track

## Static Layout (VS Code Lane)

- [ ] Render header/title
- [ ] Render SearchBar with input + search button
- [ ] Render two columns:
  - [ ] SearchResults list (placeholder tracks)
  - [ ] Playlist section (playlist name input + list + save button)

✅ Done when: you can see the full layout with dummy data

---

# 3) STATE + INTERACTION (NO SPOTIFY YET)

## App State (VS Code Lane)

- [ ] `searchResults` (array)
- [ ] `playlistName` (string)
- [ ] `playlistTracks` (array)

## Track Behavior (VS Code Lane)

- [ ] "Add" button on SearchResults tracks
- [ ] "Remove" button on Playlist tracks
- [ ] Prevent duplicates when adding
- [ ] Update playlist name input

✅ Done when: you can add/remove tracks smoothly using dummy data

---

# 4) SPOTIFY AUTH + SEARCH (GET)

## Environment Variables (Terminal + VS Code Lane)

- [ ] Create `.env` (NOT committed)
- [ ] Store Spotify Client ID (and redirect URI if needed)

## Spotify Utility Module (VS Code Lane)

Create `src/utils/spotify.js` with:

- [ ] `getAccessToken()`
- [ ] `search(term)` → returns normalized tracks

## Search Wiring (VS Code Lane)

- [ ] SearchBar calls `onSearch(term)`
- [ ] App calls `Spotify.search(term)`
- [ ] Set `searchResults` from response
- [ ] Show results in UI

✅ Done when: typing a term shows real Spotify tracks

---

# 5) SAVE PLAYLIST (POST)

## Save Flow (VS Code Lane)

In Spotify utility:

- [ ] `savePlaylist(name, trackUris)`

Typical steps (implementation varies):

- [ ] Get user id (`/me`)
- [ ] Create playlist (`/users/{id}/playlists`)
- [ ] Add tracks (`/playlists/{playlist_id}/tracks`)

## UI Behavior (VS Code Lane)

- [ ] Save button calls save function
- [ ] After save: reset to default playlist name + clear playlistTracks

✅ Done when: playlist appears in your Spotify account

---

# 6) DEPLOY + README (PORTFOLIO FINISH)

## Deployment (Terminal + GitHub Lane)

- [ ] Choose deploy path:
  - [ ] Netlify / Vercel (recommended)
  - [ ] GitHub Pages (possible, but auth redirect can be trickier)

## README Checklist (VS Code + GitHub Lane)

- [ ] Purpose
- [ ] Tech used
- [ ] Features
- [ ] Setup steps
- [ ] Future work
- [ ] Screenshot(s)

✅ Done when: live link works + README looks professional

---

# QUICK FIXES (WHEN BRAIN FOG HITS)

- **ENOENT package.json** → wrong folder → `cd` into folder with package.json
- **Missing script: dev** → likely CRA → `npm start`
- **Auth redirect mismatch** → check Spotify dashboard redirect URI matches EXACTLY
- **Token expires** → re-auth or refresh token logic (depending on approach)
- **Nothing renders** → check Console + React component export/import paths

---

# “DONE” DEFINITION (Codecademy Requirements)

- [ ] React web app
- [ ] Git + GitHub repo
- [ ] Spotify (or alternate) API with GET + POST
- [ ] Deployed app
- [ ] README w/ purpose, tech, features, future work
