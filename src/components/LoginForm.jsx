import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Alert, Button, Form, FormGroup, Input, Label } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FromArea = styled(Form)`
  width: 30%;
  min-width: 450px;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const SubText = styled.p`
  margin: 0;

  &:nth-child(4) {
    margin-bottom: 1.5rem;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 1.5rem;
`;

const CheckBox = styled(Input)`
  width: 2rem;
  height: 2rem;
  float: initial !important;
  margin-right: 1rem;
  &:checked {
    background-color: red;
  }
`;

const ErrorMessage = styled(Alert)`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const initialForm = {
  email: "",
  password: "",
  sendEmail: false,
};

const initialError = {
  email: "",
  password: "",
  sendEmail: "",
};

function LoginForm(props) {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState(initialError);
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();
  const { setLoggedUser } = props;

  useEffect(() => {
    if (
      validateEmail(formData.email) &&
      validatePassword(formData.password) &&
      formData.sendEmail
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  function changeHandler(event) {
    const { value, type, name, checked } = event.target;
    const newData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };
    setFormData(newData);

    if (name === "email") {
      if (validateEmail(value)) {
        setError({ ...error, [name]: "" });
      } else {
        setError({ ...error, [name]: "Geçerli bir email giriniz" });
      }
    }

    if (name === "password") {
      if (validatePassword(value)) {
        setError({ ...error, [name]: "" });
      } else {
        setError({
          ...error,
          [name]:
            "En az 8 karakter, bir büyük ve bir küçük harf içeren bir şifre girmelisiniz.",
        });
      }
    }

    if (name === "sendEmail") {
      if (checked) {
        setError({ ...error, [name]: "" });
      } else {
        setError({
          ...error,
          [name]:
            "Ücretsiz modelde devam edebilmek için reklam emaillerini kabul etmelisiniz.",
        });
      }
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        //console.log(response.data);
        setLoggedUser(response.data);
        history.push("/welcome");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  function validatePassword(password) {
    return (
      password.trim().length >= 8 &&
      password !== password.toLowerCase() &&
      password !== password.toUpperCase()
    );
  }

  return (
    <Container>
      <FromArea onSubmit={handleSubmit}>
        <p>STEP 1 OF 3</p>
        <Title>Create a Passsword to Create Your Membership</Title>
        <SubText>Just few more steps and you&apos;re done!</SubText>
        <SubText>We hate paperwork, too.</SubText>
        <FormGroup floating>
          <Input
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={changeHandler}
            value={formData.email}
            data-cy="input-email"
          />
          <Label for="email">Email</Label>
        </FormGroup>{" "}
        {error.email && (
          <ErrorMessage color="danger" data-cy="error">
            {error.email}
          </ErrorMessage>
        )}
        <FormGroup floating>
          <Input
            id="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={changeHandler}
            value={formData.password}
            data-cy="input-password"
          />
          <Label for="password">Add a Password</Label>
        </FormGroup>{" "}
        {error.password && (
          <ErrorMessage color="danger" data-cy="error">
            {error.password}
          </ErrorMessage>
        )}
        <FormGroup check>
          <CheckBox
            id="sendEmail"
            name="sendEmail"
            type="checkbox"
            onChange={changeHandler}
            checked={formData.sendEmail}
            data-cy="input-sendEmail"
          />
          <Label check for="sendEmail" style={{ marginTop: "0.5rem" }}>
            Please do not email me Netflix offers
          </Label>
        </FormGroup>{" "}
        {error.sendEmail && (
          <ErrorMessage color="danger" data-cy="error">
            {error.sendEmail}
          </ErrorMessage>
        )}
        <SubmitButton
          block
          color="danger"
          size="lg"
          disabled={!isValid}
          data-cy="button-submit"
        >
          Submit
        </SubmitButton>
      </FromArea>
    </Container>
  );
}

export default LoginForm;
