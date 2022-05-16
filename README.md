### TDD

Test driven development
**TDD = Test first development + Refactor**

#### Why TDD

- TDD will force developer to write a clean code.
- Your code will be tested before it went to deployment. So the chances of getting errors in production is less.
- It will actually make you think about requirments before you code.
- It will also help to find a loopholes in the at the time of development.

#### TDD will work like this

**Step 1**: Write a code
**Step 2**: Try to break it
**Step 3**: Refactor the code and fix it
**Step 4**: Repeat again from Step 1. Unit you feel there is nothing left to test.

#### How TDD will force developer to write a clean code

If the Function / Module or Component is small and it has a single responsibility then it is easy to test. Testing a large component is challenging and testing a component which has async actions is like working in a hell. So if you want to good experience with TDD then you have to design your component small and SOLID.

#### How TDD help to find bugs before deployment and how will it reduces the chances of errors in prod?

If you look into the TDD process in **step 2** you have to break your code. If you are clear with requirements you will write happy path tests and then you will start thinking in negative scenarios. So you can make sure that your code is working fine for happy path and giving proper messages / errors for negative scenarios.

**Note**: TDD will also gives you a confidence on your code. If you test your code 100% then it won't break in prod. So you can be confident at the time of deployment and release activity.

#### TDD in React Js

To start with TDD in react we need.

- Test framework
- Assertion library

##### Test framework

Testing frameworks are used to organise and execute tests.
Example: `Jamine, Jest, Mocha`

##### Assertion library

Assertion libraries are tools to verify that things are correct.
Example: `Chai, Enzyme, Testing library, Should.js`

**Note**: Jest is a testing framework also it has built-in assertion lib.

#### Examples for Assertion and Test framework

###### For Assertion:

```javascript
var output = mycode.doSomething();
output.should.equal("bacon"); //should.js
assert.eq(output, "bacon"); //node.js assert

// The alternative being:
var output = mycode.doSomething();
if (output !== "bacon") {
  throw new Error('expected output to be "bacon", got ' + output);
}
```

###### For Test framework:

```javascript
describe("mycode.doSomething", function () {
  it("should work", function () {
    var output = mycode.doSomething();
    output.should.equal("bacon");
  });
  it("should fail on an input", function () {
    var output = mycode.doSomething("a input");
    output.should.be.an.Error;
  });
});
```

