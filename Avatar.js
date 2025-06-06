// =========================
// COMPANION/AVATAR COMPONENTS
// =========================
import React from 'react';

export const QuillCompanion = ({ className }) => (
    <g className={className} aria-label="Friendly quill companion">
        <ellipse cx="20" cy="20" rx="15" ry="12" fill="#FFD700" stroke="#DAA520" strokeWidth="0.5" />
        <circle cx="15" cy="18" r="3" fill="white" />
        <circle cx="14" cy="18.5" r="1.5" fill="#2C3E50" />
        <circle cx="25" cy="18" r="3" fill="white" />
        <circle cx="24" cy="18.5" r="1.5" fill="#2C3E50" />
        <circle cx="15.5" cy="17" r="0.5" fill="white" />
        <circle cx="25.5" cy="17" r="0.5" fill="white" />
        <path d="M5 15 Q12 8 18 15 C15 18 10 18 5 15 Z" fill="#FFF8DC" stroke="#FFA500" strokeWidth="0.5" />
        <path d="M22 15 Q28 8 35 15 C30 18 25 18 22 15 Z" fill="#FFF8DC" stroke="#FFA500" strokeWidth="0.5" />
        <ellipse cx="11" cy="23" rx="3" ry="1.5" fill="#FFB6C1" opacity="0.6" />
        <ellipse cx="29" cy="23" rx="3" ry="1.5" fill="#FFB6C1" opacity="0.6" />
        <path d="M18 24 Q20 26 22 24" stroke="#A52A2A" strokeWidth="0.5" fill="none" />
        <path d="M20 8 Q22 4 25 6 Q23 8 20 8 Z" fill="#FFA500" />
    </g>
);

export const PikachuCompanion = ({ className }) => (
    <g className={className} transform="scale(1.2)" aria-label="Pikachu companion">
        {/* Body */}
        <path d="M 20,35 A 15,15 0,0,1 50,35 A 15,18 0,0,1 20,35" fill="#F7D02C" />
        {/* Ears */}
        <path d="M 15,15 L 10,5 L 20,12 Z" fill="#F7D02C" stroke="#000" strokeWidth="0.5" />
        <path d="M 10,5 L 12,2 L 15,5 Z" fill="#000" />
        <path d="M 55,15 L 60,5 L 50,12 Z" fill="#F7D02C" stroke="#000" strokeWidth="0.5" />
        <path d="M 60,5 L 58,2 L 55,5 Z" fill="#000" />
        {/* Eyes */}
        <circle cx="28" cy="22" r="3" fill="#000" />
        <circle cx="42" cy="22" r="3" fill="#000" />
        <circle cx="29" cy="21" r="1" fill="#FFF" />
        <circle cx="43" cy="21" r="1" fill="#FFF" />
        {/* Cheeks */}
        <circle cx="22" cy="28" r="5" fill="#D8200D" />
        <circle cx="48" cy="28" r="5" fill="#D8200D" />
        {/* Mouth */}
        <path d="M 32,30 Q 35,32 38,30" stroke="#000" strokeWidth="1" fill="none" />
    </g>
);

