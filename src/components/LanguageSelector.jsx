import { Fragment } from 'react'
import { connect, useSelector } from "react-redux";
import { Menu, Transition } from '@headlessui/react'
import Language from "./Language"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function LanguageSelector({dispatch}) {
    const userLang = useSelector(state => state.lang.language);
    return (
    <Menu as="div" className="mr-5">
      <div>
        <Menu.Button className="inline-flex rounded-sm overflow-hidden">
        <Language userLang={userLang} />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-30 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (
                <div className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')} onClick={e => dispatch({type: 'uk'})}>
                 <Language userLang={'UA'} /><span>Українська</span>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')} onClick={e => dispatch({type: 'en'})}>
                 <Language userLang={'EN'} /><span>English</span>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')} onClick={e => dispatch({type: 'ru'})}>
                 <Language userLang={'RU'} /><span>Русский</span>
                </div>
              )}
            </Menu.Item>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export default connect()(LanguageSelector);