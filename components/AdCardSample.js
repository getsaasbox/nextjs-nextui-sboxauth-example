import { Card, Col, Row, Button, Text, Link } from "@nextui-org/react";

export function AdCardSample() {

  return (
    <Card css={{ w: "100%", h: "300px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" color="white">
            The fastest path to your SaaS
          </Text>
          <Text h3 color="white">
            Turnkey auth and subscription
          </Text>
          <Text h3 color="white">
            Zero integration
          </Text>
          <Text h3 color="white">
            Start serving users from day one.
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="/app/happy-woman-dashboard-wide.png"
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col span={3}>
                <Card.Image
                  src="/app/saasbox-logo.png"
                  css={{ bg: "black", br: "50%" }}
                  height={40}
                  width={40}
                  alt="SaaSBox"
                />
              </Col>
              <Col>
                <Text color="#d1d1d1" size={12}>
                  SaaSBox
                </Text>
                <Text color="#d1d1d1" size={12}>
                  Start your SaaS today with SaaSBox.
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <a href="https://saasbox.net">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >        
                    Get SaaSBox
                  </Text>
                </Button>
              </a>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}