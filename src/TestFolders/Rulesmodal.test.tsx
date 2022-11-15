import "@testing-library/jest-dom";
import {
  render,
  screen,
} from "@testing-library/react";

import RulesModal from "../Components/Rulesmodal";


describe("testing rules modal", () => {
  beforeEach(() => {
    let data = {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What does a funambulist walk on?",
      correct_answer: "A Tight Rope",
      incorrect_answers: ["Broken Glass", "Balls", "The Moon"],
    };
    jest.useFakeTimers()
    jest.spyOn(global, 'setInterval');
    render(
        <RulesModal/>
    );
  });
  test("testing rendering of modal", () => {
    //arrange
    let rulesModal = screen.getByText("Basic Rules.");
    //assert
    expect(rulesModal).toBeInTheDocument();
  });

  
});
