import myImage from '../assets/Refreshers_desktop_v3@2x.png';
import img1 from'../assets/Home 5.png'
import ProductSlider from '../Pages/ProductSlider'


const Home = () => {
  return (
    <div className="min-h-screen bg-white px-6 md:px-23 lg:px-9
 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-pink-50 overflow-hidden  flex justify-center items-center h-screen mx-auto overflow-x-hidden pt-58 lg:pt-10 ">
        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:pr-8">
              {/* Dunkin' Rewards Header */}
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black">
                  <span className="text-orange-500">DUNKIN'</span> <span className="text-pink-700">REWARDS</span>
                  <span className="text-pink-700 text-2xl md:text-3xl lg:text-4xl">®</span>
                </h1>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                  $3 REFRESHERS
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                  ALL SUMMER LONG
                </h3>
              </div>

              {/* Description */}
              <div className="space-y-4 max-w-lg">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Ready for a refresh? Now through <span className="font-bold">8/19</span>,
                  <span className="font-bold"> all medium Dunkin' Refreshers are $3</span> for Dunkin' Rewards members!*
                  Try a different combination of flavors every visit to make each sip a special one.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="/join"
                  className="inline-block bg-pink-700 hover:bg-pink-600 text-white font-bold text-lg px-12 py-4 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  JOIN NOW
                </a>
              </div>

              {/* Terms and Conditions */}
              <div className="pt-4">
                <p className="text-sm text-gray-600">
                  *Click to read our full{" "}
                  <a href="/terms" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Dunkin' Rewards terms and conditions
                  </a>
                  .
                </p>
              </div>
            </div>

            {/* Right Content - Drinks Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Drinks Image */}
                <img
                  src={myImage} alt="description"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />

                {/* $3 Medium Badge */}
                <div className="absolute top-8 left-4 bg-pink-700 text-white rounded-full p-4 shadow-lg transform -rotate-12">
                  <div className="text-center">
                    <div className="text-2xl font-black">$3</div>
                    <div className="text-sm font-bold">MEDIUM</div>
                    <div className="text-xs font-bold">ICED</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-60"></div>
                <div className="absolute top-12 -right-2 w-4 h-4 bg-pink-400 rounded-full opacity-40"></div>
                <div className="absolute -bottom-2 left-8 w-6 h-6 bg-yellow-400 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-200 to-orange-200 rounded-full opacity-20 translate-y-12 -translate-x-12"></div>
      </section>

<div/>
 <section className= "my-7 bg-gray-50 flex flex-col lg:flex-row items-center justify-between gap-4" >
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[200px] lg:min-h-[250px]">
            {/* Left Section */}
            <div className="px-6 lg:px-12 py-8 lg:py-12 flex flex-col justify-center">
              <div className="space-y-4 lg:space-y-6">
                {/* $5 MEAL DEAL */}
            <div className="flex items-center space-x-3 lg:space-x-4">
            <span className="text-6xl lg:text-8xl xl:text-9xl font-black text-pink-700">$5</span>
            <div className="space-y-0">
                <div className="text-3xl lg:text-5xl xl:text-6xl font-black text-orange-500 leading-none">MEAL</div>
                <div className="text-3xl lg:text-5xl xl:text-6xl font-black text-orange-500 leading-none">DEAL</div>
            </div>
            </div>  

                {/* VIEW MENU Button */}
                <div>
                  <a
                    href="/About"
                    className="inline-block bg-pink-700 hover:bg-pink-600 text-white font-bold text-sm lg:text-base px-6 lg:px-8 py-2 lg:py-3 rounded-full transition-colors duration-200"
                  >
                    About Us 
                  </a>
                </div>

                {/* Disclaimer */}
                <div className="pt-2 lg:pt-4">
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed max-w-md">
                    Excludes espresso and cold brew beverages. Modifications may be an additional charge. Participation
                    may vary. Limited time offer. Cannot be combined with other offers. Exclusions and terms apply.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-gradient-to-l px-6 lg:px-12 py-8 lg:py-12 flex items-center justify-between">
              {/* Text Content */}
              
              {/* Food & Drink Image */}
                <div className="flex-shrink-0 mx-auto px-4 gap-1">
                <img
                src={img1}
                alt="Dunkin' iced coffee and wake-up wrap sandwiches"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto object-cover"
                />
                </div>



            </div>
          </div>
        </div>
      </section>

      <section>
        <ProductSlider/>
      </section>

    </div>

    

    
  )
}

export default Home
