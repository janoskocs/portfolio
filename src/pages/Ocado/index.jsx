import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { CopyBlock } from "react-code-blocks";
import "./Ocado.scss";

const Ocado = () => {
  const removeSidebarCode = `const mainContent = document.getElementsByClassName("main-column")[0];
mainContent.style.width = "100%";`;

  return (
    <div className="ocado">
      <nav className="nav">
        <div className="nav__container">
          <a className="nav__link nav__link--logo" href="https://janoskocs.com">
            <img
              className="nav__image"
              src="/images/ocado/logo.png"
              alt="janos x ocado"
              title="janos x ocado"
            />
          </a>
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__link" href="#intro">
                Hello
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#question1">
                Question 1
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#question2">
                Question 2
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#question3">
                Question 3
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#question4">
                Question 4
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#end">
                Questions?
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="main">
        <section className="section intro" id="intro">
          <div className="section__container">
            <h2 className="section__title">Hello :{")"}</h2>
            <h3 className="section__sub-title">welcome to my presentation</h3>
            <p className="section__description">
              I am Janos, a JavaScript developer.
            </p>
            <img
              className="section__image"
              src="/images/ocado/janos_debugging.jpg"
              alt="janos debugging his laptop"
            />
            <p className="section__description">
              Thank you so much for giving me the opportunity to take this test.
            </p>
            <p className="section__description">
              The goal for this landing page is to demonstrate my skills in and
              the way I approach problem solving.
            </p>
          </div>
        </section>
        <section className="section question-1" id="question1">
          <div className="section__container">
            <h2 className="section__title">Question 1</h2>
            <h3 className="section__sub-title">Remove sidebar</h3>
            <p className="section__description">
              Remove the sidebar on a specific URL
            </p>

            <Accordion transition transitionTimeout={250}>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Analysis</p>
                  </div>
                }
              >
                <p className="accordion__description">
                  <ul>
                    <li>Create a function</li>
                    <li>Check the URL in the browser</li>
                    <li>Check if the URL matches the specific URL</li>
                    <li>Remove the sidebar</li>
                  </ul>
                  {/* <p className="accordion__description">
                    Focus on path only: <br></br> https://www.ocado.com/<b>browse/m-s-at-ocado-294578</b>?clkInTab=MandS%20at%20Ocado
                  </p> */}
                </p>
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Solution</p>
                  </div>
                }
              >
                <p className="accordion__description">
                  Please see the live Demo.
                </p>
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Challenges</p>
                  </div>
                }
              >
                <ul>
                  <li>Main content&apos;s design breaks</li>
                  <li>Sidebar gap</li>
                </ul>
                <img
                  width={512}
                  src="/images/ocado/question1.png"
                  alt="sidebar gap"
                />
                <p>Solution to sidebar gap {"(deprecated)"}</p>
                <CopyBlock
                  text={removeSidebarCode}
                  language={"javascript"}
                  showLineNumbers={true}
                  wrapLines
                />
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">
                      Improvements/Alternative solutions
                    </p>
                  </div>
                }
              >
                <ul>
                  <li>Remove sidebar with CSS</li>
                  <li>
                    Free memory by setting sideBar to null{" "}
                    <CopyBlock
                      text={`sidebar = null;`}
                      language={"javascript"}
                      showLineNumbers={true}
                      wrapLines
                    />
                  </li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="section question-2" id="question2">
          <div className="section__container">
            <h2 className="section__title">Question 2</h2>
            <h3 className="section__sub-title">Create a form</h3>
            <p className="section__description">
              A form that will display input values in a modal when the submit
              button is clicked.
            </p>

            <Accordion transition transitionTimeout={250}>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Analysis</p>
                  </div>
                }
              >
                <ul>
                  <li>
                    Tech: HTML, Sass, JavaScript
                    <ul>
                      <li>
                        Sass for styling, and compliments BEM naming convention
                      </li>
                      <li>
                        Organise and create a modular folder structure to
                        maintain codebase easier
                      </li>
                    </ul>
                  </li>
                  <li>Create a wireframe</li>
                  <img
                    width="220"
                    src="/images/ocado/wireframe.jpg"
                    alt="wireframe"
                  />
                  <li>Download icon and van image</li>
                </ul>
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Solution</p>
                  </div>
                }
              >
                <p className="accordion__description">
                  Please see the live demo
                </p>
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Challenges</p>
                  </div>
                }
              >
                <ul>
                  <li>
                    Form validation; for example, ensure the phone number is a
                    number
                  </li>
                  <li>User experience in providing helpful error messages</li>
                  <li>User accesibilty of using semantic HTML</li>
                  <li>
                    Sanitise input and use of `textContent`, `innerText over
                    `innerHTML`
                  </li>
                </ul>
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">
                      Improvements/Alternative solutions
                    </p>
                  </div>
                }
              >
                <ul>
                  <li>Review element selectors to reduce repetition</li>
                  <CopyBlock
                    text={`const $ = (selector) => document.querySelector(selector);
