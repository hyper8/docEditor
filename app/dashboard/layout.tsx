'use client';
import React from "react";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import SideMenu  from '../component/sideMenu'

export default function DashboardLayout({children}: {children: React.ReactNode}){
  const pathname = usePathname();
  return(
    <div>
      <h3>dashboard LayOut title 公共显示区域</h3>
      <SideMenu/>
      <Link className={pathname} href={'pathone'}>pathone</Link>
      <Link className={pathname} href={'pathtwo'}>pathtwo</Link>
      
      <div className={"child-frame"}>{children}</div>
    </div>
  )
}