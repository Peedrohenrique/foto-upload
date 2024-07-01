import Image from "next/image";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export default async function ImageGallery() {

    const s3Client = new S3Client({ 
        region: "us-east-2",
        credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
        }
    });

    const objectListParams = new ListObjectsV2Command({
        Bucket: 'foto-upload'
    });

    
   const objectList = await s3Client.send(objectListParams);

      
const imageList = objectList.Contents?.map((object) => object.Key as string);
    return (
        <>
            <h2 className="text-2xl font-bold text-slate-600 mb-4 mt-4">Galeria de fotos</h2>
            <div className="grid grid-cols-3 gap-4">
                {imageList?.map((image, index) => (
                    <div key={index} className="rounded-md overflow-hidden shadow-md bg-white h-[280px] w-[280px]">
                        <div className="w-[90%] h-[90%] mx-auto mt-[5%]">
                            <Image
                            className="w-full h-full object-cover"
                            width={300}
                            height={300}
                            alt="images"
                            src={process.env.AWS_PATH_IMAGE + image}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}