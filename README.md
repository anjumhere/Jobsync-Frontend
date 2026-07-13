# JobSync 💼🚀

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev/)
[![TypeScript 6](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![Vite 8](https://img.shields.io/badge/Vite-8.1-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vite.dev/)
[![React Router 7](https://img.shields.io/badge/React_Router-7.1-CA4245?logo=react-router&logoColor=white&style=flat-square)](https://reactrouter.com/)

**JobSync** is a highly responsive, modern job discovery and application platform. Designed for maximum usability, sleek aesthetic appeal, and robust type safety, this web application connects job seekers with top-tier companies. It leverages a clean, feature-driven architectural pattern built on the latest **React 19**, **Vite 8**, **Tailwind CSS v4**, and **TypeScript 6**.

---

## 🏗️ Technical Stack & Tooling

JobSync relies on a cutting-edge front-end ecosystem focused on performance, modularity, and rapid rendering:

*   **Core Library**: [React 19](https://react.dev/) utilizing functional component architectures.
*   **Routing Architecture**: [React Router v7](https://reactrouter.com/) using modern client-side routing via `createBrowserRouter` for robust navigation without full page reloads.
*   **Styling & Design System**: [Tailwind CSS v4](https://tailwindcss.com/) using the high-performance `@tailwindcss/vite` compilation engine.
    *   *Sleek Visual Identity*: Configured directly in `src/index.css` via Tailwind's `@theme` directive, utilizing custom color variables such as `accent` (`#ef4444`), `ink` (`#111827`), `muted` (`#6b7280`), and `border` (`#e5e7eb`).
    *   *Typography*: Styled using the clean and professional **Inter** variable typeface.
*   **Build Engine**: [Vite 8](https://vite.dev/) offering instantaneous Hot Module Replacement (HMR).
*   **Type Safety**: [TypeScript 6](https://www.typescriptlang.org/) with robust compile-time interfaces, providing strict validation for database-equivalent object structures.
*   **Icons**: [Lucide React](https://lucide.dev/guide) for consistent, lightweight vector iconography.

---

## 📁 Project Structure

JobSync is organized using an intuitive, **Feature-Based Structure**. This keeps domain logic (jobs, companies, landing details, authentication) self-contained, enhancing maintainability as the codebase grows:

```text
src/
├── assets/                 # Global static image assets & SVGs
├── components/             # Reusable UI elements & global layout structures
│   └── layout/
│       ├── AppLayout.tsx   # Base template containing Header, Footer, and Outlet
│       └── Navbar.tsx      # Main application navigation with reactive routes
├── features/               # Self-contained domain-driven modules
│   ├── auth/               # User Authentication (Login & Signup views)
│   ├── companies/          # Company Directory, Profile Cards & mock datasets
│   ├── jobs/               # Job Listings, Search Cards, & mock datasets
│   └── landing/            # Home landing page showcasing the Hero tagline
├── lib/                    # API client layer (React Query Client config, etc.)
├── routes/
│   └── router.tsx          # React Router v7 routes mapping paths to layouts
├── types/
│   └── models.ts           # Unified Mongoose-equivalent TypeScript schemas
├── index.css               # Global CSS & Tailwind v4 `@theme` definitions
├── main.tsx                # Application entry point
└── config.ts               # Configuration files / environment loaders
```

---

## 🛠️ Domain Data Schemas (TypeScript)

The core business entities are strictly typed to represent fully validated database documents (mirroring Mongoose structures):

### 1. `User` Schema
Represents the applicant profile, showcasing skills, contact information, and saved jobs:
```typescript
interface User extends BaseDocument {
  fullName: string;
  email: string;
  avatar?: string;
  coverImage?: string;
  headline: string;
  bio: string;
  skills: string[];
  resume?: string;
  savedJobs: string[];
}
```

### 2. `Company` Schema
Maintains corporate and employer records:
```typescript
interface Company extends BaseDocument {
  owner: string | User;
  name: string;
  description?: string;
  logo?: string;
  website?: string;
  industry?: string;
  location?: string;
}
```

### 3. `Job` Schema
Controls the metadata and criteria for active and closed positions:
```typescript
interface Job extends BaseDocument {
  company: string | Company;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  jobType: "full-time" | "part-time" | "contract" | "internship" | "remote";
  salaryMin?: number;
  salaryMax?: number;
  isActive?: boolean;
}
```

---

## 🚀 Key Features Implemented

### 🌟 1. Dynamic Routing & Global Shell
- Configured a unified `AppLayout` wrapper that serves as the visual scaffold for all client pages.
- Standardized a pixel-perfect `Navbar` pinning structural elements to the viewport columns (Logo on the start, Links in the center, CTAs on the end) for an balanced grid.
- Dynamic responsive transitions and custom hover actions (e.g., matching the accent border rings).

### 🏷️ 2. Clean Hero Page
- Minimalist landing area showcasing the core brand text: `"JS: Find what's next"`.
- Styled using a dotted container border scheme and Inter font weights.
- Tailored for future interactive absolute-positioned cards and tags.

### 💼 3. Responsive Job Board
- **Dynamic Job Cards (`JobCard`)**: Formatted for visual impact. Includes:
  - Custom brand logo loading with a fallback placeholder (initial-based avatar) if logos are absent.
  - Interactive "Save" and "Apply" triggers.
  - Multi-tag metadata display (Location, Job Type label conversions, Salary boundaries).
  - *Salary Boundaries*: Clean human-readable abbreviation logic (e.g., converting `$80001 - $120000` to `$80k - $120k`).
  - *Time-Elapsed Calculator*: Calculates time-since-posting on the fly (e.g., `Today`, `1 day ago`, `X days ago`).
- **Jobs List View (`JobsListPage`)**: Renders a clean feed of active positions, pulling live structures from the mock dataset.

### 🏢 4. Company Directory
- **Company Profile Cards (`CompanyCard`)**: Highlights industry sectors, full locations, fallback branding, and full descriptions.
- **Company List View (`CompaniesListPage`)**: Maps over existing company records using an elegant layout grid.

### 🔐 5. Modular Authentication Routes
- Established dedicated routes for `/login` and `/register` mapping to modular components, establishing a base for future JWT-based state.

---

## 📈 Recent Engineering Work & Commit History

A track of recent advancements leading to this state:

*   **`add mockcompanies.ts` & Mock Job Separation**: Decoupled local mock states into independent structural mock files (`mockCompanies.ts`, `mockJobs.ts`) matching database types to simulate realistic async API fetch calls.
*   **`add companyCard` & `CompaniesListPage`**: Developed responsive employer profiles with fallback typography styling.
*   **`listed jobs on jobslistpage`**: Configured cards mapping, custom labels for job types, and responsive list wrappers.
*   **`add jobcard component`**: Created utility functions for date formatting, salary normalization, and dynamic icons (Lucide vectors).
*   **`shifted landing page hero`**: Extracted Landing page presentation concerns out of state containers and into standalone components.
*   **`add react router`**: Integrated React Router v7, configuring dynamic navigation hooks.

---

## 🚦 Getting Started

Follow these steps to run the JobSync Frontend locally:

### 📥 1. Installation
Clone the repository and install the project dependencies:
```bash
# Clone the repository
git clone <your-repo-url>

# Navigate into the project folder
cd Jobsync-frontend

# Install dependencies
npm install
```

### 💻 2. Running in Development Mode
Spawn the local Vite 8 dev server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to view the live app.

### 📦 3. Compiling for Production
Compile the optimized static build of the application:
```bash
npm run build
```
The output will be bundled inside the `dist/` directory, ready to deploy.

### 🔍 4. Linting and Formatting
Ensure code conforms to established ESLint configs:
```bash
npm run lint
```

---

## 🎨 Design System Variables

If you are developing components and wish to reuse the tailored JobSync colors, use these class patterns provided by the Tailwind v4 build layer:

| CSS Theme Variable | Tailwind Class | Color HEX | Description |
| :--- | :--- | :--- | :--- |
| `--color-ink` | `text-ink` / `bg-ink` | `#111827` | Primary dark text and button backgrounds |
| `--color-accent` | `text-accent` / `bg-accent` | `#ef4444` | Highlight items, dot indicators, brand logo accent |
| `--color-muted` | `text-muted` | `#6b7280` | Descriptive body text, metadata icons, subtitles |
| `--color-border` | `border-border` | `#e5e7eb` | Outlines for inputs, cards, and divider rules |
