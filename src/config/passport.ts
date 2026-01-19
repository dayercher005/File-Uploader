import { Strategy as LocalStrategy } from 'passport-local';
import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../generated/prisma/client.ts';
import passport from 'passport';
const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })
import bcrypt from 'bcryptjs';

   
export function PassportConfiguration(passport: any ){

    passport.use(
        new LocalStrategy({usernameField: 'username'}, async (username:string, password:string, done: any) => {
            try{
                const user = await prisma.user.findUnique({
                    where: {
                        username: username,
                    }
                })

                if (!user){
                    return done(null, false, {message: "Incorrect Username"})
                }

                const match = await bcrypt.compare(password, user.password);
                if (!match){
                    return done(null, false, {message: "Incorrect password"})
                }
                return done(null, user);

            } catch(error){
                return done(error)
            }
        })
    )

    passport.serializeUser((member:any, done:any) => {
        done(null, member.id);
    })

    passport.deserializeUser( async (id: number, done:Function) => {
        try{
            const user = await prisma.user.findUnique({
                where: {
                    id: id,
                }
            })
            done(null, user);
        } catch(error){
            done(error)
        }
    })

}