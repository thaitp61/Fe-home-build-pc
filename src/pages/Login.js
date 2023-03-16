import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { UserAuth } from '../api/AuthContext';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
const Login = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const { user, googleSignIn, accessToken } = UserAuth()
  console.log(user)
  const navigate = useNavigate()
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
      if (accessToken) {
        const idToken = await user.getIdToken();
        const response = await axios.post(
          'https://server-buildingpc.herokuapp.com/user/token/google',
         {
             accessToken: accessToken },
             {  headers: {
              Authorization: `Bearer ${idToken}`
         },
         }
        )
        if (response.status == 200) {
          console.log(
            "🚀 ~ file: Login.js:53 ~ handleGoogleSignIn ~ response:",
            response.data.User.roleName
          );
          localStorage.setItem('access_token', JSON.stringify(response.data))
          response.data.User.roleName !== "ROLE_USER"
            ? navigate("/dashbroad")
            : navigate("/");
          // localStorage.setItem('refresh_token', response.data.body.refresh_token)
          // navigate('/dashbroad')
        } else {
          localStorage.removeItem('access_token')
          // localStorage.removeItem('refresh_token')
        }
      } else {
        console.log('Access token not found')
      }
    } catch (error) {
      console.log('error', error)
    }

  }

  useEffect(() => {
    const accessTokenString = localStorage.getItem("access_token");
    let accessToken = null;
    if (typeof accessTokenString === "string" && accessTokenString !== "") {
      accessToken = JSON.parse(accessTokenString);
    }
    let userData = null;
    const userDataString = JSON.parse(localStorage.getItem("access_token"));
    if(typeof userDataString ==="string" && userDataString !== ""){
      userData = JSON.parse(userDataString);
    }
    if (accessToken && userData &&  userData.roleName !=="") {
      navigate("/home");
    } else {
      navigate("");
    }
  }, [navigate]);
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  return (
    // <Form
    //   name="normal_login"
    //   className="login-form"
    //   initialValues={{
    //     remember: true,
    //   }}
    //   onFinish={onFinish}
    // >
    //   <Form.Item
    //     name="username"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your Username!',
    //       },
    //     ]}
    //   >
    //     <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    //   </Form.Item>
    //   <Form.Item
    //     name="password"
    //     rules={[
    //       {
    //         required: true,
    //         message: 'Please input your Password!',
    //       },
    //     ]}
    //   >
    //     <Input
    //       prefix={<LockOutlined className="site-form-item-icon" />}
    //       type="password"
    //       placeholder="Password"
    //     />
    //   </Form.Item>
    //   <Form.Item>
    //     <Form.Item name="remember" valuePropName="checked" noStyle>
    //       <Checkbox>Remember me</Checkbox>
    //     </Form.Item>

    //     <a className="login-form-forgot" href="">
    //       Forgot password hello
    //     </a>
    //   </Form.Item>
    //   <Button
    //             type="submit"
    //             fullWidth
    //             variant="contained"
    //             sx={{ mt: 3, mb: 2 }}
    //             onClick={handleGoogleSignIn}
    //           >
    //             Login with google
    //           </Button>
    //   <Form.Item>
    //     <Button type="primary" htmlType="submit" className="login-form-button">
    //       Log in
    //     </Button>
    //     Or <a href="">register now!</a>
    //   </Form.Item>
    // </Form>
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
     <div className='login-body'>
    <div className="container" id="container">
        <div class="form-container log-in-container">
            <form action="#">
            <div className="max-w-[240px] m-auto py-4">
                      <GoogleButton onClick={handleGoogleSignIn} />
                    </div>
            </form >
        </div>
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-right">
                    <img src='https://www.tncstore.vn/image/catalog/BAI%20VIET/PC%20Gaming%20m%E1%BB%9Bi/partner01%20(1).jpg' />
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  );
};
export default Login ;