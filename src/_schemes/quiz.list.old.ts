import imageQ3_1 from "../assets/quiz/q3/a1.png";
import imageQ3_2 from "../assets/quiz/q3/a2.png";
import imageQ3_3 from "../assets/quiz/q3/a3.png";
import imageQ3_4 from "../assets/quiz/q3/a4.png";
import imageQ5_1 from "../assets/quiz/q5/a1.png";
import imageQ5_2 from "../assets/quiz/q5/a2.png";
import imageQ5_3 from "../assets/quiz/q5/a3.png";
import imageQ5_4 from "../assets/quiz/q5/a4.png";
import imageQ5_5 from "../assets/quiz/q5/a5.png";
import imageQ5_6 from "../assets/quiz/q5/a6.png";
import imageQ5_7 from "../assets/quiz/q5/a7.png";
import imageQ5_8 from "../assets/quiz/q5/a8.png";
import imageQ7_1 from "../assets/quiz/q7/a1.png";
import imageQ7_2 from "../assets/quiz/q7/a2.png";
import imageQ7_3 from "../assets/quiz/q7/a3.png";
import imageQ7_4 from "../assets/quiz/q7/a4.png";
import imageQ7_5 from "../assets/quiz/q7/a5.png";
import imageQ7_6 from "../assets/quiz/q7/a6.png";
import imageQ7_7 from "../assets/quiz/q7/a7.png";
import imageQ7_8 from "../assets/quiz/q7/a8.png";
import imageQ7_9 from "../assets/quiz/q7/a8.png";
import imageQ8_1 from "../assets/quiz/q8/a1.png";
import imageQ8_2 from "../assets/quiz/q8/a2.png";
import imageQ8_3 from "../assets/quiz/q8/a3.png";
import imageQ8_4 from "../assets/quiz/q8/a4.png";
import imageQ8_5 from "../assets/quiz/q8/a5.png";
import imageQ8_6 from "../assets/quiz/q8/a6.png";
import imageQ9_1 from "../assets/quiz/q9/a1.png";
import imageQ9_2 from "../assets/quiz/q9/a2.png";
import imageQ9_3 from "../assets/quiz/q9/a3.png";
import imageTeaser1 from "../assets/quiz/teaser/teaser_1.png";
import imageQ11_1 from "../assets/quiz/q11/a1.png";
import imageQ11_2 from "../assets/quiz/q11/a2.png";
import imageQ11_3 from "../assets/quiz/q11/a3.png";
import imageQ11_4 from "../assets/quiz/q11/a3.png";
import imageInfoQ10 from "../assets/quiz/q10/info.png";
import imageTeaserGraph from "../assets/quiz/teaser/teaser_graph.png";
import imageTeaserFacts from "../assets/quiz/teaser/teaser_facts.png";
import imageTeaserFinish from "../assets/quiz/teaser/teaser_finish.png";

import imageQ23_1 from "../assets/quiz/q23/a1.png";
import imageQ23_2 from "../assets/quiz/q23/a2.png";
import imageQ23_3 from "../assets/quiz/q23/a3.png";
import imageQ23_4 from "../assets/quiz/q23/a4.png";
import imageQ23_5 from "../assets/quiz/q23/a5.png";
import imageQ23_6 from "../assets/quiz/q23/a6.png";

import imageInfoQ24 from "../assets/quiz/q24/info.png";

import imageQ34_1 from "../assets/quiz/q34/a1.png";
import imageQ34_2 from "../assets/quiz/q34/a2.png";
import imageQ34_3 from "../assets/quiz/q34/a3.png";
import imageQ34_4 from "../assets/quiz/q34/a4.png";
import imageQ34_5 from "../assets/quiz/q34/a5.png";
import imageQ34_6 from "../assets/quiz/q34/a6.png";

import {QuizType} from "../types";

