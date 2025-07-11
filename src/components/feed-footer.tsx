import { Button } from "./ui/button"
const FeedFooter = () => {
  return (
    <div className="m-8 border border-gray-200 w-[600px] rounded-2xl p-4 shadow">
        <h1 className="mb-4">Grow Your Library!</h1>
        <p>Discover strategies to expand your book collection</p>

        <div className="flex justify-around mt-8">
            <Button className="bg-amber-500 w-[160px]">Social Media</Button>
            <Button className="bg-amber-500 w-[160px]">Newsletter</Button>
            <Button className="bg-amber-500 w-[160px]">Book Club</Button>
        </div>
    </div>
  )
}

export default FeedFooter