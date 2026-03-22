import React, { createContext, useContext, useState } from 'react';

type AccordionContextType = {
  openValue: string | null;
  toggle: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error('Accordion 관련 컴포넌트는 Accordion 안에서만 사용 가능합니다.');
  }
  return ctx;
}

type AccordionItemContextType = {
  value: string;
};

const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error('Accordion.Item 관련 컴포넌트는 Accordion.Item 안에서만 사용 가능합니다.');
  }
  return ctx;
}

type AccordionProps = {
  children: React.ReactNode;
  defaultValue?: string | null;
};

function Accordion({ children, defaultValue = null }: AccordionProps) {
  const [openValue, setOpenValue] = useState<string | null>(defaultValue);

  const toggle = (value: string) => {
    setOpenValue((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ openValue, toggle }}>
      <div className="rounded-xl border border-slate-100 bg-white overflow-hidden">
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  value: string;
  children: React.ReactNode;
};

function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className="border-b border-slate-50 last:border-0 text-left">
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

type AccordionTriggerProps = {
  children: React.ReactNode;
};

function AccordionTrigger({ children }: AccordionTriggerProps) {
  const { openValue, toggle } = useAccordionContext();
  const { value } = useAccordionItemContext();

  const isOpen = openValue === value;

  return (
    <button
      type="button"
      onClick={() => toggle(value)}
      className="flex w-full justify-between items-center py-4 px-5 cursor-pointer hover:bg-slate-50/50 transition-colors"
    >
      <span className={`text-sm font-semibold ${isOpen ? 'text-slate-900' : 'text-slate-600'}`}>
        {children}
      </span>
      <span className={`text-slate-400 text-[10px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
        ▼
      </span>
    </button>
  );
}

type AccordionContentProps = {
  children: React.ReactNode;
};

function AccordionContent({ children }: AccordionContentProps) {
  const { openValue } = useAccordionContext();
  const { value } = useAccordionItemContext();

  const isOpen = openValue === value;

  if (!isOpen) return null;

  return (
    <div className="pb-5 px-5 text-sm text-slate-500 border-t border-slate-50/50 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
      {children}
    </div>
  );
}

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export default Accordion;
