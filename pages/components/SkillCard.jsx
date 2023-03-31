import Image from 'next/image'

function SkillCard({ imageSrc, skillName }) {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image width="64" height="64" alt='' src={imageSrc}/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{skillName}</h3>
        </div>
      </div>
    </div>
  )
}

export default SkillCard