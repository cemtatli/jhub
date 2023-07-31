'use client'

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe, Briefcase, Users2, Goal } from 'lucide-react';

type JobPlatform = {
  title: string;
  content: string;
  icon: React.ReactNode;
};

const AccordionMenu: React.FC = () => {
  const jobPlatforms: JobPlatform[] = [
    {
      title: "Explore JobQuest",
      content: "JobQuest boasts an extensive database of job listings, offering a plethora of opportunities for job seekers. With hundreds of employers, you can easily find your dream job with just a few clicks. Our user-friendly interface allows you to filter and refine your job search effortlessly.",
      icon: <Globe />,
    },
    {
      title: "ProCareer for Professionals",
      content: "Welcome to ProCareer, a specialized job search platform tailored for professionals. Unleash your potential and take your career to new heights with our latest job listings. Our industry-specific filtering options make it a breeze to find the perfect job in your chosen field.",
      icon: <Users2 />,
    },
    {
      title: "Discover Opportunity Hub",
      content: "Attention all job seekers! OpportunityHub is the go-to destination for everyone from fresh graduates to seasoned experts. Discover a wealth of job opportunities and upload your resume to increase your visibility among potential employers.",
      icon: <Goal />,
    },
    {
      title: "Freelance Connect for Remote Workers",
      content: "Are you a freelancer or remote worker seeking exciting new opportunities? Look no further than FreelanceConnect! Connect with employers and collaborate on exciting projects from the comfort of your home. Explore a world of freelance gigs and remote work options.",
      icon: <Briefcase />,
    },
  ];

  return (
    <Accordion type="single" collapsible>
      {jobPlatforms.map((platform, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger >
            <span className='font-medium'>{platform.title}</span>
          </AccordionTrigger>
          <AccordionContent>{platform.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionMenu;


