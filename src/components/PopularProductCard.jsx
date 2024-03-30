import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <article className='flex flex-1 flex-col max-sm:items-center w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-purple-500 text-2xl leading-normal'>
        {price}
      </p>
    </article>
  )
}

export default PopularProductCard
