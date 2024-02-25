import Link from "next/link";
import React from "react";
import { Button } from "../ui/Button";

const RegisterButton = () => {
	return (
		<div className="flex justify-center items-center">
			<Link href={"/auth/register"}>
				<Button className="w-44 mt-5">Registrarme</Button>
			</Link>
		</div>
	);
};

export default RegisterButton;
