# Requirements Document

## Introduction

This feature converts the existing multi-page GYMFIT HTML/CSS/JavaScript website into a single-page React TypeScript (TSX) application. The conversion preserves all visual design, content, and functionality from the original site while adopting React component architecture, React Router for client-side navigation, and React state management in place of direct DOM manipulation. The target project is scaffolded with Vite and the TypeScript template, following a prescribed folder structure with shared Navbar and Footer components, six page components, and a unified CSS file.

## Glossary

- **App**: The root React component rendered by `main.tsx`, responsible for routing.
- **Navbar**: The shared header component rendered on every page, containing the GYMFIT logo, navigation links, and CTA buttons.
- **Footer**: The shared footer component rendered on every page, containing brand info, link columns, social icons, and copyright.
- **Router**: React Router v6 (`BrowserRouter` + `Routes` + `Route`) used for client-side page navigation.
- **Stock_Item**: A data record with fields `name`, `category`, `quantity`, `price`, and `date`, stored in `localStorage` under the key `gymfit_stock`.
- **User**: A data record with fields `name`, `email`, `password`, and `joined`, stored in `localStorage` under the key `gymfit_users`.
- **Toast**: A temporary on-screen notification message displayed after user actions (success or error).
- **Active_Link**: The nav link whose `href` matches the current route, styled with the `.active` CSS class.
- **index.css**: The single global stylesheet located at `src/index.css`, containing the merged content of `globalstyles.css` and `login.css`.
- **Vite_App**: The React + TypeScript project bootstrapped with `npm create vite@latest gym-membership-react -- --template react-ts`.

---

## Requirements

### Requirement 1: Project Scaffolding and Folder Structure

**User Story:** As a developer, I want the project bootstrapped with Vite and TypeScript so that I have a modern, fast development environment with type safety.

#### Acceptance Criteria

1. THE Vite_App SHALL be created using the command `npm create vite@latest gym-membership-react -- --template react-ts`, producing a project with `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, and `src/main.tsx`.
2. THE Vite_App SHALL contain the folder structure: `src/components/Navbar/page.tsx`, `src/components/Footer/page.tsx`, `src/pages/Home/page.tsx`, `src/pages/Login/page.tsx`, `src/pages/Signup/page.tsx`, `src/pages/Dashboard/page.tsx`, `src/pages/Services/page.tsx`, `src/pages/Contact/page.tsx`, `src/App.tsx`, `src/App.css`, `src/index.css`, and `src/main.tsx`.
3. THE Vite_App SHALL contain a `public/images/` directory holding the five image files: `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, and `5.jpg`.
4. THE Vite_App SHALL list `react-router-dom` as a dependency in `package.json`.
5. THE App SHALL have `src/App.css` as an empty file (zero styles).

---

### Requirement 2: Global Stylesheet

**User Story:** As a developer, I want all CSS consolidated into `src/index.css` so that styles are available globally without per-component imports.

#### Acceptance Criteria

1. THE App SHALL import `./index.css` in `src/main.tsx` as the sole global stylesheet import.
2. THE index.css SHALL contain all CSS rules from the original `globalstyles.css` (reset, navbar, hero, benefits, programs, why-section, stats, testimonials, cta-banner, footer).
3. THE index.css SHALL contain all CSS rules from the original `login.css` (navbar overrides, login-hero split layout, login-container, services page, dashboard page, contact page, site-footer).
4. WHEN a CSS class name appears in both `globalstyles.css` and `login.css`, THE index.css SHALL merge the rules so that no class is defined twice with conflicting declarations that break layout.
5. THE App SHALL reference images using paths of the form `/images/1.jpg` through `/images/5.jpg` (served from `public/images/`).

---

### Requirement 3: Application Routing

**User Story:** As a user, I want to navigate between pages without full browser reloads so that the experience is fast and seamless.

#### Acceptance Criteria

1. THE App SHALL wrap all routes in a `BrowserRouter` (or equivalent) provided by `react-router-dom`.
2. THE App SHALL define routes mapping `/` to the Home page, `/login` to the Login page, `/signup` to the Signup page, `/dashboard` to the Dashboard page, `/services` to the Services page, and `/contact` to the Contact page.
3. WHEN a user navigates to an undefined path, THE App SHALL redirect to the Home page (`/`).
4. THE Navbar SHALL use `<Link>` or `useNavigate` from `react-router-dom` for all navigation actions instead of `window.location.href`.
5. THE Navbar SHALL use `useLocation` from `react-router-dom` to apply the `active` CSS class to the nav link whose path matches the current URL.

---

### Requirement 4: Navbar Component

**User Story:** As a user, I want a consistent navigation bar on every page so that I can move between sections of the site at any time.

#### Acceptance Criteria

1. THE Navbar SHALL render the GYMFIT logo text, navigation links (Home `/`, Services `/services`, Contact `/contact`, Dashboard `/dashboard`), and two CTA buttons (Sign Up → `/signup`, Login → `/login`).
2. THE Navbar SHALL be rendered inside `App.tsx` outside the `<Routes>` block so that it appears on every page.
3. WHEN the current route matches a nav link's path, THE Navbar SHALL apply the `active` CSS class to that link.
4. THE Navbar SHALL use no more than two CSS classes on any single JSX element.

