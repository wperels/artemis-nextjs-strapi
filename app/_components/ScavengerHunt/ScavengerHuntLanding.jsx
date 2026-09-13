import Link from "next/link";
import AuthWidget from './AuthWidget';

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

      <h2 className="scavenger-hunt__title">Scavenger Hunt</h2>

      <div className="scavenger-hunt__intro copy">
        <p>
          Welcome to the To the Moon and Beyond Scavenger Hunt — a fun, family-friendly way to
          explore content, events, and places. Collect clues, solve puzzles,
          and earn points as you progress.
        </p>
      </div>

      <h3>How it works</h3>
      <ol className="scavenger-hunt__steps copy">
        <li className="scavenger-hunt__step copy">Sign up or sign in to create your hunt profile.</li>
        <li className="scavenger-hunt__step">Find clues in articles, at events, at museums, or from websites.</li>
        <li className="scavenger-hunt__step">Submit answers to claim points and badges.</li>
        <li className="scavenger-hunt__step">Compare scores on the leaderboard and unlock rewards.</li>
      </ol>

      <div className="scavenger-hunt__auth">
        <h3>Get started</h3>
        <p classname="scavenger-hunt__step copy">Save your progress and view your badges — sign up or sign in now.</p>
        <AuthWidget />
      </div>
    </section>
  );
}