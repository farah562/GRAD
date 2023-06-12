import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import axios from  'axios';
import Swal from 'sweetalert2'

const RestaurantHome = () => {


  const [restaurant, setRestaurant] = useState([]);
  const [ res, setRes] = useState([])

  useEffect(() => {

      axios.get('http://localhost:5000/generatedRes')
      .then((response) => {
        setRestaurant(response.data);
                let x =response.data[0].restaurant_id;

             
              axios.get(`http://localhost:5000/restaurant/${x}`)
              .then((response) => {
                setRes(response.data);
                console.log(response.data)
              })
              .catch((error) => console.log(error.message));
          

      })
      .catch((error) => console.log(error.message));






  }, []);
 // //////////////////////////////////////////
 const [img, setImg] = useState("");
 const onChange = e => {
   const files = e.target.files;
   const file = files[0];
   getBase64(file);
   console.log(img);
 };
 const onLoad = fileString => {

   setImg(fileString);
 };
 const getBase64 = file => {
   let reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = () => {
     onLoad(reader.result);
   };
 };

// //////////////////////////////////////////////

  const [table_number, setTable_number] = useState("");
  const [available_time_start, setAvailable_time_start] = useState("");
  const [guest_number, setGuest_number] = useState("");
  const [available_time_end, setAvailable_time_end] = useState("");

  const [error, setError] = useState("");
  const restaurant_id  = restaurant[0]?.restaurant_id;

  const handleSubmit = (event) => {
    event.preventDefault();
    let done = true;
    const table = {table_number, available_time_start, guest_number, available_time_end, img, table_status: "available", restaurant_id};

    if(table_number === "")
    {
      setError("**Please add the number of table.");
      done = false;
    }
   else if(available_time_start === "")
    {
      setError("**Please add Opening time.");
      done = false;
    }
   else if(available_time_end === "")
    {
      setError("**Please add Closing time.");
      done = false;
    }
   else if(guest_number === "")
    {
      setError("**Please add Guests number.");
      done = false;
    }
    else if (img === "")
    {
      setError("**Please add Table Image.");
      done = false;
    }
          
      if(done){    
        
        axios.post('http://localhost:5000/table', table)
              .then(function (response) {
                if(response.data === "Table number is Already taken!")
                setError(response.data);

                else {Swal.fire({
                  position: "center",
                  icon: "success",
                  title:
                    "Your Table has been Added successfully",
                });}
                // window.location.reload(false);
              
              })
              .catch(function (error) {
                console.log(error);
              });
          }
  };
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute block w-full"
        style={{ margin: "auto", zIndex: -10 }}
        height={680}
        preserveAspectRatio="none"
        viewBox="0 0 1920 880"
      >
        <g transform="translate(960,440) scale(1,1) translate(-960,-440)">
          <linearGradient
            id="lg-0.047955344060927496"
            x1={0}
            x2={1}
            y1={0}
            y2={0}
          >
            <stop stopColor="#ffac10" offset={0} />
            <stop stopColor="#ea4d24" offset={1} />
          </linearGradient>
          <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
            <animate
              attributeName="d"
              dur="33.333333333333336s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="0s"
              values="M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z;M0 0L 0 877.6839081951588Q 320 668.0720922803877  640 649.0018928349388T 1280 328.7087077664202T 1920 162.95038242563396L 1920 0 Z;M0 0L 0 724.9886210051687Q 320 661.4364572061575  640 623.2173947479624T 1280 359.20353038907734T 1920 135.51673041732283L 1920 0 Z;M0 0L 0 804.2328934685746Q 320 597.3613372284876  640 571.0708916590191T 1280 512.0661063245175T 1920 301.8788007488083L 1920 0 Z"
            />
          </path>
          <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
            <animate
              attributeName="d"
              dur="33.333333333333336s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-6.666666666666667s"
              values="M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z;M0 0L 0 842.1984196370487Q 320 570.6690721707517  640 540.6844954979398T 1280 439.92879442880593T 1920 200.29713960445451L 1920 0 Z;M0 0L 0 796.6802345094818Q 320 721.9216894353016  640 696.8815669355181T 1280 373.6367381440213T 1920 196.63169821789495L 1920 0 Z;M0 0L 0 765.7607191473613Q 320 641.7853945676919  640 624.2534689988059T 1280 365.27264408032966T 1920 190.38947978522663L 1920 0 Z"
            />
          </path>
          <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
            <animate
              attributeName="d"
              dur="33.333333333333336s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-13.333333333333334s"
              values="M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z;M0 0L 0 821.0401780336218Q 320 670.8690783540507  640 637.0744123031742T 1280 456.40745286432224T 1920 278.1294357804296L 1920 0 Z;M0 0L 0 744.0534225112256Q 320 637.6425395409125  640 593.2079605185819T 1280 457.03995196824286T 1920 254.87693899994804L 1920 0 Z;M0 0L 0 801.7562714943509Q 320 634.0247183381232  640 605.7090791951217T 1280 503.9393370140325T 1920 224.7551247480177L 1920 0 Z"
            />
          </path>
          <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
            <animate
              attributeName="d"
              dur="33.333333333333336s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-20s"
              values="M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z;M0 0L 0 802.0504889976935Q 320 561.3963273210122  640 537.6024084387631T 1280 430.41283267566695T 1920 256.1972069733954L 1920 0 Z;M0 0L 0 789.4448177495887Q 320 561.9675446430498  640 531.6192318019404T 1280 414.76018143244175T 1920 265.9163329632971L 1920 0 Z;M0 0L 0 817.8603658675457Q 320 592.9404308081629  640 559.1126621853513T 1280 428.9912604821798T 1920 209.017381620229L 1920 0 Z"
            />
          </path>
          <path d="" fill="url(#lg-0.047955344060927496)" opacity="0.4">
            <animate
              attributeName="d"
              dur="33.333333333333336s"
              repeatCount="indefinite"
              keyTimes="0;0.333;0.667;1"
              calcmod="spline"
              keySplines="0.2 0 0.2 1;0.2 0 0.2 1;0.2 0 0.2 1"
              begin="-26.666666666666668s"
              values="M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z;M0 0L 0 871.4928294956283Q 320 618.9784567388518  640 593.1183717103518T 1280 376.5051942642811T 1920 141.32293927545027L 1920 0 Z;M0 0L 0 782.0118384610068Q 320 727.3267836497654  640 694.0476176759635T 1280 518.1545471640493T 1920 276.0053882957168L 1920 0 Z;M0 0L 0 844.0541574423102Q 320 623.0697081316591  640 592.8483890737847T 1280 469.85448734523794T 1920 190.81850676853674L 1920 0 Z"
            />
          </path>
        </g>
      </svg>
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="text-center text-gray-950">
          <div
            className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12"
            style={{
              marginTop: 180,
              backgroundColor: "hsla(0, 0%, 100%, 0.9)",
              backdropFilter: "saturate(200%) blur(25px)",
            }}
          >
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
              Welcome, The Best Choise <br />
              <span className="text-amber-600">For Your Business</span>
            </h1>
            <Link
              smooth="true"
              to={`/profile/${restaurant_id}`}
              className="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-gradient-to-r from-orange-700 to-orange-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gradient-to-r from-orange-500 to-orange-700 hover:shadow-lg focus:bg-amber-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-500 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              PROFILE
            </Link>
          </div>
        </div>
      </div>

 { (res[0]?.restaurant_name != "") && <>
  <section className="mt-20 relative overflow-hidden via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
        <div className="relative z-10">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,{#ea4d24},transparent)]">
            <svg
              className="h-[60rem] w-[100rem] flex-none stroke-amber-600 opacity-20"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-amber-500">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Increase Your Customers:
              <span className="text-amber-600"> Add Tables</span>
            </h1>
            <h2 className="mt-6 text-lg leading-8 text-black">
              Add your services and make people come to you.
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <HashLink
                smooth="true"
                to="#service"
                className="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Add Service
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              </HashLink>
            </div>
          </div>
          
          <div className="relative mx-auto mt-10 max-w-lg">
            <img
              className="w-full rounded-2xl border border-amber-800 shadow"
              src="https://www.mashed.com/img/gallery/reddit-cant-believe-this-ridiculous-restaurant-reservation-story/intro-1632925093.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <span id="service"></span>
      <div className="min-h-screen bg-gray-950 py-6 flex flex-col justify-center sm:py-12 mt-20">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-800 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-amber-900 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl uppercase font-bold">ADD service!</h1>
              <p className="text-black font-bold">Fill up the form</p>
            </div>
            <form onSubmit={handleSubmit}>
              <label className="text-black font-bold mb-2" htmlFor="table_num">
                Table Number
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Table Number"
                name="table_num"
                value={table_number}
                onChange={(e) => {setTable_number(e.target.value)
                setError("")}}
              />

              <label className="text-black font-bold mb-2" htmlFor="time_start">
                Open
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="time"
                placeholder=""
                name="time_start"
                value={available_time_start}
                onChange={(e) => {setAvailable_time_start(e.target.value)
                  setError("")}}
              />
              <label className="text-black font-bold mb-2" htmlFor="time_end">
                Close
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="time"
                placeholder=""
                name="time_end"
                value={available_time_end}
                onChange={(e) => {setAvailable_time_end(e.target.value)
                  setError("")}}
              />
              <label className="text-black font-bold mb-2" htmlFor="guest_num">
                Guests Number
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Guest Number"
                name="guest_num"
                value={guest_number}
                onChange={(e) => {setGuest_number(e.target.value)
                  setError("")}}
              />
              <label className="text-black font-bold mb-2" htmlFor="guest_num">
                Table Image
              </label>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                placeholder="Table Image"
                name="guest_num"
                onChange={(e) => {onChange(e)
                  setError("")}}
                  accept="image/*"

              />
              
              
                {error && <p className='text-amber-100'>{error}</p>}
              <div className="flex justify-between">
                <input
                  className="shadow bg-black hover:bg-black-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  defaultValue="Send ➤"
                />
                <input
                  className="shadow bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="reset"
                  onClick={() => {
                    setTable_number("");
                    setAvailable_time_end("");
                    setAvailable_time_start("");
                    setGuest_number("");
                    setImg("");
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
 
 
 </>
 } 
 
 </>
  );
  
};

export default RestaurantHome;
