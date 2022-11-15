import { fireEvent, getAllByRole, getByRole, getByTestId, render,screen, waitFor, within } from "@testing-library/react";
import '@testing-library/jest-dom'
import { QuizDetails } from "../Components/QuizDetails";
import { Provider } from "react-redux";
import {store} from "../Reducer/store";
import App from "../App";
import UserEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { execPath } from "process";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import {setupServer} from 'msw/node'



describe("Testing the Quiz detatils Component",()=>{
 render(<Provider store={store}><QuizDetails/></Provider>)
    test ("existence of 4 Select components and Submit button",()=>{
      let catOfQuestion=screen.getByLabelText("Category of question")
      let numOfQuestion=screen.getByLabelText("NumberOfQuestions")
      let diffOfQuestion=screen.getByLabelText("DifficultyOfQuestion")
      let typeOfQuestion=screen.getByLabelText("TypeOfQuestions")
      let startGame=screen.getByRole('button', {name: /startbutton/i})
        expect(catOfQuestion).toBeDefined()
        expect(numOfQuestion).toBeDefined()
        expect(diffOfQuestion).toBeDefined()
        expect(typeOfQuestion).toBeDefined()
        expect(startGame).toBeDefined()
      })
    
    test ("checking for 5 options in number of questions and click functionality",()=>{
      render(<Provider store={store}><QuizDetails/></Provider>)
        //number of questions
        fireEvent.mouseDown(screen.getByRole('button', {name: /select number of questions/i}))
        expect( screen.getAllByRole('option').length).toBe(5)
        fireEvent.click(screen.getByRole('option', {name: /15/i}))
        expect(screen.getByRole('button', {name: /15/i})).toBeInTheDocument()
    })

})

    
   
    
