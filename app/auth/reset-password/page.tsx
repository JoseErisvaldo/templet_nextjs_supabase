import type { Metadata } from "next"
import Link from "next/link"
import { ResetPasswordForm } from "@/components/auth/reset-password-form"

export const metadata: Metadata = {
  title: "Redefinir Senha",
  description: "Redefinir sua senha",
}

export default function ResetPasswordPage() {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Redefinir senha</h1>
            <p className="text-sm text-muted-foreground">Digite seu email para receber um link de redefinição</p>
          </div>
          <ResetPasswordForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Lembrou da senha?{" "}
            <Link href="/auth/login" className="underline underline-offset-4 hover:text-primary">
              Voltar ao login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
