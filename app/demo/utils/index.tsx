"use client";

import {
  NotebookText,
  FlaskConical,
  MessageCircleQuestion,
  BellRing,
  Layers,
  Users,
} from "lucide-react";

export const userTabsConfig = {
  userTabs: [
    { tabText: "Workbooks", icon: NotebookText },
    { tabText: "Assessments", icon: FlaskConical },
    { tabText: "Quizzes", icon: MessageCircleQuestion },
    { tabText: "Curricullum", icon: Layers },
    { tabText: "PTM Analytics", icon: Users },
    { tabText: "Notifications", icon: BellRing },
  ],
};

export const workbookData = {
  teacher: {
    workbooksCompleted: "25",
    workbooksPending: "12",
    workbooksCreated: "65",
    workbooks: [
      /* 
        questions array contains 
        element containing 
        title: question, id: 1
      */
      /* 
        topicTags contains mapping 
        [questionId]: [topic tags associated with it]
      */
      {
        title: "Workbook September",
        questions: [
          { title: "Getting started with Quadratic Equations!", id: "1" },
          { title: "States of Matter | Earth Science", id: "2" },
          { title: "Our Atmosphere, Breathing like earth", id: "3" },
          { title: "Our Planet and different species", id: "4" },
        ],
        topicTags: {
          1: ["Environmental science", "Friction"],
          2: ["States of matter", "Units of Measurement"],
          3: ["Types of Atmosphere", "Soil"],
          4: ["Food chain"],
        },
      },
      {
        title: "Workbook October",
        questions: [
          { title: "Getting started with Quadratic Equations!", id: "1" },
          { title: "States of Matter | Earth Science", id: "2" },
          { title: "Our Atmosphere, Breathing like earth", id: "3" },
          { title: "Our Planet and different species", id: "4" },
        ],
        topicTags: {
          1: ["Environmental science", "Friction"],
          2: ["States of matter", "Units of Measurement"],
          3: ["Types of Atmosphere", "Soil"],
          4: ["Food chain"],
        },
      },
      {
        title: "Workbook November",
        questions: [
          { title: "Getting started with Quadratic Equations!", id: "1" },
          { title: "States of Matter | Earth Science", id: "2" },
          { title: "Our Atmosphere, Breathing like earth", id: "3" },
          { title: "Our Planet and different species", id: "4" },
        ],
        topicTags: {
          1: ["Environmental science", "Friction"],
          2: ["States of matter", "Units of Measurement"],
          3: ["Types of Atmosphere", "Soil"],
          4: ["Food chain"],
        },
      },
    ],
  },
};

export const assessmentData = {
  assessmentCompleted: 54,
  assessmentPending: 5,
  assessmentCreated: 59,
  assessment: [
    {
      title: "Assessment-1",
      questions: [
        { title: "Getting started with Quadratic Equations!", id: "1" },
        { title: "States of Matter | Earth Science", id: "2" },
        { title: "Our Atmosphere, Breathing like earth", id: "3" },
        { title: "Our Planet and different species", id: "4" },
      ],
      maximumMarks: {
        1: ["100"],
        2: ["100"],
        3: ["100"],
        4: ["100"],
      },
    },
    {
      title: "Assessment-2",
      questions: [
        { title: "Getting started with Quadratic Equations!", id: "1" },
        { title: "States of Matter | Earth Science", id: "2" },
        { title: "Our Atmosphere, Breathing like earth", id: "3" },
        { title: "Our Planet and different species", id: "4" },
      ],
      topicTags: {
        1: ["100"],
        2: ["200"],
        3: ["200"],
        4: ["300"],
      },
    },
  ],
};

export const quizzesData = {
  quizzesCreated: 50,
  quizzesCompleted: 4,
  quizzesPending: 46,
  quizzes: [
    { id: 1, title: "How many types of Soil are there?" },
    { id: 2, title: "How many types of Atmosphere are there?" },
    {
      id: 3,
      title:
        "What is the difference between Linear Equation and Quadratic Equation?",
    },
  ],
  options: {
    1: {
      iterator: [
        "Sample Option A",
        "Sample Option B",
        "Sample Option C",
        "Sample Option D",
      ],
      correctIndexes: [0, 1],
    },
    2: {
      iterator: [
        "Sample Option A",
        "Sample Option B",
        "Sample Option C",
        "Sample Option D",
      ],
      correctIndexes: [0, 1],
    },
    3: {
      iterator: [
        "Sample Option A",
        "Sample Option B",
        "Sample Option C",
        "Sample Option D",
      ],
      correctIndexes: [0, 1],
    },
  },
};

export const curricullumData = {
  curricullumSpan: 50, // in days
  curricullumTree: {
    superTopics: [
      {
        title: "Getting Started with Quadratic Equation",
        id: 1,
      },
      {
        title: "Getting Started with Quadratic Equation",
        id: 2,
      },
      {
        title: "Getting Started with Quadratic Equation",
        id: 3,
      },
      {
        title: "Getting Started with Quadratic Equation",
        id: 4,
      },
    ],
    topics: {
      1: [
        "Linear Equations",
        "Quadratic Equations",
        "How to calculate roots of the equation",
      ],
      2: [
        "Linear Equations",
        "Quadratic Equations",
        "How to calculate roots of the equation",
      ],
      3: [
        "Linear Equations",
        "Quadratic Equations",
        "How to calculate roots of the equation",
      ],
      4: [
        "Linear Equations",
        "Quadratic Equations",
        "How to calculate roots of the equation",
      ],
    },
  },
};
