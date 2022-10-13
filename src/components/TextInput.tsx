import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx'



export interface TextInputRootProps{
  children: ReactNode;
}
function TextInputRoot({children}: TextInputRootProps){
  return(
      <div className='px-4 py-3 w-full h-12 gap-3 bg-gray-800 rounded  flex flex-row items-center focus-within:ring-2 ring-cyan-300'>
      {children}
      </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps{
  children: ReactNode;
}
function TextInputIcon({children}: TextInputIconProps){
  return(
    <Slot className='w-6 h-6 text-gray-400'>
       {children}
    </Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}
function TextInputInput(props: TextInputInputProps){
  return(
 
   <input className={clsx(
      ' bg-transparent flex-1 text-gray-100 placeholder:text-gray-400 font-sans text-xs outline-none',
     {}
    )}
    {...props}
    />
   
    );
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
   Root: TextInputRoot,
   Input: TextInputInput,
   Icon: TextInputIcon
};