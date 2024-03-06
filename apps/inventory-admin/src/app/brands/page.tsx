import { BrandHeaderView } from './header/view';
import { BrandsTableView } from './table/view';
import { BrandModalView } from './modal/view';

export function BrandPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <BrandHeaderView key="BrandHeader" />
      <BrandsTableView key="BrandTable" />
      <BrandModalView key="BrandModal" />
    </div>
  );
}
