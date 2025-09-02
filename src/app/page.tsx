

import Image from "next/image";
import ImageSlider from "./components/ImageSlider";
// Import images from assets/gallery
import img1 from "../assets/gallary/WhatsApp Image 2025-09-02 at 10.09.28_a5eea7cc.jpg";
import img2 from "../assets/gallary/WhatsApp Image 2025-09-02 at 10.09.28_fb28bc80.jpg";
import img3 from "../assets/gallary/WhatsApp Image 2025-09-02 at 10.09.29_05ac3d00.jpg";
import img4 from "../assets/gallary/WhatsApp Image 2025-09-02 at 10.09.29_7aeb383f.jpg";
import img5 from "../assets/gallary/WhatsApp Image 2025-09-02 at 10.09.29_ce034595.jpg";

export default function Home() {
  return (
  <div className="bg-stone-50 font-sans min-h-screen flex flex-col">

      {/* Main Content */}
      <main className="flex-1 pt-24 px-4 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center bg-[#fdfaf6]">
        <div className="w-full max-w-[1200px]">
          {/* Hero Section */}
          <section id="hero" className="flex min-h-[320px] sm:min-h-[420px] md:min-h-[520px] flex-col gap-6 sm:gap-8 bg-cover bg-center bg-no-repeat rounded-2xl items-center justify-center p-4 sm:p-8 mb-8" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWrPNqAuczv_W7aEzjS0rgxmlHwOE7e_bVfhAdwu3mmXpt_Em2HVzXF6n1IqlsR_ZBtnxvOjyvJYz0fqvFuliqBrCIenx8EXyXygXHJETlvo9Zopy1q0uFT92GlYy2Ux9iQqgPWlCjOdGO0X9GFS0Ii5PriLwHTbwWJ97M3dMtmye8_NzA-NTCFx4Qnf-Xb9bA8kntd1vqZiP_Mb4sRC0oKLFNcI4udARLPEruefZmcQKdhUdEOXtX5LZLCjYXYl9EUyPu3gETI-bK")'}}>
            <div className="flex flex-col gap-2 sm:gap-4 text-center">
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em]">Cranbourne Public Hall</h1>
              <h2 className="text-white text-base sm:text-lg md:text-xl font-normal leading-normal max-w-2xl mx-auto">
                A welcoming space for community events and gatherings, especially for our senior members.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 sm:h-14 px-6 sm:px-8 bg-[#ec8013] text-white text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-[#d47311] transition-colors mt-2 sm:mt-4">
              <span className="truncate">Book Now</span>
            </button>
          </section>

            {/* Image Slider Section */}
            <section id="gallery" className="mb-8">
              <h2 className="text-[#181411] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-4 sm:pb-6 pt-6 sm:pt-8 text-center">Gallery</h2>
              <ImageSlider  />
            </section>

          {/* Facilities Section */}
          <section id="facilities" className="mb-8">
            <h2 className="text-[#181411] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-4 sm:pb-6 pt-6 sm:pt-8 text-center">Our Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Facility 1 */}
              <div className="flex flex-col gap-4 pb-3 group">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVHuKhU2NZrDNjT5SSxk33nz6x__invGi69Hei0v0mMyQaEQy_4ncZOHD5DyEjGFCuzrGx33aNS_OyD-PNNkdsBVdBsaWkZYJH_3s2lPZ_0OeMCJ3XNN4cOMdpM5jM0J6BM6e8anyeiYNgfHr8seu5kaPl_jmhtsUsE83UzwEvySrKiJAyvLy3DV_xo73jMUDMHGXWjjCuTM7uqI_h5Q5WoSQ0HDIYVcrDGcDynmOJPzziXeQ6V3vLpxYYc5nwDOzKf_lAjmCaf5sr")'}}></div>
                <div className="text-center">
                  <p className="text-[#181411] text-lg font-medium leading-normal">Spacious Main Hall</p>
                  <p className="text-[#897561] text-base font-normal leading-normal">Perfect for large events and gatherings.</p>
                </div>
              </div>
              {/* Facility 2 */}
              <div className="flex flex-col gap-4 pb-3 group">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAHgRrpTzyhatfXCoPniAQ_pPPrBXdIhmPTDn5KqDwAxAEWwRSZn3ECBx82u_HucQA_le7iRk_7Zl2AtvZGdOd5dSuCgZneGdm5M18zB9nOQUEw45lA2bZ_xaY2mQGYHna4_gGuj-eeQj1iP9uR5LVsvDtmL-QEP-3Ut1YkKMy3Lz0RjFkNTrFIDqLfQgal45kn9vZLqvvHAFU1znoa6y0ITvUK1keGBPYPSsOGv37qqWnfeJ1CmBJry03eI_3hSaUG1TQXUP1Ce7P")'}}></div>
                <div className="text-center">
                  <p className="text-[#181411] text-lg font-medium leading-normal">Modern Kitchen</p>
                  <p className="text-[#897561] text-base font-normal leading-normal">Equipped for catering and food preparation.</p>
                </div>
              </div>
              {/* Facility 3 */}
              <div className="flex flex-col gap-4 pb-3 group">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-3pGSH4eNusYcAC5XbwE_cwixmi_at7nYbirhKhfYP2Wa-vrnMoAGXzWudVi9JIz3Sj-r1_mQ1k4uXT0CeqfijPdHuQ_QQ6qCkRoviCls6tjnF4Qus7gxHHOe-JU4pMp6bk_CqyQBNyNeOhqpRjGc3eWCKwqMRRJ_Z0SdzY-h3nyOs3HkS6Y2EPmG-M7z0GrPcS89FHPMb7ggFfH49BHIVUwjkCOBq9-Z3YuzMkF8st9G8pLhI_kPNFbc0_pkRaWEuHBV2KwV7vTB")'}}></div>
                <div className="text-center">
                  <p className="text-[#181411] text-lg font-medium leading-normal">Accessible Restrooms</p>
                  <p className="text-[#897561] text-base font-normal leading-normal">Designed for easy access for all.</p>
                </div>
              </div>
              {/* Facility 4 */}
              <div className="flex flex-col gap-4 pb-3 group">
                <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJNVC4Gw23Ng2lF9Ae0TszJsWboBRIdXuqPqZXVhMGAwOZsLHyUIGNMcsc3_AeCXcM1NnJVMZxDFK_SfeEORgrtBn_HepO5C5FkHN1TSpEsUGH9Sv0InwHI7tDI61eCuA4PR3MScLy7cyw5PRblHP1Yk_0X2AD87i1UfWfpT2ix9uYxTeXOJULWnXsjG1ItLx4_VEfcDwAeaZnAXYupEVZ-GgSMqf2BoFAgASM9Q4XsCr5rPAUaGjM_tTNrCwD-BOc1HMi28iQHOzk")'}}></div>
                <div className="text-center">
                  <p className="text-[#181411] text-lg font-medium leading-normal">Outdoor Area</p>
                  <p className="text-[#897561] text-base font-normal leading-normal">Ideal for outdoor activities and relaxation.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Availability Section */}
          <section id="availability" className="mb-8">
            <h2 className="text-[#181411] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-4 sm:pb-6 pt-6 sm:pt-8 text-center">Availability</h2>
            <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-8 p-2 sm:p-4">
              {/* July Calendar */}
              <div className="flex min-w-80 max-w-[420px] flex-1 flex-col gap-1 p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between p-2">
                  <button className="text-[#181411] hover:text-[#ec8013] transition-colors rounded-full p-2">
                    {/* Left Arrow SVG */}
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                    </svg>
                  </button>
                  <p className="text-[#181411] text-xl font-bold leading-tight">July 2024</p>
                  <div className="w-8"></div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {/* Days of week */}
                  {['S','M','T','W','T','F','S'].map((d,i)=>(<p key={i} className="text-center text-[#897561] text-sm font-bold leading-normal tracking-[0.015em] py-2">{d}</p>))}
                  {/* Dates (static for now) */}
                  {[1,2,3,4].map(d=>(<button key={d} className="h-12 w-full text-gray-400 text-base font-medium leading-normal cursor-not-allowed">{d}</button>))}
                  <button className="h-12 w-full text-white text-base font-medium leading-normal rounded-full bg-[#ec8013]">5</button>
                  {[6,7].map(d=>(<button key={d} className="h-12 w-full text-gray-400 text-base font-medium leading-normal cursor-not-allowed">{d}</button>))}
                  {[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(d=>(<button key={d} className="h-12 w-full hover:bg-stone-100 rounded-full text-[#181411] text-base font-medium leading-normal">{d}</button>))}
                </div>
              </div>
              {/* August Calendar */}
              <div className="flex min-w-80 max-w-[420px] flex-1 flex-col gap-1 p-4 bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between p-2">
                  <div className="w-8"></div>
                  <p className="text-[#181411] text-xl font-bold leading-tight">August 2024</p>
                  <button className="text-[#181411] hover:text-[#ec8013] transition-colors rounded-full p-2">
                    {/* Right Arrow SVG */}
                    <svg fill="currentColor" height="24px" viewBox="0 0 256 256" width="24px" xmlns="http://www.w3.org/2000/svg">
                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {['S','M','T','W','T','F','S'].map((d,i)=>(<p key={i} className="text-center text-[#897561] text-sm font-bold leading-normal tracking-[0.015em] py-2">{d}</p>))}
                  <button className="h-12 w-full hover:bg-stone-100 rounded-full text-[#181411] col-start-5 text-base font-medium leading-normal">1</button>
                  {[2,3,4,5,6].map(d=>(<button key={d} className="h-12 w-full hover:bg-stone-100 rounded-full text-[#181411] text-base font-medium leading-normal">{d}</button>))}
                  <button className="h-12 w-full text-white text-base font-medium leading-normal rounded-full bg-[#ec8013]">7</button>
                  {[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(d=>(<button key={d} className="h-12 w-full hover:bg-stone-100 rounded-full text-[#181411] text-base font-medium leading-normal">{d}</button>))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="mb-8">
            <h2 className="text-[#181411] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-4 sm:pb-6 pt-6 sm:pt-8 text-center">What Our Community Says</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {/* Testimonial 1 */}
              <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCkVa_QTgwZAnOmi1o7gFKyuFFeKAH29uwx59FJtIFc7sj65shKVz_2knol2T7NniqfmiFR3fzvMdP0CX3Y5BT5qkmnRNiJc9V4BL9Co_eCtFP8jLiDqv0CYRw_qOUbPGCZBKCKUrMOz5K093pQ_T64-m7JI7w0wGQx7PITCpg6IHpfaAZUh6xJkmHB0rmIC9EdrFqo_aNm90Ta7cY9bpVRawZGpYFVx70b2x-dUzgeRlb1dphPVtureiRTpb5AL6aIrYG4Vb3Iw8Gq")'}}></div>
                  <div className="flex-1">
                    <p className="text-[#181411] text-lg font-medium leading-normal">Margaret S.</p>
                    <p className="text-[#897561] text-base font-normal leading-normal">June 15, 2024</p>
                  </div>
                </div>
                <div className="flex gap-1 text-[#ec8013]">
                  {[...Array(5)].map((_,i)=>(<svg key={i} fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path></svg>))}
                </div>
                <p className="text-[#181411] text-base font-normal leading-relaxed">
                  "The hall was perfect for our senior group's meeting. Spacious, clean, and easy to access. Highly recommend!"
                </p>
              </div>
              {/* Testimonial 2 */}
              <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDsSQpIoRQwNIQFfUy3NAjodWW3Y-e2sfP4r4UgNqGFvu4muCY_l50FVO_z1iCtXEhEfpD2nIR1Bm-hYfnePHD5KKOTnTzNmwj5gZ9laVYbgX0Rj0ajkuHAIrmV9Aa5CjYkvhdsdm7OKnrI09Tk9bm4oCO8cZlggw-a01T9sNCbwSKnXxB-q13TBm1NstiY4A9R2XpKd59jsZzx9Uwxl5tioJ96XUJWmpdtKrsFWhQhGlamQFKT6FWO7ZFRnAIHdUIiGUIY9GqkZ_3")'}}></div>
                  <div className="flex-1">
                    <p className="text-[#181411] text-lg font-medium leading-normal">Robert K.</p>
                    <p className="text-[#897561] text-base font-normal leading-normal">May 22, 2024</p>
                  </div>
                </div>
                <div className="flex gap-1 text-[#ec8013]">
                  {[...Array(5)].map((_,i)=>(<svg key={i} fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path></svg>))}
                </div>
                <p className="text-[#181411] text-base font-normal leading-relaxed">
                  "We had a wonderful time at the hall. The facilities are excellent, and the staff were very helpful."
                </p>
              </div>
              {/* Testimonial 3 */}
              <div className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAi9-5WRc3koSVCqzxqq3JE0IpmuOxsM3K3Bk-0HQB7skAcH2ybJtDSfZtGZT3qlLtKO-iRUSa3uGsNaOjXZwt5iBqreqGUirleSJ6jQJs_FEP4QDMdqGUK0i7h8Ud2Y7XK8oBXL_bFL_gWmzFtSbYaf7rN7TqxsLOw_qCcCQgUjoMrMsoGCy0ijkQQvAHf5clNil5-uVealE_sYMfDBwkF-VK1c86EFlKQej-VIeW0pCxpvKjt_Tzz2Xejv3cEplrC4miX0LiE4e7S")'}}></div>
                  <div className="flex-1">
                    <p className="text-[#181411] text-lg font-medium leading-normal">Patricia L.</p>
                    <p className="text-[#897561] text-base font-normal leading-normal">April 10, 2024</p>
                  </div>
                </div>
                <div className="flex gap-1 text-[#ec8013]">
                  {[...Array(4)].map((_,i)=>(<svg key={i} fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path></svg>))}
                  <svg className="text-stone-300" fill="currentColor" height="20px" viewBox="0 0 256 256" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"></path></svg>
                </div>
                <p className="text-[#181411] text-base font-normal leading-relaxed">"A great venue for community events. The outdoor area is a lovely addition."</p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-8">
            <h2 className="text-[#181411] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] px-2 sm:px-4 pb-4 sm:pb-6 pt-6 sm:pt-8 text-center">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div className="text-lg leading-relaxed text-center md:text-left">
                <p className="font-semibold">Cranbourne Public Hall</p>
                <p>123 Main Street, Cranbourne, VIC 3977</p>
                <p>Phone: (03) 5555 1234</p>
                <p>Email: info@cranbournehall.com.au</p>
              </div>
              <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCup_43d0_w2DVQUwC81f0GB5k5osLdZKBvV5Pnu_-40FY0h_HUvsahbGJkPciRTKRMYXTLPnZrMuJUiyuYo1vrUzeRxpt87RWeJDmjUR82hrMpLiVw6iskj5eACY3uXa-eiQyCNZr_RAQo7YIfnmfW1KAmtyZbLzb0xOl97e3MkYp0mntD6kMESM4u1Er7Sw9lckQx9zELmd-BDOi6R9KakrP22fZ8dkqDETD_Y1mDt3-Ps5I7rPow_-GbA-WsvsMH-LkcMZF4pp4U")'}}></div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
