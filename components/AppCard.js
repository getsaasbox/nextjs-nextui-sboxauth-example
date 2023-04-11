import { Avatar, Spacer, Card, Grid, Text, Link, Row } from "@nextui-org/react";

export function AppCard({user}) {
  const username = user.firstname + " " + user.lastname;
  let status;
  let plan = null;

  if (user.is_admin) {
    status = "an administrator"
  } else {
    if (user.is_customer) {
      status = "a customer"
    } else {
      status = "a regular user";
    }
    if (user.plan) {
      plan = user.plan.name;
    }
  }
  return (<>
    <Card css={{ p: "$6", mw: "400px" }}>
      <Card.Header>
        <Avatar src={user.avatarUrl} size="xl" />
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
        <Row>
          <Text>
            This user is {status} {plan ? "on a \"" + plan + "\" plan." : "." }
          </Text>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Link
            icon
            color="primary"
            target="_blank"
            href="https://github.com/getsaasbox/nextjs-nextui-sboxauth-example"
          >
            Clone on GitHub.
          </Link>
        </Row>
        <Row>
          <Link
            icon
            color="primary"
            target="_blank"
            href="https://docs.saasbox.net/how-to-create-a-saas-with-web-frameworks/create-a-nextjs-saas-application-in-30-minutes"
          >
            Check out the docs.
          </Link>
        </Row>
      </Card.Footer>
    </Card>
    </>
  );
}
