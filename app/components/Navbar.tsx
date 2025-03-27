'use client';

import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/service' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Client', href: '/client' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed w-full top-0 bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-600 rounded-full" />
            </div>
            <span className="text-xl font-normal">insights</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  isActive(link.href)
                    ? 'text-white font-medium'
                    : 'text-gray-500 hover:text-gray-300'
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8">
            {/* Social Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FaLinkedin size={18} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FaFacebook size={18} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FaTwitter size={18} />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-300 transition-colors">
                <FaYoutube size={18} />
              </Link>
            </div>

            {/* CTA Button */}
            <Link 
              href="/contact"
              className={`px-6 py-3 ${
                isActive('/contact')
                  ? 'bg-white text-black hover:bg-gray-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              } rounded-full transition-all duration-300 text-sm font-medium`}
            >
              Discuss for Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 