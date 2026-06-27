# Pro Trades Academy HVAC Diagnostic OS - Version Tracking

This file is the working version registry for the Pro Trades Academy HVAC Diagnostic OS demo.

## Versioning Rule

- Major versions: `1`, `2`, `3`, `4`, etc.
- Incremental upgrades: `3.1`, `3.2`, `3.3`, etc.
- Do not overwrite the meaning of an existing version.
- Each meaningful change gets the next point version.
- Keep website hits stable when possible and add cache-busting query strings with the commit/version.
- Before moving to the next major version, keep the final point version as the rollback keeper.

## Current Labels

### Google + ChatGPT Collaboration - Version 1
- Page: `google-chatgpt-collab-v1.html`
- Website hit: `https://deyve55.github.io/pro-trades-hvac-demo/google-chatgpt-collab-v1.html`
- Purpose: working collaboration baseline.

### ChatGPT - Version 2
- Page: `chatgpt-version-2.html`
- Website hit: `https://deyve55.github.io/pro-trades-hvac-demo/chatgpt-version-2.html`
- Purpose: original ChatGPT clickable version / comparison baseline.

### ChatGPT - Version 3
- Page: `chatgpt-version-3.html`
- Website hit: `https://deyve55.github.io/pro-trades-hvac-demo/chatgpt-version-3.html`
- Purpose: coded SPA with high-fidelity Pro Trades HVAC Diagnostic OS direction.

### ChatGPT - Version 3.1
- Page: `chatgpt-version-3.html` at commit `13e89e0de23cefc8ae653aa641c96beff306f5e3`
- Website hit: `https://deyve55.github.io/pro-trades-hvac-demo/chatgpt-version-3.html?v=13e89e`
- Upgrade: Spatial Scan flow changed from simple 0-100 progress into a field recording/evaluation workflow.
- Behavior: Start Environment Record -> camera/mic permission where supported -> timer/frame/confidence -> Complete Scan + Evaluate -> generates square footage, cubic footage, BTU/h, system tons, dimensions, and duct recommendation -> pushes values to Home, Report, and Present.

## Next Planned Versions

- `3.2`: next refinement to spatial scan, field measurements, or UI polish.
- `3.3`: next refinement after 3.2.
- Continue point versions until approved to move to Version 4.
- Version 4 should only start when the current 3.x keeper is accepted.

## Downgrade / Upgrade Policy

Every change should preserve a known rollback path:

- Keep the live page URL and the commit hash.
- Keep local HTML/ZIP backups when generated in ChatGPT.
- If a new point version breaks, rollback to the previous accepted point version.
- Never randomly redesign the approved visual direction without explicit approval.
