import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import hero1 from "@/assets/imgs/factory/factory1.jpeg";
import hero2 from "@/assets/imgs/factory/factory2.jpeg";
import hero3 from "@/assets/imgs/factory/factory3.jpeg";
import hero4 from "@/assets/imgs/factory/factory4.jpeg";
import hero5 from "@/assets/imgs/factory/factory5.jpeg";
import hero6 from "@/assets/imgs/factory/factory6.jpeg";
import hero7 from "@/assets/imgs/factory/factory7.jpeg";
import hero8 from "@/assets/imgs/factory/factory8.jpeg";
import hero9 from "@/assets/imgs/factory/factory9.jpeg";
import hero10 from "@/assets/imgs/factory/factory10.jpeg";

const carouselImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
];

function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-1">
                    <Image
                      src={image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-md object-cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