[Learn more about jest](https://jestjs.io/)
[Learn more about react-testing-library](https://testing-library.com/docs/)

#### Some useful functions used in jest for writing / setting tests

- `test & it`
- `describe`
- `beforeEach`
- `afterEach`
- `beforeAll`
- `beforeEach`

##### 1. test & it

These 2 functions are same. There is no difference in the functionality. Just it is about readability.

Consider the following example:

```javascript
describe('Module', () => {
  test('if it does this thing', () => {});
  test('if it does the other thing', () => {});
});

output in CLI:
Module > if it does this thing

describe('Module', () => {
  it('should do this thing', () => {});
  it('should do the other thing', () => {});
});

output in CLI:
yourModule > should do this thing
```

**Note: Choose which one is more readable for you.**

##### 2. describe

Describe is used to create a block that groups together several related tests.

```javascript
describe("Calculator", () => {
  it("should add two numbers", () => {});
  it("should sub two numbers", () => {});
});
```

##### 3. beforeEach

Runs a function before each of the tests in this file runs. If the function returns a promise or a generator, Jest waits for that promise to resolve before running the test.

```javascript
describe('Calculator', () => {
	beforeEach(() => {
		console.log('Before executing it')
	})
  it('should add two numbers', () => {
	 console.log('Add')
  });
  it('should sub two numbers', () => {
	 console.log('Sub')
  });
});
Output:
Before executing it
Add
Before executing it
Sub
```

##### 4. afterEach

Runs a function after each of the tests in this file runs. If the function returns a promise or a generator, Jest waits for that promise to resolve after running the test.

```javascript
describe('Calculator', () => {
	afterEach(() => {
		console.log('After executing it')
	})
  it('should add two numbers', () => {
	 console.log('Add')
  });
  it('should sub two numbers', () => {
	 console.log('Sub')
  });
});
Output:
Add
After executing it
Sub
After executing it
```

##### 5. beforeAll

Runs a function before all of the tests in this file runs. If the function returns a promise or a generator, Jest waits for that promise to resolve before running all the tests.

```javascript
describe('Calculator', () => {
	beforeAll(() => {
		console.log('Before executing it')
	})
  it('should add two numbers', () => {
	 console.log('Add')
  });
  it('should sub two numbers', () => {
	 console.log('Sub')
  });
});
Output:
Before executing it
Add
Sub
```

##### 6. afterAll

Runs a function after all of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve after running all the tests.

```javascript
describe('Calculator', () => {
	afterAll(() => {
		console.log('After executing it')
	})
  it('should add two numbers', () => {
	 console.log('Add')
  });
  it('should sub two numbers', () => {
	 console.log('Sub')
  });
});
Output:
Add
Sub
After executing it
```

`beforeEach, afterEach, beforeAll, afterAll` will be useful to do some setup work or any initialization or creating / clearing mocks etc...

#### Skipping test or test suite

Use `xdescribe(....) or xit(....) or it.skip(....) or describe.skip(....)` to skip specific test or test suite.

```javascript
describe("Calculator", () => {
  it("should add two numbers", () => {
    console.log("Add");
  });
  it.skip("should sub two numbers", () => {
    //Can use other options instead it.skip.
    console.log("Sub");
  });
});
Output: Add;
```

##### Runing particular test or test suite

Use `fdescribe(....) or fit(....) or it.only(....) or describe.only(....)` to run specific test or test suite.

```javascript
describe("Calculator", () => {
  fit("should add two numbers", () => {
    //Can use other options instead fit.
    console.log("Add");
  });
  it.skip("should sub two numbers", () => {
    console.log("Sub");
  });
});
Output: Add;
```

##### If your planning to write a test with out assertion use todo

```javascript
const add = (a, b) => a + b;

test.todo("should add two numbers");
```

### Mocks

Mock is like overriding the actual implementation of the function with custom logic.

Example :

```javascript
//Function
const printAdditionOfTwoNumbers = (x, y) => console.log(x + y);

//Test
test("should add two numbers and should print", () => {
  console.log = jest.fn();
  printAdditionOfTwoNumbers(1, 2);
  expect(printAdditionOfTwoNumbers).toBeCalledWith(3);
});
```

There are many ways to mock and also ways to mock promises. We can mock even only once also we can set resolved / rejected values for mock functions if those are promises.

**Note: We can mock modules /exports / named exports / functions / async functions / promises / React components etc...**

`jest.mock` will mock complete module / object. If you are using named exports or any object. Instead of mocking entire object you want mock only for particular method or module in the object then instead `mock` one can use `spyOn`.

`spyOn` will also mock the function but instead if mocking completely. We can just mock required part

```javascript
test("it should console warn a message", () => {
  jest.spyOn(global.console, "warn").mockImplementation();

  console.warn("my error");
  expect(console.warn).toBeCalledTimes(1);
  expect(console.warn).toBeCalledWith("my error");
});

//Just mocking console.warn. Rest of the console methods will be same
```

### React testing library

It is also referred as RTL

- RTL is like a wrapper for DOM Testing library with reactjs support
- It is light weight over other react testing libraries
- It provides good utility functions those will help us to write tests in best practices
- Good querying functions

Some examples for using RTL

- Testing basic stateless react component
- Testing components which has hooks
- Testing components which has API call
- Testing components which has API call and loader
- Testing custom hooks
- Testing user events

##### Testing basic stateless react component

```javascript
import { render, screen } from "@testing-library/react";

const MyApp = () => {
  return <div>Hello world</div>;
};

test("MyApp should render hello world", () => {
  render(<MyApp />);
  expect(screen.getByText("Hello world")).toBeInTheDocument();
});
```

Testing component with props

```javascript
import { render, screen } from "@testing-library/react";

const MyApp = ({ message }) => {
  return <div>{message}</div>;
};

test("MyApp should render hello world", () => {
  render(<MyApp message={"Hello world"} />);
  expect(screen.getByText("Hello world")).toBeInTheDocument();
});
```

##### Testing components which has hooks

```javascript
import { render, screen } from "@testing-library/react";

const MyApp = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

test("MyApp should render hello world", () => {
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn().mockReturnValue({ id: "123" }),
  }));
  render(<MyApp />);
  expect(screen.getByText("123")).toBeInTheDocument();
});
```

##### Testing components which has API call

```javascript
import {getArticles} from './services'
import {render, screen} from '@testing-library/react'

const MyApp = () => {
	const [articles, setArticles] = useState([])
  useEffect(() => {
	  const response = await getArticles()
	  setArticles(response)
  }, [])
	return <div>
			{
				articles.map(article => <div>{article}</div>)
			}
		</div>
}

test("MyApp should render hello world", () => {
	jest.mock('./services', () => ({
  	getArticles: jest.fn()
	}));
	render(<MyApp />)
	expect(getArticles).toBeCalled()
})
```

##### Testing components which has API call and loader

```javascript
import {getArticles} from './services'
import {render, screen} from '@testing-library/react'

const MyApp = () => {
	const [articles, setArticles] = useState([])
	const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
	  setShowLoader(true)
	  const response = await getArticles()
	  setShowLoader(false)
	  setArticles(response)
  }, [])
	if(showLoader) return <Loader data-testId="loader" />
	return <div>
			{
				articles.map((article, index) => <div key={index}>{article}</div>)
			}
		</div>
}

test("MyApp should render hello world", async () => {
	const mockResponse = ["Article 1", "Article 2"]
	jest.mock('./services', () => ({
  	getArticles: jest.fn().mockResolveValue(mockResponse)
	}));
	render(<MyApp />)
	const loader = screen.queryByTestId("loader")
  expect(loader).toBeInTheDocument()
	await waitForElementToBeRemoved(() => loader)
	expect(screen.getAllByText("Article").length).toBe(2)
})
```

##### Testing user events

```javascript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const MyApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button data-testId="inc-btn" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <span data-testId="value">{counter}</span>
      <button data-testId="dec-btn" onclick={() => setCounter(counter - 1)}>
        -
      </button>
    </div>
  );
};

test("MyApp should render hello world", () => {
  render(<MyApp />);
  const counterValue = screen.getByTestId("value");
  expect(counterValue).toBe("0");
  userEvent.click(screen.getByTestId("inc-btn"));
  expect(counterValue).toBe("1");
  userEvent.click(screen.getByTestId("dec-btn"));
  expect(counterValue).toBe("0");
});
```

**Note: Testing custom hook is an advanced thing please refer this [link](https://kentcdodds.com/blog/how-to-test-custom-react-hooks) for testing a custom hook with RTL**


### Selectors 
1. queryBy
2. getBy
3. findBy

### Assertions