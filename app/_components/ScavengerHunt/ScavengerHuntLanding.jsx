import Link from "next/link";
import AuthWidget from './AuthWidget';

export default function ScavengerHuntLanding() {
  return (
    <section className="scavenger-hunt">
      <div className="scavenger-hunt__container">
        <div className="scavenger-hunt__intro">
          <h2>Scavenger Hunt</h2>
          <p>
            Welcome to the To the Moon and Beyond Scavenger Hunt — a fun, family-friendly way to
            explore content, events, and places. Collect clues, solve puzzles,
            and earn points as you progress.
          </p>

          <h3>How it works</h3>
          <ol>
            <li>Sign up or sign in to create your hunt profile.</li>
            <li>Find clues in articles, at events, or via QR codes.</li>
            <li>Submit answers to claim points and badges.</li>
            <li>Compare scores on the leaderboard and unlock rewards.</li>
          </ol>

          <p className="copy-small">
            (Placeholder text — replace with final copy and imagery.)
          </p>
        </div>

        <aside className="scavenger-hunt__auth card">
          <h3>Get started</h3>
          <p>Save your progress and view your badges — sign up or sign in now.</p>
          <AuthWidget />
          <div className="scavenger-hunt__actions">

          </div>
        </aside>
      </div>
    </section>
  );
}