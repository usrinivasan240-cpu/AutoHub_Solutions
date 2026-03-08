# Draft: Convert Static Website to Dynamic

## User Requirements Confirmed
- **CMS Approach**: MDX/Filesystem (simple JSON/data files)
- **Content to Make Dynamic**: Everything (testimonials, services, pricing, portfolio, FAQ, team, blog)
- **Data Migration**: No existing data - start fresh
- **Admin Interface**: Use CMS dashboard (no custom admin for now)
- **Goal**: Show clients it's a real company website - keep simple

## Technical Approach
1. Create data directory with JSON/MD files for each content type
2. Create data loading utilities to read content dynamically
3. Update pages to fetch from data files instead of hardcoded content
4. Keep UI the same - just dynamic data

## Content Types to Convert
- [ ] Testimonials (name, rating, review, company, avatar)
- [ ] Services (title, description, icon, features)
- [ ] Pricing (tier name, price, features, recommended flag)
- [ ] Portfolio/Projects (title, description, images, tags)
- [ ] FAQ (question, answer, category)
- [ ] Team members (name, role, bio, photo, social links)
- [ ] Blog posts (title, excerpt, content, date, author)

## Scope Boundaries
- INCLUDE: Convert all hardcoded content to data files
- INCLUDE: Create data loading utilities
- INCLUDE: Update pages to use dynamic data
- EXCLUDE: Custom admin panel (use file editing for now)
- EXCLUDE: Database integration
- EXCLUDE: CMS integration (files are sufficient)

## Open Questions
- [Q1]: What file format? JSON or MDX/Markdown?
- [Q2]: Where should data files live? /data or /content?
- [Q3]: Any specific data fields needed beyond typical?
