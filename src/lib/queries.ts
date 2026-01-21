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
    const allFolders = await prisma.user.findMany({
        where:{
            id: id
        }, 
        include:{
            folders: true
        }
    })

    return allFolders;
}

export async function CreateFiles(name: any, size: any, id: any){
    await prisma.files.create({
        data: {
            name: name,
            size: size,
            folder: {
                connect: {
                    id: id
                }
            }
        }
    })
}

export async function ReadAllFiles(id: string){
    const allFiles = await prisma.folders.findMany({
        where:{
            id: id
        },
        include:{
            files: true
        }
    });

    return allFiles;
}