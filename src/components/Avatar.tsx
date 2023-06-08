type Avatar = {
  name: string
  width: number
  height: number
  src: string
}

const Avatar = ({ name, width, height, src }: Avatar) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-border flex justify-center items-center self-center p-5`}
    >
      <img
        alt={name}
        src={src}
        width={width}
        height={height}
        className=" aspect-square  object-cover "
      />
    </div>
  )
}
export default Avatar
