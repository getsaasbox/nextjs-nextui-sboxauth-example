import { Card, Grid, Text, Link } from "@nextui-org/react";

export function AppCard({user}) {
  const username = user.firstname + " " + user.lastname;
  return (
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <img
          alt={username}
          src={user.avatarUrl}
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {username}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{user.email}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
          This user is {user.is_admin ? "an administrator" : "a regular user." }
        </Text>
      </Card.Body>
      <Card.Footer>
        <Link
          icon
          color="primary"
          target="_blank"
          href="https://github.com/getsaasbox/nextjs-nextui-sboxauth-example"
        >
          Clone it on GitHub and start your SaaS.
        </Link>
      </Card.Footer>
    </Card>
  );
}
