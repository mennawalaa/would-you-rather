# Would You Rather Project

This is the starter code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the `_DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided starter code, you'll build a React/Redux front end for the application. We recommend using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Data

There are two types of objects stored in our database:

- Users
- Questions

### Users

Users include:

| Attribute | Type   | Description                                                                                                                                                                                                    |
| --------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The user’s unique identifier                                                                                                                                                                                   |
| name      | String | The user’s first name and last name                                                                                                                                                                            |
| avatarURL | String | The path to the image file                                                                                                                                                                                     |
| questions | Array  | A list of ids of the polling questions this user created                                                                                                                                                       |
| answers   | Object | The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options. |

### Questions

Questions include:

| Attribute | Type   | Description                            |
| --------- | ------ | -------------------------------------- |
| id        | String | The question’s unique identifier       |
| author    | String | The author’s unique identifier         |
| timestamp | String | The time when the question was created |
| optionOne | Object | The first voting option                |
| optionTwo | Object | The second voting option               |

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| votes     | Array  | A list that contains the id of each user who voted for that option |
| text      | String | The text of the option                                             |

Your code will talk to the database via 4 methods:

- `_getUsers()`
- `_getQuestions()`
- `_saveQuestion(question)`
- `_saveQuestionAnswer(object)`

1. `_getUsers()` Method

_Description_: Get all of the existing users from the database.  
_Return Value_: Object where the key is the user’s id and the value is the user object.

2. `_getQuestions()` Method

_Description_: Get all of the existing questions from the database.  
_Return Value_: Object where the key is the question’s id and the value is the question object.

3. `_saveQuestion(question)` Method

_Description_: Save the polling question in the database.  
_Parameters_: Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute     | Type   | Description                                |
| ------------- | ------ | ------------------------------------------ |
| author        | String | The id of the user who posted the question |
| optionOneText | String | The text of the first option               |
| optionTwoText | String | The text of the second option              |

_Return Value_: An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type   | Description                                                                                                                  |
| --------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| id        | String | The id of the question that was posted                                                                                       |
| author    | String | The id of the user who posted the question                                                                                   |
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option |
| timestamp | String | The time when the question was created                                                                                       |

4. `_saveQuestionAnswer(object)` Method

_Description_: Save the answer to a particular polling question in the database.
_Parameters_: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute  | Type   | Description                                                                             |
| ---------- | ------ | --------------------------------------------------------------------------------------- |
| authedUser | String | The id of the user who answered the question                                            |
| qid        | String | The id of the question that was answered                                                |
| answer     | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"` |

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).

## installation steps

1.  (npm install )to install the dependencies of the project.
2.  (npm start) to launch the project.

## solution steps

using redux and react
we divide project to the following components

1. Login : for login and logout
2. Home :contains the specific user answered and answered questions
3. AnsQuestions: rendered to show each answered question
4. UnAnsQuestion: rendered to show each unanswered question
5. QuestionDetails: shows the question details in different page when submitting a vote or viewing a poll
6. NavBar: allows user to move from one page to another routes to all other pages in the application
7. Leader:shows Leader board

we used shared state have the following sections

1. users: contains all user data
2. loggedUser:hold logged user id and personal data
3. questions:contains all questions
4. uservote for an unanswered question

## steps behind user experience

1. first the user is led to login page where he is asked to select a user from the users data loaded to the state at the login page
2. the specific user data is then passed to the state (store ) where it is gets accessed by the home component which the user is automatically led to
3. 1. if the user types address bar of any page on the application the switch router will lead him to please login page carrying through state prop of route the pathname that was written on the address bar
4. 2. after login the user is directed to the address bar
      whats happens is
5. 1. the nextRoute function check the location action to determine the what happened
6. 2. if the first action done since refresh is the login action the action location is POP so the user is directed to home
7. 3. if the user wrote an address like the leader board then directed to login page after please login page
      the action is REPLACE the login use the state from please login prop to derive the user to leader board
8. 4. if the user typed address of a poll that exists a similar scenario is done the question details page use the all questions data and all users dispatched to the store state from login page to show the question data
9. 5. if the user logged-out then logged in again the action location is PUSH then user is derived to home page again
10. 6. if the user came to login from please login a result of typing undefined question he is driven to 404 error page
11. at the Home page the home component dispatches the questions data and compare it with the specific user data
    to determine the questions that the user answered then render two category of questions answered and un answered
12. the components AnsQuestions and UnAnsQuestion are rendered to show the unanswered and answered questions respectively who are passed question by question as a prop
13. when user clicks on view pull action receive question Action is dispatched to save the question details to the store ,then the QuestionDetails component is called at url questions/question id takes the question details from the store and shows it on page
14. similarly ,when user choose to vote on an unanswered question clicking submit both the question details and the user vote are being added to the store using receive question Action and save userAnswerAction
15. the save userAnswerAction modifies the user data to add the recently answered question to the answers array in the user data so it appears as answered question in the home page
16. to add a new question the user has to click on new question at the Navbar then saveQuestionAction is dispatched
    to add the new question to the questions section in the store then the user is redirected to the home page
    (there was a problem here that the page renders before the question is added )
    solution(alternative approach):
17. the new question is dispatched as a different variable on the store state named added question
18. using the component did update to compare the prev props added question undefined with the props when the added question is loaded
19. pushing the added question to the previously sorted questions coming to the store
20. use the local state to store the updated unanswered and answered questions after the question is added so that the page is forced to render to show the added question
    as the store questions is updated the home should show the new question as unanswered one

21. the leader board get all users data state at the store with modifications of user actions and sort them
    according to their total score answered questions+ asked questions
22. the home reducer dispatch all actions related to questions
23. the login reducer dispatch all actions related to users
24. the question reducer add a partition of specific question data used by reducer
