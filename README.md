# UIK Token System

This project currently contains a token-first SCSS foundation generated from Figma design tokens.

## What has been built

- Centralized color tokens in `/Users/darrellparkhouse/development/uik/scss/_colors.scss`
- Centralized spacing tokens in `/Users/darrellparkhouse/development/uik/scss/_spcing.scss`
- Centralized radius tokens in `/Users/darrellparkhouse/development/uik/scss/_radius.scss`
- Shared helper functions in `/Users/darrellparkhouse/development/uik/scss/_functions.scss`
- SCSS entrypoint in `/Users/darrellparkhouse/development/uik/scss/app.scss`

The structure is designed to be a single source of truth for visual primitives.

## Token files

### Colors
`/Users/darrellparkhouse/development/uik/scss/_colors.scss`

Contains `$colors` as nested groups (for example: `base`, `gray`, `brand`, `error`, `warning`, `success`).

Example:

```scss
$colors: (
  "gray": (
    "900": #181d27
  )
);
```

### Spacing
`/Users/darrellparkhouse/development/uik/scss/_spcing.scss`

Contains:
- `$spacing-scale`: raw numeric scale from Figma (`"0"`, `"0.5"`, `"1"` ... `"480"`)
- `$spacing`: semantic aliases (`"none"`, `"xs"`, `"md"`, `"section-md"`, `"container-lg"`, etc.)

### Radius
`/Users/darrellparkhouse/development/uik/scss/_radius.scss`

Contains semantic radius tokens:
- `none`, `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `full`

## Functions

`/Users/darrellparkhouse/development/uik/scss/_functions.scss`

### `token($tokens, $key, $subkey: null)`
Generic accessor for token maps with compile-time errors for unknown keys.

Use `token(...)` directly with each token map.

## Usage example

```scss
@use "functions" as *;
@use "colors";
@use "spcing";
@use "radius";

.card {
  background: token(colors.$colors, "base", "white");
  color: token(colors.$colors, "gray", "900");
  padding: token(spcing.$spacing, "md");
  margin-bottom: token(spcing.$spacing-scale, "24");
  border-radius: token(radius.$radius, "lg");
}
```

## Notes

- File name is intentionally `_spcing.scss` to match current project naming.
- If you want full parity with Figma primitives, next logical token files are:
  - `_shadows.scss`
  - `_typography.scss`
