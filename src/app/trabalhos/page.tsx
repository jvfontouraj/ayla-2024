'use client'

import { trabalhos } from '@/content/trabalhos'
import Image from 'next/image'
import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'
import { Cross1Icon } from '@radix-ui/react-icons'

export default function Trabalhos() {
  const [openDialog, setOpenDialog] = useState(false)
  const [imageIndex, setImageIndex] = useState<number>(0)
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>()

  function openImage(index: number) {
    setImageIndex(index)
    setOpenDialog(true)
  }

  useEffect(() => {
    setIsMobileScreen(window.innerWidth <= 470)
  }, [])

  return (
    <main className="mx-auto mb-40 mt-28 w-full max-w-7xl px-5">
      <h2 className="text-2xl font-medium md:text-4xl">
        Pinturas Selecionadas
      </h2>
      <section className="mt-12 grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {trabalhos.map((item, index) => (
          <>
            <div key={index} className="flex flex-col gap-4">
              <button
                disabled={isMobileScreen}
                onClick={() => openImage(index)}
              >
                <Image
                  width={392}
                  height={588}
                  src={item.imagem}
                  alt={item.titulo}
                />
              </button>
              <div className="flex flex-col">
                <h3 className="text-base font-medium">
                  {item.titulo}, {item.ano}
                </h3>
                <span>
                  {item.tecnica} | {item.dimensoes}
                </span>
              </div>
            </div>
          </>
        ))}
        <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 flex h-full max-h-[90vh] w-fit max-w-[850px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <img
              src={trabalhos[imageIndex].imagem}
              alt={trabalhos[imageIndex].titulo}
              className="h-[calc(100%-50px)] w-auto"
            />
            <Dialog.Title className="text-base font-medium">
              {trabalhos[imageIndex].titulo}, {trabalhos[imageIndex].ano}
            </Dialog.Title>
            <Dialog.Description>
              <span>
                {trabalhos[imageIndex].tecnica} |
                {trabalhos[imageIndex].dimensoes}
              </span>
            </Dialog.Description>
            <Dialog.Close asChild>
              <button className="fixed right-0 top-0 -translate-y-full translate-x-full rounded-full bg-white/20 p-2">
                <Cross1Icon color="black" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Root>
      </section>
    </main>
  )
}
