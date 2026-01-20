"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    // Extract current lang from path, e.g., /en/something -> en
    // Default to 'ko' if not found or root
    const currentLang = pathname.split('/')[1] || 'ko';

    const languages = [
        { code: 'ko', label: 'KR' },
        { code: 'en', label: 'EN' },
        { code: 'ja', label: 'JP' },
    ];

    return (
        <div className="lang-switcher">
            {languages.map((lang) => (
                <Link
                    key={lang.code}
                    href={`/${lang.code}`}
                    className={`lang-btn ${currentLang === lang.code ? 'active' : ''}`}
                >
                    {lang.label}
                </Link>
            ))}
        </div>
    );
}
