import { WelcomeBanner } from '@azkaban/ui-components';
import { Nullable } from '@azkaban/shared';
import { User } from 'oidc-client-ts';
import { DashboardCard } from '@azkaban/ui-inventory-layout';
import { CubeIcon } from '@radix-ui/react-icons';
import {
  ShoppingCart,
  EuroIcon,
  ClipboardTypeIcon,
  DiameterIcon,
  ArrowDownToDotIcon,
  ScanBarcodeIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  user: Nullable<User>;
}

export function DashboardPage(props: Props) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <WelcomeBanner username={props.user?.profile?.preferred_username ?? ''} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link to="/categories">
          <DashboardCard
            title="Categories"
            count="0"
            icon={<CubeIcon className="w-6 h-6" />}
          />
        </Link>

        <Link to="/brands">
          <DashboardCard
            title="Brands"
            count="0"
            icon={<CubeIcon className="w-6 h-6" />}
          />
        </Link>

        <Link to="/products">
          <DashboardCard
            title="Products"
            count="0"
            icon={<ScanBarcodeIcon className="w-6 h-6" />}
          />
        </Link>

        <Link to="/locations">
          <DashboardCard
            title="Locations"
            count="0"
            icon={<ArrowDownToDotIcon className="w-6 h-6" />}
          />
        </Link>

        <Link to="/sizes">
          <DashboardCard
            title="Sizes"
            count="0"
            icon={<DiameterIcon className="w-6 h-6" />}
          />
        </Link>

        <Link to="/types">
          <DashboardCard
            title="Types"
            count="0"
            icon={<ClipboardTypeIcon className="w-6 h-6" />}
          />
        </Link>

        <Link to="/stock/low">
          <DashboardCard
            title="Low Stock Items"
            count="0"
            icon={<ShoppingCart className="w-6 h-6" />}
          />
        </Link>

        <Link to="/stock/total">
          <DashboardCard
            title="Total Stock Value"
            count="0,00 €"
            icon={<EuroIcon className="w-6 h-6" />}
          />
        </Link>
      </div>
    </div>
  );
}
