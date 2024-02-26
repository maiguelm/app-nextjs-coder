import React from 'react'
import { CircleLoader } from 'react-spinners'

const Loading = () => {
  return (
	<div className="w-full h-full min-h-screen flex justify-center items-center">
		<CircleLoader
			size={100}
			color='#36d7b7'
			speedMultiplier={1}
		/>
	</div>
  )
}

export default Loading