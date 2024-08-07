import ImageGallery from "@/components/image-gallery";
//import UploadForm from "@/components/upload-form";
import UppyUpload from "@/components/uppy-upload";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex-1 max-w-[900px] mx-auto px-4 py-8 text-center">
        <header>
          <h1 className="text-3xl font-black text-slate-600 mb-2">Foto Upload</h1>
          <p className="text-gray-500 mb-8 font-light">Galeria de fotos Next.js, upload de imagens e S3</p>
        </header>

        <UppyUpload />
        {/* <UploadForm /> */}

        <hr />

        <ImageGallery />
      </main>

      <footer className="bg-slate-600 py-4 w-full font-light text-white text-center">Feito por: <Link href={"https://github.com/Peedrohenrique"} target="_blank">Pedro henrique</Link></footer>
    </>
  );
}
