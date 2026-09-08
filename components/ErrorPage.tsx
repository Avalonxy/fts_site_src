'use client';

import Link from 'next/link';
import Image from 'next/image';

export type ErrorPageProps = {
  code: string;
  title: string;
  description: string;
  backHref: string;
  backLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  onRetry?: () => void;
  retryLabel?: string;
};

export default function ErrorPage({
  code,
  title,
  description,
  backHref,
  backLabel,
  secondaryHref,
  secondaryLabel,
  onRetry,
  retryLabel,
}: ErrorPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-dusty-black-dark via-dusty-black to-dusty-black-light px-4 py-12">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-dusty-yellow/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-dusty-yellow/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dusty-yellow/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg w-full text-center">
        <Link href={backHref} className="mb-8 opacity-90 hover:opacity-100 transition-opacity">
          <Image
            src="/images/logo.svg"
            alt="Future Tech Corp"
            width={120}
            height={145}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <span className="text-8xl md:text-9xl font-bold text-dusty-yellow/20 tracking-tighter select-none mb-2">
          {code}
        </span>

        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-4">{title}</h1>
        <p className="text-dusty-gray-light text-lg mb-10 leading-relaxed">{description}</p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:justify-center">
          {onRetry && retryLabel && (
            <button
              onClick={onRetry}
              className="btn btn-primary order-first sm:order-none"
            >
              {retryLabel}
            </button>
          )}
          <Link href={backHref} className="btn btn-primary">
            {backLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className="btn btn-secondary border-dusty-yellow/50 text-dusty-yellow hover:bg-dusty-yellow/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
