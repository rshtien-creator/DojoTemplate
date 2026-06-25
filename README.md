# DojoTemplate

A static dojo website demo designed to stay free, stable, and easy for a teacher to manage without a website admin panel.

## Goals

- Static website only: no backend, database, accounts, or passwords.
- Free-hosting friendly: works with GitHub Pages or similar static hosts.
- Teacher-managed content: calendar, documents, map, and latest gallery can live in the teacher's Google account.
- Hybrid gallery: a few polished static showcase images on the site, plus a Google Drive link for photos the teacher can update from his phone.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Editing Dojo Content

Most demo content lives in `src/config/dojo.ts`.

Replace the placeholder Google links with the teacher's real public links:

- `calendarEmbed`
- `calendarPublicUrl`
- `mapsUrl`
- `driveGalleryFolderUrl`

Forms are individual file downloads. Use Google Drive direct-download URLs in each item in `forms`.

The calendar should be a separate public dojo calendar, not the teacher's personal calendar. The site only shows the calendar ID included in `calendarEmbed`.

For the final site, use real dojo photos for the main static images and keep the Drive gallery button for latest photos.

## Handoff Notes

See `docs/teacher-handoff.md` for the no-maintenance setup plan and final launch checklist.
