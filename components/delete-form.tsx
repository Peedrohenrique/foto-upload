'use client'

import { deleteImage } from "@/actions/actions";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

export default function DeleteImage({imageKey}: {imageKey: string}) {

    return (
        <form action={async() => {
          const actionRes =  await deleteImage(imageKey);
            if(actionRes.success) {
                toast.success('Imagem apagada com sucesso!')
            } else {
                toast.error('Ops.. ocorreu um erro')
            }
        }}>
        <button className='bg-red-50 text-red-700 p-4 rounded'>
           <BiTrash className="w-6 h-6"/>
            
        </button>
        </form>
    )
}