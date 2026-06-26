---
name: Precision Portfolio
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#434655'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  unit-1: 8px
  unit-2: 16px
  unit-3: 24px
  unit-4: 32px
  unit-6: 48px
  unit-8: 64px
  unit-12: 96px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

This design system is built for a professional Full Stack Web Developer portfolio, emphasizing technical expertise through a lens of extreme clarity and structural rigor. The brand personality is "Engineering Excellence"—meticulous, high-performance, and reliable. It targets hiring managers and technical founders who value clean code and thoughtful architecture.

The aesthetic follows a **SaaS-inspired Minimalism**. It borrows the high-production values of platforms like Vercel and Linear, focusing on perfect alignment, intentional whitespace, and a restrained palette. The emotional response should be one of quiet confidence and premium craftsmanship, where the work takes center stage without the distraction of decorative "blobs" or unnecessary gradients.

## Colors

The palette is functional and high-contrast, designed to reduce cognitive load while highlighting interaction points.

- **Background & Surfaces**: Pure White (#FFFFFF) is the primary canvas to maximize perceived "air." Light Gray (#F8F9FA) is used for secondary surfaces like code blocks, card backgrounds, or sidebars to provide subtle depth.
- **Typography**: Deep Charcoal (#111827) provides superior legibility over white backgrounds. Secondary text should use a muted slate (#64748B) to establish a clear information hierarchy.
- **Accents**: Royal Blue (#2563EB) is the "Interactive Signature." Use it exclusively for primary actions, active states, and links.
- **Status & Feedback**: Use semantic colors (Success: #10B981, Error: #EF4444) sparingly, ensuring they match the saturation of the primary blue.

## Typography

The system utilizes **Inter** for all primary communication due to its exceptional tall x-height and technical neutrality. 

- **Headings**: Feature tight letter spacing (negative tracking) and semi-bold/bold weights to create a "locked-in" professional look.
- **Body**: Body text uses generous line-height (1.6x - 1.8x) to ensure long-form project descriptions remain readable and inviting.
- **Mono**: **JetBrains Mono** is introduced for technical labels, snippets, and version numbers to reinforce the developer-centric narrative.

## Layout & Spacing

This design system adheres to a strict **8px linear scale**. Every margin, padding, and height increment must be a multiple of 8.

- **Grid**: A 12-column fixed grid is used for desktop (max-width 1200px), centered in the viewport. 
- **Breakpoints**: 
  - Mobile (< 640px): 4 columns, 16px margins.
  - Tablet (640px - 1024px): 8 columns, 24px margins.
  - Desktop (> 1024px): 12 columns, auto margins.
- **Whitespace Strategy**: Use aggressive "Macro-whitespace" (96px+) between major sections to denote technical focus and clarity. Use "Micro-whitespace" (8px, 16px) for related grouping within components.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Air Shadows** rather than heavy color changes.

- **Level 0 (Flat)**: The main page background (#FFFFFF).
- **Level 1 (Subtle)**: Sections using #F8F9FA surfaces with 1px borders (#E5E7EB).
- **Level 2 (Elevated)**: Components like floating navigation or hover-state cards use the "Air Shadow." This is a highly diffused, low-opacity shadow: `0 12px 40px rgba(0, 0, 0, 0.04)`.
- **Borders**: Subtle 1px solid borders (#E5E7EB) are the primary tool for element separation, maintaining a crisp, architectural feel.

## Shapes

The shape language is modern and approachable without becoming "bubbly." 

- **Primary Corner Radius**: 12px (`rounded-lg`) is the standard for cards, buttons, and inputs. 
- **Secondary Radius**: 8px (`rounded-md`) for smaller nested elements like chips or tooltips.
- **Full Radius**: Used exclusively for status indicators or avatar enclosures.
- **Consistency**: Icons should follow the same corner logic (2px - 3px internal radii) to ensure a unified visual language with the UI.

## Components

- **Buttons**:
  - **Primary**: Royal Blue background, White text, 12px radius. Subtle scale-down effect (0.98) on click.
  - **Secondary**: White background, 1px #E5E7EB border, Charcoal text. Hover state: #F8F9FA background.
- **Cards**: 
  - Pure White background, 1px #E5E7EB border, 12px radius. 
  - On hover: Apply the "Air Shadow" and shift the border color to #D1D5DB.
- **Chips / Tags**: 
  - Used for tech stack icons. JetBrains Mono font, 14px size, light gray background, 8px radius.
- **Input Fields**:
  - 1px #E5E7EB border, 12px radius, 12px padding. 
  - Focus state: 1px #2563EB border with a 4px soft blue outer glow (`rgba(37, 99, 235, 0.1)`).
- **Navigation**:
  - Sticky glassmorphism header: Backdrop blur (12px), 80% opacity white background, subtle bottom border.
- **Code Blocks**:
  - #F8F9FA background, JetBrains Mono text, subtle syntax highlighting using the primary blue and soft slate.