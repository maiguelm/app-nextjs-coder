'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { auth, db, googleProvider } from "@/firebase/config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"

export const AuthContext = createContext()
const { Provider } = AuthContext


export function ContextAuthProvider({ children }) {
	const [user, setUser] = useState({
		logged: false,
		email: null,
		displayName: null,
		uid: null,
		admin: false,
		firstName: null,
		lastName: null,
		birthDate: null,
	})

	const userRegister = async (values) => {
		const { email, password, firstName, lastName, birthDate, displayName, admin } = values;
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			const user = userCredential.user;

			const userDocRef = doc(db, "users", user.uid);
			await setDoc(userDocRef, {
				firstName,
				lastName,
				birthDate,
				displayName,
				admin,
				email,
			});

			setUser({
				logged: true,
				email: user.email,
				displayName: user.displayName,
				uid: user.uid,
				admin: false
			});
		} catch (error) {
			console.error("Error al registrar usuario:", error);
			throw error;
		}
	};

	const isAdmin = async () => {
		const docRef = doc(db, "users", user.uid)
		const userDoc = await getDoc(docRef)
		const adminStatus = userDoc.data().admin
		return adminStatus
	}

	const loginUser = async (values) => {
		await signInWithEmailAndPassword(auth, values.email, values.password)
	}

	const logout = async () => {
		await signOut(auth)
	}

	const googleLogin = async () => {
		await signInWithPopup(auth, googleProvider)
		setUser({
			logged: true,
			email: user.email,
			displayName: user.displayName,
			uid: user.uid,
			admin: false
		})
	}
	
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
			if (authUser) {
				const docRef = doc(db, "users", authUser.uid);
				const userDoc = await getDoc(docRef);
				if (userDoc.exists()) {
					const userData = userDoc.data();
					setUser({
						logged: true,
						displayName: authUser.displayName,
						email: authUser.email,
						uid: authUser.uid,
						admin: userData.admin || false,
						firstName: userData.firstName || '', // Asegúrate de que estos campos existan en tu base de datos
						lastName: userData.lastName || '', // y son accesibles en la ubicación correcta
						birthDate: userData.birthDate || ''
					});
				} else {
					setUser({
						logged: true,
						displayName: authUser.displayName,
						email: authUser.email,
						uid: authUser.uid,
						admin: false,
						firstName: '',
						lastName: '',
						birthDate: ''
					});
				}
			} else {
				setUser({
					logged: false,
					email: null,
					displayName: null,
					uid: null,
					admin: false,
					firstName: null,
					lastName: null,
					birthDate: null
				});
			}
		});
	
		return () => unsubscribe();
	}, []);

	return (
		<Provider value={{
			user,
			userRegister,
			loginUser,
			logout,
			isAdmin,
			googleLogin
		}}>
			{children}

		</Provider>
	)

}