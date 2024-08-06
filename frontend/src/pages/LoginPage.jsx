// import { useState, useEffect } from "react";
// import FormContainer from "../components/FormContainer";
// import { FormGroup, Form, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useLoginMutation } from "../slices/usersApiSlice";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { setCredentials } from "../slices/authSlice";
// import { useLocation, useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   console.log("UserInfo", userInfo);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [login, { isLoading }] = useLoginMutation();
//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get("redirect") || "/";

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       let resp = await login({ email, password }).unwrap();
//       console.log(resp);
//       dispatch(setCredentials(resp.user));
//       toast.success(resp.message);
//     } catch (err) {
//       toast.error(err.data.error);
//     }
//   };

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [userInfo, redirect, navigate]);

//   return (
//     <FormContainer>
//       <Form onSubmit={submitHandler}>
//         <FormGroup controlId="email" className="my-3">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></Form.Control>
//         </FormGroup>
//         <FormGroup controlId="password" className="my-3">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></Form.Control>
//         </FormGroup>
//         <Button type="submit" variant="primary" className="mt-2">
//           Sign In
//         </Button>
//       </Form>
//       <Row className="py-3">
//         <Col>
//           New Customer? <Link to="/register">Register</Link>
//         </Col>
//       </Row>
//     </FormContainer>
//   );
// };

// export default LoginPage;



import { useState, useEffect } from "react";
import FormContainer from "../components/FormContainer";
import { 
  FormGroup, 
  Form, 
  Button, 
  Row, 
  Col, 
  Card, 
  CardBody, 
  CardTitle, 
  CardSubtitle, 
  Container 
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../slices/usersApiSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  console.log("UserInfo", userInfo);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let resp = await login({ email, password }).unwrap();
      console.log(resp);
      dispatch(setCredentials(resp.user));
      toast.success(resp.message);
    } catch (err) {
      toast.error(err.data.error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, redirect, navigate]);

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "30rem" }}>
        <CardBody>
          <CardTitle className="text-center">Sign In</CardTitle>
          <CardSubtitle className="text-center text-muted">Enter your credentials to access your account</CardSubtitle>
          <Form onSubmit={submitHandler}>
            <FormGroup controlId="email" className="my-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </FormGroup>
            <FormGroup controlId="password" className="my-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </FormGroup>
            <Button type="submit" variant="primary" className="mt-2 w-100">
              Sign In
            </Button>
          </Form>
          <Row className="py-3">
            <Col className="text-center">
              New Customer? <Link to="/register">Register</Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default LoginPage;