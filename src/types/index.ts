import type { ComponentType } from "react";

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface Product {
  id: string;
  name: string;
  short: string;
  blurb: string;
  Art: ComponentType<{ className?: string }>;
}

export interface Step {
  title: string;
  blurb: string;
  Art: ComponentType<{ className?: string }>;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof FormState, string>>;
