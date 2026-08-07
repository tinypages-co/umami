import { Grid, Heading } from '@umami/react-zen';
import { GridRow } from '@/components/common/GridRow';
import { Panel } from '@/components/common/Panel';
import { useMessages } from '@/components/hooks';
import { MetricsTable } from '@/components/metrics/MetricsTable';
import { WorldMap } from '@/components/metrics/WorldMap';

// TinyStats : version épurée des panneaux. On ne garde qu'un onglet par bloc
// (le plus parlant) et on supprime les onglets d'analyste — URL / Entry / Exit,
// Channels, OS / Devices, Regions / Cities. La heatmap horaire (WeeklyTraffic)
// est retirée ; la carte du monde est conservée et passe en pleine largeur.
export function WebsitePanels({ websiteId }: { websiteId: string }) {
  const { t, labels } = useMessages();
  const tableProps = {
    websiteId,
    limit: 10,
    allowDownload: false,
    showMore: true,
    metric: t(labels.visitors),
  };
  const rowProps = { minHeight: '570px' };

  return (
    <Grid gap="3">
      <GridRow layout="two" {...rowProps}>
        <Panel>
          <Heading size="2xl">{t(labels.pages)}</Heading>
          <MetricsTable type="path" title={t(labels.path)} {...tableProps} />
        </Panel>
        <Panel>
          <Heading size="2xl">{t(labels.sources)}</Heading>
          <MetricsTable type="referrer" title={t(labels.referrer)} {...tableProps} />
        </Panel>
      </GridRow>

      <GridRow layout="two" {...rowProps}>
        <Panel>
          <Heading size="2xl">{t(labels.browsers)}</Heading>
          <MetricsTable type="browser" title={t(labels.browser)} {...tableProps} />
        </Panel>
        <Panel>
          <Heading size="2xl">{t(labels.countries)}</Heading>
          <MetricsTable type="country" title={t(labels.country)} {...tableProps} />
        </Panel>
      </GridRow>

      <GridRow layout="one" {...rowProps}>
        <Panel paddingX="0" paddingY="0">
          <WorldMap websiteId={websiteId} />
        </Panel>
      </GridRow>
    </Grid>
  );
}
