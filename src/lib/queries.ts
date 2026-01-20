import { prisma } from './prisma.ts';

export async function CreateUsers(name: string, email: string, password: string){
    await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
            }
        })
}

export async function CreateFolders(name: string, email: string){
    await prisma.folders.create({
        data:{
           name: name,
           user:{
                connect:{
                    email: email
                }
           }
        }
    })
}

export async function ReadAllFolders(id: string){
    await prisma.user.findMany({
        where:{
            id: id
        }, 
        include:{
            folders: true
        }
    })
}