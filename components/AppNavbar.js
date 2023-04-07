import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { useRouter } from 'next/router'
import { FeaturesDropdown } from "./FeaturesDropdown"

export function AppNavbar({ children }) {
  const collapseItems = [
    "Signin State",
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "Account",
    "Subscription",
    "Help & Feedback",
    "Log Out",
  ];
  let user = children.props.user;

  // Delete ?otc= from query string once user is processed.
  const router = useRouter();
  if (router.query.otc) {
    delete router.query.otc;
    router.push(router)
  }
  // End delete ?otc=

  // Dropdown url handler:
  // Take user to SaaSBox url for managing account, profile and subscription.
  function handleAction({actionKey}) {
    const domain = process.env.NEXT_PUBLIC_SAASBOX_DOMAIN;
    console.log("handleAction called with", actionKey)
    if (actionKey == "profile" || actionKey == "account" || actionKey == "subscription") {
      let route = domain + "/user/" + actionKey;
      window.location = route;
    }
    if (actionKey == "logout") {
      fetch('/app/api/logout', {
        method: 'POST', redirect: 'follow'
      });
    }
  }

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <AcmeLogo />
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="secondary"
        hideIn="xs"
        variant="underline"
        textValue="Features"
      >
        <FeaturesDropdown />
        <Navbar.Link isActive href="#">App Page 1</Navbar.Link>
        <Navbar.Link href="#">App Page 2</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Dropdown placement="bottom-right">
          <Navbar.Item textValue="user avatar">
            <Dropdown.Trigger>
              <Avatar
                bordered
                as="button"
                color="secondary"
                size="md"
                src={user.avatarUrl}
              />
            </Dropdown.Trigger>
          </Navbar.Item>
          <Dropdown.Menu
            aria-label="User menu actions"
            color="secondary"
            onAction={(actionKey) => 
              handleAction({ actionKey })
            }
          >
            <Dropdown.Item textValue="user profile" key="signin_state" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {user.email}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item textValue="user profile" key="profile">
              Profile
            </Dropdown.Item>
            <Dropdown.Item textValue="user account" key="account">
              Account
            </Dropdown.Item>
            <Dropdown.Item textValue="user subscription" key="subscription">
              Subscription
            </Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item textValue="app feature" key="system">System</Dropdown.Item>
            <Dropdown.Item textValue="app feature" key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item textValue="app feature" key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item textValue="logout action" key="logout" withDivider color="error">
                Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={index === 2}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
