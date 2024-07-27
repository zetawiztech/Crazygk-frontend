import React, { useState, useEffect, Fragment } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const Signin = ({ history }) => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        // Perform any login-related actions here
        console.log('Login button clicked');
        // Navigate to the default route
        navigate('/');
    };
    // const [loginDetail, setLoginDetail] = useState({ device_id: 'abc', device_type: 'abc' })
    // const [errorMessage, setErrorMessage] = useState({})

    // const dispatch = useDispatch();
    // const loginSelector = useSelector(state=> state.login);

    // useEffect(() => {
    //     checklogin()
    // }, [loginSelector])

    // const checklogin = async () => {
    //     if (loginSelector.response && loginSelector.authToken) {
    //         if (loginSelector.response.status === 200) {
    //             await setDefaultHeader("token", loginSelector.response.token);
    //             navigate('/dashboard');
    //         }else{
    //             warnToast(loginSelector.response.message)
    //         }
    //     }
    // }
    // const validation = () => {
    //     let isError = true;
    //     let errorMessage = {}

    //     if (loginDetail.email == undefined || loginDetail.email == '') {
    //         isError = false;
    //         errorMessage['email'] = "Username is require. Please enter username"
    //     }
    //     if (loginDetail.password == undefined || loginDetail.password == '') {
    //         isError = false;
    //         errorMessage['password'] = "Password is require. Please enter password"
    //     }
    //     setErrorMessage(errorMessage);
    //     console.log('isError: ', isError);
    //     return isError;
    // }
    const loginAuth = async () => {

        // if (validation()) {

        // const data = dispatch(userLogin(loginDetail))

        //const { data } = await apiCall("post", apiEndPoints.LOGIN, loginDetail);
        // console.log('data: login ', data);
        // if (data.status === 200) {
        //     await localStorage.setItem('userAuthData', JSON.stringify(data.data));
        //     await setDefaultHeader("token", data.token);
        //     // await localStorage.setItem("userAuthToken", true);
        //     await localStorage.setItem("userAuthToken", data.token);
        //     successToast(data.message)
        //     navigate('/dashboard');
        // }else{
        //     console.log('data.message: ', data.message);
        //     warnToast(data.message)
        // }
        // }
    }

    return (
        <Fragment>
            <div className="page-wrapper">
                <div className="container-fluid p-0">
                    {/* login page start*/}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        <div className="text-center">
                                            <img src='../../assets/gktricks/gktricks.jpg' sizes='300px' />
                                        </div>
                                        <div className="card mt-4">
                                            <div className="card-body">
                                                <div className="text-center">
                                                    <h4>LOGIN</h4>
                                                    <h6>Enter your Username and Password </h6>
                                                </div>
                                                <form className="theme-form">
                                                    <div className="form-group">
                                                        <label className="col-form-label pt-0">Username</label>
                                                        <input className="form-control" type="text"
                                                            //  onChange={(e) => setLoginDetail({ ...loginDetail, email: e.target.value })} 
                                                            required="" />
                                                        {/*<small className='text-danger'>{loginDetail?.email?.length > 0 ? "" : errorMessage?.email}</small>*/}
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="col-form-label">Password</label>
                                                        <input
                                                            className="form-control"
                                                            type="password"
                                                            required=""
                                                        // onChange={(e) => setLoginDetail({ ...loginDetail, password: e.target.value })}
                                                        />
                                                        {/* <small className='text-danger'>{errorMessage?.password}</small>*/}
                                                    </div>
                                                    <div className="p-0">

                                                        <label onClick={() => navigate('/forgotpassword')}>Forgot Password</label>
                                                    </div>
                                                    <div className="form-group form-row mt-3 mb-0">
                                                        <button
                                                            // onClick={() => loginAuth()}
                                                            onClick={handleLoginClick}
                                                            className="btn btn-primary btn-block"
                                                            type="button"
                                                        >
                                                            Login
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* login page end*/}
                </div>
            </div>
        </Fragment>
    );
};

export default Signin;