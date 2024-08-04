'use client'
import Uppy from '@uppy/core'
import toast from 'react-hot-toast';
import { Dashboard } from '@uppy/react'
import {useEffect, useState} from 'react'

//@ts-ignore
import pt_BR from '@uppy/locales/lib/pt_BR'

import '../app/uppy-style.css'
import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import { uploadWithUppy } from '@/actions/actions'


export default function UppyUpload() {
    const [uppy, setUppy] = useState<Uppy | null>(null)

    useEffect(() => {
        const uppy  = new Uppy({ locale: pt_BR }).on('complete', async (result) => 
            {
            const files = result.successful;
            const formData = new FormData();

            files?.forEach((file) => {
                formData.append('images', file.data)
            })

            // chamar a action de upload
            uploadWithUppy(formData).then((actionRes) => {
                uppy.cancelAll();

                if(actionRes?.success) {
                    toast.success('Imagem enviada com sucesso!');
                } else {
                    toast.error('Ops... ' + actionRes?.message);
                }
            });
        })
        
        setUppy(uppy )
    },[])


    return <div>{uppy && <Dashboard width={'100%'} height={300} uppy={uppy} />}</div>
}