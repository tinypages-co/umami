'use client';
import { Column, Row } from '@umami/react-zen';
import { ExpandedViewModal } from '@/app/(main)/websites/[websiteId]/ExpandedViewModal';
import { Panel } from '@/components/common/Panel';
import { UnitFilter } from '@/components/input/UnitFilter';
import { WebsiteChart } from './WebsiteChart';
import { WebsiteControls } from './WebsiteControls';
import { WebsiteMetricsBar } from './WebsiteMetricsBar';
import { WebsitePanels } from './WebsitePanels';

export function WebsitePage({ websiteId }: { websiteId: string }) {
  return (
    // TinyStats : largeur max centrée — la grille reste lisible d'un coup
    // d'œil sur grand écran au lieu de s'étirer sur toute la largeur.
    <Column gap style={{ maxWidth: 1200, width: '100%', margin: '0 auto' }}>
      <WebsiteControls websiteId={websiteId} allowBounceFilter={true} />
      <WebsiteMetricsBar websiteId={websiteId} showChange={true} />
      <Panel minHeight="520px">
        <Row justifyContent="end">
          <UnitFilter />
        </Row>
        <WebsiteChart websiteId={websiteId} />
      </Panel>
      <WebsitePanels websiteId={websiteId} />
      <ExpandedViewModal websiteId={websiteId} />
    </Column>
  );
}
