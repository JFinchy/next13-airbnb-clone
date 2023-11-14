# Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth 2023

![Copy of Fullstack Airbnb Clone](https://user-images.githubusercontent.com/23248726/229031522-64a49ad0-66f7-4ea8-94a8-f64a0bb56736.png)


This is a repository for a Full Stack Airbnb Clone with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth.

[VIDEO TUTORIAL](https://youtu.be/c_-b_isI4vg)

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Credential authentication
- Google authentication
- Github authentication
- Image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Calendars with react-date-range
- Page loading state
- Page empty state
- Booking / Reservation system
- Guest reservation cancellation
- Owner reservation cancellation
- Creation and deletion of properties
- Pricing calculation
- Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
    - For example we will filter out properties that have a reservation in your desired date range to travel
- Favorites system
- Shareable URL filters
    - Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
- How to write POST and DELETE routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
- How to handle relations between Server and Child components!

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-airbnb-clone.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Why I'm forking this

I want a place to go for a playground to try out new ideas, libraries, tools. This felt like a good starting place where I could build on top of and explore new things. 

### Initial ideas (Productionize it to an extent

- Testing (add supertest, vitest, cypress, stress tests, maybe visual regressions, maybe msw)
- Logging and observability
- Migrate to SQL
- CI/CD pipelines (gh actions)
- AWS deployment? Or stick to Vercel? Terraform?
- Auth built out more.. with roles
- Email, notifications, invites
- Multiple environments
- Open graph w/meta tags
- Analytics
- Payments
- Locale support
- Feature flags
- Transaction lock issues?
- SNS
- Implement CMS
  
### Toys

- Test out css libraries (this already has tailwind but I'm curious about these others
    - PandaCSS
    - KumaUI
    - UnoCSS
- Add animations using Framer
- RadixUI
- Trpc (zod) vs graphql vs rest (zod)
- Prisma vs. Drizzle vs Kysely 
- Monorepo?
- Try out building in Astro/Svelte/HTMX
- Rust backend (AXUM)
- Pnpm or just switch to Bun?
- AI stuff.. code review
- Blog mdx
- Cron job
- Dark mode? Just because

### Features

Need to explore more but
- build out wishlist
- chat
