class QuestionService {
  constructor() {
    this.sections = {
      aptitude: {
        questions: [
          {
            number: 1,
            question:
              "What is the next number in the sequence: 2, 6, 12, 20, 30?",
            options: ["38", "40", "42", "44"],
            correctAnswer: "42",
            isMultiChoice: true,
            status:"unAtempted"

          },
          {
            number: 2,
            question: "If 5x + 3 = 18, what is the value of x?",
            options: ["2", "3", "4", "5"],
            correctAnswer: "3",
            isMultiChoice: false,
            status:"unAtempted"

          },
        ],
      },
      programming: {
        questions: [
          {
            number: 1,
            question: "What is the purpose of the 'useEffect' Hook in React?",
            options: ["to load components", "To perform side effects in function components","For Mounting component","For Unmounting Component"],
            correctAnswer: "To perform side effects in function components",
            isMultiChoice: false,
            status: "unAttempted",
          },
          {
            number: 2,
            question: "Which Angular CLI command is used to generate a new component?",
            options: ["ng generate component", "ng create component", "ng make component", "ng new component"],
            correctAnswer: "ng generate component",
            isMultiChoice: false,
            status: "unAttempted",
          },
          {
            number: 3,
            question: "What is the output of 'console.log(typeof null)' in JavaScript?",
            options: ["null","undefind","Nan","object"],
            correctAnswer: "object",
            isMultiChoice: false,
            status: "unAttempted",
          },
          {
            number: 4,
            question: "Which of the following is used to handle HTTP requests in Node.js?",
            options: ["http", "fs", "path", "url"],
            correctAnswer: "http",
            isMultiChoice: false,
            status: "unAttempted",
          },
          {
          number: 5,
          question: "What does the 'this' keyword refer to in JavaScript?",
          options: [
              "The global object",
              "The object from which it was called",
              "The DOM element",
              "The window object"
          ],
          correctAnswer: "The object from which it was called",
          isMultiChoice: false,
          status: "unAttempted"
      },
          {
            number: 6,
            question: "Which of the following is true about closures in JavaScript?",
            options: ["Closures are created every time a function is created", "Closures can access variables from its parent scope", "Closures are used to handle asynchronous operations", "None Of The Above"],
            correctAnswer: ["Closures are created every time a function is created","Closures can access variables from its parent scope"],
            isMultiChoice: true,
            status: "unAttempted",
          },
          {
            number: 7,
            question: "How do you pass data to a child component in React?",
            options: ["By stets","Via props","In Function","using useState"],
            correctAnswer: "Via props",
            isMultiChoice: false,
            status: "unAttempted",
          },
          {
            number: 8,
            question: "Which of the following is a valid way to create a new instance of a component in Angular?",
            options: ["<app-component/>", "<AppComponent></AppComponent>", "<appComponent></appComponent>", "<App-Component></App-Component>"],
            correctAnswer: "<app-component></app-component>",
            isMultiChoice: false,
            status: "unAttempted",
          },
          {
            number: 9,
            question: "What is the purpose of the 'res.send' method in Node.js?",
            options: [
                "To send a response to the client",
                "To read data from a client request",
                "To establish a new server",
                "To handle client-side routing"
            ],
            correctAnswer: "To send a response to the client",
            isMultiChoice: false,
            status: "unAttempted"
        },
          {
            number: 10,
            question: "Wich are the js Freamworks",
            options: ["Springboot","React","Angular","VueJS"],
            correctAnswer: ["React","Angular","VueJS"],
            isMultiChoice: true,
            status: "unAttempted",
          },
          {
            number: 11,
            question: "Which of the following is the correct way to bind a method to a class in React?",
            options: ["this.method = this.method.bind(this)", "this.method.bind()", "this.method = bind(this.method)", "bind(this.method)"],
            correctAnswer: "this.method = this.method.bind(this)",
            isMultiChoice: false,
            status: "unAttempted",
          },
          {
            number: 12,
            question: "What is the correct way to import a component in React?",
            options: ["const component = import './mycomponent' ", "import MyComponent from './MyComponent'","import component from compnent","const Component = require'./Component' "],
            correctAnswer: "import MyComponent from './MyComponent'",
            isMultiChoice: false,
            status: "unAttempted",
          },
          {
            number: 13,
            question: "Which of the following is NOT a core module in Node.js?",
            options: ["http", "fs", "path", "jQuery"],
            correctAnswer: "jQuery",
            isMultiChoice: false,
            status: "unAttempted",
          },
          {
            number: 14,
            question: "How do you create a new context in React?",
            options: ["React.createContext()","React.useContext()","createContext()","createContext().React()"],
            correctAnswer: "React.createContext()",
            isMultiChoice: false,
            status: "unAttempted",
          },
          // Question 42 (Multiple Choice)
          {
            number: 15,
            question: "Which of the following is a valid way to declare a service in Angular?",
            options: ["@Injectable()", "@Service()", "@Component()", "@Inject()"],
            correctAnswer: "@Injectable()",
            isMultiChoice: true,
            status: "unAttempted",
          },
          // Question 43 (Single Answer)
          {
            number: 16,
            question: "What is the output of 'console.log([] + [])' in JavaScript?",
            options: [],
            correctAnswer: "An empty string",
            isMultiChoice: false,
            status: "unAttempted",
          },
          // Question 44 (Multiple Choice)
          {
            number: 17,
            question: "Which of the following methods is used to read a file in Node.js?",
            options: ["fs.readFile", "http.readFile", "path.readFile", "url.readFile"],
            correctAnswer: "fs.readFile",
            isMultiChoice: true,
            status: "unAttempted",
          },
          // Question 45 (Single Answer)
          {
            number: 18,
            question: "How do you access the state in a React component?",
            options: [],
            correctAnswer: "this.state",
            isMultiChoice: false,
            status: "unAttempted",
          },
          // Question 46 (Multiple Choice)
          {
            number: 19,
            question: "Which of the following is true about React keys?",
            options: ["Keys help React identify which items have changed", "Keys should be unique among siblings", "Keys are passed to components as props", "Both 1 and 2"],
            correctAnswer: "Both 1 and 2",
            isMultiChoice: true,
            status: "unAttempted",
          },
          // Question 47 (Single Answer)
          {
            number: 20,
            question: "What is the purpose of 'super()' in a React component constructor?",
            options: [],
            correctAnswer: "To call the constructor of the parent class",
            isMultiChoice: false,
            status: "unAttempted",
          },
          // Question 48 (Multiple Choice)
          {
            number: 21,
            question: "Which of the following is a valid way to create a new Observable in Angular?",
            options: ["new Observable()", "Observable.create()", "Observable.new()", "new Observable.create()"],
            correctAnswer: "new Observable()",
            isMultiChoice: true,
            status: "unAttempted",
          },
          // Question 49 (Single Answer)
          {
            number: 22,
            question: "What is the output of 'console.log(1 + '1')' in JavaScript?",
            options: [],
            correctAnswer: "'11'",
            isMultiChoice: false,
            status: "unAttempted",
          },
          // Question 50 (Multiple Choice)
          {
            number: 23,
            question: "Which of the following is used to define routes in an Angular application?",
            options: ["RouterModule", "NgRoute", "NgRouter", "RouterLink"],
            correctAnswer: "RouterModule",
            isMultiChoice: true,
            status: "unAttempted",
          },
        ],
      },
      english: {
        questions: [
          {
            number: 1,
            question:
              "Which of the following sentences is grammatically correct?",
            options: [
              "He go to school.",
              "He goes to school.",
              "He going to school.",
              "He gone to school.",
            ],
            correctAnswer: "He goes to school.",
            isMultiChoice: false,
            status:"unAtempted"

          },
          {
            number: 2,
            question: "What is the synonym of 'happy'?",
            options: ["Sad", "Angry", "Joyful", "Bored"],
            correctAnswer: "Joyful",
            isMultiChoice: false,
            status:"unAtempted"

          },
          // Additional questions here...
        ],
      },
      math: {
        questions: [],
      },
    };
  }

  getQuestions(section, questionNumber) {
    if (this.sections[section]) {
      const question = this.sections[section].questions.find(
        (q) => q.number === questionNumber
      );
      if (question) {
        return question;
      } else {
        return { error: "Question not found." };
      }
    } else {
      return { error: "Section not found." };
    }
  }
}

export default QuestionService;
