import { DashboardCard } from '@azkaban/ui-inventory-layout';
import { CubeIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import { useDashboardCardsViewModel } from './view-model';
import {
  ArrowDownToDotIcon,
  ClipboardTypeIcon,
  DiameterIcon,
  EuroIcon,
  ScanBarcodeIcon,
  ShoppingCart,
  BookmarkIcon,
  WarehouseIcon,
} from 'lucide-react';

export function DashboardCardsView() {
  const {
    getCategoryCountString,
    getBrandsCountString,
    getProductsCountString,
    getLocationsCountString,
    getSizesCountString,
    getTypesCountString,
    getLowStockCountString,
    getTotalStockValueString,
    getReceiptsCountString,
    getWarehouseCountString,
  } = useDashboardCardsViewModel();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Link to="/categories">
        <DashboardCard
          title="Categories"
          count={getCategoryCountString}
          icon={<CubeIcon className="w-6 h-6" />}
        />
      </Link>

      <Link to="/brands">
        <DashboardCard
          title="Brands"
          count={getBrandsCountString}
          icon={<CubeIcon className="w-6 h-6" />}
        />
      </Link>

      <Link to="/products">
        <DashboardCard
          title="Products"
          count={getProductsCountString}
          icon={<ScanBarcodeIcon className="w-6 h-6" />}
        />
      </Link>

      <Link to="/locations">
        <DashboardCard
          title="Locations"
          count={getLocationsCountString}
          icon={<ArrowDownToDotIcon className="w-6 h-6" />}
        />
      </Link>

      <Link to="/sizes">
        <DashboardCard
          title="Sizes"
          count={getSizesCountString}
          icon={<DiameterIcon className="w-6 h-6" />}
        />
      </Link>

      <Link to="/types">
        <DashboardCard
          title="Types"
          count={getTypesCountString}
          icon={<ClipboardTypeIcon className="w-6 h-6" />}
        />
      </Link>

      <Link to="/warehouse">
        <DashboardCard
          title="Warehouse"
          count={getWarehouseCountString}
          icon={<WarehouseIcon className="w-6 h-6" />}
        />
      </Link>

      <Link to="/receipts">
        <DashboardCard
          title="Receipts"
          count={getReceiptsCountString}
          icon={<BookmarkIcon className="w-6 h-6" />}
        />
      </Link>

      <Link to="/stock/low">
        <DashboardCard
          title="Low Stock Items"
          count={getLowStockCountString}
          icon={<ShoppingCart className="w-6 h-6" />}
        />
      </Link>

      <Link to="/stock/total">
        <DashboardCard
          title="Total Stock Value"
          count={getTotalStockValueString}
          icon={<EuroIcon className="w-6 h-6" />}
        />
      </Link>
    </div>
  );
}