export const quizList: QuizType[] = [
  {
    name: "Age",
    index: 2,
    route: "quiz",
    isHideBtnNextScreen: false,
    data: {
      image: "",
      title: "Personal Anti-Aging Plan",
      text: "*according to your age",
    },
  },
  {
    name: "TeaserStart",
    index: 3,
    route: "quiz",
    isHideBtnNextScreen: true,
    data: {
      image: "",
      title: "2+ million women",
      text: "have chosen us",
    },
  },

  {
    name: "Quiz",
    question: "To start, tell us what are you primarily focused on now?",
    type: "checkbox",
    index: 1,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {icon: "", text: "Look 10 years younger"},
      {icon: "", text: "Improve overall skin, hair & nails condition"},
      {icon: "", text: "Get glowing look"},
      {icon: "", text: "Learn fast body care routines"},
      {icon: "", text: "Give myself facials at home"},
      {icon: "", text: "I’m not sure!"},
    ],
  },
  {
    name: "Quiz",
    question: "Are you satisfied with your current skin condition?",
    type: "radio",
    index: 2,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        icon: "😍",
        text: "Yes, I just want to keep this result forever",
      },
      {
        icon: "🥲",
        text: "Not really, I still need some small improvements",
      },
      {
        icon: "😰",
        text: "No, I have a lot of skin problems",
      },
    ],
  },
  {
    name: "Quiz",
    question: "What is your <span>skin type?</span>",
    type: "radio",
    index: 3,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        imageUrl: true,
        icon: imageQ3_1,
        text: "Oily skin type",
      },
      {
        imageUrl: true,
        icon: imageQ3_2,
        text: "Dry skin type",
      },
      {
        imageUrl: true,
        icon: imageQ3_3,
        text: "Normal skin type",
      },
      {
        imageUrl: true,
        icon: imageQ3_4,
        text: "Combination skin type",
      },
    ],
  },
  {
    name: "Quiz",
    question: "Choose the closest definition",
    type: "radio",
    index: 4,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        imageUrl: true,
        icon: imageQ3_1,
        text: "<strong>Oily skin</strong> has a glossy shine and visible pores",
      },
      {
        imageUrl: true,
        icon: imageQ3_2,
        text: "<strong>Dry skin</strong> can feel tight and rough and look dull",
      },
      {
        imageUrl: true,
        icon: imageQ3_3,
        text: "<strong>Normal skin</strong> is well balanced: neither too oily nor too dry",
      },
      {
        imageUrl: true,
        icon: imageQ3_4,
        text: "Skin types vary between the T-zone and the cheeks on <strong>combination skin</strong>",
      },
    ],
  },
  {
    name: "Quiz",
    question: "What are your skin concerns?",
    description:
      "Our certified cosmetologists will create a <span>treatment program based on your answers</span>",
    type: "radio",
    index: 5,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        imageUrl: true,
        icon: imageQ5_1,
        text: "Aging skin",
      },
      {
        imageUrl: true,
        icon: imageQ5_2,
        text: "Enlarged Pores",
      },
      {
        imageUrl: true,
        icon: imageQ5_3,
        text: "Pimples or acne",
      },
      {
        imageUrl: true,
        icon: imageQ5_4,
        text: "Rough texture",
      },
      {
        imageUrl: true,
        icon: imageQ5_5,
        text: "Dark spots/scars",
      },
      {
        imageUrl: true,
        icon: imageQ5_6,
        text: "Uneven skin tone",
      },
      {
        imageUrl: true,
        icon: imageQ5_7,
        text: "Pigmentation changes",
      },
      {
        imageUrl: true,
        icon: imageQ5_8,
        text: "Fine lines and wrinkles",
      },
    ],
  },
  {
    name: "Quiz",
    question: "Do you have a <span>daily skincare routine?</span>",
    type: "radio",
    index: 6,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        icon: "😎",
        text: "Yes, I have a morning and evening routine",
      },
      {
        icon: "☀️",
        text: "Only a morning routine",
      },
      {
        icon: "💤",
        text: "Only an evening routine",
      },
      {
        icon: "😰",
        text: "No, I don’t have any routine",
      },
    ],
  },
  {
    name: "Quiz",
    question: "Which of the following products are included into your routine?",
    subDescription: "Select all the options that apply to you",
    type: "checkbox",
    index: 7,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        imageUrl: true,
        icon: imageQ7_1,
        text: "Cleanser",
      },
      {
        imageUrl: true,
        icon: imageQ7_2,
        text: "Toner",
      },
      {
        imageUrl: true,
        icon: imageQ7_3,
        text: "Serum",
      },
      {
        imageUrl: true,
        icon: imageQ7_4,
        text: "Moisturizer",
      },
      {
        imageUrl: true,
        icon: imageQ7_5,
        text: "Eye cream",
      },
      {
        imageUrl: true,
        icon: imageQ7_6,
        text: "Face mask",
      },
      {
        imageUrl: true,
        icon: imageQ7_7,
        text: "Exfoliators",
      },
      {
        imageUrl: true,
        icon: imageQ7_8,
        text: "SPF Sunscreen",
      },
      {
        imageUrl: true,
        icon: imageQ7_9,
        text: "Lip treatment",
      },
    ],
  },
  {
    name: "Quiz",
    question: "What bothers your skin during the day?",
    type: "radio",
    index: 8,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        imageUrl: true,
        icon: imageQ8_1,
        text: "Dull, tired skin",
      },
      {
        imageUrl: true,
        icon: imageQ8_2,
        text: "Wrinkles & lines",
      },
      {
        imageUrl: true,
        icon: imageQ8_3,
        text: "Tightness",
      },
      {
        imageUrl: true,
        icon: imageQ8_4,
        text: "Wants moisture all the time",
      },
      {
        imageUrl: true,
        icon: imageQ8_5,
        text: "Excess oil",
      },
      {
        imageUrl: true,
        icon: imageQ8_6,
        text: "None of that",
      },
    ],
  },
  {
    name: "Quiz",
    question: "Lastly, how sensitive is your skin?",
    type: "radio",
    index: 9,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        imageUrl: true,
        icon: imageQ9_1,
        text: "High sensitivity",
      },
      {
        imageUrl: true,
        icon: imageQ9_2,
        text: "Moderate sensitivity",
      },
      {
        imageUrl: true,
        icon: imageQ9_3,
        text: "Non-sensitive",
      },
    ],
  },
  {
    name: "Teaser",
    index: 9.1,
    route: "quiz",
    isHideBtnNextScreen: true,
    data: {
      image: imageTeaser1,
      title: "You’re not alone!",
      text: "According to the World Health Organisation, skin diseases affect almost 900 million people worldwide",
    },
  },
  {
    name: "Quiz",
    question: "How many glasses of water do you drink daily?",
    type: "radio",
    index: 10,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "😰",
        text: "I only have coffee or tea",
      },
      {
        icon: "🥲",
        text: "3 or less",
      },
      {
        icon: "🙂",
        text: "4-6",
      },
      {
        icon: "😎",
        text: "6 or more",
      },
    ],
    info: {
      imageUrl: true,
      icon: imageInfoQ10,
      subTitle: "",
      text: "<strong>Hydration is crucial for anti-aging</strong> as it plumps the skin, reduces the appearance of wrinkles, and maintains a youth",
    },
  },
  {
    name: "Quiz",
    question: "Do you think your skin is well moisturized?",
    type: "radio",
    index: 11,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        imageUrl: true,
        icon: imageQ11_1,
        text: "Yes",
      },
      {
        imageUrl: true,
        icon: imageQ11_2,
        text: "Sometimes feel tightness",
      },
      {
        imageUrl: true,
        icon: imageQ11_3,
        text: "No, can’t live without moisturizer",
      },
      {
        imageUrl: true,
        icon: imageQ11_4,
        text: "I don’t know",
      },
    ],
  },
  {
    name: "Quiz",
    question:
      "For women in their 30-40s, maintaining water balance and proper skincare can be a chore.",
    description:
      "With our personalized program, you can reverse your skin problems in the most efficient way.",
    type: "radio",
    index: 12,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        icon: "",
        text: "My skincare routine isn’t great: sometimes i forget about hydration",
      },
      {
        icon: "",
        text: "It can be better, I need to be more organized",
      },
      {
        icon: "",
        text: "I practice a proper skincare routine as well as healthy lifestyle habitsr",
      },
    ],
  },
  {
    name: "Quiz",
    question:
      "Your eating habits can greatly impact your skin, hair & nails condition.",
    description:
      "A steady supply of key nutrients is essential for maintaining healthy and glowing beauty.",
    type: "radio",
    index: 13,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "I tend to eat sandwiches or wraps",
      },
      {
        icon: "",
        text: "I tend to eat many fruits and vegetables, maintaining healthy balance",
      },
      {
        icon: "",
        text: "I tend to eat fast food",
      },
      {
        icon: "",
        text: "I tend to eat sweets",
      },
    ],
  },
  {
    name: "Quiz",
    question: "How often do you visit a cosmetologist or esthetician?",
    type: "radio",
    index: 14,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        icon: "😍",
        text: "Once a month or more",
      },
      {
        icon: "🙃",
        text: "Once in several months",
      },
      {
        icon: "🙁",
        text: "Once a year",
      },
      {
        icon: "😰",
        text: "Never",
      },
    ],
  },
  {
    name: "TeaserGraph",
    index: 14.1,
    route: "quiz",
    isHideBtnNextScreen: true,
    data: {
      image: imageTeaserGraph,
      title: "Cosmetologists vs MaxBeauty",
      text: "Get a glow-up with a combination of <span>unique anti-aging practices and a personalized routines</span> while reducing visits to a cosmetologist",
      additionText:
        "An additional benefit is that you will <strong>feel much more confident with your reflection in the mirror after a couple of days</strong>",
    },
  },
  {
    name: "Quiz",
    question: "How much sleep do you usually get?",
    type: "radio",
    index: 15,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        icon: "😰",
        text: "Minimal rest (<5 hours)",
      },
      {
        icon: "🙁",
        text: "I get some shut-eye (5-6 hours)",
      },
      {
        icon: "😮‍💨",
        text: "I sleep long and well (7-8 hours)",
      },
      {
        icon: "😎",
        text: "I’m a sleephero (more than 8 hours)",
      },
    ],
  },
  {
    name: "Quiz",
    question: "Is there anything you want to improve about your sleep?",
    type: "radio",
    index: 16,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "No, I sleep well",
      },
      {
        icon: "",
        text: "Difficulty falling asleep",
      },
      {
        icon: "",
        text: "Waking up tired",
      },
      {
        icon: "",
        text: "Waking up during the night",
      },
      {
        icon: "",
        text: "Insomnia",
      },
      {
        icon: "",
        text: "Hot flushes / Night sweats",
      },
      {
        icon: "",
        text: "Lack of sleep schedule",
      },
    ],
  },
  {
    name: "Quiz",
    question:
      "Other factors like stress, sleep, or  diet may be affecting your beauty. How has your mental health been lately?",
    type: "radio",
    index: 17,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "I was stressed",
      },
      {
        icon: "",
        text: "I’ve had insomnia",
      },
      {
        icon: "",
        text: "I’m suffering from anxiety and PA",
      },
      {
        icon: "",
        text: "I’ve been feeling depressed",
      },
      {
        icon: "",
        text: "None of the above",
      },
    ],
  },
  {
    name: "TeaserFacts",
    index: 17.1,
    route: "quiz",
    isHideBtnNextScreen: true,
    data: {
      image: imageTeaserFacts,
      title:
        "Did you know that sleep is the <span>key to improving skin quality?</span>",
      text: "Without sufficient sleep the immune system is weakened, which can impact the quality and strength of collagen.  As a result, the health of the skin decreases, potentially causing wrinkles.",
    },
  },
  {
    name: "Quiz",
    question: "Do you wear <span>sunscreen outdoors?</span>",
    type: "radio",
    index: 18,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "😍",
        text: "Yes, always",
      },
      {
        icon: "😮‍💨",
        text: "Yes, but only in a sunny weather",
      },
      {
        icon: "🙁",
        text: "Sometimes",
      },
      {
        icon: "🥲",
        text: "Rarely",
      },
      {
        icon: "😰",
        text: "Never",
      },
    ],
    info: {
      icon: "☀️",
      text: "Did you know that 1.6 billion people were exposed to solar ultraviolet radiation while staying outdoors",
    },
  },
  {
    name: "Quiz",
    question: "Do you believe that anti-aging works?",
    type: "radio",
    index: 19,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        icon: "😍",
        text: "Yes, 100%",
      },
      {
        icon: "🥲",
        text: "I don’t really know much about anti-aging routines",
      },
      {
        icon: "😰",
        text: "No, I've already tried a lot of things",
      },
    ],
  },
  {
    name: "Quiz",
    question: "How do you handle aging signs?",
    type: "radio",
    index: 20,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "Preventative measures",
      },
      {
        icon: "",
        text: "Treatments",
      },
      {
        icon: "",
        text: "Acceptance",
      },
      {
        icon: "",
        text: "Seeking advice",
      },
      {
        icon: "",
        text: "Other",
      },
    ],
    info: {
      icon: "🥰",
      text: "<strong>Aging doesn’t have to be a chore</strong>, but you will definitely need a sun protection, healthy diet, adequate amount of sleep, consistent care routines",
    },
  },
  {
    name: "Quiz",
    question: "Have you ever noticed any hyperpigmentation or saggy skin?",
    type: "radio",
    index: 21,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "🙁",
        text: "Yes, hyperpigmentation",
      },
      {
        icon: "🥲",
        text: "Yes, saggy skin",
      },
      {
        icon: "😰",
        text: "I think I have both",
      },
      {
        icon: "😍",
        text: "Neither",
      },
    ],
    info: {
      icon: "🥰",
      text: "<strong>Regular exercise, adequate hydration, weekly exfoliation, and proper moisturizing</strong> will help you to eliminate sagging and hyperpigmentation",
    },
  },
  {
    name: "Quiz",
    question:
      "Besides skin, are you satisfied with your current hair condition?",
    type: "radio",
    index: 22,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        icon: "😍",
        text: "Yes, completely",
      },
      {
        icon: "🥲",
        text: "Not really",
      },
      {
        icon: "😰",
        text: "Not at all",
      },
    ],
  },
  {
    name: "Quiz",
    question: "How would you describe the appearance of your hair",
    type: "radio",
    index: 23,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        imageUrl: true,
        icon: imageQ23_1,
        text: "Dull with no shine",
      },
      {
        imageUrl: true,
        icon: imageQ23_2,
        text: "Frizy and needs damage control",
      },
      {
        imageUrl: true,
        icon: imageQ23_3,
        text: "Brittle with split ends",
      },
      {
        imageUrl: true,
        icon: imageQ23_4,
        text: "Healthy and strong",
      },
      {
        imageUrl: true,
        icon: imageQ23_5,
        text: "Too oily",
      },
      {
        imageUrl: true,
        icon: imageQ23_6,
        text: "None of that",
      },
    ],
  },
  {
    name: "Quiz",
    question: "Do you have any hair loss issues / concerns?",
    type: "radio",
    index: 24,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "😰",
        text: "Yes, significantly",
      },
      {
        icon: "🙁",
        text: "Yes, but mildly",
      },
      {
        icon: "😮‍💨",
        text: "Unsure",
      },
      {
        icon: "😎",
        text: "No, not at all",
      },
    ],
    info: {
      imageUrl: true,
      icon: imageInfoQ24,
      text: "According to many studies, <strong>40% of women experience signs of hair thinning by age 50</strong>",
    },
  },
  {
    name: "Quiz",
    question: "How do you typically style your hair on a daily basis?",
    type: "radio",
    index: 25,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "Heat styling (straightening, curling, etc.)",
      },
      {
        icon: "",
        text: "Natural air dry",
      },
      {
        icon: "",
        text: "Use of styling products (gel, mousse, etc.)",
      },
      {
        icon: "",
        text: "I rarely style my hair",
      },
    ],
    info: {
      icon: "😰",
      text: "<strong>Applying heat to our hair weakens its outer layer</strong>, potentially leading to dryness, dullness, split ends, and hair breakage",
    },
  },
  {
    name: "Quiz",
    question: "How often do you wash your hair?",
    type: "radio",
    index: 26,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "Every day",
      },
      {
        icon: "",
        text: "Every 2-3 days",
      },
      {
        icon: "",
        text: "Once a week",
      },
      {
        icon: "",
        text: "Less than once a week",
      },
    ],
  },
  {
    name: "Quiz",
    question:
      "Do you have something that will motivate you to learn more about skin, hair and nails?",
    subDescription:
      "People with extra motivation are usually more likely to reach their goal",
    type: "radio",
    index: 27,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "I want to look younger to feel confident",
      },
      {
        icon: "",
        text: "I want to use less cosmetics",
      },
      {
        icon: "",
        text: "I want to impress people around me",
      },
      {
        icon: "",
        text: "I’m afraid my partner will break up with me",
      },
      {
        icon: "",
        text: "I want to prevent aging ",
      },
      {
        icon: "",
        text: "I want to create my own beauty ritual",
      },
    ],
  },
  {
    name: "Quiz",
    question: "How often do you wear makeup?",
    type: "radio",
    index: 28,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "😎",
        text: "Never, i’m all natural",
      },
      {
        icon: "😮‍💨",
        text: "Only for special occasions",
      },
      {
        icon: "🙁",
        text: "Few times a week",
      },
      {
        icon: "😰",
        text: "Every day",
      },
    ],
  },
  {
    name: "Quiz",
    question: "How would you describe your daily makeup routine?",
    type: "radio",
    index: 29,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "Full glam (full face of makeup)",
      },
      {
        icon: "",
        text: "Moderate (basic makeup with a few enhancements)",
      },
      {
        icon: "",
        text: "Minimal (very light makeup)",
      },
      {
        icon: "",
        text: "None",
      },
    ],
  },
  {
    name: "Quiz",
    question: "How do you usually remove your makeup?",
    type: "radio",
    index: 30,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "Specialized makeup remover",
      },
      {
        icon: "",
        text: "Cleansing oil/balm",
      },
      {
        icon: "",
        text: "Micellar water",
      },
      {
        icon: "",
        text: "I rarely wear makeup, so it's not an issue",
      },
    ],
  },
  {
    name: "Quiz",
    question: "Have you ever felt the need to hide your skin under makeup?",
    type: "radio",
    index: 31,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "😎",
        text: "No, I typically don't feel the need to cover up",
      },
      {
        icon: "😮‍💨",
        text: "Occasionally, if I'm having a particularly bad day",
      },
      {
        icon: "🙁",
        text: "Often, I use these as tools to boost my confidence",
      },
      {
        icon: "😰",
        text: "Always, I rely on them to feel presentable",
      },
    ],
  },
  {
    name: "Quiz",
    question:
      "Do you feel that your current makeup application makes you look older?",
    description:
      "Did you know that almost 80% of women struggle to find the right makeup products for their skin type and to look young?",
    type: "radio",
    index: 32,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "😎",
        text: "Yes, I often feel that way",
      },
      {
        icon: "😮‍💨",
        text: "Rarely, it's not a common concern for me",
      },
      {
        icon: "🙁",
        text: "Sometimes, depending on the products I use",
      },
      {
        icon: "😰",
        text: "Yes, I often feel that way",
      },
    ],
  },
  {
    name: "Quiz",
    question:
      "Are you interested in learning new anti-aging makeup techniques?",
    type: "radio",
    index: 33,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "😍",
        text: "Very interested",
      },
      {
        icon: "😮‍💨",
        text: "Somewhat interested",
      },
      {
        icon: "🙁",
        text: "Not very interested",
      },
      {
        icon: "😰",
        text: "Not interested at all",
      },
    ],
    info: {
      icon: "🥰",
      text: "<strong>Anti-aging makeup techniques</strong> emphasize hydration, light-reflecting products, and natural colors to reduce fine lines and boost youthfulness",
    },
  },
  {
    name: "TeaserCalculating",
    index: 33.1,
    route: "quiz",
    isHideBtnNextScreen: true,
    data: {
      text: "Just a moment...<br/>We’re almost there",
    },
  },
  {
    name: "TeaserFinish",
    index: 33.2,
    route: "quiz",
    isHideBtnNextScreen: true,
    data: {
      image: imageTeaserFinish,
      title: "Only a few questions left till your Anti-Aging Beauty Plan ready",
      text: "Remember, with our personalized program, you can eliminate all your skin problems healthier and faster",
    },
  },
  {
    name: "Quiz",
    question: "During my MaxBeauty journey, i’d like to feel:",
    type: "radio",
    index: 34,
    route: "quiz",
    isHideBtnNextScreen: false,
    answers: [
      {
        imageUrl: true,
        icon: imageQ34_1,
        text: "Happy",
      },
      {
        imageUrl: true,
        icon: imageQ34_2,
        text: "Calm and relaxed",
      },
      {
        imageUrl: true,
        icon: imageQ34_3,
        text: "Energetic",
      },
      {
        imageUrl: true,
        icon: imageQ34_4,
        text: "In control of my choices",
      },
      {
        imageUrl: true,
        icon: imageQ34_5,
        text: "Empowered",
      },
      {
        imageUrl: true,
        icon: imageQ34_6,
        text: "Other",
      },
    ],
  },
  {
    name: "Quiz",
    question: "What period of the day are you most likely to take our actions?",
    type: "radio",
    index: 35,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "😎",
        text: "Both, my beauty needs the full treatment, morning and night",
      },
      {
        icon: "☀️",
        text: "Morning, i’ll start my day with feeling fresh and prepared",
      },
      {
        icon: "💤",
        text: "Evening, i’ll do relaxing rituals before bed",
      },
    ],
  },
  {
    name: "Quiz",
    question: "Your Anti-Aging Plan is Ready!",
    description:
      "It’s designed to work at your pace. So, tell us: How quickly do you want to look young and healthy?",
    type: "radio",
    index: 36,
    route: "quiz",
    isHideBtnNextScreen: true,
    answers: [
      {
        icon: "",
        text: "As quickly as possible",
      },
      {
        icon: "",
        text: "Slow and steady does it",
      },
      {
        icon: "",
        text: "Somewhere between the two",
      },
    ],
  },
];
