/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState, useRef } from "react";

const ScrollY = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: sectionRef.current, rootMargin: "0px", threshold: 1 }
    );

    if (sectionRef.current) {
      document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
      });
    }

    return () => {
      if (sectionRef.current) {
        document.querySelectorAll("section").forEach((section) => {
          observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <div
          ref={sectionRef}
          data-te-spy="scroll"
          data-te-target="#scrollspy1"
          data-te-offset="200"
          className="relative h-96 overflow-auto"
        >
          <section id="example-1" className="mb-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            laudantium ad magni nemo in, autem ipsa impedit maxime, possimus
            ducimus tempore reprehenderit a id illum soluta minus. Optio
            similique, beatae et autem, laboriosam explicabo pariatur in itaque
            dignissimos distinctio ex? Voluptates quo veniam recusandae vitae
            saepe corporis ad laboriosam necessitatibus eveniet eaque, libero
            velit sequi voluptatibus in! Natus odit tenetur officia modi, ullam
            nesciunt{" "}
          </section>
          <section id="example-2" className="mb-20">
            fugiat autem, voluptates tenetur dolorem ex, qui error quaerat
            accusantium, omnis molestias. Assumenda, autem sunt! Ratione culpa
            cum fugiat eos aspernatur, minus quam autem distinctio labore ipsum
            harum beatae iure est quaerat asperiores velit voluptatem sapiente
            vero eligendi quo in! Quis animi ut tempora!
          </section>
          <section id="example-3" className="mb-20">
            ex, laudantium dolorem. Voluptatum commodi ullam distinctio id
            voluptas libero iusto fugiat quos harum nesciunt a, doloremque
            reprehenderit tenetur, ipsum labore? Atque, labore cumque ipsa
            aliquid at, totam distinctio odit rerum praesentium corporis est?
            Molestias nostrum expedita alias asperiores, sunt at corporis
            doloremque voluptas obcaecati vero blanditiis facilis saepe nam
            ipsum in? Odit
          </section>
          <section id="example-4">
            dignissimos ratione assumenda deleniti, quaerat minus porro sunt et
            molestiae distinctio dolorum cumque eligendi iusto. Quae expedita
            consequatur possimus praesentium voluptates sapiente autem itaque,
            adipisci corrupti facere obcaecati reprehenderit asperiores dolore
            voluptatem similique et vero quos sint cum fugiat
          </section>
        </div>
      </div>

      <div>
        <div id="scrollspy1" className="sticky-top pl-3 text-sm">
          <ul data-te-nav-list-ref>
            <li className="py-1">
              <a
                data-te-nav-link-ref
                className={`bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200 ${
                  activeSection === "example-1"
                    ? "active-link text-red-600"
                    : ""
                }`}
                href="#example-1"
              >
                Section 1
              </a>
            </li>
            <li className="py-1">
              <a
                data-te-nav-link-ref
                className={`bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200 ${
                  activeSection === "example-2"
                    ? "active-link text-red-600"
                    : ""
                }`}
                href="#example-2"
              >
                Section 2
              </a>
            </li>
            <li className="py-1">
              <a
                data-te-nav-link-ref
                className={`bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200 ${
                  activeSection === "example-3"
                    ? "active-link text-red-600"
                    : ""
                }`}
                href="#example-3"
              >
                Section 3
              </a>
              <ul data-te-nav-list-ref className="pl-3">
                <li className="py-1">
                  <a
                    data-te-nav-link-ref
                    className={`bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200 ${
                      activeSection === "example-sub-A"
                        ? "active-link text-red-600"
                        : ""
                    }`}
                    href="#example-sub-A"
                  >
                    Subsection A
                  </a>
                </li>
                <li>
                  <a
                    data-te-nav-link-ref
                    className={`bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200 ${
                      activeSection === "example-sub-B" ? "active-link" : ""
                    }`}
                    href="#example-sub-B"
                  >
                    Subsection B
                  </a>
                </li>
              </ul>
            </li>
            <li className="py-1">
              <a
                data-te-nav-link-ref
                className={`bg-transparent px-[5px] text-neutral-600 shadow-none dark:text-neutral-200 ${
                  activeSection === "example-4"
                    ? "active-link text-red-600"
                    : ""
                }`}
                href="#example-4"
              >
                Section 4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScrollY;
