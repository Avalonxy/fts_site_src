import React from 'react';

type IconProps = {
  className?: string;
};

export const WebDevIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-6l2 2h2v2H9v-2h2l2-2H5a2 2 0 01-2-2V5zm2 0v8h14V5H5z"/>
  </svg>
);

export const MobileIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm0 2h10v14H7V4zm5 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/>
  </svg>
);

export const ConsultingIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2a7 7 0 00-7 7c0 2.523 1.33 4.735 3.321 5.982L8 20l3.018-2.011A7.002 7.002 0 0019 9a7 7 0 00-7-7zm0 2a5 5 0 014.472 7.27l-.228.41.158.455L16 13l-1.865-.621-.413.244A5 5 0 1112 4z"/>
  </svg>
);

export const SecurityIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4zm0 4.18L7 8.5v3.5c0 3.9 2.69 7.58 5 8 2.31-.42 5-4.1 5-8V8.5l-5-2.32zM12 9a3 3 0 012.995 2.824L15 12v1h1v2h-8v-2h1v-1a3 3 0 013-3z"/>
  </svg>
);

export const CloudIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 18H7a4 4 0 01-.88-7.9 5.5 5.5 0 0110.76-1.19A4.5 4.5 0 1119 18z"/>
  </svg>
);

export const IndustrialIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3 13l7-4v4l7-4v9h2v2H3v-7zm2 5h3v-4.382l-3 1.714V18zm5 0h5v-6.382l-5 2.857V18z"/>
  </svg>
);

export const CryptoIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.236L5 7.5v9l7 3.889 7-3.889v-9l-7-3.264zM11 8h2v8h-2V8z"/>
  </svg>
);

export const SupportIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2a7 7 0 00-7 7v2a3 3 0 003 3h1v-6H8a5 5 0 0110 0v6h1a3 3 0 003-3V9a7 7 0 00-7-7zm-2 18h4v2h-4v-2z"/>
  </svg>
);

/** Аудит безопасности — лупа/анализ */
export const AuditIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

/** Защита данных — замок и щит */
export const DataShieldIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
  </svg>
);

/** Мониторинг угроз — радар/оповещение */
export const ThreatMonitorIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M15 12c0-1.66-1.34-3-3-3V4c3.31 0 6 2.69 6 6h-3zm-3 1c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1v-3c0-.55.45-1 1-1zm0-9V1c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1s-1-.45-1-1zm10.45 3.55l-2.12-2.12c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41zM3.55 4.55l2.12 2.12c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L4.96 3.14c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41zM12 20c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm4.45-5.45l-2.12-2.12c-.39-.39-1.02-.39-1.41 0s-.39 1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.41zM4.96 20.86l2.12-2.12c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41l-2.12 2.12c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41z"/>
  </svg>
);

/** Техподдержка — гарнитура */
export const HeadsetIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
  </svg>
);

/** Мониторинг систем — графики/дашборд */
export const ChartMonitorIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

/** Профилактика/обслуживание — гаечный ключ */
export const WrenchIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
  </svg>
);

/** Электронная подпись */
export const DigitalSignatureIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
  </svg>
);

/** Криптозащита — замок */
export const CryptoLockIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
  </svg>
);

/** Криптопровайдеры — сервер */
export const ProviderIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  </svg>
);

/** Монтаж СКС — кабель/сеть */
export const CableIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17 6c.55 0 1 .45 1 1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1h1c.55 0 1 .45 1 1s-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-4v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H7v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h1v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h1V8H4c-.55 0-1-.45-1-1s.45-1 1-1h1V5c0-.55.45-1 1-1s1 .45 1 1v1h4V5c0-.55.45-1 1-1s1 .45 1 1v1h4V5c0-.55.45-1 1-1zm-6 4h2V8h-2v2z"/>
  </svg>
);

/** Пусконаладка — настройки */
export const SettingsGearIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);

/** Интеграция систем — связанные узлы */
export const IntegrationIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z"/>
  </svg>
);

/** ИТ-стратегия — компас/цель */
export const StrategyIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

/** Архитектура — слои */
export const ArchitectureIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

/** Безопасность — щит с галочкой */
export const ShieldCheckIcon: React.FC<IconProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-2 14l-4-4 1.41-1.41L10 12.17l6.59-6.59L18 8l-8 8z"/>
  </svg>
);


