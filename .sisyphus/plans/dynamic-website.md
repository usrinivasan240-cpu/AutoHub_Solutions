# Convert Static Website to Dynamic

## TL;DR

> **Quick Summary**: Convert hardcoded content in the Next.js website to dynamic data loaded from JSON files. Extract existing testimonials, services, pricing, portfolio, FAQ, and team content into structured data files that can be easily edited.

> **Deliverables**:
> - JSON data files for each content type
> - Data loading utilities
> - Updated pages fetching from data files
> - Documentation on how to edit content

> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 2 waves
> **Critical Path**: Data files → Utilities → Pages

---

## Context

### Original Request
User wants to convert a static startup company website to dynamic. Currently has hardcoded content (testimonials, services, pricing, portfolio, FAQ, team, blog) that should come from data files.

### Interview Summary
**Key Discussions**:
- **CMS Approach**: MDX/Filesystem (JSON data files) - keep it simple
- **Content Types**: Everything (testimonials, services, pricing, portfolio, FAQ, team, blog)
- **Data Migration**: Extract existing hardcoded content into JSON files
- **Admin**: Use file editing (no custom CMS for now)
- **Goal**: Show clients it's a real company website - keep it simple

### Metis Review
**Identified Gaps** (addressed):
- **File format**: Using JSON for simplicity (not MDX)
- **Content extraction**: Will extract existing hardcoded content into data files
- **No CMS**: Using filesystem approach - edit JSON files directly
- **Scope locked**: No authentication, search, comments, or complex features

---

## Work Objectives

### Core Objective
Convert all hardcoded content in the Next.js website to be dynamically loaded from JSON data files. This makes the website look more legitimate to clients by having proper data structure.

### Concrete Deliverables
- Data directory structure: `src/data/*.json`
- Content types: testimonials, services, pricing, portfolio, faq, team, blog
- Data loader utilities: `src/lib/data.ts`
- Updated page components fetching from data files

### Definition of Done
- [ ] All hardcoded content extracted to JSON files
- [ ] Pages load data dynamically
- [ ] `npm run build` passes
- [ ] All pages render correctly with new data

### Must Have
- JSON data files for each content type
- Type-safe data loading
- Pages display content from files
- Existing UI unchanged

### Must NOT Have (Guardrails)
- No custom admin panel
- No database integration
- No authentication
- No search functionality
- No comment systems
- No newsletter with database
- No multi-language support
- No complex CMS integration

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: YES (Next.js project)
- **Automated tests**: NO (simple data migration)
- **Agent-Executed QA**: YES - verify all pages load correctly

### QA Policy
Every task includes agent-executed verification:
- Build passes: `npm run build`
- Pages render: Check each page loads
- Content displays: Verify data shows correctly

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Data Foundation - Start Immediately):
├── Task 1: Create data directory structure and testimonials.json
├── Task 2: Create services.json and pricing.json
├── Task 3: Create portfolio.json and faq.json
├── Task 4: Create team.json and blog.json
├── Task 5: Create data loading utility (src/lib/data.ts)
└── Task 6: Create TypeScript interfaces for all data types

