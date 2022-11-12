import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../images/logo.svg";
import { BsFillPersonFill } from "react-icons/bs";
import { IoLockClosed } from "react-icons/io5";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Login() {
  const navigates = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorType, setErrorType] = useState("");
  const [show, setShow] = useState(false);

  console.log(error, errorType, show);

  const authContext = useAuth();

  const { Login, loading } = authContext;

  async function onFormSubmit(e) {
    e.preventDefault();
    console.log(email, password);

    try {
      await Login(email, password);

      navigates("/home");
      setShow(true);
      setError("Loading");
      setErrorType("success");
    } catch (error) {
      // console.log(error.message);
      setError("Failed to Login!");
      setErrorType("warning");
      setShow(true);
    }
  }

  //   PARTICLES
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      {loading && <p>Loading ...</p>}
      {/* <div className="flex flex-col justify-center items-center h-screen">
        <img src={logo} width="185" alt="logo" />

        <form className="flex flex-col space-y-2 mt-4">
          <input
            type="email"
            className="rounded-[4px] border-[#6b6a6a] border hover:border-white px-3 py-2 bg-transparent"
            placeholder="username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="rounded-[4px] border-[#6b6a6a] border hover:border-white px-3 py-2 bg-transparent"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center items-center">
            <button
              onClick={onFormSubmit}
              className="dark:bg-[#212121] bg-gray-300 text-white inline-flex px-4 py-1 rounded-[4px] uppercase"
            >
              Enter
            </button>
          </div>
        </form>
      </div> */}

<Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1400,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="flex flex-col justify-center items-center h-screen max-w-sm m-auto relative z-10">
        <img src={logo} width="185" alt="logo" />

        <div className="text-center mt-6 mb-10">
          <h1 className="text-3xl text-white font-bold mb-1">Alpha Project</h1>
          <p className="text-base text-gray-400">Login to continue</p>
        </div>

        <form className="flex flex-col w-full">

          <div className="relative mb-6">
            <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
              <BsFillPersonFill size={18} className="fill-white" />
            </div>
            <input
              type="text"
              className="block bg-black px-4 py-3 pl-12 w-full text-sm text-white border-2 border-white placeholder:text-gray-400"
              placeholder="Enter Username"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none">
              <IoLockClosed size={16} className="fill-white" />
            </div>
            <input
              type="password"
              className="block bg-black px-4 py-3 pl-12 w-full text-sm text-white border-2 border-white placeholder:text-gray-400"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={onFormSubmit} className="shadow-lg ease-in-out duration-300 mt-10 bg-white border-2 border-white text-black rounded-3xl p-2.5 uppercase font-medium hover:bg-black hover:text-white">
            Login
          </button>
        </form>
      </div>

      {/* BACKGROUND TRANSPARENCY */}
      <div className="absolute inset-0 w-full h-full bg-[#00000010]"></div>
    </>
  );
}
