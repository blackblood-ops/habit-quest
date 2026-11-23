/**
 * Habit Quest backend. Paste into Extensions > Apps Script of a Google Sheet,
 * then Deploy > New deployment > Web app (Execute as: Me, Who has access: Anyone).
 *
 * Sheets (created automatically):
 *   Habits : id | name                       <- edit habit names here, add or delete rows
 *   Log    : date | habitId | habit | done    <- one row per completed habit per day (done = 1)
 *   Wellness: date | mood | sleep
 */
const HEAD = {
  Habits: ['id', 'name'],
  Log: ['date', 'habitId', 'habit', 'done'],
  Wellness: ['date', 'mood', 'sleep']
};

function sheet_(name) {
  const ss = SpreadsheetApp.getActive();
  let s = ss.getSheetByName(name);
  if (!s) {
    s = ss.insertSheet(name);
    s.appendRow(HEAD[name]);
    s.setFrozenRows(1);
    s.getRange(1, 1, 1, HEAD[name].length).setFontWeight('bold');
    s.getRange('A:A').setNumberFormat('@'); // keep dates / ids as plain text
    if (name === 'Log') s.getRange('B:B').setNumberFormat('@');
    if (name === 'Habits' && s.getLastRow() < 2) {
      ['Wake up at 05:00', 'Gym', 'Reading / Learning', 'Day Planning']
        .forEach((n, i) => s.appendRow(['h' + (i + 1), n]));
    }
  }
  return s;
}

function str_(v) {
  if (v instanceof Date) return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  return String(v);
}

function rows_(name) {
  const v = sheet_(name).getDataRange().getValues();
  v.shift();
  return v;
}

function doGet() {
  const habits = rows_('Habits')
    .filter(r => String(r[1]).trim() !== '')
    .map((r, i) => ({ id: String(r[0]).trim() || ('row' + (i + 2)), name: String(r[1]).trim() }));
  const log = rows_('Log')
    .filter(r => r[0] !== '' && r[1] !== '')
    .map(r => ({ date: str_(r[0]), habitId: String(r[1]), done: r[3] }));
  const wellness = rows_('Wellness')
    .filter(r => r[0] !== '')
    .map(r => ({ date: str_(r[0]), mood: r[1], sleep: r[2] }));
  return out_({ habits: habits, log: log, wellness: wellness });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const names = {};
    d.habits.forEach(h => names[h.id] = h.name);
    write_('Habits', d.habits.map(h => [h.id, h.name]));
    write_('Log', d.log.map(x => [x.date, x.habitId, names[x.habitId] || '', x.done]));
    write_('Wellness', d.wellness.map(x => [x.date, x.mood, x.sleep]));
    return out_({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function write_(name, rows) {
  const s = sheet_(name);
  const last = s.getLastRow();
  if (last > 1) s.getRange(2, 1, last - 1, HEAD[name].length).clearContent();
  if (rows.length) {
    s.getRange(2, 1, rows.length, HEAD[name].length).setNumberFormat('@').setValues(rows);
  }
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
