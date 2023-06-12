import { Link, useParams } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import axios from 'axios';
import { UserContext } from '../../UserContext';
import { HashLink } from 'react-router-hash-link'

function Details1(currentTable) {
  const [person, setPerson] = useState([]);

  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [restauranttable, setrestauranttable] = useState([]);
  const { restaurant_id } = useParams();

  console.log(restaurant_id)
  useEffect(() => {
    axios.get('http://localhost:5000/recordpId')
      .then((response) => {
        setPerson(response.data);
      })
      .catch((error) => console.log(error.message))




    axios.get(`http://localhost:5000/recordtable/${restaurant_id}`)
      .then((response) => {
        setrestauranttable(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message))





    axios.get('http://localhost:5000/recordrId/' + restaurant_id)
      .then((response) => {
        setRestaurantInfo(response.data[0]);
      })
      .catch((error) => console.log(error.message))

  }, []);

  // console.log(restaurantInfo)
  let cards = [

    { Name: "  Qaysar Pizza ", path: "https://d2nuhorlnps36p.cloudfront.net/hotels/93783/93783_039_Restaurant.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
    { Name: "  Pizza Nina ", path: "https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },
    { Name: "  The Judge", path: "https://eventective-media.azureedge.net/2524260_lg.jpg", describtion: " Enjoy an amazing dining experience at our restaurant. Book your table now and enjoy the most delicious dishes.", price: "12.1044$ " },


  ]

  const [email, setEmail] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  const { SignStatus, updateSignStatus } = useContext(UserContext)


  const handleSubmit = (e) => {

    e.preventDefault();

    axios.post('http://localhost:5000/orders', {
      email: email,
      tableNumber: tableNumber,
      time: time,
      date: date,
      userid: person[0].userid,
      restaurant_id: restaurant_id


    })
      .then(function (response) {
        console.log(response)
        window.location.href = "http://localhost:3000/PaymentPage"

      })
      .catch(function (error) {
      });

  }


  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            'url("https://restaurantengine.com/wp-content/uploads/2015/05/startup-restaurants-typically-overspend.jpg")',
          height: "400px",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Details</h1>

            <nav className="text-white mb-8">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-amber-500">
                    Home
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li className="flex items-center">
                  <Link to="/" className="text-amber-500">
                    Categories
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li>Details</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <>
        <div className="relative">
          <img
            src="https://one-sourceconstruction.com/site/wp-content/uploads/c9.jpg"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />

        </div>



        <section class="px-3 py-5 bg-white lg:py-10">
          <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
            <div class="ms-10">
              <h1 class="text-4xl lg:text-6xl text-black font-bold">{restaurantInfo.restaurant_name}</h1>
              <div class="w-20 h-2 bg-amber-500 my-4"></div>
              <p class="text-2xl text-black">{restaurantInfo.address}</p>
              <p class="text-xl text-black mb-10">{restaurantInfo.des}</p>
            </div>
            <div class="order-1 lg:order-2">
              <img class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] rounded-lg" src={restaurantInfo.img} alt="" />
            </div>
          </div>
        </section>





        {restauranttable?.length !== 0 ? <>
          <center >
            <br /><h5 className="uppercase text-4xl font-bold text-black ">
              Available TAbles </h5></center>


          <div className='flex flex-wrap gap-10 justify-center '>

            {restauranttable?.map((e) => {

              return (



                <div className="max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src={e?.img} alt="an image" />
                  </a>
                  <center>
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                        TABLE #{e?.table_number}
                      </h5>
                      <button className="bg-amber-600 border-none text-sm text-white rounded-lg px-2 py-2 text-black mr-4">
                        <HashLink smooth={true} to="#book" onClick={() => {
                          setTableNumber(e?.table_number);
                          setEmail(person[0]?.email);
                        }}>BOOK</HashLink>
                      </button>
                    </div>
                  </center>
                </div>




              )
            })}
          </div>
        </> : <h1 className='bg-white uppercase  text-center text-5xl font-bold tracking-tight text-white mt-5 shadow pt-5' style={{ marginTop: "80px" }} >NO available tables</h1>}

        <> <span id='book'></span>
          <>
            <div className="container mx-auto p-10 lg:px-20 bg-white" style={{ marginBottom: "50px" }}>
              <div className="container mx-auto my-4 px-4 lg:px-20">

                <form onSubmit={handleSubmit} >
                  <div className="w-full p-8 my-8 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
                    <div className="flex">
                      <div>
                        <Typography
                          variant="h1"
                          color="amber"
                          className="text-3xl md:text-4xl lg:text-5xl"
                        >
                          Book A Table
                        </Typography>

                      </div>
                    </div>




                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                      <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="email*"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); }}
                      />
                      <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="number"
                        placeholder="tableNumber*"
                        value={tableNumber}
                        onChange={(e) => { setTableNumber(e.target.value); }}
                      />
                      <input htmlFor="time_start"
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="time"
                        placeholder=""
                        name="time_start"
                        value={time}
                        onChange={(e) => { setTime(e.target.value); }}
                      />
                      <input
                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        id="date"
                        type="date"
                        placeholder="First Name*"
                        value={date}
                        onChange={(e) => { setDate(e.target.value); }}
                      />
                    </div>
                    <br />

                    {SignStatus == "signUp" ?
                      <Link to="/SignUp">
                        <button type="submit" className="border-none bg-amber-500 rounded-lg  px-4 py-3 text-white mr-4">

                          Sign Up to book!

                        </button>
                      </Link>
                      :
                      <button type="submit" className="border-none  bg-amber-500 rounded-lg  px-4 py-3 text-black mr-4">

                        Book Now

                      </button>

                    }




                  </div>
                </form>
                <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-amber-700 rounded-2xl">
                  <div className="flex flex-col text-black">
                    <h1 className="font-bold uppercase text-4xl my-4">
                      Booking Details
                    </h1>
                    <p className="text-white">
                      Restaurant reservation services provide many advantages and benefits such as ease and convenience without having to
                      go to the restaurant in person or wait in line. You can book a table from anywhere and at any time convenient for you
                      via phone or online.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </>
          <>

          </>
        </>
      </>
    </>

  )
}

export default Details1
