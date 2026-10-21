1. Open the sheet: https://docs.google.com/spreadsheets/d/1TzBkgc0OIzQa-DdZ1Fhjl-nA1Fc3lL4bCVZXvoSkH-M/edit
2. Open Extensions > Apps Script.
3. Replace the script content with the code from google-apps-script/code.gs and save.
4. (Optional) Select `setupSheets` in the function dropdown and click Run to create the
   `RSVP` and `Wishes` tabs with headers right away. Approve the permissions prompt.
   If you skip this, each tab is created automatically on its first submission.
5. Click Deploy > New deployment.
6. Select type: Web app.
7. Execute as: Me.
8. Who has access: Anyone.
9. Deploy and copy the Web App URL (ends in /exec).
10. Paste it into src/config.ts in place of PASTE_YOUR_WEB_APP_URL_HERE
    (or set VITE_GOOGLE_APPS_SCRIPT_URL in Vercel > Settings > Environment Variables).
11. Commit, push and redeploy the site.

Tabs and headers:
- RSVP:   Timestamp | Full Name | Guests | Notes
- Wishes: Timestamp | Name | Message

Notes:
- If you change the Apps Script code later, use Deploy > Manage deployments > Edit >
  Version: New version, so the Web App URL stays the same.
