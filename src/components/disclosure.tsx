import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function PDisclosure(props: {
  title: string;
  content: JSX.Element;
  className: string;
}) {
  return (
    <div className={"w-full " + props.className}>
      <div className="w-full rounded-2xl bg-black">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-neutral px-4 py-2 text-left text-sm font-medium text-second hover:bg-neutral focus:outline-none focus-visible:ring focus-visible:ring-second-500/75">
                <span>{props.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-second`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-white">
                {props.content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
