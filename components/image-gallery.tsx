import Image from "next/image";
import { s3Client } from "@/lib/s3client";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { deleteImage } from "@/actions/actions";

export default async function ImageGallery() {
    const objectListParams = new ListObjectsV2Command({
        Bucket: 'foto-upload'
    });

   const objectList = await s3Client.send(objectListParams);
   objectList.Contents?.sort((a: any, b: any) => {
    return (
        new Date(b.LastModified).getTime() - new Date(a.LastModified).getTime()
    )
   })
   
   const imageList = objectList.Contents?.map((object) => object.Key as string);

    return (
        <>
            <h2 className="text-2xl font-bold text-slate-600 mb-4 mt-4">Galeria de fotos</h2>
            <div className="grid grid-cols-3 gap-4">
                {imageList?.map((image, index) => (
                    <div key={index} className="rounded-md overflow-hidden shadow-md bg-white h-[280px] w-[280px]">
                        <div className="w-[90%] h-[90%] mx-auto mt-[5%]">
                            <form action={async() => {
                                'use server';
                                await deleteImage(image ?? '')
                            }}>
                            <button className='bg-red-50 text-red-700 p-4 rounded'>
                                Apagar Imagem
                            </button>
                            </form>
                            <Image
                            className="w-full h-full object-cover"
                            width={300}
                            height={300}
                            alt="images"
                            src={`https://foto-upload.s3.us-east-2.amazonaws.com/${image}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
