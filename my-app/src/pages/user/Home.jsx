import { Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import video from '../../images/video.mp4'
import { HashLink } from "react-router-hash-link";
import mcd from '../../images/mcd.png'
import kfc from '../../images/kfc.png'
import dom from '../../images/Dom.png'
import burger from '../../images/burger.png'

function Home() {

  //This useState will hold the currently selected food type.
  const [selectedFoodType, setSelectedFoodType] = useState('');
  const navigate = useNavigate();

  // This function is used to handle the selection of a food type. It takes a foodType parameter and updates the selectedFoodType state with the selected value.
  function handleFoodTypeSelection(foodType) {
    setSelectedFoodType(foodType);

    //Here it uses the navigate function to navigate to this route.
    navigate(`/restaurants/${foodType}`);
  }







  return (
    <>
      <section className="relative  flex flex-col items-center justify-center text-center text-white " style={{ height: "550px" }}>
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={video}
            type="video/mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </div>
        <div className="video-content space-y-2 z-10 pb-5" style={{ height: "55vh" }}>
          <h1 className="font-bold text-5xl uppercase text-amber-600">Foodie's Paradise Awaits</h1>
          <h3 className="font-bold text-2xl capitalize">Reserve your table with ease and indulge in culinary delights <br /> at your favorite restaurants</h3>
          <div class="rounded-md shadow mt-10">
            <HashLink smooth={true} to="#food">
              <button class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded mt-5">
                Pick Your Favorite Food
              </button>
            </HashLink>
          </div>

        </div>
      </section>


      <section className="bg-white dark:bg-gray-900 shadow-lg">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-2 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white capitalize">
              Effortless reservations at favorite restaurants
            </h2>
            <br />
            <p className="">
              Elevate your dining adventures with our user-friendly platform, where you can effortlessly browse, select, and book tables at top-rated restaurants.                 </p>

          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://i.pinimg.com/736x/18/f8/26/18f8262341b337e7d3f714e41cef7a09.jpg"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://c.stocksy.com/a/c4A800/z9/1945350.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>


      <div className="bg-white mt-10 shadow-lg">
        <section id="food">
          <br />
          <h2 className=" text-4xl mb-8 tracking-tight font-extrabold text-black  text-center capitalize">
            Which food do you prefer?
          </h2>
          <div className="flex flex-wrap mb-10 mx-20">
            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative rounded-lg overflow-hidden">
                {/* Asian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://media.istockphoto.com/id/545286388/photo/chinese-food-blank-background.jpg?s=612x612&w=0&k=20&c=pqOIy07YKO5PlU5VxjscwTGRrrZ8PluKMUjSOz-II60="
                  alt="vegetables" />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Asian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("asian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Arabian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://i.ndtvimg.com/i/2016-05/arabic-food_625x350_71463118204.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Arabian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("arabian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Mexican Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://blog.amigofoods.com/wp-content/uploads/2020/12/tacos-authentic-mexican-food.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Mexican Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("mexican")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Italian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://static1.squarespace.com/static/5e484ab628c78d6f7e602d73/5e484d29dd42c458f31f0b22/5f52972ad03efd52606d4ad9/1680649812918/What-to-eat-in-Italy.png?format=1500w"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Italian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("italian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* Indian Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://www.blueosa.com/wp-content/uploads/2020/01/the-best-top-10-indian-dishes.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      Indian Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("indian")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="relative bg-gray-400 rounded-lg shadow-lg overflow-hidden">
                {/* American Food card */}
                <img
                  className="w-full h-64 object-cover object-center"
                  src="https://www.americancafe.com/wp-content/uploads/2021/09/americancafe-What-Started-American-Cuisine-%E2%80%93-Discover-How-It-All-Started.jpg"
                  alt="vegetables" />
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-semibold text-white uppercase lg:text-4xl">
                      American Food
                    </h2>
                    <button
                      className="text-sm button-shop font-medium mt-4 text-white px-5 py-2.5 rounded-lg"
                      onClick={() => handleFoodTypeSelection("american")}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center">

          <HashLink smooth={true} to="ServicePageAll#">
            <Button className="border mb-10 border-solid border-amber-600 border-2 text-amber-600 hover:bg-amber-600 hover:text-[#ffffff]" variant="text">
              Show All Restaurants
            </Button>
          </HashLink>

        </div>
      </div>


      <div className="p-20">
  <div className="text-center mb-16">
    <h3 className="text-3xl sm:text-4xl uppercase leading-normal font-extrabold tracking-tight text-gray-900">
      Our partners
    </h3>
  </div>
  <div className="sm:grid grid-cols-2 md:grid-cols-4 col-gap-10 mx-auto">
    <div className="text-center">
        <img
          className="mb-3 rounded-xl mx-auto h-32 w-32"
          src={kfc}
        />

      <p className="text-gray-500 uppercase text-sm">KFC</p>
 
    </div>
    <div className="text-center">
        <img
          className="mb-3 rounded-xl mx-auto h-32 w-32"
          src={mcd}
        />

      <p className="text-gray-500 uppercase text-sm">McDonald's</p>

    </div>
    <div className="text-center">
        <img
          className="mb-3 rounded-xl mx-auto h-32 w-32"
          src={dom}
        />

      <p className="text-gray-500 uppercase text-sm">Domino's</p>
    </div>
    <div className="text-center">
        <img
          className="mb-3 rounded-xl mx-auto h-32 w-32"
          src={burger}
        />
      <p className="text-gray-500 uppercase text-sm">Burger King</p>
  
    </div>
    

  </div>
</div>




    </>


  )
}

export default Home;