import React from 'react'

function AboutMe() {
  return (
    <div className="container text-light">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mt-5">Nicolas Alberto Cuello</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10 text-center">
          <img
            src="https://res.cloudinary.com/decdqjawu/image/upload/t_Profile/v1718062434/perfil2_wx58y3.png"
            alt="Foto de perfil"
          />
          <h3>Developer Full Stack</h3>
          <p className="mb-4">
            Descubrí mi interés por la programación hace poco tiempo, emprendi
            un viaje autodidacta y terminé formándome con bases sólidas en él
            Bootcamp de SoyHenry. Allí se me formo para ser un perfil Full
            Stack, donde adquirí habilidades sólidas en el lenguaje de
            programación #JavaScript y tecnologías como #React, #Redux, #CSS,
            #Express #GIT, #NodeJS, #PostgreSQL, entre otras. Con experiencia en
            metodologías ágiles de trabajo.
            <br />
            Actualmente estoy en búsqueda de mi primera experiencia como
            profesional para seguir puliendo mis habilidades y claro que
            aprender nuevas cosas. Si te interesa alguien así en tu empresa o
            equipo no dudes en contactarme.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
