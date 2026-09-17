import Link from "next/link";
import AuthWidget from './AuthWidget';
import { MapPin, CheckCircle, Trophy } from "@phosphor-icons/react/dist/ssr";

export default function ScavengerHuntLanding() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play the To the Moon and Beyond Scavenger Hunt",
    "step": [
      { "@type": "HowToStep", "text": "Sign up or sign in to create your hunt profile." },
      { "@type": "HowToStep", "text": "Find clues in articles, at events, at museums, or on discovered websites." },
      { "@type": "HowToStep", "text": "Submit answers to claim points and badges." },
      { "@type": "HowToStep", "text": "Compare scores on the leaderboard and unlock rewards." }
    ]
  }

  return (
    <section className="scavenger-hunt">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <h2 className="scavenger-hunt__title">Mankind's Journey Scavenger Hunt</h2>

      <div className="scavenger-hunt__intro copy">
        <p>
          Welcome to Mankind's Journey Scavenger Hunt — a fun, family-friendly way to
          explore content, events, and places. Collect clues, solve puzzles,
          and earn points as you progress.
        </p>
      </div>

     {/*  <h3>How it works</h3>
      <ol className="scavenger-hunt__steps copy">
        <li className="scavenger-hunt__step copy">Sign up or sign in to create your hunt profile.</li>
        <li className="scavenger-hunt__step">Find clues in articles, at events, at museums, or from websites.</li>
        <li className="scavenger-hunt__step">Submit answers to claim points and badges.</li>
        <li className="scavenger-hunt__step">Compare scores on the leaderboard and unlock rewards.</li>
      </ol> */}

      <h3 className="scavenger-hunt__how-title">How it works</h3>
        <div className="scavenger-hunt__how-grid">
          <div className="scavenger-hunt__how-card">
            <MapPin size={32} weight="duotone" className="scavenger-hunt__how-icon" />
            <h4>Find Clues</h4>
            <p>Discover clues hidden in articles, at events, at museums, or on websites across the site.</p>
          </div>

          <div className="scavenger-hunt__how-card">
            <CheckCircle size={32} weight="duotone" className="scavenger-hunt__how-icon" />
            <h4>Submit & Earn Points</h4>
            <p>Submit your answers to claim points and unlock badges as you go.</p>
          </div>

          <div className="scavenger-hunt__how-card">
            <Trophy size={32} weight="duotone" className="scavenger-hunt__how-icon" />
            <h4>Climb the Leaderboard</h4>
            <p>Compare scores with other hunters and unlock exclusive rewards.</p>
          </div>
        </div>

      <div className="scavenger-hunt__auth">
        <h3>Get started</h3>
        <p className="scavenger-hunt__step copy">Save your progress and view your badges — sign up or sign in now.</p>
        <AuthWidget />
      </div>
    </section>
  );
}