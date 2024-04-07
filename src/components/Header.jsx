import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>

      {isAuthenticated ? (
        <>
          <Button variant={"unstyled"} color={"white"}>
            <Link to="/exchanges">Exchanges</Link>
          </Button>
          <Button pl={3} variant={"unstyled"} color={"white"}>
            <Link to="/coins">Coins</Link>
          </Button>
        </>
      ) : null}

      {isAuthenticated ? (
        <Button
          pl={1170}
          variant={"unstyled"}
          color={"white"}
          onClick={() => logout()}
        >
          LogOut
        </Button>
      ) : (
        <Button
          pl={1300}
          variant={"unstyled"}
          color={"white"}
          onClick={() => loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </HStack>
  );
};

export default Header;
