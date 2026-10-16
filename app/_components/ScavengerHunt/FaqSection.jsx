import Link from 'next/link'

const faqs = [
  {
    question: "What is Mankind's Journey to the Moon and Beyond Scavenger Hunt?",
    answer:
      "It is a family-friendly way to explore content, events, and places. You collect clues, solve puzzles, and earn points as you progress.",
  },
  {
    question: 'Where do I find the clues?',
    answer:
      'Clues are hidden in articles, at events, at museums, and on websites across the site.',
  },
  {
    question: 'How do I earn points and badges?',
    answer:
      'Submit your answers to claim points. You unlock badges as you go.',
  },
  {
    question: 'Is there a leaderboard?',
    answer:
      'Yes. You can compare scores with other hunters and unlock exclusive rewards.',
  },
  {
    question: 'Do I need an account to play?',
    answer:
      'Sign up or sign in to save your progress and view your badges.',
  },
  // TODO: add verified facts here, e.g. dates, number of clues, badges, cost.
]

export default function FaqSection() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <section className="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      <h2 className="faq__title">Frequently asked questions</h2>

      <div className="faq__list">
        {faqs.map(({ question, answer }) => (
          <div className="faq__item" key={question}>
            <h3 className="faq__question">{question}</h3>
            <p className="faq__answer copy">{answer}</p>
          </div>
        ))}
      </div>

      <p className="faq__more copy">
        Keep exploring: see the <Link href="/missions">Artemis missions</Link>,
        find an <Link href="/events">event</Link> near you, or learn{' '}
        <Link href="/why-the-moon">why we are going back to the Moon</Link>.
      </p>
    </section>
  )
}