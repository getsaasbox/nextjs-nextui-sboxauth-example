
{ /* SaaSBox seamless auth */ } 
import withSboxAuth from 'sbox-auth-next';

{/* Next UI imports */} 
import { AppCard } from '../components/AppCard'
import { Container, Card, Row, Text } from "@nextui-org/react";


{/* Tremor UI imports */} 
import { Card as TremorCard, 
         Text as TremorText,
         Metric as TremorMetric } from "@tremor/react";
import { Grid as TremorGrid, Col as TremorCol } from "@tremor/react";
import { KpiCard } from "../components/Tremor/KpiCard";
import { AreaChartSampleCard } from "../components/Tremor/AreaChartSample";

function Home({ user }) {
  return (
    {/* Main part powered by Next UI components */} 
    <>
    <Container>
    <AppCard user={user} />
    
    {/* Sample data dashboard components by Tremor UI */} 
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
    </TremorGrid>
    {/* End Tremor UI */} 
    </Container>
    {/* End Next UI */} 
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
