'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import logoLight from '@/public/Adrian-Veinot-light.png';
import { H1, H2, H3 } from '@/components/typography';
import { Button } from '@/components/button';
import pose4 from '@/public/pose4.jpg';
import pose3 from '@/public/pose3.jpg';
import pose1 from '@/public/pose1.jpg';

import '../globals.css';

gsap.registerPlugin(ScrollTrigger);

export default function IndexPage() {
  useEffect(() => {
    const sections = gsap.utils.toArray('.panel');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.parent',
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 2,
        end: () => '+=' + document.querySelector('.parent').offsetWidth,
      },
    });
  }, []);

  return (
    <div
      className='parent'
      style={{
        width: '400vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <section
        className='panel'
        style={{
          minWidth: '100vw',
          height: '100vh',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='flex max-w-screen-2xl flex-row items-center justify-center'>
          <div className='flex w-full max-w-screen-2xl  flex-col items-center justify-center'>
            <div className='relative h-auto w-auto'>
              <Image src={logoLight} alt='' />
            </div>
            <H1 className='text-center'>Look Powerful, Move Powerfully</H1>
            <Button className='w-100'>Get Started</Button>
            <div className='relative'>
              <Image src={pose4} alt='' className='xs:w-screen' />
            </div>
          </div>
        </div>
      </section>

      <section
        className='panel'
        style={{
          minWidth: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='mx-3  flex h-screen h-full max-w-screen-md flex-row items-center justify-center'>
          <video
            muted
            autoPlay
            playsInline
            controls
            loop
            preload='auto'
            poster='./app/public/hustle.jpg'
            className='xs:w-screen h-auto'
          >
            <source src='https://du4j5z4bw91rt.cloudfront.net/hustle.mp4' type='video/mp4' />
            Your browser does not support the html video tag.
          </video>
        </div>
      </section>

      <section
        className='panel'
        style={{
          maxWidth: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='max-w-screen relative flex w-screen flex-col items-center justify-center'>
          <H3>
            Adrian is a personal trainer with over 20 years of experience. He helps people who are
            fearful of previous injuries build a strong, lean and resilient body Adrian’s unique
            skill set and approach to personal training have made him one of the most sought after
            trainers in Canada.
          </H3>
          <H3>
            His client base doctors, business professionals, personal trainers, athletes in a range
            of sports such as cycling, hockey, equestrian and curling, as well as actors, actresses.
          </H3>
          <Image src={pose3} alt='' className='w-screen' />
        </div>
      </section>

      <section
        className='panel'
        style={{
          maxWidth: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='max-w-screen relative flex w-screen flex-col items-center justify-center'>
          <H3>
            Adrian has appeared on CBC & CTV nationally as their on screen fitness expert. In 2007
            Adrian was the June cover model for Men’s Exercise magazine. In 2010 Adrian was a
            keynote speaker at the Optimyz Live health & fitness expo. And in 2021 Adrian was
            CanFitPros fitness trendsetter blazing the online/remote personal training revolution
            keeping his clients and many people strong in mind and body throughout the pandemic.
          </H3>

          <Image src={pose1} alt='' className='w-screen' />
        </div>
      </section>

      <section
        className='panel'
        style={{
          maxWidth: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='max-w-screen relative flex w-screen flex-col items-center justify-center'>
          <H3>
            All my clients have one thing in common – they drastically underestimate what their body
            is capable of. I am here to help my clients not only reclaim their health, but give them
            confidence in what their body can do and in the way it can look!” Now is the time to
            address injuries or aches and pains, reclaim your health, and get into shape. The longer
            you leave it, the harder it will become. And it will never be easier than right now. So
            lets get you started…
          </H3>
          <H2>Where this started..</H2>

          {/*TODO NEEDS AN ANIMATION OR VIDEO */}

          <H3>
            I worked in a big box gym for over 15 years where I helped thousands of people achieve
            their physique goals and recover from all types of injuries
          </H3>
          <H3>
            I grew frustrated that there was no clear guidance or help for people who not only
            wanted to recover from injury, but wanted to continue to get stronger, leaner and fitter
            and push their bodies beyond what they had done before.
          </H3>

          {/*<Image src={pose2} alt='' className='xs:w-screen' />*/}

          <H3>
            Clients would be apprehensive about embarking on a personal training programme given
            their history of injury or lack of activity, and I felt that most trainers lacked the
            experience or education required to help.
          </H3>
          <H3>
            I bridge the gap between physical rehabilitation and personal training, helping clients
            get into shape whilst addressing previous injuries and weaknesses
          </H3>
        </div>
      </section>

      {/*  TODO: MOVE REST OF ASSETS OVER  set up desktop to classes as this just works on mobile */}
    </div>
  );
}
