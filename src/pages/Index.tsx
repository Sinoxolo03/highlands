import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import ContactFooter from "@/components/ContactFooter";
import { useState } from "react";

// highlands images
import hi1 from "@/assets/highlands/hi1.jpeg";
import hi2 from "@/assets/highlands/hi2.jpeg";
import hi3 from "@/assets/highlands/hi3.jpeg";
import hi4 from "@/assets/highlands/hi4.jpeg";
import hi5 from "@/assets/highlands/hi5.jpeg";
import hi6 from "@/assets/highlands/hi6.jpeg";
import hi7 from "@/assets/highlands/hi7.jpeg";
import hi8 from "@/assets/highlands/hi8.jpg";
import hi9 from "@/assets/highlands/hi9.jpeg";
import hi10 from "@/assets/highlands/hi10.jpeg";
import highlandsvideo from "@/assets/highlands/highlandsvideo.mp4"; 

// ralwin images
import ra1 from "@/assets/ralwin/ra1.jpg";
import ra2 from "@/assets/ralwin/ra2.jpeg";
import ra3 from "@/assets/ralwin/ra3.jpeg";
import ra4 from "@/assets/ralwin/ra4.jpeg";
import ra5 from "@/assets/ralwin/ra5.jpeg";
import ra6 from "@/assets/ralwin/ra6.jpeg";
import ra7 from "@/assets/ralwin/ra7.jpeg";
import ra8 from "@/assets/ralwin/ra8.jpeg";
import ra9 from "@/assets/ralwin/ra9.jpeg";
import ra10 from "@/assets/ralwin/ra10.jpg";
import ra11 from "@/assets/ralwin/ra11.jpeg";
import ralwinvideo from "@/assets/ralwin/ralwinvideo.mp4";

// govan images
import go1 from "@/assets/govan/go1.jpeg";
import go2 from "@/assets/govan/go2.jpeg";
import go3 from "@/assets/govan/go3.jpeg";
import go4 from "@/assets/govan/go4.jpeg";
import go5 from "@/assets/govan/go5.jpeg";
import go6 from "@/assets/govan/go6.mp4";
import go7 from "@/assets/govan/go7.mp4";
import go8 from "@/assets/govan/go8.mp4";
import go9 from "@/assets/govan/go9.mp4";
import go10 from "@/assets/govan/go10.mp4";


const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mainStreetImages = [
    ra1,
    ra2,
    ra3,
    ra4,
    ra5,
    ra6,
    ra7,
    ra8,
    ra9,
    ra10,
    ra11,
    ralwinvideo,
  ];

  const parkAvenueImages = [
    hi1,
    hi2,
    hi3,
    hi4,
    hi5,
    hi6,
    hi7,
    hi8,
    hi9,
    hi10,
    highlandsvideo,
  ];

  const westbourneCornerImages = [
    go1, go2, go3, go4, go5, go6, go7, go8, go9, go10
  ];

  const mainStreetAmenities = [
    "Free High-Speed Wi-Fi",
    "Fully Furnished Rooms",
    "Study Lounge",
    "Shared Kitchen Access",
    "Laundry Room",
    "CCTV & 24-hour Security",
    "Walking Distance to shuttle stop",
    "Modern Facilities"
  ];

  const parkAvenueAmenities = [
    "Private & Shared Rooms Available",
    "High-Speed Wi-Fi",
    "Furnished Living Spaces",
    "Laundry Facilities",
    "Shared Kitchen",
    "Close to Shops & Town",
    "Security Surveillance",
    "Modern Amenities"
  ];

  const westbourneCornerAmenities = [
    "Private & Shared Rooms Available",
    "High-Speed Wi-Fi",
    "Furnished Living Spaces",
    "Laundry Facilities",
    "Shared Kitchen",
    "In town & Walking Distance to shuttle stop",
    "Security Surveillance",
    "Modern Amenities"
  ];


  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSea6QN3C-3OIqXTFKBxP--wbNRIOQULxpVWe9F0w1whM4RKEQ/viewform?usp=publish-editor";

  return (
    <div className="min-h-screen bg-background relative">
        <Hero />
        
        <section id="properties" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fade-in">
              Our Featured Properties
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Choose from our student accommodation options
            </p>
            
            <div className="space-y-16">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <PropertyCard
                  name="Ralwin"
                  address="4 Western Road, Central, Gqeberha"
                  description="Modern, fully furnished student residence close to shuttle stop and town. This accommodation features contemporary design with all the amenities you need for comfortable student living. Includes high-speed Wi-Fi, dedicated study areas, shared kitchen, laundry room, and comprehensive 24-hour security."
                  amenities={mainStreetAmenities}
                  images={mainStreetImages}
                  formUrl={formUrl}
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <PropertyCard
                  name="Highlands"
                  address="2 Western Road, Central, Gqeberha"
                  description="Spacious and comfortable student housing with excellent amenities. Ideal for students who value both comfort and convenience. Features flexible accommodation options with both private and shared rooms available. Well-connected location near shops, town and walking distance to shuttle stop."
                  amenities={parkAvenueAmenities}
                  images={parkAvenueImages}
                  formUrl={formUrl}
                />
              </div>

              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <PropertyCard
                  name="303 Govan Mbeki"
                  address="303 Govan Mbeki rd, Gqeberha"
                  description="Spacious and comfortable student housing with excellent amenities. Ideal for students who value both comfort and convenience. Features flexible accommodation options with both private and shared rooms available. Well-connected location near shops, town and walking distance to shuttle stop and PE college."
                  amenities={westbourneCornerAmenities}
                  images={westbourneCornerImages}
                  formUrl={formUrl}

                />
              </div>
              
            </div>
          </div>
        </section>

        <ContactFooter />
      </div>
  );
};

export default Index;
