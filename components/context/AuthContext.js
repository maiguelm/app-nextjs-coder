'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { auth, db } from "@/firebase/config"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"

export const AuthContext = createContext()
const { Provider } = AuthContext


export function ContextAuthProvider({ children }) {
	const [user, setUser] = useState({
		logged: false,
		email: null,
		displayName: null,
		uid: null,
		admin: false
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

	const isAdmin = async(values) =>{
		const docRef = doc(db, "users", user.uid)
		const userDoc = await getDoc(docRef)
		const adminStatus = userDoc.data().admin
		return adminStatus
	}

	const loginUser = async (values) => {
		await signInWithEmailAndPassword(auth, values.email, values.password)
	}

	const logout = async () =>{
		await signOut(auth)
	}

	useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                const docRef = doc(db, "users", authUser.uid);
                const userDoc = await getDoc(docRef);
                const userData = userDoc.data();
                
                setUser({
                    logged: true,
                    displayName: authUser.displayName,
                    email: authUser.email,
                    uid: authUser.uid,
                    admin: userData.admin || false
                });
            } else {
                setUser({
                    logged: false,
                    email: null,
                    displayName: null,
                    uid: null,
                    admin: false
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
			isAdmin
			}}>
			{children}

		</Provider>
	)

}