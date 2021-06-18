import React, { useState } from "react";
import { Button } from "@material-ui/core";
import useStyles from "../Style";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../Icon";
import { useHistory } from "react-router-dom";
import { signin } from "../../../redux/actions/auth";
import Input from "../Input";
import "./index.css";
import { Offline } from "react-detect-offline";
import InternetConn from "../../InternetConn/InternetConn";
const Auth = () => {
  const classNamees = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  let error = useSelector((state) => state.auth.error);

  const [showPassword, setshowPassword] = useState(false);
  const isloading = useSelector((state) => state.auth.isloading);
  const [formdata, setform] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signin(formdata, history));
    } catch (err) {}
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setform({ ...formdata, [name]: value });
  };
  const handleShowPassword = () =>
    setshowPassword((prevShowpasword) => !prevShowpasword);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;

    const token = res?.tokenId;
    try {
      dispatch(signin({ id: result.googleId, token }, history));

      // history.push("/");
    } catch (err) {
      alert("error");
    }
  };
  const googleFailure = () => {
    console.log("google failed to singin");
  };
  if (isloading) {
    return (
      <>
        <InternetConn text="please wait logging you in"></InternetConn>
      </>
    );
  }
  return (
    <>
      <Offline>You're offline right now. Check your connection.</Offline>

      <span id="root">
        <section className="section-all">
          <main className="main" role="main">
            <div className="wrapper">
              <article className="article">
                <div className="content">
                  <div className="login-box">
                    <div className="header">
                      <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                        alt="Instagram"
                      ></img>
                      {error !== null ? (
                        <h1 style={{ color: "red", fontWeight: "500" }}>
                          {" "}
                          {error}
                        </h1>
                      ) : (
                        " "
                      )}
                    </div>
                    <div className="form-wrap">
                      <form onSubmit={handleSubmit} className="form">
                        <div className="input-box">
                          <input
                            name="email"
                            type="text"
                            id="name"
                            onChange={handleChange}
                            placeholder="Phone number, username, or email"
                            aria-required="true"
                            maxLength="30"
                            autoCapitalize="off"
                            rect="off"
                            required
                          ></input>
                        </div>

                        <div className="input-box">
                          <Input
                            name="password"
                            label="Password"
                            handleChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            handleShowPassword={handleShowPassword}
                          ></Input>
                        </div>

                        <span className="button-box">
                          <button className="btn" type="submit" name="submit">
                            Log in
                          </button>
                        </span>
                        <GoogleLogin
                          clientId="686063206026-pb2taeqd40h2is1obbt6hgsmblorgua6.apps.googleusercontent.com"
                          render={(renderprops) => (
                            <Button
                              style={{
                                width: "200px",
                                margin: "auto",
                                height: "30px",
                              }}
                              className={classNamees.googleButton}
                              color="primary"
                              onClick={renderprops.onClick}
                              disabled={renderprops.disabled}
                              startIcon={<Icon />}
                              variant="contained"
                            >
                              google Login
                            </Button>
                          )}
                          onSuccess={googleSuccess}
                          onFailure={googleFailure}
                          cookiePolicy="single_host_origin"
                        ></GoogleLogin>

                        <a className="forgot" href="/signup">
                          Forgot password?
                        </a>
                      </form>
                    </div>
                  </div>

                  <div className="login-box">
                    <p className="text">
                      Don't have an account?<Link to="/signup">Sign up</Link>
                    </p>
                  </div>

                  <div className="app">
                    <p>Get the app.</p>
                    <div className="app-img">
                      <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8">
                        <img
                          alt="ios"
                          src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/4b70f6fae447.png"
                        ></img>
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26utm_medium%3Dbadge">
                        <img
                          alt="android"
                          src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/f06b908907d5.png"
                        ></img>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </main>

          <footer className="footer" role="contentinfo">
            <div className="footer-container">
              <nav className="footer-nav" role="navigation">
                <ul>
                  <li>
                    <a href="https://about.instagram.com/en_US/blog">Blog</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/developer/">API</a>
                  </li>
                  <li>
                    <a href="https://about.instagram.com/about-us/careers">
                      JOBS
                    </a>
                  </li>
                  <li>
                    <a href="https://help.instagram.com/519522125107875">
                      PRIVACY
                    </a>
                  </li>
                  <li>
                    <a href="https://help.instagram.com/581066165581870">
                      TERMS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/explore/locations/">
                      LOCATIONS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/directory/profiles/">
                      TOP ACCOUNTS
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/directory/hashtags/">
                      HASHTAGS
                    </a>
                  </li>
                  <li>
                    <span className="language">
                      Language
                      <select name="language" className="select">
                        <option value="#">English</option>
                        <option value="http://ru-instafollow.bitballoon.com">
                          Russian
                        </option>
                      </select>
                    </span>
                  </li>
                </ul>
              </nav>

              <span className="footer-logo">&copy; 2018 Instagram</span>
            </div>
          </footer>
        </section>
      </span>
    </>
  );
};

export default Auth;
