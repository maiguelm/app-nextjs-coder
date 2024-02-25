'use client'
import { useAuthContextProvider } from "@/hooks/hooks"
import { Button } from "../ui/Button"

const LogoutButton = () => {
	const { logout } = useAuthContextProvider()

  return (
	<Button onClick={(logout)}>Cerrar Sesión</Button>
  )
}

export default LogoutButton