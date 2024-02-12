# Arquitecture

- Atomic design at `app/components/` . This means:
  - `atoms/`
  - `molecules/`
  - `organisms/`
  - `templates/`
- Slug `/` renders the website in `en` as default language
- Language can be changed in footer menu
- Routes /pt /en /etc will render other languages
  - langs filtered from the CMS payload. If lang doesn't exist in payload, then is not supported and the website will be rendered in english

## Running locally

Run the API server and development server:

```bash
npm run dev
```
