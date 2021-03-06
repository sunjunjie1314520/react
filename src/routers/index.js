
import Child from '../pages/Child';
import Demo from '../pages/Demo';
import Fund from '../pages/Fund';

import Not from '../pages/Not';

import Home from '../pages/Home';
import Index from '../pages/Index';
import Eged from '../pages/Eged';
import Message from '../pages/Message';
import Notice from '../pages/Notice';
import GoodsFile from '../pages/GoodsFile';
import CustomerCase from '../pages/CustomerCase';
import CustomerProfile from '../pages/CustomerProfile';
import CustomerFollowup from '../pages/CustomerFollowup';
import IntentionSheet from '../pages/IntentionSheet';
import Authority from '../pages/Authority';
import PictureInventory from '../pages/PictureInventory';
import PictureCatalogue from '../pages/PictureCatalogue';
import SalesList from '../pages/SalesList';
import SalesOrder from '../pages/SalesOrder';
import CustomerPanorama from '../pages/CustomerPanorama';
import PictureGuide from '../pages/PictureGuide';
import DeliveryArrangement from '../pages/DeliveryArrangement';
import Receipt from '../pages/Receipt';
import AfterSalesManagement from '../pages/AfterSalesManagement';

import FollowUpList from '../pages/FollowUpList';
import PurchaseOrder from '../pages/PurchaseOrder';
import PaymentMethods from '../pages/PaymentMethods';
import TheUnitType from '../pages/TheUnitType';
import ReceivedMessage from '../pages/ReceivedMessage';
import Notebook from '../pages/Notebook';
import ReturnForm from '../pages/ReturnForm';
import SalesInquiry from '../pages/SalesInquiry';
import GoodsSpecials from '../pages/GoodsSpecials';
import PriceAdjustment from '../pages/PriceAdjustment';
import SpecialOfferList from '../pages/SpecialOfferList';
import BatchEdit from '../pages/BatchEdit';
import StoreWarehouseSettings from '../pages/StoreWarehouseSettings';
import GoodsCategory from '../pages/GoodsCategory';
import CurrentInventory from '../pages/CurrentInventory';
import DeliveryStatistics from '../pages/DeliveryStatistics';

const router = [
	{
		path: '/home',
		exact: false,
		component: Home,
		children: [
			{
				path: '/index',
				exact: false,
				component: Index,
			},
			{
				path: '/page1',
				exact: false,
				component: Eged,
			},
			{
				path: '/message',
				exact: false,
				component: Message,
			},
			{
				path: '/notice',
				exact: false,
				component: Notice,
			},
			{
				path: '/goods-file',
				exact: false,
				component: GoodsFile,
			},
			{
				path: '/customer-case',
				exact: false,
				component: CustomerCase,
			},
			{
				path: '/customer-profile',
				exact: false,
				component: CustomerProfile,
			},
			{
				path: '/customer-panorama',
				exact: false,
				component: CustomerPanorama,
			},
			{
				path: '/customer-followup',
				exact: false,
				component: CustomerFollowup,
			},
			{
				path: '/intention-sheet',
				exact: false,
				component: IntentionSheet,
			},
			{
				path: '/authority',
				exact: false,
				component: Authority,
			},
			{
				path: '/picture-inventory',
				exact: false,
				component: PictureInventory,
			},
			{
				path: '/picture-catalogue',
				exact: false,
				component: PictureCatalogue,
			},
			{
				path: '/sales-list',
				exact: false,
				component: SalesList,
			},
			{
				path: '/sales-order',
				exact: false,
				component: SalesOrder,
			},
			{
				path: '/picture-guide',
				exact: false,
				component: PictureGuide,
			},
			{
				path: '/delivery-arrangement',
				exact: false,
				component: DeliveryArrangement,
			},
			{
				path: '/receipt',
				exact: false,
				component: Receipt,
			},
			{
				path: '/after-sales-management',
				exact: false,
				component: AfterSalesManagement,
			},
			{
				path: '/purchase-order',
				exact: false,
				component: PurchaseOrder,
			},
			{
				path: '/Follow-up-list',
				exact: false,
				component: FollowUpList,
			},
			{
				path: '/Payment-methods',
				exact: false,
				component: PaymentMethods,
			},
			{
				path: '/The-unit-type',
				exact: false,
				component: TheUnitType,
			},
			{
				path: '/Received-message',
				exact: false,
				component: ReceivedMessage,
			},
			{
				path: '/Notebook',
				exact: false,
				component: Notebook,
			},
			{
				path: '/Return-form',
				exact: false,
				component: ReturnForm,
			},
			{
				path: '/Sales-inquiry',
				exact: false,
				component: SalesInquiry,
			},
			{
				path: '/Goods-Specials',
				exact: false,
				component: GoodsSpecials,
			},
			{
				path: '/Price-Adjustment',
				exact: false,
				component: PriceAdjustment,
			},
			{
				path: '/Special-Offer-List',
				exact: false,
				component: SpecialOfferList,
			},
			{
				path: '/Batch-Edit',
				exact: false,
				component: BatchEdit,
			},
			{
				path: '/Store-Warehouse-Settings',
				exact: false,
				component: StoreWarehouseSettings,
			},
			{
				path: '/Goods-Category',
				exact: false,
				component: GoodsCategory,
			},
			{
				path: '/Current-Inventory',
				exact: false,
				component: CurrentInventory,
			},
			{
				path: '/Delivery-Statistics',
				exact: false,
				component: DeliveryStatistics,
			},
			{
				path: '/*',
				exact: false,
				component: Not,
			},
		]
	},
	{
		path: '/test',
		exact: false,
		component: Child,
		children: []
	},
	{
		path: '/demo',
		exact: false,
		component: Demo,
		children: []
	},
	{
		path: '/fund/:uid',
		exact: false,
		component: Fund,
		children: []
	}
]

export default router