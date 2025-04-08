import { defineNuxtPlugin } from "#app";
import { gsap } from "gsap";
    
import { CustomEase } from "gsap/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/EasePack";
    
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Draggable } from "gsap/Draggable";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { EaselPlugin } from "gsap/EaselPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";

export default defineNuxtPlugin((nuxtApp) => {
  // Register all GSAP plugins immediately
  if (import.meta.client) {
    // Ensure we're in the browser environment
    try {
      // Register ScrollTrigger first as it's often a dependency for other animations
      gsap.registerPlugin(ScrollTrigger);
      
      // Register all other plugins
      gsap.registerPlugin(
        Flip,
        Observer,
        ScrollToPlugin,
        Draggable,
        MotionPathPlugin,
        EaselPlugin,
        PixiPlugin,
        TextPlugin,
        RoughEase,
        ExpoScaleEase,
        SlowMo,
        CustomEase
      );
      
      // Fix for ScrollTrigger in some Nuxt 3 environments
      if (typeof window !== 'undefined') {
        // Re-register ScrollTrigger once the window is fully available
        ScrollTrigger.config({
          ignoreMobileResize: true, // Helps with mobile performance
        });
        
        // Force a refresh after a short delay to ensure proper initialization
        setTimeout(() => {
          ScrollTrigger.refresh(true);
        }, 200);
      }
      
      console.log('GSAP and ScrollTrigger successfully registered');
    } catch (error) {
      console.error('Error registering GSAP plugins:', error);
    }
  }

  // Provide GSAP to the Nuxt app
  nuxtApp.provide("gsap", gsap);
});