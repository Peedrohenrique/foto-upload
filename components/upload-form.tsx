'use client'
import toast from 'react-hot-toast';
import { uploadImage } from "@/actions/actions";

export default function UploadForm() {
    
    async function handleSubmit(formData: FormData) {

        const response = await uploadImage(formData);

        if (response.success) {
            toast.success('Imagem enviada com sucesso!');
        } else {
            toast.error('Opss... algo deu errado!');
        }
    }

    return(
        <form action={handleSubmit} className="my-8">
          <input type="file" name="image" id="image" />
          <button className="p-2 bg-slate-600 text-white font-bold rounded">Enviar Imagem</button>
        </form>
    )
}