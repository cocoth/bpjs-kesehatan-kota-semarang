'use client'
import React, { useEffect, useRef } from 'react'


// interface CloseMenuProps extends React.HTMLAttributes<HTMLDivElement> {
interface CloseMenuProps{
    children: React.ReactNode
    onClose: () => void
}

// const CloseMenu: React.FC<CloseMenuProps> = ({ children, onClose, ...props }) => {
const CloseMenu: React.FC<CloseMenuProps> = ({ children, onClose }) => {
    const menuRef = useRef<HTMLDivElement>(null)
    const handleClick = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
            onClose()
        }
    }
    useEffect(() => {
        document.addEventListener('click', handleClick)
        console.log({ children })
        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])
    return (
        // <div ref={menuRef} {...props}>
        <div ref={menuRef}>
            {children}
        </div>
    )
}

export default CloseMenu