export const Avatar = ({
    className = "w-32 h-32",
    companionType = null
}) => (
    <svg
        viewBox="0 0 220 220"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Player avatar${companionType ? ' with ' + companionType + ' companion' : ''}`}
        role="img"
    >
        <defs>
            <radialGradient id="avatarSkinGradient" cx="50%" cy="40%" r="70%">
                <stop offset="0%" stopColor="#FFF3E0" />
                <stop offset="100%" stopColor="#FFE2B4" />
            </radialGradient>
            <linearGradient id="avatarShirtGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5DD8FF" />
                <stop offset="100%" stopColor="#1CA9E6" />
            </linearGradient>
            <radialGradient id="avatarFaceShadow" cx="50%" cy="60%" r="60%">
                <stop offset="0%" stopColor="#000" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
            </radialGradient>
        </defs>
        <g id="avatar-character" transform="translate(0,0)">
            {/* Background */}
            <circle cx="110" cy="110" r="110" fill="#E8F7FF" />
            {/* Face with gradient and shadow */}
            <ellipse cx="110" cy="100" rx="62" ry="70" fill="url(#avatarSkinGradient)" stroke="#E5B279" strokeWidth="4" />
            <ellipse cx="110" cy="110" rx="50" ry="30" fill="url(#avatarFaceShadow)" />
            {/* Hair (blonde, stylized) */}
            <path d="M60,46 Q88,20 110,40 Q132,20 160,46 Q149,28 128,36 Q110,24 92,36 Q71,28 60,46Z" fill="#FFE066" stroke="#EAD55A" strokeWidth="3" />
            <ellipse cx="90" cy="50" rx="12" ry="6" fill="#FFEB86" />
            <ellipse cx="130" cy="50" rx="12" ry="6" fill="#FFEB86" />
            {/* Ears */}
            <ellipse cx="47" cy="110" rx="12" ry="18" fill="#FFE2B4" stroke="#E5B279" strokeWidth="2" />
            <ellipse cx="173" cy="110" rx="12" ry="18" fill="#FFE2B4" stroke="#E5B279" strokeWidth="2" />
            {/* Eyebrows */}
            <rect x="78" y="80" width="22" height="6" rx="3" fill="#EAD55A" />
            <rect x="120" y="80" width="22" height="6" rx="3" fill="#EAD55A" />
            {/* Eyes with highlight */}
            <ellipse cx="88" cy="110" rx="13" ry="15" fill="#fff" />
            <ellipse cx="132" cy="110" rx="13" ry="15" fill="#fff" />
            <ellipse cx="88" cy="113" rx="7" ry="8" fill="#38B94C" />
            <ellipse cx="132" cy="113" rx="7" ry="8" fill="#38B94C" />
            <ellipse cx="90" cy="110" rx="2" ry="2.5" fill="#fff" opacity="0.7" />
            <ellipse cx="134" cy="110" rx="2" ry="2.5" fill="#fff" opacity="0.7" />
            {/* Nose */}
            <ellipse cx="110" cy="128" rx="7" ry="4" fill="#FFD1A3" />
            {/* Smile */}
            <path d="M95 137 Q110 155 125 137" stroke="#E59A68" strokeWidth="5" fill="none" strokeLinecap="round" />
            {/* Blush */}
            <ellipse cx="80" cy="132" rx="7" ry="3.5" fill="#FFC3B0" opacity="0.7" />
            <ellipse cx="140" cy="132" rx="7" ry="3.5" fill="#FFC3B0" opacity="0.7" />
            {/* Shirt with gradient */}
            <rect x="65" y="172" width="90" height="32" rx="16" fill="url(#avatarShirtGradient)" />
            {/* Book */}
            <rect x="95" y="165" width="30" height="24" rx="6" fill="#FFF8DC" stroke="#FFB347" strokeWidth="3" />
            <rect x="109" y="165" width="2" height="24" fill="#FFB347" />
            {/* Book lines */}
            <rect x="103" y="175" width="10" height="2" fill="#FFD580" />
            <rect x="117" y="175" width="10" height="2" fill="#FFD580" />
            {/* Hands */}
            <ellipse cx="102" cy="189" rx="7" ry="4.5" fill="#FFE2B4" stroke="#E5B279" strokeWidth="2" />
            <ellipse cx="118" cy="189" rx="7" ry="4.5" fill="#FFE2B4" stroke="#E5B279" strokeWidth="2" />
        </g>
        {companionType && (
            <g id="companion-wrapper" transform="translate(85, 30) scale(0.9)">
                {companionType === 'quill' && <QuillCompanion />}
                {companionType === 'pikachu' && <PikachuCompanion />}
            </g>
        )}
    </svg>
);
