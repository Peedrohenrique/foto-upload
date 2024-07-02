'use server'
import { s3Client } from "@/lib/s3client";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

export async function uploadImage(formData: FormData){
    const image = formData.get('image') as File;

    if(!image.size) {
        throw new Error('Nenhuma imagem adicionada!');
    }

    const arrayBuffer = await image.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    const putObjectParams = new PutObjectCommand({
        Bucket: 'foto-upload',
        Key: nanoid() + '.jpg',
        Body: imageBuffer,
        ContentType: 'image/jpeg'
    });

    await s3Client.send(putObjectParams);

    revalidatePath('/')
}