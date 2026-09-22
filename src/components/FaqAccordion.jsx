"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ControlIcon } from "@/components/icons/ControlIcon";
import { faqs } from "@/lib/faq";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={item.question}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              {item.question}
              <span className="chev animated-control-icon" aria-hidden="true">
                <ControlIcon name="chevronDown" />
              </span>
            </button>
            <motion.div
              className="faq-a"
              initial={false}
              animate={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="faq-a-inner">{item.answer}</div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
