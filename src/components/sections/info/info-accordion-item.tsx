import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@/src/components/ui";

interface InfoAccordionItemProps {
  number: string;
  title: string;
  description: string;
  expanded: boolean;
  onChange: (expanded: boolean) => void;
}

export const InfoAccordionItem = ({
  number,
  title,
  description,
  expanded,
  onChange,
}: InfoAccordionItemProps) => {
  return (
    <Accordion expanded={expanded} onChange={onChange}>
      <AccordionSummary>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-container">
            <Typography
              variant="span"
              className="text-on-primary-container font-bold leading-0 text-sm"
            >
              {number}
            </Typography>
          </div>
          <Typography
            variant="h6"
            className={expanded ? "text-on-primary" : "text-on-surface"}
          >
            {title}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="px-2">
          <Typography variant="body1" className="text-on-primary">
            {description}
          </Typography>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
