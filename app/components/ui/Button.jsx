
export function Button({ children, className='', ...args}){
	
	return(
		<>
		<button className={`bg-origin-border  p-4 border-4 text-base bg-slate-500 rounded-lg hover:bg-slate-700 ${className}`} {...args}> {children} </button>
				

		</>
	)
}