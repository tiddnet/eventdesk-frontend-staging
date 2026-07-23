// Real custom domain (ADR 0030, 2026-07-21) — moved off the shared
// eventdesk-api.toddcampbell-eventdesk.workers.dev domain specifically so
// corporate security tooling (e.g. Mimecast Browser Isolation, hit for
// real by an onboarded admin's IT) can allowlist one clearly-scoped
// vendor domain instead of a shared hosting domain used by thousands of
// unrelated Workers apps. Swap to http://localhost:8787 locally if
// testing against `wrangler dev` instead.
const API_BASE_URL = "https://staging-api.eventdesk.click";

// ADR 0018 — every value from an API response that gets interpolated into
// an .innerHTML template string must be wrapped in this first. Loaded
// once here (config.js is included on every page) so there's exactly one
// copy, not one per page.
function escapeHtml(value) {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
