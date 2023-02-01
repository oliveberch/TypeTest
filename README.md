## Type-test

This is a webApp developed using reactJS, with a specific task of calculating typing speed via checking input from a user. It uses context for state management by useReducer for most of state updates. With reducer we also use transducer, which basically maps which reducer to be used. React context is a method to pass props using context, data can be shared as global for tree of react components, for example: _authenticated_User_, _theme_ or _preferred language_. App source-code is gonna be bifercated by defining states explicitly in a different folder and components seperately which are in end budled in _App.tsx_.

#### States

---

##### state.ts

- Interface _State()_ with it's initial state.
- enum _Action_types_ with methods - _Change_Input_, _Set_Timer_, _TICK_.

##### context.tsx

- Manages state defined in state.ts.
- Exports fuctions:
  - _TypingProvider()_
  - _UseTyping()_ with nested functions like:
    - _onInput()_
    - _onReset()_
    - _startTimer()_
    - _stopTimer()_

##### index.ts

- exports _context.tsx_.
- exports _state.ts_.

#### Components

---

##### preview.tsx

- _useTyping_ from _context.tsx_ is used to show _preview_text_ to type.
- Also split input text and asign color values to _previw_text_ based on mapping with input.

##### userInput.tsx

- Assigns input in a state and function _useTyping()_.
- Reads input and shows it in _textArea_ and on change re-renders input value in _textArea_.

##### speedInfo.tsx

- Provides typing speed, correct characters, time taken and reset button.
- Words are not matched here based on dictionary (although this can be scaled using **Words API**) rather a group of five character is counted as word to check typing speed.
- Defines _wpm_ with input chars (_c_) and minutes (_s_).
- Defines _val_ for correct characters.
- Defines _onResest()_ for Reset button.

#### App.tsx

---

- Arranges components in order & exports them as typing-test div.

```html
<Preview />
<UserInput />
<SpeedInfo />
```

#### index.tsx

---

- Exports {_App_} with styling defined in _index.css_.
