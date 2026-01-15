import express from 'express';
import type { Application } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import passport from 'passport';
import session from 'express-session';
import expressSession from 'express-session';
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";  // For other db adapters, see Prisma docs
import { PrismaClient } from "./generated/prisma/client.ts";
import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PassportConfiguration } from './src/config/passport.ts';
import { LogInRouter } from './src/routes/Log-In/log-in.ts';
import { SignUpRouter } from './src/routes/Sign-Up/sign-up.ts';

const app: Application = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, "/public/");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }))
app.use(passport.session())


 // DATABASE_URL defined in env file included in prisma.config.js; see Prisma docs
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });


app.use(
  expressSession({
    cookie: {
     maxAge: 7 * 24 * 60 * 60 * 1000 // ms
    },
    secret: 'a santa at nasa',
    resave: true,
    saveUninitialized: true,
    store: new PrismaSessionStore(
      prisma,
      {
        checkPeriod: 2 * 60 * 1000,  //ms
        dbRecordIdIsSessionId: true
      }
    )
  })
);

PassportConfiguration(passport, prisma);

app.use("/sign-up", SignUpRouter);
app.use("/log-in", LogInRouter);

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    return error
  }
  console.log(`Members-Only Application - listening on port ${PORT}!`);
});