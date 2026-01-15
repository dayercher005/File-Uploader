# File-Uploader

---

## Project Structure 

```bash
.
├── app.ts
├── generated
├── lib
│   └── prisma.ts
├── package-lock.json
├── package.json
├── prisma
│   ├── migrations
│   │   ├── 20260114024502_init
│   │   │   └── migration.sql
│   │   ├── 20260114080238_init
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── prisma.config.ts
├── public
│   └── styles.css
├── README.md
├── script.ts
├── src
│   ├── config
│   │   └── passport.ts
│   ├── controllers
│   │   ├── Log-In
│   │   │   ├── renderLogInForm.ts
│   │   │   └── sendLogInForm.ts
│   │   └── Sign-Up
│   │       ├── renderSignUpForm.ts
│   │       └── sendSignUpForm.ts
│   ├── routes
│   │   ├── Log-In
│   │   │   └── log-in.ts
│   │   └── Sign-Up
│   │       └── sign-up.ts
│   └── views
│       ├── Log-In
│       │   └── log-in.ejs
│       ├── partials
│       │   └── error.ejs
│       └── Sign-Up
│           └── sign-up.ejs
└── tsconfig.json

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