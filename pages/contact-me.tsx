import ContactForm from 'components/ContactForm'
import SocialLinks from 'components/SocialLinks'

export default function ContactMe() {
  return (
    <div>
      <section className="flex flex-col lg:flex-row gap-6 border-t-b">
        <h2 className="h1 flex-[2]">Get in Touch</h2>
        <div className="flex flex-col gap-6 flex-[3]">
          <p className="body-2 lg:body-1">
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a new role and am open to a wide range of
            opportunities. My preference would be to find a position in a
            company in London. But I’m also happy to hear about opportunites
            that don’t fit that description. I’m a hard-working and positive
            person who will always approach each task with a sense of purpose
            and attention to detail. Please do feel free to check out my online
            profiles below and get in touch using the form.
          </p>
          <SocialLinks />
        </div>
      </section>
      <ContactForm />
    </div>
  )
}
