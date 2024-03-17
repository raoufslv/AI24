import { Button } from "@/components/ui/button";

export default function AuthButtons() {
  return (
    <>
      <Button
        className="bg-transparent text-black border border-black 
                  hover:bg-black hover:text-white 
                  dark:border-white dark:text-white 
                  dark:hover:bg-white dark:hover:text-black
                  "
      >
        Log In
      </Button>
      <Button
        className="hover:bg-neutral-100 hover:text-black dark:hover:bg-darky
                  dark:hover:text-white
                  "
      >
        Sign Up
      </Button>
    </>
  )
}
