import { Button } from "@/components/ui/button";
import { SignupForm } from "@/components/shared/navbar/SignupForm.jsx";
import { LoginForm } from "@/components/shared/navbar/LoginForm.jsx";
import { useState } from "react";
import FormModal from "@/components/customUI/FormModal";

export default function AuthButtons() {
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const toggleBetweenForms = () => {
    setOpenLogin(!openLogin);
    setOpenSignup(!openSignup);
  };

  return (
    <>
      <Button
        className="bg-transparent text-black border border-black 
                  hover:bg-black hover:text-white 
                  dark:border-white dark:text-white 
                  dark:bg-transparent
                  dark:hover:bg-white dark:hover:text-black
                  "
        onClick={() => {
          setOpenLogin(true);
        }}
      >
        Log In
      </Button>
      <Button
        className="hover:bg-neutral-100 hover:text-black dark:hover:bg-darky
                  dark:hover:text-white
                  "
        onClick={() => {
          setOpenSignup(true);
        }}
      >
        Sign Up
      </Button>

      <FormModal open={openSignup} setOpen={setOpenSignup}>
        <SignupForm toggle={toggleBetweenForms} selfOpenModal={setOpenSignup} />
      </FormModal>

      <FormModal open={openLogin} setOpen={setOpenLogin}>
        <LoginForm toggle={toggleBetweenForms} selfOpenModal={setOpenLogin} />
      </FormModal>
    </>
  );
}
