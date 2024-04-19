import { useMemo } from 'react';
import {
  useBrandState,
  useCategoryState,
  useLocationState,
} from '@azkaban/inventory-redux';

export function useDashboardCardsViewModel() {
  const { categoryData } = useCategoryState();
  const { brandData } = useBrandState();
  const { locationData } = useLocationState();

  const getCategoryCountString = useMemo(() => {
    return String(categoryData.length ?? 0);
  }, [categoryData]);

  const getBrandsCountString = useMemo(() => {
    return String(brandData.length ?? 0);
  }, [brandData]);

  const getProductsCountString = useMemo(() => {
    return String(0);
  }, []);

  const getLocationsCountString = useMemo(() => {
    return String(locationData.length ?? 0);
  }, [locationData]);

  const getSizesCountString = useMemo(() => {
    return String(0);
  }, []);

  const getTypesCountString = useMemo(() => {
    return String(0);
  }, []);

  const getLowStockCountString = useMemo(() => {
    return String(0);
  }, []);

  const getTotalStockValueString = useMemo(() => {
    return `0,00 €`;
  }, []);

  const getReceiptsCountString = useMemo(() => {
    return String(0);
  }, []);

  const getWarehouseCountString = useMemo(() => {
    return String(0);
  }, []);

  return {
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
  };
}