---

### Requirement 5: Footer Component

**User Story:** As a user, I want a consistent footer on every page so that I can access links and brand information from anywhere on the site.

#### Acceptance Criteria

1. THE Footer SHALL render the GYMFIT brand section, three link columns (Explore, Services, Support), social icon links, and a copyright line.
2. THE Footer SHALL be rendered inside `App.tsx` outside the `<Routes>` block so that it appears on every page.
3. THE Footer SHALL use `<Link>` from `react-router-dom` for internal page links and `<a>` for external or placeholder links.
4. THE Footer SHALL use no more than two CSS classes on any single JSX element.

---

### Requirement 6: Home Page

**User Story:** As a visitor, I want to see the full GYMFIT home page with hero, benefits, programs, why-section, stats, testimonials, and CTA banner so that I can learn about the gym and sign up.

#### Acceptance Criteria

1. THE Home page SHALL render the hero section with headline, subtext, "Start Free Trial" button (navigates to `/signup`), and "Explore Programs" button (navigates to `/services`), and a hero image (`/images/1.jpg`).
2. THE Home page SHALL render the benefits strip with five benefit items (Open 24/7, Expert Coaches, Personalized Plans, Community Support, Flexible Membership).
3. THE Home page SHALL render the programs grid with three cards (Weight Training using `/images/2.jpg`, Cardio Training using `/images/3.jpg`, Fitness Classes using `/images/4.jpg`), each with a "Learn More" link to `/services`.
4. THE Home page SHALL render the "Why GymFit" section with an image (`/images/5.jpg`) and three feature list items.
5. THE Home page SHALL render the stats section with four stat items (12K+ Active Members, 50+ Expert Coaches, 30+ Programs, 98% Satisfaction Rate).
6. THE Home page SHALL render the testimonials section with three testimonial cards.
7. THE Home page SHALL render the CTA banner with a "Get Started — It's Free" button that navigates to `/signup`.
8. THE Home page SHALL use no more than two CSS classes on any single JSX element.

---

### Requirement 7: Login Page

**User Story:** As a returning member, I want to log in with my credentials so that I can access my dashboard.

#### Acceptance Criteria

1. THE Login page SHALL render the split-hero layout with a left marketing panel and a right form panel containing username/email and password inputs and a Login button.
2. WHEN the Login form is submitted with an empty username or password field, THE Login page SHALL display an inline field error message below the relevant input.
3. WHEN the Login form is submitted with valid credentials that match a `User` record in `localStorage` key `gymfit_users`, THE Login page SHALL store the matched user object in `localStorage` key `gymfit_logged_in`, display a success Toast, and navigate to `/dashboard` after 1500 ms.
4. WHEN the Login form is submitted with credentials that do not match any `User` record, THE Login page SHALL display an error Toast with the message "Invalid username or password."
5. THE Login page SHALL manage form field values and error states using React `useState`.
6. THE Login page SHALL use no more than two CSS classes on any single JSX element.

---

### Requirement 8: Signup Page

**User Story:** As a new visitor, I want to create a GymFit account so that I can access member features.

#### Acceptance Criteria

1. THE Signup page SHALL render a centered card form with full name, email, password, and confirm password inputs and a Register button.
2. WHEN the Signup form is submitted with an empty full name field, THE Signup page SHALL display an inline error "Full name is required."
3. WHEN the Signup form is submitted with an invalid or empty email, THE Signup page SHALL display an inline error "Please enter a valid email address."
4. WHEN the Signup form is submitted with a password that does not meet the minimum strength rule (at least 8 characters, at least one letter, at least one digit), THE Signup page SHALL display an inline error "Password must be at least 8 characters with a letter and number."
5. WHEN the Signup form is submitted with a confirm password that does not match the password, THE Signup page SHALL display an inline error "Passwords do not match."
6. WHEN the Signup form is submitted and the email already exists in `localStorage` key `gymfit_users`, THE Signup page SHALL display an inline error "An account with this email already exists."
7. WHEN the Signup form is submitted with all valid inputs and a unique email, THE Signup page SHALL append the new `User` record to `localStorage` key `gymfit_users`, store the new user in `localStorage` key `gymfit_logged_in`, display a success Toast, and navigate to `/dashboard` after 1500 ms.
8. THE Signup page SHALL manage form field values and error states using React `useState`.
9. THE Signup page SHALL use no more than two CSS classes on any single JSX element.

---

### Requirement 9: Services Page

**User Story:** As a visitor, I want to browse all available gym services so that I can choose the right program for my goals.

#### Acceptance Criteria

1. THE Services page SHALL render a hero section with the heading "Our Services" and a descriptive subtitle.
2. THE Services page SHALL render a grid of six service cards: Personal Training, Yoga Classes, Boxing & Cardio, Strength & Conditioning, Nutrition Coaching, and Group Fitness — each with an icon, title, description, and action button.
3. THE Services page SHALL use no more than two CSS classes on any single JSX element.

---

### Requirement 10: Contact Page

