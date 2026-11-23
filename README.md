<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Habit Quest - Documentation</title>
  <style>
    :root {
      --bg: #0f172a;
      --card-bg: #1e293b;
      --card-border: #334155;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --accent: #8b5cf6;
      --accent-glow: rgba(139, 92, 246, 0.25);
      --success: #10b981;
      --warning: #f59e0b;
      --danger: #ef4444;
      --code-bg: #090d16;
      --radius: 12px;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 2rem 1rem;
    }

    .container {
      max-width: 860px;
      margin: 0 auto;
    }

    /* Header */
    header {
      text-align: center;
      padding: 3rem 1.5rem;
      background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(15, 23, 42, 0) 100%);
      border: 1px solid var(--card-border);
      border-radius: var(--radius);
      margin-bottom: 2.5rem;
      box-shadow: 0 10px 30px -10px var(--accent-glow);
    }

    .title {
      font-size: 2.75rem;
      font-weight: 800;
      background: linear-gradient(to right, #a78bfa, #c084fc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1.25rem;
      color: var(--text-muted);
      max-width: 650px;
      margin: 0 auto 1.5rem auto;
    }

    .badge-bar {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
    }

    .badge {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      color: var(--text-muted);
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .live-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--accent);
      color: #fff;
      text-decoration: none;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      font-weight: 600;
      transition: all 0.2s ease;
      box-shadow: 0 4px 14px var(--accent-glow);
    }

    .live-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px var(--accent-glow);
      filter: brightness(1.1);
    }

    /* Sections */
    section {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: var(--radius);
      padding: 2rem;
      margin-bottom: 2rem;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #fff;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 0.75rem;
    }

    h3 {
      font-size: 1.15rem;
      color: #a78bfa;
      margin: 1.5rem 0 0.75rem 0;
    }

    p {
      color: var(--text-muted);
      margin-bottom: 1rem;
    }

    /* Lists */
    ul, ol {
      color: var(--text-muted);
      padding-left: 1.5rem;
      margin-bottom: 1rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    li strong {
      color: var(--text);
    }

    /* Tables */
    .table-container {
      overflow-x: auto;
      margin: 1rem 0;
      border-radius: 8px;
      border: 1px solid var(--card-border);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      font-size: 0.95rem;
    }

    th {
      background-color: rgba(255, 255, 255, 0.03);
      color: var(--text);
      padding: 0.75rem 1rem;
      font-weight: 600;
      border-bottom: 1px solid var(--card-border);
    }

    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--card-border);
      color: var(--text-muted);
    }

    tr:last-child td {
      border-bottom: none;
    }

    /* Code & Callouts */
    code {
      background: var(--code-bg);
      color: #f472b6;
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 0.875em;
    }

    .alert {
      padding: 1rem 1.25rem;
      border-radius: 8px;
      border-left: 4px solid var(--accent);
      background: rgba(139, 92, 246, 0.1);
      margin: 1rem 0;
      color: var(--text);
    }

    .alert-warning {
      border-left-color: var(--warning);
      background: rgba(245, 158, 11, 0.1);
    }

    /* File Tree Visual */
    .file-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .file-card {
      background: var(--code-bg);
      border: 1px solid var(--card-border);
      padding: 1rem;
      border-radius: 8px;
    }

    .file-card strong {
      display: block;
      color: #38bdf8;
      font-family: monospace;
      margin-bottom: 0.25rem;
    }

    .file-card span {
      font-size: 0.85rem;
      color: var(--text-muted);
    }
  </style>
