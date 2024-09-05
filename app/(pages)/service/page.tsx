/* eslint-disable @next/next/no-img-element */
"use client";

import Contact from "@/app/components/modals/Contact";
import Navbar from "@/app/components/Navbar";
import Videoplayer from "@/app/components/Videoplayer";
import Payment from "@/app/components/modals/Payment";
import { NewspaperIcon, PhoneIcon, CheckIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import Successful from "@/app/components/Successful";
import axios from "axios";
import clsx from "clsx";
import Warning from "@/app/components/Warning";
import Footer from "@/app/components/Footer";

const tiers = [
  {
    name: "Basic",
    price: 100,
    description:
      "Teilen Sie mir in kurzen Worten mit, welche Aufnahmen Sie sich wünschen.",
    features: [
      "Hochqualitative Aufnahmen",
      "Professioneller Videobearbeitung",
      "Kostenlose Beratung",
      "Indoor und Outdoor",
    ],
  },
  {
    name: "Premium",
    price: 150,
    description:
      "Bitte informieren Sie mich kurz darüber, welche Art von Aufnahmen Sie bevorzugen würden.",
    features: [
      "Hochqualitative Aufnahmen",
      "Professioneller Videobearbeitung",
      "Color Grading",
      "Kostenlose Beratung",
      "Indoor und Outdoor",
      "Express-Bearbeitung",
      "Zusätzliche Requisiten nach Wahl",
    ],
  },
];

const Service = () => {
  const [contact, openContact] = useState(false);
  const [video, openVideo] = useState(false);
  const [payment, openPayment] = useState(false);
  const [notification, setNotification] = useState(false);
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [successful, setSuccessful] = useState(false);
  const [warning, setWarning] = useState(false);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (video) {
      if (window.orientation === 90 || window.innerWidth > window.innerHeight) {
        setActive(false);
        openVideo(true);
      } else {
        setActive(true);
        openVideo(false);
      }
    }
  }, [video]);

  const topinformation = [
    {
      name: "Sprechen Sie mit mir",
      description:
        "Ob Sie Fragen zu meiner Dienstleistung haben oder einfach mehr über meine innovativen Ansätze erfahren möchten – zögern Sie nicht, mich zu kontaktieren.",

      icon: PhoneIcon,
      link: "Kontaktieren mich →",
      click: () => {
        openContact(true);
      },
    },
    {
      name: "Hochwerige Aufnahmen",
      description:
        "Ich setze auf gute Aufnahmen und Bearbeitung, um saubere, effiziente und hochwertige Ergebnisse zu erzielen.",
      icon: AiOutlineCamera,
      link: "Mehr erfahren →",
      click: () => {
        openVideo(true);
      },
    },
    {
      name: "Agile Vorgehensweise",
      description:
        "Dies hilft mir, besser auf Kundenwünsche zu reagieren und qualitativ hochwertige Ergebnisse zu liefern.",
      icon: NewspaperIcon,
      link: "",
    },
  ];

  useEffect(() => {
    const isButtonDisabled = !email || !email.includes("@");
    setDisabled(isButtonDisabled);
  }, [email]);

  const registerEmail = async () => {
    try {
      const response = await axios.post("/api/email", {
        email,
      });
      if (response.status === 200) {
        setLoading(false);
        setSuccessful(true);
        setTimeout(() => {
          setSuccessful(false);
        }, 3000);
      } else {
        setLoading(false);
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar color="#000000" />
      <div className="bg-white">
        <header className="relative pb-36 bg-blue-gray-800">
          <div className="absolute inset-0">
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src="/videos/Background.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-blue-gray-800 mix-blend-multiply" />
          </div>
          <div className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8"></div>
          <div className="relative mt-24 mb-[128px] max-w-md mx-auto px-4 pb-32 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8"></div>
        </header>

        <main>
          <div>
            {/* Cards */}
            <section className="-mt-32 max-w-md mx-auto relative px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
                {topinformation.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-white rounded-2xl shadow-xl"
                  >
                    <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                      <div className="absolute top-0 p-5 inline-block bg-blue-600 rounded-xl shadow-lg transform -translate-y-1/2">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-medium text-blue-gray-900">
                        {item.name}
                      </h3>
                      <p className="mt-4 text-base">{item.description}</p>
                    </div>
                    <div className="p-6 rounded-bl-2xl rounded-br-2xl md:px-8">
                      <button
                        onClick={item.click}
                        className="text-base font-medium text-blue-700 hover:text-blue-600"
                      >
                        {item.link}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Innovation */}
            <section className="max-w-md mx-auto py-24 px-4 divide-y-2 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
              <h2 className="text-3xl font-extrabold">
                Innovation der Drohnenaufnahmen
              </h2>
              <div className="mt-6 pt-10">
                <p className="mt-2 text-lg font-medium max-w-3xl">
                  Als aufstrebender Akteur im Drohnen-Dienstleistungssektor
                  erschaffe ich bei LensCraft Drohnenaufnahmen für Kunden aus
                  ganz Österreich. Ich kombiniere neuste Technologien und
                  innovative Ansätze, um maßgeschneiderte Aufnahmen zu liefern.
                  Mein Ziel ist es dabei stets, Kundenwünsche zu erfüllen und
                  die Erwartungen zu übertreffen.
                </p>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <section id="aboutme" className="relative bg-white">
            <div className="hidden absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:block" />
            <div className="max-w-7xl mx-auto bg-blue-600 lg:bg-transparent lg:px-8">
              <div className="lg:grid lg:grid-cols-12">
                <div className="relative z-[2] lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                  <div className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" />
                  <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                    <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                      <img
                        className="object-cover object-center rounded-3xl shadow-2xl"
                        src="/images/self.png"
                        alt="Self"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative bg-blue-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
                  <div className="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block">
                    <svg
                      className="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-blue-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                    <svg
                      className="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                      width={404}
                      height={384}
                      fill="none"
                      viewBox="0 0 404 384"
                    >
                      <defs>
                        <pattern
                          id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                          x={0}
                          y={0}
                          width={20}
                          height={20}
                          patternUnits="userSpaceOnUse"
                        >
                          <rect
                            x={0}
                            y={0}
                            width={4}
                            height={4}
                            className="text-blue-500"
                            fill="currentColor"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width={404}
                        height={384}
                        fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                      />
                    </svg>
                  </div>
                  <div className="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                    <h2
                      className="text-3xl font-extrabold text-white"
                      id="join-heading"
                    >
                      Über mich
                    </h2>
                    <p className="text-lg text-white">
                      Ich bin Jonas, ein erfahrener Drohnenpilot und Cutter, der
                      auf erstklassige Aufnahmen und präzise Bearbeitung setzt.
                      Diese Vorgehensweise ermöglicht es mir, Kundenwünsche
                      perfekt umzusetzen und herausragende Ergebnisse von
                      höchster Qualität zu liefern.
                    </p>
                    <Link
                      href="https://codeflexx.com/"
                      className="transition hover:scale-110 block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-700 hover:bg-blue-gray-50 sm:inline-block sm:w-auto"
                    >
                      Mehr über mich
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Price Section */}
          <div id="price">
            <div className="pt-12 sm:pt-16 lg:pt-24 mb-[100px] sm:mb-5">
              <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                  <h2 className="text-lg leading-6 font-semibold uppercase tracking-wider">
                    Preise
                  </h2>
                  <p className="text-3xl font-extrabold sm:text-4xl lg:text-4xl">
                    Ich erstelle Ihnen gerne ein Unverbindliches Angebot
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pb-12 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
              <div className="relative">
                <div className="absolute inset-0 h-3/4" />
                <div className="relative z-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                    {tiers.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                      >
                        <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                          <div>
                            <h3
                              className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-blue-600"
                              id="tier-standard"
                            >
                              {item.name}
                            </h3>
                          </div>
                          <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                            €{item.price}
                          </div>
                          <p className="mt-5 text-lg text-gray-500">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 sm:p-10 sm:pt-6">
                          <ul role="list" className="space-y-4">
                            {item.features.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <div className="flex-shrink-0">
                                  <CheckIcon
                                    className="h-6 w-6 text-green-500"
                                    aria-hidden="true"
                                  />
                                </div>
                                <p className="ml-3 text-base text-gray-700">
                                  {item}
                                </p>
                              </li>
                            ))}
                          </ul>
                          <div className="rounded-md shadow">
                            <button
                              onClick={() => {
                                openPayment(true);
                              }}
                              aria-describedby="tier-standard"
                              className="flex items-center justify-center px-[170px] md:px-[155px] lg:px-[184px] py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                            >
                              Anfrage
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <section className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold max-w-[45rem] sm:text-4xl">
                Melden Sie sich für meine Newsletter an.
              </h2>
              <p className="mt-3 max-w-xl text-lg ">
                Erhalte die neusten Informationen zu meiner Dienstleistungen und
                Angeboten
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className="sm:flex">
                <input
                  id="email-address"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  className="w-full px-5 py-3 border border-blue-gray-300 shadow-sm placeholder-blue-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
                  placeholder="Email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    onClick={() => {
                      setLoading(true);
                      registerEmail();
                      setEmail("");
                    }}
                    disabled={disabled}
                    title={
                      disabled
                        ? "Ungültige Email Adresse"
                        : "Jetzt kostenfrei abonnieren"
                    }
                    className={clsx(
                      "w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700",
                      disabled && "cursor-not-allowed"
                    )}
                  >
                    {loading ? "Laden..." : "Abonnieren"}
                  </button>
                </div>
              </div>

              <p className="mt-3 text-sm max-w-xs">
                Der Schutz Ihrer Daten liegt mir am Herzen. Lesen Sie unser{" "}
                <Link
                  href="/datenschutzerklaerung"
                  className="font-medium underline"
                >
                  Datenschutzerklärung
                </Link>
                {". "} Die Newsletter zu abonnieren ist völlig kostenlos.
              </p>
            </div>
          </section>
        </main>
      </div>
      <Contact open={contact} setOpen={openContact} />
      <Videoplayer open={video} setOpen={openVideo} />
      <Payment
        open={payment}
        setOpen={openPayment}
        title="Formula"
        description="Füllen sie das Formula aus"
        success={notification}
        setSuccess={setNotification}
      />
      <Successful
        show={notification}
        setShow={setNotification}
        text="Ihr Kauf wurde erfolgreich abgeschlossen."
      />
      <Successful
        show={successful}
        setShow={setSuccessful}
        text="Sie haben sich erfolgreich für den Newsletter angemeldet."
      />
      <Warning
        show={warning}
        setShow={setWarning}
        text="Die Email Adresse ist bereits angemeldet"
      />
      <Warning
        show={active}
        setShow={setActive}
        text="Wechslen Sie in den Querformat-Modus, um das Video im
                        Vollbildmodus zu sehen."
      />
      <Footer />
    </div>
  );
};

export default Service;
