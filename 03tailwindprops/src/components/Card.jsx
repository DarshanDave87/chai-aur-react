import React from 'react'

function Card({auther,tetimonials,designation }){
    return(
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:ro rounded-full mx-auto" src="https://images.pexels.com/photos/1381603/pexels-photo-1381603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        {tetimonials}
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {auther}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {designation}
      </div>
    </figcaption>
  </div>
</figure>
    )
}

export default Card