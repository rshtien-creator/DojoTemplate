# Teacher Handoff Guide

This website is designed to avoid maintenance work.

The website itself is static. It has no database, no admin panel, no website passwords, and no payment service. The only things the teacher manages are normal Google tools.

The current site is a bilingual English/Dutch demo. Keep all teacher-specific real data out of the site until the final replacement phase.

## Free Demo Link

GitHub Pages can host the demo for free at:

```text
https://rshtien-creator.github.io/DojoTemplate/
```

This is enough for opening the site on a phone and sharing it with people. A custom domain is optional and not needed for the demo.

## What The Teacher Controls

### Google Calendar

Use this for:

- Weekly class times
- Cancellations
- Holidays
- Seminars
- Gradings
- Special events

The website can embed one specific public Google Calendar. When the teacher edits that calendar from his phone, the website calendar updates automatically.

Important privacy note: the website does not get access to the teacher's Google account. It only displays the calendar ID that is placed in the public embed URL. To avoid exposing personal information, create a separate calendar such as `Dojo Public Calendar`, add only public dojo events to it, and embed only that calendar.

Recommended setup:

- In Google Calendar, create a separate calendar for the dojo.
- Add only public class times, holidays, seminars, and events.
- Open the calendar settings for that specific calendar.
- Under access permissions, make only that calendar public.
- Copy the embed URL from "Integrate calendar".
- Put that embed URL in `calendarEmbed` inside `src/config/dojo.ts`.

Do not embed the teacher's personal calendar.

### Google Drive Forms

Use this for:

- Registration PDFs
- Health forms
- Rules documents
- Price sheets

The demo includes local downloadable sample documents. For the final website, replace those with individual shared Google Drive files as downloads. If a document changes, the teacher can replace the file in Drive or send us a new shared file link.

For direct download links, use this format:

```text
https://drive.google.com/uc?export=download&id=FILE_ID
```

The `FILE_ID` comes from a normal Drive share link:

```text
https://drive.google.com/file/d/FILE_ID/view
```

### Google Drive Gallery

Use this for latest photos.

The recommended setup is hybrid:

- Keep a few polished static photos on the website for the first impression.
- Add a button to a shared Google Drive folder for latest photos.
- The teacher can upload new photos from his phone.

This avoids fragile custom gallery automation.

### Google Maps

Use a public Google Maps link for navigation.

Students can tap the address and open their normal maps app.

## What We Do Not Build

- No login system
- No admin dashboard
- No database
- No payment system
- No custom file upload system
- No password recovery

This keeps the website stable and free.

## Final Launch Checklist

- Replace demo dojo name, instructor text, email, phone, and address in `src/config/dojo.ts`.
- Replace placeholder Google Calendar link with the real public embed for the dojo-only calendar.
- Replace demo form downloads with real shared Google Drive file download links.
- Replace demo gallery visuals with selected real dojo photos.
- Confirm all links work on a phone.
- Deploy with GitHub Pages.