const form = $(".form");`}
                    language={"terminal"}
                    showLineNumbers={true}
                    wrapLines
                  />
                  <li>Modal related code could be moved into its own file</li>
                  <li>Separate error handling logic into its own function</li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="section question-3" id="question3">
          <div className="section__container">
            <h2 className="section__title">Question 3</h2>
            <h3 className="section__sub-title">Convert date function</h3>
            <p className="section__description">
              A function that takes a date object and {"=>"} DD MMM YYYY.
            </p>

            <Accordion transition transitionTimeout={250}>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Analysis</p>
                  </div>
                }
              >
                <ul>
                  <li>Create function that takes in a date object</li>
                  <li>Extract the hour, month, and year</li>
                  <li>Build a new string with in the format of DD MMM YYYY</li>
                </ul>
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Solution</p>
                  </div>
                }
              >
                <p className="accordion__description">
                  Please see the live demo.
                </p>
                <CopyBlock
                  text={`node 03-question/03-question.js`}
                  language={"terminal"}
                  showLineNumbers={true}
                  wrapLines
                />
                <p className="accordion__description">Alternative version</p>
                <CopyBlock
                  text={`node 03-question/03-question-alternative.js`}
                  language={"terminal"}
                  showLineNumbers={true}
                  wrapLines
                />
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Challenges</p>
                  </div>
                }
              >
                <ul>
                  <li>
                    Valid date input and validation
                    <ul>
                      <li>Use regular expression to test input argument</li>
                      <li>
                        <CopyBlock
                          text="`/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/`"
                          language="javascript"
                        />
                      </li>
                    </ul>
                    <li>Creating a list of Months</li>
                    <li>
                      Timezone issues
                      <ul>
                        <li>
                          For example, 2024 Jul 15 may be converted to Jul 14 in
                          Alaska, but it remains Jul 15 in East of Russia{" "}
                        </li>
                        <li>
                          Create an alternative version to use `toISOString`
                        </li>
                        <li>Aim to use UTC as GMT changes into BST, or DST</li>
                      </ul>
                    </li>
                  </li>
                </ul>
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">
                      Improvements/Alternative solutions
                    </p>
                  </div>
                }
              >
                <ul>
                  <li>Use moment.js library</li>
                  <li>
                    Consider using `toLocaleDateString` in case timezones are
                    not a concern
                  </li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="section question-4" id="question4">
          <div className="section__container">
            <h2 className="section__title">Question 4</h2>
            <h3 className="section__sub-title">Customer marketing</h3>
            <p className="section__description">
              Create a function that returns the email marketing status of a
              customer
            </p>

            <Accordion transition transitionTimeout={250}>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Analysis</p>
                  </div>
                }
              >
                <ul>
                  <li>
                    Create a function with 2 parameters: customerArray, and ID
                  </li>
                  <li>Iterate through the customer array</li>
                  <li>Check if the given ID equals to the ID in the array</li>
                  <li>If there is no match, return error message</li>
                  <li>Otherwise, return true/false based on marketing</li>
                </ul>
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Solution</p>
                  </div>
                }
              >
                <p className="accordion__description">
                  Please see the live demo.
                </p>
                <CopyBlock
                  text={`node 04-question/04-question.js`}
                  language={"terminal"}
                  showLineNumbers={true}
                  wrapLines
                />
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">Challenges</p>
                  </div>
                }
              >
                <ul>
                  <li>the `find` method may not suit large arrays</li>
                </ul>
              </AccordionItem>
              <AccordionItem
                header={
                  <div className="accordion">
                    <p className="accordion__title">
                      Improvements/Alternative solutions
                    </p>
                  </div>
                }
              >
                <ul>
                  <li>Parameter checks to assist team</li>
                  <li>
                    Provide descriptive error messages to assist in debugging
                  </li>
                </ul>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="section end" id="end">
          <div className="section__container">
            <h2 className="section__title">
              Thank you so much for this opportunity!
            </h2>

            <h2 className="section__title">Questions?</h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Ocado;
