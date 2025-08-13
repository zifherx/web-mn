"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { TESTIMONIAL_ITEMS } from "@/data/plainData";

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === TESTIMONIAL_ITEMS.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? TESTIMONIAL_ITEMS.length - 1 : currentIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === TESTIMONIAL_ITEMS.length - 1 ? 0 : currentIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros{" "}
            <span className="text-yellow-600">atletas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de atletas confían en Maximus Nutrition para alcanzar sus
            objetivos
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="h-full border-0 shadow-2xl bg-white">
                  <CardContent className="p-8 h-full flex flex-col justify-center">
                    <div className="text-center">
                      {/* Quote Icon */}
                      <Quote className="h-12 w-12 text-yellow-500 mx-auto mb-6" />

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(TESTIMONIAL_ITEMS[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 text-yellow-400 fill-current"
                            />
                          )
                        )}
                      </div>

                      {/* Content */}
                      <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                        "{TESTIMONIAL_ITEMS[currentIndex].content}"
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={TESTIMONIAL_ITEMS[currentIndex].image}
                          alt={TESTIMONIAL_ITEMS[currentIndex].name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-yellow-500"
                        />
                        <div className="text-left">
                          <p className="font-bold text-lg text-gray-900">
                            {TESTIMONIAL_ITEMS[currentIndex].name}
                          </p>
                          <p className="text-yellow-600 font-medium">
                            {TESTIMONIAL_ITEMS[currentIndex].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={goToPrevious}
            className="absolute -left-5 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12 p-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={goToNext}
            className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg border-0 h-12 w-12 p-0"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIAL_ITEMS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-yellow-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
