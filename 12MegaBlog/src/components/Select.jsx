import React,{ useId } from 'react'

function Select({
  options,
  label,
  className,
  ...props
}, ref) {
  const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label> }
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
      >

        {/* {options?.map((option) => (
          <option key={option} value={option}>
            {option.label}
          </option>
        ))} */}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}

        {/* here we have written options?.map() instead of this options.map() => and the reason is, if there are values in option then run the loop otherwise leave */}

      </select>
    </div>
  )
}

export default React.forwardRef(Select)
