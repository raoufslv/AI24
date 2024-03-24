import { Link } from "react-router-dom";

export default function ForgotPasswordLink() {
  return (
    <div className="flex items-center justify-end mb-8">
      <Link
        to="/forgot-password"
        className="text-xs text-neutral-400 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
      >
        Forgot password?
      </Link>
    </div>
  );
}