Wave 2 (Integration - After Wave 1):
├── Task 7: Update Home page to load testimonials dynamically
├── Task 8: Update Services page to load services dynamically
├── Task 9: Update Pricing page to load pricing dynamically
├── Task 10: Update Portfolio page to load projects dynamically
├── Task 11: Update FAQ page to load questions dynamically
├── Task 12: Update About page to load team dynamically
├── Task 13: Update Blog page to load posts dynamically
└── Task 14: Final build verification
```

### Dependency Matrix
- **1-6**: — — 7-13, 1
- **7-13**: 5, 6 — 14, 1
- **14**: 7-13 — —

---

## TODOs

- [ ] 1. Create data directory and testimonials.json

  **What to do**:
  - Create `src/data/` directory
  - Create `testimonials.json` with existing testimonial data from testimonials.tsx
  - Include: id, name, company, role, rating (1-5), content, avatar (placeholder), date

  **Must NOT do**:
  - Don't create any components
  - Don't modify any existing files

  **References**:
  - `src/components/sections/testimonials.tsx` - Extract hardcoded testimonials
  - Example JSON structure from similar projects

  **Acceptance Criteria**:
  - [ ] File created: src/data/testimonials.json
  - [ ] Valid JSON format
  - [ ] Contains all existing testimonials

- [ ] 2. Create services.json and pricing.json

  **What to do**:
  - Create `src/data/services.json` with services data from services-content.tsx
  - Include: id, title, description, icon, features[], featured flag
  - Create `src/data/pricing.json` with pricing tiers from pricing-content.tsx
  - Include: id, name, price, description, features[], recommended flag

  **Must NOT do**:
  - Don't create any components

  **References**:
  - `src/components/sections/services-content.tsx`
  - `src/components/sections/pricing-content.tsx`

  **Acceptance Criteria**:
  - [ ] File created: src/data/services.json
  - [ ] File created: src/data/pricing.json
  - [ ] Valid JSON format

- [ ] 3. Create portfolio.json and faq.json

  **What to do**:
  - Create `src/data/portfolio.json` with project data from portfolio-content.tsx
  - Include: id, title, description, images[], tags[], client, year, featured flag
  - Create `src/data/faq.json` with FAQ data from faq-content.tsx
  - Include: id, question, answer, category

  **References**:
  - `src/components/sections/portfolio-content.tsx`
  - `src/components/sections/faq-content.tsx`

  **Acceptance Criteria**:
  - [ ] File created: src/data/portfolio.json
  - [ ] File created: src/data/faq.json
  - [ ] Valid JSON format

- [ ] 4. Create team.json and blog.json

  **What to do**:
  - Create `src/data/team.json` with team member data (from about page or new)
  - Include: id, name, role, bio, photo, socialLinks{}
  - Create `src/data/blog.json` with blog posts (create sample posts)
  - Include: id, title, excerpt, content, author, date, tags[], featuredImage

  **References**:
  - `src/app/about/page.tsx` - Check for team info
  - `src/components/sections/blog-content.tsx`

  **Acceptance Criteria**:
  - [ ] File created: src/data/team.json
  - [ ] File created: src/data/blog.json
  - [ ] Valid JSON format

- [ ] 5. Create data loading utility (src/lib/data.ts)

  **What to do**:
  - Create `src/lib/data.ts` with functions to load all data:
    - `getTestimonials()`, `getServices()`, `getPricing()`
    - `getPortfolio()`, `getFAQ()`, `getTeam()`, `getBlogPosts()`
  - Use `import.meta.glob` or `fs` to read JSON files
  - Add error handling for missing files

  **References**:
  - Next.js data fetching patterns
  - TypeScript for type safety

  **Acceptance Criteria**:
  - [ ] File created: src/lib/data.ts
  - [ ] All getter functions implemented
  - [ ] Type-safe returns
  - [ ] Import works: `import { getTestimonials } from '@/lib/data'`

- [ ] 6. Create TypeScript interfaces for all data types

  **What to do**:
  - Create `src/types/data.ts` with interfaces:
    - `Testimonial`, `Service`, `PricingTier`, `PortfolioItem`
    - `FAQItem`, `TeamMember`, `BlogPost`
  - Export all interfaces

  **References**:
  - JSON structure created in tasks 1-4

  **Acceptance Criteria**:
  - [ ] File created: src/types/data.ts
  - [ ] All 7 interfaces defined
  - [ ] Types used in data.ts

- [ ] 7. Update Home page to load testimonials dynamically

  **What to do**:
  - Modify `src/app/page.tsx` to import `getTestimonials` from `@/lib/data`
  - Pass testimonials data to `<Testimonials />` component
  - Keep UI unchanged - only data source changes

  **References**:
  - `src/app/page.tsx` - Current implementation
  - `src/components/sections/testimonials.tsx` - Component to update
  - `@/lib/data` - New data loader

  **Acceptance Criteria**:
  - [ ] Testimonials load from JSON file
  - [ ] UI renders same as before
  - [ ] Build passes

- [ ] 8. Update Services page to load services dynamically

  **What to do**:
  - Modify `src/app/services/page.tsx` to load from `getServices()`
  - Pass services data to section component

  **References**:
  - `src/app/services/page.tsx`
  - `src/components/sections/services-content.tsx`

  **Acceptance Criteria**:
  - [ ] Services load from JSON file
  - [ ] UI renders same as before

- [ ] 9. Update Pricing page to load pricing dynamically

  **What to do**:
  - Modify `src/app/pricing/page.tsx` to load from `getPricing()`
  - Pass pricing data to section component

  **References**:
  - `src/app/pricing/page.tsx`
  - `src/components/sections/pricing-content.tsx`

  **Acceptance Criteria**:
  - [ ] Pricing loads from JSON file
  - [ ] UI renders same as before

- [ ] 10. Update Portfolio page to load projects dynamically

  **What to do**:
  - Modify `src/app/portfolio/page.tsx` to load from `getPortfolio()`
  - Pass portfolio data to section component

  **References**:
  - `src/app/portfolio/page.tsx`
  - `src/components/sections/portfolio-content.tsx`

  **Acceptance Criteria**:
  - [ ] Portfolio loads from JSON file
  - [ ] UI renders same as before

- [ ] 11. Update FAQ page to load questions dynamically

  **What to do**:
  - Modify `src/app/faq/page.tsx` to load from `getFAQ()`
  - Pass FAQ data to section component

  **References**:
  - `src/app/faq/page.tsx`
  - `src/components/sections/faq-content.tsx`

  **Acceptance Criteria**:
  - [ ] FAQ loads from JSON file
  - [ ] UI renders same as before

- [ ] 12. Update About page to load team dynamically

  **What to do**:
  - Modify `src/app/about/page.tsx` to load from `getTeam()`
  - Pass team data to section component

  **References**:
  - `src/app/about/page.tsx`

  **Acceptance Criteria**:
  - [ ] Team loads from JSON file
  - [ ] UI renders same as before

- [ ] 13. Update Blog page to load posts dynamically

  **What to do**:
  - Modify `src/app/blog/page.tsx` to load from `getBlogPosts()`
  - Pass blog data to section component

  **References**:
  - `src/app/blog/page.tsx`
  - `src/components/sections/blog-content.tsx`

  **Acceptance Criteria**:
  - [ ] Blog posts load from JSON file
  - [ ] UI renders same as before

- [ ] 14. Final build verification

  **What to do**:
  - Run `npm run build` to verify everything compiles
  - Check all pages build without errors
  - Verify no TypeScript errors

  **Acceptance Criteria**:
  - [ ] `npm run build` exits with code 0
  - [ ] No TypeScript errors
  - [ ] All pages render correctly

---

## Final Verification Wave

- [ ] F1. **Build Verification** — Verify `npm run build` passes

- [ ] F2. **Content Check** — Verify all 7 data types load correctly

- [ ] F3. **Page Render Check** — All 7 pages render without errors

---

## Commit Strategy

- **Wave 1**: `feat(data): add JSON data files and types`
- **Wave 2**: `feat(pages): integrate dynamic data loading`
- **Final**: `chore: final build verification`

---

## Success Criteria

### Verification Commands
```bash
npm run build  # Expected: 0 errors
```

### Final Checklist
- [ ] All JSON data files created in src/data/
- [ ] Data loading utility created in src/lib/data.ts
- [ ] TypeScript interfaces in src/types/data.ts
- [ ] All 7 pages updated to use dynamic data
- [ ] Build passes without errors
- [ ] All existing UI preserved
