import React, { useState } from "react";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openNestedAccordion, setOpenNestedAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleNestedAccordionClick = (id) => {
    setOpenNestedAccordion(openNestedAccordion === id ? null : id);
  };

  return (
    <div
      id="accordion-nested-parent"
      className="py-11"
      data-accordion="collapse"
    >
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rtl:text-right rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded={openAccordion === 1}
          aria-controls="accordion-collapse-body-1"
          onClick={() => handleAccordionClick(1)}
        >
          <span>What is Adventure?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              openAccordion === 1 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${openAccordion === 1 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          an unusual, exciting, and possibly dangerous activity, such as a trip or experience, or the excitement produced by such an activity: go on an adventure They went on an adventure hunting for treasure in the western hills. have an adventure She had some exciting adventures in Egypt.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              {/* get started */}
            </a>{" "}
            {/* and start developing websites even faster with components on top of
            Tailwind CSS. */}
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
          difference between venture and adventure          </p>
          {/* Nested accordion */}
          <div id="accordion-nested-collapse" data-accordion="collapse">
            <h2 id="accordion-nested-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rounded-t-xl rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-nested-collapse-body-1"
                aria-expanded={openNestedAccordion === 1}
                aria-controls="accordion-nested-collapse-body-1"
                onClick={() => handleNestedAccordionClick(1)}
              >
                <span>What is adventures life?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${
                    openNestedAccordion === 1 ? "rotate-180" : ""
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-nested-collapse-body-1"
              className={`${openNestedAccordion === 1 ? "" : "hidden"}`}
              aria-labelledby="accordion-nested-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">
                An adventure is an exciting experience or undertaking that is typically bold, sometimes risky. Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports
                </p>
              </div>
            </div>
            <h2 id="accordion-nested-collapse-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-b-0 border-gray-200 rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-nested-collapse-body-2"
                aria-expanded={openNestedAccordion === 2}
                aria-controls="accordion-nested-collapse-body-2"
                onClick={() => handleNestedAccordionClick(2)}
              >
                <span>Architecture</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${
                    openNestedAccordion === 2 ? "rotate-180" : ""
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-nested-collapse-body-2"
              className={`${openNestedAccordion === 2 ? "" : "hidden"}`}
              aria-labelledby="accordion-nested-collapse-heading-2"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">
                  Another difference is that Flowbite relies on smaller and
                  standalone components, whereas Tailwind UI offers sections of
                  pages.
                </p>
              </div>
            </div>
            <h2 id="accordion-nested-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-gray-200 rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-nested-collapse-body-3"
                aria-expanded={openNestedAccordion === 3}
                aria-controls="accordion-nested-collapse-body-3"
                onClick={() => handleNestedAccordionClick(3)}
              >
                <span>Can I use both?</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 ${
                    openNestedAccordion === 3 ? "rotate-180" : ""
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-nested-collapse-body-3"
              className={`${openNestedAccordion === 3 ? "" : "hidden"}`}
              aria-labelledby="accordion-nested-collapse-heading-3"
            >
              <div className="p-5 border border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  We actually recommend using both Flowbite, Flowbite Pro, and
                  even Tailwind UI as there is no technical reason stopping you
                  from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="text-gray-500 list-disc ps-5 dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End: Nested accordion */}
        </div>
      </div>
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full gap-3 p-5 font-medium text-gray-500 border border-gray-200 rtl:text-right focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded={openAccordion === 2}
          aria-controls="accordion-collapse-body-2"
          onClick={() => handleAccordionClick(2)}
        >
          <span>What is Moutain Adventure?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${
              openAccordion === 2 ? "rotate-180" : ""
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${openAccordion === 2 ? "" : "hidden"}`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-gray-200 dark:border-gray-700">
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          With a focus on all the possible mountain-based activities that can be enjoyed from a particular valley base or mountain town. Walking, trekking, cycling, mountain biking, trail running, mountaineering, via ferratas – everything that is self-propelled, terrestrial and mountain-based!
          .
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            {/* Check out the{" "} */}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              {/* Figma design system */}
            </a>{" "}
            {/* based on the utility classes from Tailwind CSS and components from
            Flowbite. */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
