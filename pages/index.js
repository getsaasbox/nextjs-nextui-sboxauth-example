
import withSboxAuth from 'sbox-auth-next';
import { AppCard } from '../components/AppCard'
import { Container, Card, Row, Text } from "@nextui-org/react";
import { Card as TremorCard, 
         Text as TremorText,
         Metric as TremorMetric } from "@tremor/react";

function Home({ user }) {
  return (
    <Container>
    <AppCard user={user} />
    <TremorCard>
      <TremorText>Sales</TremorText>
      <TremorMetric>$ 34,743</TremorMetric>
    </TremorCard>
    </Container>
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
