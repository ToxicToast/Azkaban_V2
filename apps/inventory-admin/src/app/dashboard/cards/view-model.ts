import { useMemo } from 'react';
import { useCategoryState } from '@azkaban/inventory-redux';

export function useDashboardCardsViewModel() {
  const { categoryData } = useCategoryState();

  const getCategoryCountString = useMemo(() => {
    return String(categoryData.length ?? 0);
  }, [categoryData]);

  const getBrandsCountString = useMemo(() => {
    return String(0);
  }, []);

  const getProductsCountString = useMemo(() => {
    return String(0);
  }, []);

  const getLocationsCountString = useMemo(() => {
    return String(0);
  }, []);

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

  return {
    getCategoryCountString,
    getBrandsCountString,
    getProductsCountString,
    getLocationsCountString,
    getSizesCountString,
    getTypesCountString,
    getLowStockCountString,
    getTotalStockValueString,
  };
}
