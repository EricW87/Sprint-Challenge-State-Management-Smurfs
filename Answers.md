1. What problem does the context API help solve?

It lets you share a state throughout your application without relying on prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store is where you keep your state.
Reducers are where you modify your state. (In an organized manner)
Actions tell your reducer what to modify and how.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state is data that exists during the entire existance of your application. Components only exist while that component is being rendered. Components are good for forms, application state is good to hold user data.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk lets you do asynchronous updates to your state by dispatching actions. It lets you dispatch your actions whereever and whenever.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux seems more powerful but I prefer the simplisity of contex API at this time. Redux takes a while to set up and use correctly, while context API is very easy.
