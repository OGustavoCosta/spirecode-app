type BlogCardProps = {
  banner: string
  badges: string[]
  title: string
}

function BlogCard({ banner, badges, title }: BlogCardProps){
  return(
    <article className="blogCard w-full flex flex-col gap-4">
      <div className="blogCard__banner w-full aspect-square max-h-120 rounded-3xl overflow-hidden">
        <img src={banner} alt="" className="blogCard__image w-full h-full object-cover" />
      </div>
      <div className="blogCard__content flex flex-col gap-4 w-full text-ds-pine">
        <div className="blogCard__badges flex gap-6 pb-1.5 border-b border-current">
          {badges.map(item => (
            <span key={item} className="blogCard__badge text-[0.75rem]/[100%] md:text-sm/[100%] uppercase">{item}</span>
          ))}
        </div>
        <h3 className="blogCard__title text-lg/[120%] md:text-xl/[120%] font-ds-ibm-mono">{title}</h3>
      </div>
    </article>
  )
}

export default BlogCard