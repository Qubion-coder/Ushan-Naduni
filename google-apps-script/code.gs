// Ushan & Naduni Homecoming — RSVP & Wishes endpoint
// Sheet: https://docs.google.com/spreadsheets/d/1TzBkgc0OIzQa-DdZ1Fhjl-nA1Fc3lL4bCVZXvoSkH-M/edit
const SPREADSHEET_ID = '1TzBkgc0OIzQa-DdZ1Fhjl-nA1Fc3lL4bCVZXvoSkH-M';

// Each form gets its own tab. Tabs + headers are created automatically.
const SHEETS = {
  RSVP: {
    name: 'RSVP',
    headers: ['Timestamp', 'Full Name', 'Guests', 'Notes'],
    row: (p) => [new Date(), p.fullName || '', p.guests || '', p.dietaryNotes || ''],
  },
  WISH: {
    name: 'Wishes',
    headers: ['Timestamp', 'Name', 'Message'],
    row: (p) => [new Date(), p.name || '', p.message || ''],
  },
};

const HEADER_BG = '#7A0A1C';
const HEADER_FG = '#FFFFFF';

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    const payload = parsePayload_(e);
    const config = SHEETS[String(payload.sheet || '').toUpperCase()];

    if (!config) {
      return jsonResponse_({ ok: false, error: 'Invalid sheet. Use RSVP or WISH.' });
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(ss, config);
    sheet.appendRow(config.row(payload));

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: String(error && error.message ? error.message : error),
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return jsonResponse_({
    ok: true,
    message: 'Ushan & Naduni homecoming form endpoint is running.',
  });
}

// Optional: run once from the Apps Script editor to create both tabs now.
function setupSheets() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  Object.keys(SHEETS).forEach((key) => getOrCreateSheet_(ss, SHEETS[key]));
}

function getOrCreateSheet_(ss, config) {
  let sheet = ss.getSheetByName(config.name);
  if (!sheet) {
    sheet = ss.insertSheet(config.name);
  }
  if (sheet.getLastRow() === 0) {
    const header = sheet.getRange(1, 1, 1, config.headers.length);
    header
      .setValues([config.headers])
      .setFontWeight('bold')
      .setBackground(HEADER_BG)
      .setFontColor(HEADER_FG);
    sheet.setFrozenRows(1);
    sheet.getRange('A:A').setNumberFormat('yyyy-mm-dd hh:mm');
    sheet.autoResizeColumns(1, config.headers.length);
  }
  return sheet;
}

function parsePayload_(e) {
  const params = e && e.parameter ? e.parameter : {};

  if (Object.keys(params).length > 0) {
    return params;
  }

  const contents = e && e.postData && e.postData.contents ? e.postData.contents : '';
  if (!contents) {
    return {};
  }

  if (contents.indexOf('=') !== -1 && contents.indexOf('{') !== 0) {
    return parseQueryString_(contents);
  }

  try {
    return JSON.parse(contents);
  } catch (_error) {
    return {};
  }
}

function parseQueryString_(query) {
  const out = {};
  const pairs = String(query).split('&');

  for (let i = 0; i < pairs.length; i++) {
    const part = pairs[i];
    if (!part) continue;

    const idx = part.indexOf('=');
    const rawKey = idx >= 0 ? part.slice(0, idx) : part;
    const rawValue = idx >= 0 ? part.slice(idx + 1) : '';
    const key = decodeURIComponent(rawKey.replace(/\+/g, ' '));
    const value = decodeURIComponent(rawValue.replace(/\+/g, ' '));

    out[key] = value;
  }

  return out;
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
