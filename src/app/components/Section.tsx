import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Section = ({ id, children, className, delay = 0 }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn("py-24 px-6 md:px-12 max-w-7xl mx-auto w-full", className)}
    >
      {children}
    </motion.section>
  );
};
