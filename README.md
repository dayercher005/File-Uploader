# File-Uploader

![Screenshot of Webpage](public/images/Preview.png).
---

## Project Structure 

```bash
.
├── app.ts
├── generated
├── package-lock.json
├── package.json
├── prisma
│   ├── migrations
│   │   ├── 20260114024502_init
│   │   │   └── migration.sql
│   │   ├── 20260114080238_init
│   │   │   └── migration.sql
│   │   ├── 20260115153739_init
│   │   │   └── migration.sql
│   │   ├── 20260119131317
│   │   │   └── migration.sql
│   │   ├── 20260119144019
│   │   │   └── migration.sql
│   │   ├── 20260120054609_folders_and_files
│   │   │   └── migration.sql
│   │   ├── 20260121063751
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── prisma.config.ts
├── public
│   ├── data
│   │   └── uploads
│   │       ├── 0685264bcda7b0f46bae6741ad52413a
│   │       ├── 38f0b8cba37297556436621b7f1774a7
│   │       ├── 4f1dc3ed435686f5e58dfa277ab097f6
│   │       ├── 69a35ca98ed678508e55cb0038ec67c7
│   │       └── 75cdc10b545ed51eb4445a80d24d80b2
│   ├── images
│   │   ├── back.svg
│   │   ├── collaborate.svg
│   │   ├── file.png
│   │   ├── folder.svg
│   │   ├── private.svg
│   │   └── upload.svg
│   └── styles.css
├── README.md
├── script.ts
├── src
│   ├── config
│   │   ├── authenticateRoute.ts
│   │   ├── passport.ts
│   │   └── supabase.ts
│   ├── controllers
│   │   ├── CreateFile
│   │   │   ├── renderCreateFileForm.ts
│   │   │   └── sendCreateFileForm.ts
│   │   ├── CreateFolder
│   │   │   ├── renderCreateFolderForm.ts
│   │   │   └── sendCreateFolderForm.ts
│   │   ├── Dashboard
│   │   │   ├── renderDashboardPage.ts
│   │   │   ├── renderIndividualFile.ts
│   │   │   └── renderIndividualFolder.ts
│   │   ├── Homepage
│   │   │   └── homepage.ts
│   │   ├── Log-In
│   │   │   ├── renderLogInForm.ts
│   │   │   └── sendLogInForm.ts
│   │   ├── Log-Out
│   │   │   └── log-out.ts
│   │   └── Sign-Up
│   │       ├── renderSignUpForm.ts
│   │       └── sendSignUpForm.ts
│   ├── lib
│   │   ├── prisma.ts
│   │   └── queries.ts
│   ├── routes
│   │   ├── CreateFolder
│   │   │   └── createFolder.ts
│   │   ├── Dashboard
│   │   │   └── dashboard.ts
│   │   ├── Homepage
│   │   │   └── homepage.ts
│   │   ├── Log-In
│   │   │   └── log-in.ts
│   │   ├── Log-Out
│   │   │   └── log-out.ts
│   │   └── Sign-Up
│   │       └── sign-up.ts
│   └── views
│       ├── CreateFile
│       │   └── createFile.ejs
│       ├── CreateFolder
│       │   └── createFolder.ejs
│       ├── Dashboard
│       │   ├── dashboard.ejs
│       │   ├── file.ejs
│       │   └── folder.ejs
│       ├── Home
│       │   └── home.ejs
│       ├── Log-In
│       │   └── log-in.ejs
│       ├── partials
│       │   ├── authenticatedNavbar.ejs
│       │   ├── dashboardNavbar.ejs
│       │   ├── error.ejs
│       │   └── unauthenticatedNavbar.ejs
│       └── Sign-Up
│           └── sign-up.ejs
└── tsconfig.json

```

---
## System Architecture

```mermaid
---
config: 
    theme: 'dark'
---
graph TB
    Client[Browser Client]
    Server[Express.js Server]
    DB[(PostgreSQL Database)]
    Cloud[Supabase Storage]
    Multer[Multer Middleware]
    Passport[Passport.js Auth]
    Prisma[Prisma ORM]
    
    Client -->|HTTP Requests| Server
    Server -->|Session Management| Passport
    Passport -->|Read/Write Sessions| Prisma
    Server -->|File Upload| Multer
    Multer -->|Store Files| Cloud
    Server -->|Database Queries| Prisma
    Prisma -->|SQL Queries| DB
    Cloud -->|File URLs| Server
    Server -->|HTTP Responses| Client
```

---

## How to Run

1. Clone the repository:
```bash
git clone 
```

2. Install dependencies
```bash
npm install
```

3. Start Development Server:
```bash
node app.ts
```

4. Open `http://localHost:8080` in your browser

---

*Part of The Odin Project's [NodeJS Course]
([https://www.theodinproject.com/lessons/nodejs-file-uploader])*