import {FC} from 'react'

const PurchaseButton: FC = () => (
  <a
    href={import.meta.env.VITE_APP_PURCHASE_URL}
    className='engage-purchase-link btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 px-5 shadow-sm rounded-top-0'
  >
    Buy Now k
  </a>
)

export {PurchaseButton}
