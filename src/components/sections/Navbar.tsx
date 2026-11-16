"use client";

import { useEffect, useRef, useState } from "react";
import type { NavLink } from "@/types";
import { BRAND, NAV } from "@/data/content";
import { ArrowRight, Chevron } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CONTAINER, FOCUS, HEADING } from "@/components/ui/tokens";
import { goTo } from "@/components/ui/helpers";

function NavDropdown({ link, active }: { link: NavLink; active: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const id = `menu-${link.label.toLowerCase()}`;

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-md px-1 py-1 text-[13px] transition-colors ${FOCUS} ${
          active
            ? "font-medium text-[#0E0E10]"
            : "text-[#5B616C] hover:text-[#0E0E10]"
        }`}
      >
        {link.label}
        <Chevron
          className={`h-3 w-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={id}
        className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <ul className="overflow-hidden rounded-2xl border border-black/5 bg-white p-1.5 shadow-[0_20px_40px_-16px_rgba(14,14,16,0.25)]">
          {link.children?.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                tabIndex={open ? 0 : -1}
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  goTo(c.href);
                }}
                className={`block rounded-xl px-3.5 py-2.5 text-[13px] text-[#3A3D44] transition-colors hover:bg-[#EEF3FF] hover:text-[#0A5CFF] ${FOCUS}`}
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Navbar({ activeId }: { activeId: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (l: NavLink) =>
    l.href === `#${activeId}` ||
    l.children?.some((c) => c.href === `#${activeId}`) === true;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-[#F7F7F8]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`${CONTAINER} flex h-20 items-center justify-between`}
        aria-label="Primary"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            goTo("#home");
          }}
          className={`rounded-md ${FOCUS}`}
          aria-label={`${BRAND} home`}
        >
          <Logo />
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex">
          {NAV.map((l, i) => (
            <li key={l.label} className="flex items-center">
              {i > 0 && (
                <span
                  className="mx-4 h-4 w-px bg-black/20 lg:mx-5"
                  aria-hidden="true"
                />
              )}
              {l.children ? (
                <NavDropdown link={l} active={isActive(l)} />
              ) : (
                <a
                  href={l.href}
                  aria-current={isActive(l) ? "page" : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(l.href);
                  }}
                  className={`rounded-md px-1 py-1 text-[13px] transition-colors ${FOCUS} ${
                    isActive(l)
                      ? "font-medium text-[#0E0E10]"
                      : "text-[#5B616C] hover:text-[#0E0E10]"
                  }`}
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <PrimaryButton
            href="#contact"
            size="sm"
            className="px-3 py-1.5 text-xs font-medium sm:px-4 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-sm whitespace-nowrap shadow-sm"
          >
            <span className="hidden min-[380px]:inline">Schedule a </span>Demo
          </PrimaryButton>
          <button
            type="button"
            className={`grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-black/10 bg-white lg:hidden ${FOCUS}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-[#0E0E10] transition-all duration-300 ${mobileOpen ? "top-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-5 bg-[#0E0E10] transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 h-px w-5 bg-[#0E0E10] transition-all duration-300 ${mobileOpen ? "top-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-[#F7F7F8] px-5 pb-10 pt-4 transition-all duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <ul className="divide-y divide-black/5">
          {NAV.map((l) => (
            <li key={l.label} className="py-3">
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  goTo(l.href);
                }}
                className={`${HEADING} block py-1 text-2xl ${FOCUS}`}
                tabIndex={mobileOpen ? 0 : -1}
              >
                {l.label}
              </a>
              {l.children && (
                <ul className="mt-1 space-y-1 pl-1">
                  {l.children.map((c) => (
                    <li key={c.label}>
                      <a
                        href={c.href}
                        tabIndex={mobileOpen ? 0 : -1}
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileOpen(false);
                          goTo(c.href);
                        }}
                        className={`block py-1 text-sm text-[#5B616C] ${FOCUS}`}
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center px-4">
          <PrimaryButton
            href="#contact"
            size="sm"
            onClick={() => setMobileOpen(false)}
            className="w-full max-w-[280px] py-2.5 px-5 text-xs sm:text-sm font-medium shadow-md shadow-[#0A5CFF]/25"
          >
            Schedule a Demo
            <ArrowRight className="h-2.5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
}
