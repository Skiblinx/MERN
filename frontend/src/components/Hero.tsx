import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <div>
      <img src={hero} alt="Hero" className='w-full h-full max-h-[800px] object-cover' />
    </div>
  )
}

export default Hero;