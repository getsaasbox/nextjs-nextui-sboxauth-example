
{ /* SaaSBox seamless auth */ } 
import withSboxAuth from 'sbox-auth-next';

{/* Next UI imports */} 
import { AppCard } from '../components/AppCard'
import { AdCardSample } from '../components/AdCardSample';
import { Container, Grid, Card, Row, Text, Spacer } from "@nextui-org/react";


{/* Tremor UI imports */} 
import { Card as TremorCard, 
         Text as TremorText,
         Metric as TremorMetric,
         Title as TremorTitle } from "@tremor/react";
import { Grid as TremorGrid, Col as TremorCol } from "@tremor/react";
import { KpiCard } from "../components/Tremor/KpiCard";
import { AreaChartSampleCard } from "../components/Tremor/AreaChartSample";

function Home({ user }) {
  return (
    <>
    <Container>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <AppCard user={user} />
        </Grid>
        <Grid xs={12} sm={7}>
          <AdCardSample />
        </Grid>
      </Grid.Container>
      <Spacer y={2} />
      <TremorGrid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
          <TremorCol numColSpan={1} numColSpanLg={2}>
            <AreaChartSampleCard />
          </TremorCol>
          <KpiCard />
          <TremorCol>
              <TremorCard>
                <TremorText>Title</TremorText>
                <TremorMetric>KPI 3</TremorMetric>
              </TremorCard>
          </TremorCol>
          <TremorCard>
            <TremorText>Title</TremorText>
            <TremorMetric>KPI 4</TremorMetric>
          </TremorCard>
          <TremorCard>
            <TremorText>Title</TremorText>
            <TremorMetric>KPI 5</TremorMetric>
          </TremorCard>
          <TremorCol numColSpan={3}>
            <TremorCard>
              <TremorText>Main UI and navbar powered by Next UI - Awesome open source library of React UI components</TremorText>
              <TremorText>Charts Powered by Tremor UI - Awesome open source library for building React Dashboards</TremorText>
            </TremorCard>
          </TremorCol>
      </TremorGrid>
    </Container>
    <Container>
      <Spacer y={4} />
    </Container>
    </>
  );
}

export const getServerSideProps = withSboxAuth(
  async (req, res) => {
    let user = req.user;
    if (req.user) {
      console.log("We have a user:", req.user)
    }
    return {
      props: { user }
    }
  }
)

export default Home;
