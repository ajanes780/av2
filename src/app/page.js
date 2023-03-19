import Image from "next/image";
import logoLight from "public/Adrian-Veinot-light.png"
import pose1 from "public/pose1.jpg";
import pose2 from "public/pose2.jpg";
import pose3 from "public/pose3.jpg";
import pose4 from "public/pose4.jpg";

import {Button} from "@/app/components/button";
import {H1, H2, H3} from "@/app/components/typography";
import {ContactForm} from "@/app/components/contactForm";

export default function Page() {
    return (
        <div className="flex flex-row w-screen h-full justify-center">
            <div className='flex flex-col container items-center mx-auto px-4 relative'>
                <Image src={logoLight} alt="" className='w-full h-auto' />
                <H1 className="text-center">Look Powerful, Move Powerfully</H1>
                <Button className='w-100'>Get Started</Button>

                <Image src={pose4} alt='' className='xs:w-screen'/>
                <H3 >
                    Adrian is a personal trainer with over 20 years of experience. He
                    helps people who are fearful of previous injuries build a strong,
                    lean and resilient body Adrian’s unique skill set and approach to
                    personal training have made him one of the most sought after
                    trainers in Canada.
                </H3>
                <H3>
                    His client base doctors, business professionals, personal trainers, athletes in a range of sports
                    such as cycling, hockey, equestrian and curling, as well as actors, actresses.
                </H3>

                <Image src={pose3} alt='' className='xs:w-screen' />
                <H3>
                    Adrian has appeared on CBC & CTV nationally as their on screen fitness expert. In 2007 Adrian was
                    the June cover model for Men’s Exercise magazine. In 2010 Adrian was a keynote speaker at the
                    Optimyz Live health & fitness expo. And in 2021 Adrian was CanFitPros fitness trendsetter blazing
                    the online/remote personal training revolution keeping his clients and many people strong in mind
                    and body throughout the pandemic.
                </H3>
                <H3>
                    All my clients have one thing in common – they drastically underestimate what their body is capable
                    of. I am here to help my clients not only reclaim their health, but give them confidence in what
                    their body can do and in the way it can look!” Now is the time to address injuries or aches and
                    pains, reclaim your health, and get into shape. The longer you leave it, the harder it will become.
                    And it will never be easier than right now. So lets get you started…
                </H3>

                <H2>
                    Where this started..
                </H2>
                <Image src={pose1} alt='' className='xs:w-screen'/>
                <H3>
                    I worked in a big box gym for over 15 years where I helped thousands of people achieve their
                    physique goals and recover from all types of injuries
                </H3>
                <H3>
                    I grew frustrated that there was no clear guidance or help for people who not only wanted to recover
                    from injury, but wanted to continue to get stronger, leaner and fitter and push their bodies beyond
                    what they had done before.
                </H3>

                <Image src={pose2} alt='' className='xs:w-screen'/>

                <H3>
                    Clients would be apprehensive about embarking on a personal training programme given their history
                    of injury or lack of activity, and I felt that most trainers lacked the experience or education
                    required to help.
                </H3>
                <H3>I bridge the gap between physical rehabilitation and personal training, helping clients get into
                    shape whilst addressing previous injuries and weaknesses
                </H3>
                <ContactForm/>

            </div>
        </div>
    )
}
