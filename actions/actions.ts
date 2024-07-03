'use server'
import { s3Client } from "@/lib/s3client";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

export async function uploadImage(formData: FormData){
    const image = formData.get('image') as File;

    if(!image.size) {
        return {
            success: false,
            message: 'Você precisa enviar alguma arquivo.'
        }
    }

    const arrayBuffer = await image.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    const putObjectParams = new PutObjectCommand({
        Bucket: 'foto-upload',
        Key: nanoid() + '.jpg',
        Body: imageBuffer,
        ContentType: 'image/jpeg'
    });

    try {
        await s3Client.send(putObjectParams);
        revalidatePath('/')
        return {
            success: true,
        }
    } catch (error) {
        return {
            success: false,
            message: 'Alguma coisa deu errado'
        }
    }
}