import MyDisclosure from "../components/MyDisclosure"

const Faq = () => {
  return (
    <section className="max-container">
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        FAQ (<span className='text-purple-500'>Frequently</span> Asked Questions)
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        A section dedicated to providing answers to commonly asked questions about the topic at hand.
      </p>

      <MyDisclosure/>
    </section>
  )
}

export default Faq