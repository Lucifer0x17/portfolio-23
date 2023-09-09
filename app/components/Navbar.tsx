import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-20 py-6 text-2xl">
      <div><Link href={"./"}> Home </Link></div>
      <div><Link href={"./"}> Work </Link></div>
      <div><Link href={"./"}> About </Link></div>
      <div><Link href={"./"}> Blog </Link></div>
    </div>
  )
}

export default Navbar