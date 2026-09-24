import logo from '../assets/logo.webp';
import arrowRightIcon from '../assets/arrow-right.webp';
import { Link } from 'react-router';
import { use } from 'react';
import { LanguageContext } from '../store/language-context.jsx';

function Language() {
  const { language, setLanguage } = use(LanguageContext);

  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center p-3">
      <div className="h-fit w-full border border-border bg-card relative mx-auto max-w-sm rounded-3xl p-8 text-center">
        {/* Brand header */}

        <div className="flex items-center justify-center mb-7">
          <img src={logo} alt="logo image" className="w-20" />
        </div>

        {/* Intro illustration */}

        <h1 className="text-2xl font-extrabold tracking-tight leading-snug mb-2.5">
          Chose a Language
        </h1>
        <p className="text-sm text-text-muted leading-relaxed mb-6 max-w-[32ch] mx-auto font-medium">
          Zuban Ka Intekhab karain
        </p>

        <div>
          <div
            className={` border ${language === 'english' ? 'bg-accent/5 border-accent' : 'border-border'} flex gap-2 items-center   p-2 rounded-xl mb-3 pr-3`}
            onClick={() => setLanguage('english')}
          >
            <span
              className={`${language === 'english' ? 'bg-accent text-white' : 'bg-gray-200'}  p-3 rounded-xl font-bold`}
            >
              EN
            </span>

            <section className="flex flex-col">
              <span className="text-left text-base font-bold">English</span>
              <span className="text-sm text-text-muted">
                Continue in English
              </span>
            </section>

            <input
              type="radio"
              name="language"
              className="ml-auto h-4 w-4 mr-1"
              checked={language === 'english'}
            />
          </div>

          {/*Urdu Langue*/}
          <div
            className={` border ${language === 'urdu' ? 'bg-accent/5 border-accent' : 'border-border'} flex gap-2 items-center   p-2 rounded-xl mb-3 pr-3`}
            onClick={() => setLanguage('urdu')}
          >
            <span
              className={`${language === 'urdu' ? 'bg-accent text-white' : 'bg-gray-200'}  p-3 rounded-xl font-bold`}
            >
              UR
            </span>

            <section className="flex flex-col">
              <span className="text-left text-base font-bold">Roman Urdu</span>
              <span className="text-sm text-text-muted">Continue in Urdu</span>
            </section>

            <input
              type="radio"
              name="language"
              className="ml-auto h-4 w-4 mr-1"
              checked={language === 'urdu'}
            />
          </div>
        </div>

        {/* Start action */}
        <Link to="/quiz" className="block">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-accent py-3.5 font-bold text-white transition hover:opacity-90 active:scale-[0.98] text-[15px]">
            Start Quiz
            <img
              src={arrowRightIcon}
              alt=""
              width="16"
              height="16"
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Language;
