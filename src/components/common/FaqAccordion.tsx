import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/data/site';

export const FaqAccordion: React.FC<{
  items: FAQItem[];
  className?: string;
  allowMultiple?: boolean;
}> = ({ items, className = '', allowMultiple = false }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className={`w-full divide-y divide-border-custom/50 border-y border-border-custom/50 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const buttonId = `faq-btn-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={index} className="py-4">
            <h3>
              <button
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className="w-full flex items-center justify-between text-left py-2 font-display text-lg sm:text-xl text-ink hover:text-muted-brass transition-colors focus-visible:outline-2 focus-visible:outline-muted-brass min-h-[44px] cursor-pointer"
              >
                <span className="pr-6 font-normal">{item.question}</span>
                <span
                  className={`p-1.5 rounded-full transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-muted-brass bg-soft-stone/80' : 'text-slate-custom'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="pt-2 pb-3 pr-8 font-ui text-sm text-slate-custom leading-relaxed animate-in fade-in duration-200"
              >
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
