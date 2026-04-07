import React from "react";

const iconPaths = {
  "app-store": {
    viewBox: "0 0 75 91",
    path: (
      <path
        d="M72.6136 31.0219C72.0792 31.4314 62.6443 36.6821 62.6443 48.3574C62.6443 61.8618 74.6499 66.6393 75.0092 66.7576C74.9539 67.0488 73.102 73.3005 68.6794 79.6705C64.7359 85.2761 60.6173 90.8726 54.352 90.8726C48.0866 90.8726 46.4742 87.2781 39.2414 87.2781C32.1929 87.2781 29.6867 90.9909 23.9558 90.9909C18.2248 90.9909 14.226 85.8039 9.62838 79.4339C4.30283 71.9537 0 60.333 0 49.3038C0 31.6134 11.6462 22.2313 23.1081 22.2313C29.1984 22.2313 34.2752 26.1807 38.0989 26.1807C41.7383 26.1807 47.414 21.9947 54.3428 21.9947C56.9687 21.9947 66.4036 22.2313 72.6136 31.0219ZM51.0534 14.5054C53.9189 11.1475 55.9459 6.4883 55.9459 1.8291C55.9459 1.183 55.8907 0.5278 55.7709 0C51.1087 0.1729 45.562 3.0667 42.2174 6.8978C39.5915 9.8462 37.1407 14.5054 37.1407 19.2283C37.1407 19.9381 37.2604 20.6479 37.3157 20.8754C37.6106 20.93 38.0897 20.9937 38.5688 20.9937C42.7518 20.9937 48.0129 18.2273 51.0534 14.5054Z"
        fill="currentColor"
      />
    ),
  },
  "play-store": {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"
        fill="currentColor"
      />
    ),
  },
  moon: {
    viewBox: "0 0 24 24",
    path: (
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  sun: {
    viewBox: "0 0 24 24",
    path: (
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    ),
  },
} as const;

export type IconName = keyof typeof iconPaths;

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className = "", ...props }: IconProps) {
  const icon = iconPaths[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={icon.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {icon.path}
    </svg>
  );
}
