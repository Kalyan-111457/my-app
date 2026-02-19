import Link from "next/link"
export default function Home(){
  return(
    <>
    <h1>WelCome Home Buddy!</h1>
    <Link href="/blog" className="text-center">Blog</Link>
    <Link href="/products">Products</Link>
    <Link href="/articles/breaking-news-123?lang=en">English Paper</Link>
    <Link href="/articles/breaking-news-123?lang=fr">French Paper</Link>
    

    </>
  )
}