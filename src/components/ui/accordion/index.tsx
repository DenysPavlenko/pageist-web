"use client";
import React, { useState, createContext, useContext } from "react";
import clsx from "clsx";

// Accordion Context
interface AccordionContextType {
  expanded: boolean;
  onToggle: () => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion components must be used within an Accordion component",
    );
  }
  return context;
};

// Main Accordion Component
interface AccordionProps {
  children: React.ReactNode;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onChange?: (expanded: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export const Accordion = ({
  children,
  expanded: controlledExpanded,
  defaultExpanded = false,
  onChange,
  className,
  disabled = false,
}: AccordionProps) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

  const isControlled = controlledExpanded !== undefined;
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  const handleToggle = () => {
    if (disabled) return;

    const newExpanded = !expanded;

    if (!isControlled) {
      setInternalExpanded(newExpanded);
    }

    onChange?.(newExpanded);
  };

  return (
    <AccordionContext.Provider value={{ expanded, onToggle: handleToggle }}>
      <div
        className={clsx(
          "border border-surface-variant rounded-xl overflow-hidden",
          disabled && "opacity-60 pointer-events-none",
          expanded ? "bg-primary" : "bg-surface-container-lowest",
          className,
        )}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// AccordionSummary Component
interface AccordionSummaryProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionSummary = ({
  children,
  className,
}: AccordionSummaryProps) => {
  const { onToggle } = useAccordionContext();

  return (
    <button
      className={clsx(
        "w-full flex items-center justify-between p-4 transition-colors duration-200 cursor-pointer",
        className,
      )}
      onClick={onToggle}
      type="button"
    >
      <div className="flex-1 text-left">{children}</div>
    </button>
  );
};

// AccordionDetails Component
interface AccordionDetailsProps {
  children: React.ReactNode;
  className?: string;
}

export const AccordionDetails = ({
  children,
  className,
}: AccordionDetailsProps) => {
  const { expanded } = useAccordionContext();

  return (
    <div
      className={clsx(
        "grid transition-all duration-300 ease-out",
        expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="overflow-hidden">
        <div className={clsx("p-4 pt-0", className)}>{children}</div>
      </div>
    </div>
  );
};
