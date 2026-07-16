'use client';
import { Row, ThemeButton } from '@umami/react-zen';
import { LanguageButton } from '@/components/input/LanguageButton';
import { PreferencesButton } from '@/components/input/PreferencesButton';
import { ShareBranding } from './ShareBranding';

export function ShareHeader() {
  return (
    <Row as="header" justifyContent="space-between" alignItems="center" paddingY="3">
      <ShareBranding size="md" />
      <Row alignItems="center" gap>
        <ThemeButton />
        <LanguageButton />
        <PreferencesButton />
      </Row>
    </Row>
  );
}
