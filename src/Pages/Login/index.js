import React, { useState, useContext } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

/** Import utils */
import makeToken from "../../utils/useRandomString";

import { UserContext } from "../../Context/UserContext";

/** Data */
import { users } from "../../data/users";

import { HeaderComponent } from "../../components/Header";

/** Import CSS */
import "../../Scss/_login.scss";

export default function Login(props) {
  const { setUser } = useContext(UserContext);

  const [userAccount, setUserAccount] = useState("");
  const [userPass, setUserPass] = useState("");

  const generateToken = async () => {
    if (
      !userAccount ||
      !userAccount?.length ||
      !userPass ||
      !userPass?.length
    ) {
      alert("Campos incompletos");
    }

    const result = users.filter(
      (element) =>
        element.username === userAccount && element.password === userPass
    );

    if (result.length) {
      const tokenUserToSave = await makeToken(8);
      const dataUser = {
        id: result[0].id,
        role: result[0].role,
        username: result[0].username,
        tokenUserToSave,
      };
      setUser(dataUser);
    }
  };

  return (
    <Container className="bg-light border" fluid>
      <Form inline>
        <HeaderComponent title="Kikoya Login" />
        <FormGroup className="mb-2 me-sm-2 mb-sm-0 item-form">
          <Label className="me-sm-2" for="exampleEmail">
            Username
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            value={userAccount}
            onChange={(e) => setUserAccount(e.target.value)}
            placeholder="account"
            type="text"
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0 item-form">
          <Label className="me-sm-2" for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            value={userPass}
            onChange={(e) => setUserPass(e.target.value)}
            placeholder="password"
            type="password"
          />
        </FormGroup>
        <Button className="btn-login" onClick={() => generateToken()}>
          Login
        </Button>
      </Form>
    </Container>
  );
}