</head>
<body>

  <div class="container">
    
    <!-- Hero Header -->
    <header>
      <div class="badge-bar">
        <span class="badge">No Build Step</span>
        <span class="badge">Offline Capable</span>
        <span class="badge">Google Sheets Sync</span>
      </div>
      <h1 class="title">Habit Quest</h1>
      <p class="subtitle">A gamified habit tracker. Tick habits on a monthly grid, track mood and sleep, and level up your life.</p>
      <a href="https://graceful-liger-5f265f.netlify.app" target="_blank" class="live-button">
        ⚡ Launch Live Site
      </a>
    </header>

    <!-- Files Overview -->
    <section>
      <h2>📁 Project Files</h2>
      <div class="file-grid">
        <div class="file-card">
          <strong>index.html</strong>
          <span>The complete web app (no build step, zero external dependencies).</span>
        </div>
        <div class="file-card">
          <strong>Code.gs</strong>
          <span>Google Apps Script backend that syncs data with your Google Sheet.</span>
        </div>
        <div class="file-card">
          <strong>README.md</strong>
          <span>Setup instructions and troubleshooting reference guide.</span>
        </div>
      </div>
    </section>

    <!-- Key Features -->
    <section>
      <h2>✨ Features</h2>
      <ul>
        <li><strong>Tracker:</strong> Month/year picker, habit checkbox grid split by week, Daily % row, Mood (1-5), Sleep (hours), and a Daily Progress bar chart.</li>
        <li><strong>Edit Habits:</strong> Rename, add, or delete habits in the app or directly inside Google Sheets.</li>
        <li><strong>Weekly Dashboard:</strong> Completion ring & badge for each week, monthly habit scores, average sleep/mood, and perfect-day streaks.</li>
        <li><strong>Leveling System:</strong> 10 ranks from <em>Rookie</em> to <em>Immortal</em>.
          <ul>
            <li><code>+10 XP</code> for each ticked habit</li>
            <li><code>+20 XP</code> bonus for completing a perfect day</li>
          </ul>
        </li>
        <li><strong>Weekly Badges:</strong> Bronze (50%), Silver (75%), Gold (90%), Perfect (100%).</li>
        <li><strong>Offline Ready:</strong> Works in-browser offline. Saves state locally even without a Google connection.</li>
        <li><strong>Auto Theme:</strong> Adapts automatically to light or dark system settings.</li>
      </ul>
    </section>

    <!-- Setup Guide -->
    <section>
      <h2>🚀 Setup Guide</h2>

      <h3>1. Setup Google Sheet Backend</h3>
      <ol>
        <li>Go to <a href="https://sheets.new" target="_blank" style="color:#a78bfa;">sheets.new</a> to create a blank spreadsheet.</li>
        <li>Open <strong>Extensions > Apps Script</strong> from inside the Sheet (do <em>not</em> use script.google.com directly).</li>
        <li>Clear existing code, paste all content from <code>Code.gs</code>, and save.</li>
        <li>Click <strong>Deploy > New deployment</strong>. Select the gear icon ⚙️ and choose <strong>Web app</strong>.</li>
        <li>Configure settings:
          <ul>
            <li><strong>Execute as:</strong> <code>Me</code></li>
            <li><strong>Who has access:</strong> <code>Anyone</code></li>
          </ul>
        </li>
        <li>Click <strong>Deploy</strong> and accept permissions (<em>Advanced > Go to project > Allow</em>).</li>
        <li>Copy the <strong>Web app URL</strong> (it must end with <code>/exec</code>).</li>
      </ol>

      <div class="alert">
        <strong>Automatic Schema:</strong> The script auto-creates 3 tabs in your sheet:
      </div>

      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Tab Name</th>
              <th>Generated Columns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Habits</code></td>
              <td><code>id</code>, <code>name</code></td>
            </tr>
            <tr>
              <td><code>Log</code></td>
              <td><code>date</code>, <code>habitId</code>, <code>habit</code>, <code>done</code></td>
            </tr>
            <tr>
              <td><code>Wellness</code></td>
              <td><code>date</code>, <code>mood</code>, <code>sleep</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2. Host the Web App</h3>

      <strong style="color: var(--text);">Option A: Netlify (No Git required)</strong>
      <ol>
        <li>Place <code>index.html</code> by itself inside a new folder.</li>
        <li>Go to <a href="https://app.netlify.com/drop" target="_blank" style="color:#a78bfa;">app.netlify.com/drop</a> and drop the folder.</li>
        <li>Your site is live instantly at a <code>*.netlify.app</code> address!</li>
      </ol>

      <strong style="color: var(--text);">Option B: GitHub Pages</strong>
      <ol>
        <li>Create a public GitHub repository and upload <code>index.html</code>.</li>
        <li>Navigate to <strong>Settings > Pages</strong>.</li>
        <li>Set <em>Source</em> to <strong>Deploy from a branch</strong> (Branch: <code>main</code>, Folder: <code>/ (root)</code>) and click <strong>Save</strong>.</li>
        <li>Your site will be published at <code>https://&lt;username&gt;.github.io/&lt;repo&gt;/</code>.</li>
      </ol>

      <h3>3. Sync App to Google Sheet</h3>
      <ol>
        <li>Open your live app URL and click <strong>Google Sheet</strong> in the upper right corner.</li>
        <li>Paste your <code>/exec</code> URL and click <strong>Save and sync</strong>.</li>
        <li>The status indicator pill will turn green and display <strong>Synced</strong>.</li>
      </ol>
    </section>

    <!-- Usage & Syncing -->
    <section>
      <h2>🔄 How Data Syncing Works</h2>
      <ul>
        <li><strong>Pushing:</strong> Ticking a habit pushes changes to your Google Sheet after ~1 second.</li>
        <li><strong>Pulling:</strong> If you edit habits inside the Google Sheet, open <em>Google Sheet > Pull from Sheet</em> in the app to sync.</li>
        <li><strong>Sync Directions:</strong> <code>Pull</code> overrides local storage with Google Sheet data. <code>Push</code> overrides Google Sheet data with local storage.</li>
        <li><strong>Mobile Use:</strong> Tap <em>Add to Home Screen</em> in your mobile browser for an app-like feel.</li>
      </ul>
    </section>

    <!-- Troubleshooting -->
    <section>
      <h2>🛠️ Troubleshooting</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Problem</th>
              <th>Fix</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Netlify shows "Page not found"</td>
              <td>Ensure the file is named exactly <code>index.html</code> and is located in the top directory of the folder uploaded.</td>
            </tr>
            <tr>
              <td>GitHub Pages shows "custom domain" error</td>
              <td>Click <strong>Remove</strong> under the Custom domain setting and leave it blank.</td>
            </tr>
            <tr>
              <td>Pill status says "Sync failed"</td>
              <td>Redeploy script with <strong>Who has access: Anyone</strong> and confirm the URL ends in <code>/exec</code>.</td>
            </tr>
            <tr>
              <td>Sheet tabs missing</td>
              <td>Ensure script was opened via <strong>Extensions > Apps Script</strong> inside the Sheet, then redeploy.</td>
            </tr>
            <tr>
              <td>Edited Code.gs but app hasn't updated</td>
              <td>Go to <strong>Deploy > Manage deployments > Edit ✏️ > Version: New version > Deploy</strong>.</td>
            </tr>
            <tr>
              <td>Data missing on a new URL</td>
              <td>Local storage is isolated per URL. Input your <code>/exec</code> link and select <strong>Pull from Sheet</strong>.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Security & Privacy -->
    <section>
      <h2>🔒 Security & Privacy</h2>
      <div class="alert alert-warning">
        <strong>Important:</strong> Anyone who possesses your <code>/exec</code> Web App URL can read and write to your linked Google Sheet. Store and share your deployed Web App URL securely.
      </div>
    </section>

  </div>

</body>
</html>
