import { clsx } from "clsx";
import { Link } from "./link";

export function PText({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p {...props} data-slot="text" className={clsx(className, "text-second")} />
  );
}

export function TextLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "text-second underline decoration-third data-[hover]:decoration-third dark:text-white dark:decoration-white/50 dark:data-[hover]:decoration-white",
      )}
    />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"strong">) {
  return (
    <strong
      {...props}
      className={clsx(className, "font-medium text-second dark:text-white")}
    />
  );
}

export function Code({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        "rounded border border-third bg-third/[2.5%] px-0.5 text-sm font-medium text-second sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white",
      )}
    />
  );
}
