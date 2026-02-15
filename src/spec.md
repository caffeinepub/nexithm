# Specification

## Summary
**Goal:** Restructure the existing React (Vite) frontend codebase into a cleaner pages/components/sections folder organization without changing UI, behavior, styling, animations, layout, or content.

**Planned changes:**
- Create `frontend/src/pages/HomePage.tsx` to compose existing sections in the exact order: Hero → About → Services → Works → GetCode → Contact.
- Create `frontend/src/components/` and move `Navbar` and `Footer` into it without any functional or visual changes.
- Create `frontend/src/sections/` and move the section components (`Hero`, `About`, `Services`, `Works`, `GetCode`, `Contact`) into it while preserving their exports and markup.
- Relocate shared marketing-only components/utilities used by sections (e.g., `MotionHeading`, `MotionReveal`, `CodeBlockWithCopy`, scroll utility) to an appropriate location under `frontend/src/components/`, updating imports accordingly.
- Update `frontend/src/App.tsx` to render `<Navbar />`, `<HomePage />`, `<Footer />` while preserving the existing wrapper structure/classes.
- Update all affected import paths and ensure section IDs and smooth-scroll navigation behavior remain intact.

**User-visible outcome:** The app looks and behaves exactly the same as before (including smooth scrolling to `home`, `about`, `services`, `works`, `get-code`, `contact`), but the codebase is reorganized into a clearer structure for easier maintenance.
