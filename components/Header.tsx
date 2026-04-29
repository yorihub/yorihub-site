"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// next/image は images.unoptimized + output:export 環境で public/ ファイルに basePath を付与しないため明示する
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navLinks = [
  { href: "/", label: "トップ" },
  { href: "/about", label: "ヨリハブについて" },
  { href: "/services", label: "事業一覧" },
  { href: "/partners", label: "提携について" },
  { href: "/operator", label: "運営者情報" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity"
            aria-label="ヨリハブ トップページへ"
          >
            <Image
              src={`${BASE_PATH}/logo.svg`}
              alt="ヨリハブ"
              width={120}
              height={33}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="メインナビゲーション">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#1e3a5f] font-semibold border-b-2 border-[#1e3a5f] pb-0.5"
                    : "text-slate-600 hover:text-[#1e3a5f]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-5 h-0.5 bg-current"></span>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav
            className="md:hidden border-t border-slate-100 py-3"
            aria-label="モバイルナビゲーション"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 px-2 text-sm transition-colors ${
                  pathname === link.href
                    ? "text-[#1e3a5f] font-semibold"
                    : "text-slate-600 hover:text-[#1e3a5f]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
