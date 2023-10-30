import React from 'react'
import ProjectItem from './ProjectItem'
import pokemonImg from '../assets/pokemon.png'
import rickandmortyImg from '../assets/rickandmorty.png'
import viandappImg from '../assets/viandapp.png'

function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-6 pt-20'>
        <p className='text-xl tracking-widest uppercase text-[#3a388e]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          
          <ProjectItem
            title='ViandApp'
            backgroundImg={viandappImg}
            projectUrl='/viandApp'
            tech='Next.js'
          />

          <ProjectItem
            title='Rick and Morty'
            backgroundImg={rickandmortyImg}
            projectUrl='/rickAndMorty'  
            tech='React.js'
          />

          <ProjectItem
            title='Api Pokemon'
            backgroundImg={pokemonImg}
            projectUrl='/pokemon'
            tech='React.js'
          />

          <ProjectItem
            title='Api Pokemon'
            backgroundImg={pokemonImg}
            projectUrl='/pokemon'
            tech='React.js'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects