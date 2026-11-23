# Habit Quest

A gamified habit tracker. Tick habits on a monthly grid, track mood and sleep, and watch your weekly dashboard: XP, levels, streaks and weekly badges. Data syncs to a Google Sheet you own, so you can also edit habits there.

Live site: https://graceful-liger-5f265f.netlify.app

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole app (no build step, no dependencies) |
| `Code.gs` | Google Apps Script backend that reads and writes your Google Sheet |
| `README.md` | This guide |

## Features

- **Tracker:** month and year picker, habit checkbox grid split into weeks, Daily % row, Mood (1-5) and Sleep (hours) rows, Daily Progress bar chart.
- **Edit habits:** rename, add and delete habits in the app or in the Google Sheet.
- **Weekly dashboard:** completion ring and badge for each week, habit scores for the month, average sleep and mood, perfect-day streak.
- **Levels:** 10 levels from Rookie to Immortal.
  - 10 XP for each habit ticked
  - +20 XP bonus for a perfect day (all habits done)
- **Weekly badges:** Bronze 50%, Silver 75%, Gold 90%, Perfect 100%.
- Works offline in the browser. Data is saved on the device even without Google.
- Light and dark theme follow your device setting.

## Setup

### 1. Google Sheet backend

1. Go to https://sheets.new and create a blank Sheet.
2. Open **Extensions > Apps Script** from that Sheet. Do not create the script at script.google.com, or it will not be linked to the Sheet.
3. Delete the default code, paste in all of `Code.gs`, and save.
4. Click **Deploy > New deployment**, choose the gear icon > **Web app**.
5. Set **Execute as: Me** and **Who has access: Anyone**, then click **Deploy**.
6. Authorize when asked (Advanced > Go to project > Allow).
7. Copy the **Web app URL**. It must end in `/exec`.

The script creates three tabs automatically:

| Tab | Columns |
| --- | --- |
| Habits | id, name |
| Log | date, habitId, habit, done |
| Wellness | date, mood, sleep |

### 2. Host the app

**Netlify (no Git needed)**
1. Put `index.html` alone in a folder.
2. Open https://app.netlify.com/drop and drag the folder in.
3. Your site is live at a `*.netlify.app` address. The file must be named exactly `index.html` and sit at the top of the folder.

**GitHub Pages**
1. Create a public repository and upload `index.html`.
2. Open the repo's **Settings > Pages**.
3. Set Source to **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
4. Leave the **Custom domain** box empty.
5. After 1 to 2 minutes the site is live at `https://<username>.github.io/<repo>/`.

### 3. Connect the app to the Sheet

1. Open your live site and click **Google Sheet** at the top right.
2. Paste the `/exec` URL and click **Save and sync**.
3. The pill at the top turns green and says "Synced".
4. Repeat on each device you use. Paste the same URL on every device.

## Using it

- Tick a habit and it pushes to the Sheet about 1 second later.
- Edited a habit in the Sheet? Open **Google Sheet > Pull from Sheet** in the app.
- **Pull** replaces this device's data with the Sheet. **Push** replaces the Sheet with this device's data.
- On a phone, use your browser's **Add to Home screen** to open it like an app.

## Updating

- **App:** replace `index.html` on your host (drag the folder again on Netlify, or upload the file on GitHub).
- **Backend:** after editing `Code.gs`, go to **Deploy > Manage deployments > Edit (pencil) > Version: New version > Deploy**. The URL stays the same. Creating a brand new deployment gives a new URL.

## Troubleshooting

| Problem | Fix |
| --- | --- |
| Netlify shows "Page not found" | The file must be named exactly `index.html` and be at the top level of the uploaded folder |
| GitHub Pages shows a red "custom domain" error | Click **Remove** in the Custom domain box and leave it empty |
| Pill says "Sync failed" | Redeploy with **Who has access: Anyone** and make sure the URL ends in `/exec` |
| Sheet tabs do not appear | Open the script from the Sheet via **Extensions > Apps Script**, then redeploy and use the new URL |
| Changed `Code.gs` but nothing changed | Create a **New version** in Manage deployments |
| Data missing on a new address | Browser data is kept per address. Connect the same URL and click **Pull from Sheet** |

Test the backend by opening your `/exec` URL in a browser. It should show text starting with `{"habits":[`.

## Privacy

Anyone who has your `/exec` URL can read and write your Sheet data. Keep the URL private.
