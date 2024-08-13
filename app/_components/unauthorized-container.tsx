"use client"

import { useState } from "react"
import Header from "./header"
import SigninDialog from "./signin-dialog"
import { Dialog, DialogContent } from "./ui/dialog"
import { Button } from "./ui/button"

const UnauthorizedContainer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const openDialog = () => {
    setIsOpen(true)
  }

  return (
    <>
      <Header />

      <div className="fixed inset-0 flex flex-col items-center justify-center gap-10">
        <h2 className="text-lg">
          Você precisa fazer login para acessar essa página
        </h2>
        <div className="flex gap-2">
          <Button onClick={openDialog} size={"lg"} className="w-[50%]">
            Login
          </Button>
          <Button
            variant="secondary"
            size={"lg"}
            className="w-[50%]"
            onClick={() => window.history.back()}
          >
            Voltar
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <DialogContent className="w-[90%]">
          <SigninDialog />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default UnauthorizedContainer
