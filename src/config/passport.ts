import { Strategy as LocalStrategy } from 'passport-local';

import bcrypt from 'bcryptjs';

export async function PassportConfiguration(passport: any, prisma: any){    

    passport.use(
        new LocalStrategy( async (email:string, password:string, done: any) => {
            try{
                const user = await prisma.user.findUnique({where : {email}})
                const member = user[0];

                if (!member){
                    return done(null, false, {message: "Incorrect Username"})
                }

                const match = await bcrypt.compare(password, member.password);
                if (!match){
                    return done(null, false, {message: "Incorrect password"})
                }
                return done(null, member);

            } catch(error){
                return done(error)
            }
        })
    )

    passport.serializeUser((member:object, done:any) => {
        done(null, member.id);
    })

    passport.deserializeUser( async (id:number, done:Function) => {
        try{
            const user = await prisma.user.findUnique({where : {id}})
            const member = user[0];
            done(null, member);
        } catch(error){
            done(error)
        }
    })

}