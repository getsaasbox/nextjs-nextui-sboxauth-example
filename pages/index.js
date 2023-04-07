
import withSboxAuth from 'sbox-auth-next';
import { AppCard } from '../components/AppCard'
import { Container, Card, Row, Text } from "@nextui-org/react";

function Home({ user }) {
  return (
    <Container>
    <AppCard user={user} />
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
