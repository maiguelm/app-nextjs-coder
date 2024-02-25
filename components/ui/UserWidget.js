import Link from 'next/link'
import { User } from 'react-feather'
import { useAuthContextProvider } from '@/hooks/hooks'

const UserWidget = () => {
  const { user } = useAuthContextProvider()
  console.log(user)

  return (
    <>
      {user.logged ? (
        <p>Hola {user.userName}</p>
      ) : (
        <Link className='flex flex-col items-center gap-1' href={"/auth"}>
          <User color='white' size={20} />
        </Link>
      )}
    </>
  )
}

export default UserWidget
