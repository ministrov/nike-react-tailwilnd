import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

function MyDisclosure() {
  return (
    <div className="flex flex-col gap-4 padding max-sm:p-0 max-sm:mt-6">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between max-h-20 py-2 px-3 info-text max-sm:info-text-sm cursor-pointer bg-neutral-200 rounded">
              Is team pricing available?
              <div className="flex flex-row-reverse h-6 w-6 max-sm:h-9 max-sm:w-2/5 text-purple-500">
                <ChevronRightIcon className={open ? "rotate-90 transform" : ""} />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 text-center info-text max-sm:info-text-sm">
              Yes! You can purchase a license that you can share with your
              entire team.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between max-h-20 py-2 px-3 info-text max-sm:info-text-sm cursor-pointer bg-neutral-200 rounded">
              How can I contact customer support?
              <div className="flex flex-row-reverse  h-6 w-6 max-sm:h-9 max-sm:w-2/5 text-purple-500">
                <ChevronRightIcon className={open ? "rotate-90 transform" : ""} />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 text-center info-text max-sm:info-text-sm">
              You can contact our customer support team by calling our toll-free number at 1-800-123-4567 or by sending an email to support@example.com. Our team is available 24/7 to assist you with any questions or concerns you may have.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between max-h-20 py-2 px-3 info-text max-sm:info-text-sm cursor-pointer bg-neutral-200 rounded">
              What payment methods do you accept?
              <div className="flex flex-row-reverse  h-6 w-6 max-sm:h-9 max-sm:w-2/5 text-purple-500">
                <ChevronRightIcon className={open ? "rotate-90 transform" : ""} />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 text-center info-text max-sm:info-text-sm">
              We accept various payment methods, including credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. At checkout, you can select your preferred payment method and proceed with the payment securely.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default MyDisclosure;
