# Book Club Club

Static site for **Book Club Club**: a read-together club for all the books in your other book clubs.

## Run locally

```bash
npm start
# open http://localhost:3000
```

## Deploy on GitHub Pages

This repo is static. Publish it from the repository root using GitHub Pages:

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Set branch to `main` and folder to `/ (root)`.
5. Save.

## Buttondown

The signup form posts to:

```text
https://buttondown.com/api/emails/embed-subscribe/bookclubclub
```

If the Buttondown username ends up being different, update the form `action` and popup URL in `index.html`.

The form collects:

- `email` as the Buttondown subscriber email
- `metadata__name` for optional name
- `metadata__phone` for optional phone
- `tag=website`

Buttondown metadata fields may need to be enabled in **Settings → Subscribing** for name/phone to appear cleanly in the dashboard.

## Posters

Poster images live in:

```text
posters/
```

Update `posters/manifest.json` when adding/removing poster images.
