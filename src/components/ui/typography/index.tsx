import React, { JSX } from "react";
import clsx from "clsx";

export interface TypographyProps {
  children: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "overline"
    | "span";
  className?: string;
}

const variantMapping: Record<string, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
  overline: "span",
  span: "span",
};

const variantClasses: Record<string, string> = {
  h1: "text-5xl font-main font-bold leading-15",
  h2: "text-4xl font-main font-bold leading-12",
  h3: "text-3xl font-main font-bold leading-10",
  h4: "text-2xl font-main font-bold leading-9",
  h5: "text-xl font-main font-bold leading-8",
  h6: "text-lg font-main font-bold leading-7",
  subtitle1: "text-lg font-main font-medium",
  subtitle2: "text-base font-main font-medium",
  body1: "text-base font-main",
  body2: "text-sm font-main",
  caption: "text-xs font-main",
  overline: "text-xs font-main uppercase tracking-widest",
  span: "font-main",
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = "body1",
  className,
}) => {
  const Component = variantMapping[variant] || "p";

  return (
    <Component
      className={clsx("typography", variantClasses[variant], className)}
    >
      {children}
    </Component>
  );
};
