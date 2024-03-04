import RegisterUser from "@/components/auth/RegisterUser"

const RegisterUserPage = () => {

	return (

		<div className="flex flex-col justify-center items-center h-screen">
			<div className="w-full max-w-md">
				<h2 className="text-3xl text-center font-bold mb-4">Registro de Usuario</h2>
				<RegisterUser />

			</div>
		</div>
	)
}

export default RegisterUserPage