# ID·SAM Frank Portfolio

A modern, animated portfolio website for **ID·SAM Frank** — Graphics and Brand Identity Designer specializing in branding, logo design, and Web3 identity creation.

![Portfolio Screenshot](https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200)

---

## ✨ Features

- **Animated UI:** Smooth transitions and interactive elements using [Framer Motion](https://www.framer.com/motion/).
- **Dark Mode:** Toggle between light and dark themes.
- **Responsive Design:** Fully responsive, works on all devices.
- **Portfolio Showcase:** Gallery of completed projects with categories.
- **Services Section:** Detailed list of offered services.
- **Experience Timeline:** Animated timeline of work experience and achievements.
- **Contact Form:** Animated contact form with quick links.
- **SEO Optimized:** Rich meta tags, Open Graph, Twitter Cards, and Schema.org structured data.
- **Tailwind CSS:** Custom theme, gradients, and utility-first styling.
- **Accessibility:** Semantic HTML and accessible color contrast.

---

## 🚀 Demo

**Live Site:** [https://idsam-portfolio.com](https://idsam-portfolio.com)

---

## 🛠️ Tech Stack

- [React 18+](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React Icons](https://lucide.dev/)
- [PostCSS](https://postcss.org/)

---

## 📁 Project Structure

```
project/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Portfolio.tsx
│   │   └── Services.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```

---

## 🖥️ Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/icekidtech/id-sam.git
   cd id-sam-portfolio/project
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🏗️ Build for Production

```sh
pnpm build
# or
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

---

## ⚙️ Configuration

- **Tailwind CSS:** Custom colors, gradients, and animations are defined in [`tailwind.config.js`](tailwind.config.js).
- **Meta Tags & SEO:** See [`index.html`](index.html) for all meta tags, Open Graph, Twitter Card, and Schema.org structured data.
- **Portfolio Items & Content:** Edit portfolio, services, and experience in their respective files in [`src/components/`](src/components/).

---

## 📦 Dependencies

- `react`, `react-dom`
- `framer-motion`
- `lucide-react`
- `tailwindcss`
- `postcss`, `autoprefixer`
- `vite`

---

## ✏️ Customization

- **Update Portfolio:** Edit `portfolioItems` in [`src/components/Portfolio.tsx`](src/components/Portfolio.tsx).
- **Edit Services:** Update the `services` array in [`src/components/Services.tsx`](src/components/Services.tsx).
- **Change Experience:** Modify the `experiences` array in [`src/components/Experience.tsx`](src/components/Experience.tsx).
- **Contact Info:** Update `contactInfo` in [`src/components/Contact.tsx`](src/components/Contact.tsx).
- **Branding:** Change colors and fonts in [`tailwind.config.js`](tailwind.config.js).

---

## 📝 License

This project is for personal portfolio use. For commercial or extended use, please contact [idsam.designs@gmail.com](mailto:idsam.designs@gmail.com).

---

## 🙋‍♂️ Author

**ID·SAM Frank**  
[Portfolio](https://idsam-portfolio.com)  
[X (Twitter)](https://x.com/IDsam)  
Email: [idsam.designs@gmail.com](mailto:idsam.designs@gmail.com)

---

## 📣 Acknowledgements

- [Pexels](https://pexels.com) for demo images
- [Lucide Icons](https://lucide.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)

---

> _Crafting captivating designs that drive sales and building innovative Web3