**User Story:** As a visitor, I want to send a message to GymFit so that I can ask questions or get support.

#### Acceptance Criteria

1. THE Contact page SHALL render a split layout with a left contact-info panel (address, phone, email, hours) and a right form panel (full name, email, subject, message inputs and a Send Message button).
2. WHEN the Contact form is submitted with an empty name field, THE Contact page SHALL display an inline error "Your name is required."
3. WHEN the Contact form is submitted with an invalid or empty email, THE Contact page SHALL display an inline error "A valid email address is required."
4. WHEN the Contact form is submitted with an empty message field, THE Contact page SHALL display an inline error "Please enter your message."
5. WHEN the Contact form is submitted with all valid inputs, THE Contact page SHALL append the message record to `localStorage` key `gymfit_messages`, display a success Toast "Message sent! We'll get back to you within 24 hours.", and reset the form fields.
6. THE Contact page SHALL manage form field values and error states using React `useState`.
7. THE Contact page SHALL use no more than two CSS classes on any single JSX element.

---

### Requirement 11: Dashboard Page — Stock Management

**User Story:** As an authenticated user, I want to manage gym inventory stock from the dashboard so that I can keep records up to date.

#### Acceptance Criteria

1. THE Dashboard page SHALL render a header section and a grid of five action cards: View All Stock, Insert New Stock, Update Stock, Delete Stock, and Stock Records.
2. THE Dashboard page SHALL maintain the stock list in React state, initialised from `localStorage` key `gymfit_stock` on component mount using `useEffect`.
3. WHEN the "View All Stock" card is activated, THE Dashboard page SHALL display a table of all `Stock_Item` records with columns: #, Item Name, Category, Quantity, Price (PKR), Date Added, and Actions (Edit, Delete buttons).
4. WHEN the "Insert New Stock" card is activated, THE Dashboard page SHALL display a form with Item Name, Category, Quantity, and Price fields and an Add Item button.
5. WHEN the Insert form is submitted with all valid fields (non-empty name and category, non-negative numeric quantity and price), THE Dashboard page SHALL add the new `Stock_Item` to state and persist the updated array to `localStorage` key `gymfit_stock`, then display a success Toast.
6. WHEN the Insert form is submitted with any invalid field, THE Dashboard page SHALL display an error Toast describing the validation failure without modifying state or `localStorage`.
7. WHEN the Edit button for a stock row is clicked, THE Dashboard page SHALL open a modal pre-filled with that item's data.
8. WHEN the Update modal form is submitted with valid data, THE Dashboard page SHALL update the matching `Stock_Item` in state (preserving the original `date`), persist to `localStorage`, close the modal, and display a success Toast.
9. WHEN the Delete button for a stock row is clicked, THE Dashboard page SHALL display a confirmation dialog; IF the user confirms, THE Dashboard page SHALL remove the item from state and `localStorage` and display a success Toast.
10. WHEN the "Stock Records" card is activated, THE Dashboard page SHALL display the same stock table as "View All Stock".
11. THE Dashboard page SHALL use React `useState` and `useEffect` for all state and side-effect management; no direct DOM manipulation is permitted.
12. THE Dashboard page SHALL use no more than two CSS classes on any single JSX element.

---

### Requirement 12: Toast Notification Component

**User Story:** As a user, I want brief feedback notifications after actions so that I know whether my action succeeded or failed.

#### Acceptance Criteria

1. THE App SHALL provide a Toast mechanism (component or hook) that displays a fixed-position notification at the bottom-right of the screen.
2. WHEN a Toast is triggered with type "success", THE Toast SHALL display with a purple background (`#7b2ff7`).
3. WHEN a Toast is triggered with type "error", THE Toast SHALL display with a red background (`#e53935`).
4. THE Toast SHALL automatically disappear after 3500 ms.
5. THE Toast SHALL be managed via React `useState` so that no direct DOM manipulation (`document.createElement`, `document.body.appendChild`) is used.

---

### Requirement 13: CSS Class Constraint

**User Story:** As a developer, I want each JSX element to use no more than two CSS classes so that the codebase remains maintainable and class usage is intentional.

#### Acceptance Criteria

1. THE App SHALL ensure that no single JSX element has more than two values in its `className` attribute across all components and pages.
2. WHERE a combined modifier class is needed (e.g., `btn-primary btn-large`), THE App SHALL count that as two classes and it SHALL be the maximum permitted on that element.

---

### Requirement 14: localStorage Auth Persistence

**User Story:** As a user, I want my login session to persist in localStorage so that the app remembers who I am across page refreshes.

#### Acceptance Criteria

1. WHEN a user successfully logs in or signs up, THE App SHALL write the `User` object to `localStorage` key `gymfit_logged_in`.
2. WHEN a user logs out (logout button clicked), THE App SHALL remove the `gymfit_logged_in` key from `localStorage`, display a Toast "You have been logged out.", and navigate to `/login` after 1500 ms.
3. THE Dashboard page SHALL read `localStorage` key `gymfit_logged_in` on mount; IF no logged-in user is found, THE Dashboard page SHALL navigate to `/login`.
