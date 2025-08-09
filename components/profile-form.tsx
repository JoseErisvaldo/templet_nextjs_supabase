"use client"

import * as React from "react"
import type { User } from "@supabase/supabase-js"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { updateProfile } from "@/lib/auth-actions"

interface ProfileFormProps {
  user: User | null
}

export function ProfileForm({ user }: ProfileFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { toast } = useToast()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.target as HTMLFormElement)

    try {
      const result = await updateProfile(formData)
      if (result?.error) {
        toast({
          title: "Erro ao atualizar perfil",
          description: result.error,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Perfil atualizado!",
          description: "Suas informações foram atualizadas com sucesso.",
        })
      }
    } catch (error) {
      toast({
        title: "Erro ao atualizar perfil",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="fullName">Nome completo</Label>
        <Input
          id="fullName"
          name="fullName"
          defaultValue={user?.user_metadata?.full_name || ""}
          placeholder="Seu nome completo"
          type="text"
          disabled={isLoading}
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          defaultValue={user?.email || ""}
          placeholder="nome@exemplo.com"
          type="email"
          disabled={true}
        />
        <p className="text-sm text-muted-foreground">O email não pode ser alterado por questões de segurança.</p>
      </div>
      <Button disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Atualizar perfil
      </Button>
    </form>
  )
}
