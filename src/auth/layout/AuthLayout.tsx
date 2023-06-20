import React from 'react'
import { Nav } from '../components';

interface AuthLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const AuthLayout = ({ children }:AuthLayoutProps) => {
  return (
    <div className="bg-slate-200">
      <Nav />
      <div className="flex items-center justify-center h-screen flex-col gap-10">
      <div className="bg-white md:px-10 md:py-15 p-10 rounded-lg md:w-4/12 sm:w-8/12 w-11/12 shadow-xl">
        {children}
      </div>
      </div>
    </div>
  )
}