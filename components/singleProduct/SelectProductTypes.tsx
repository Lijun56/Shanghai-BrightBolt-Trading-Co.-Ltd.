"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchProductTypes } from "@/utils/actions";

type SelectProductTypeProps = {
  productId: string;
  selectedType: string;
  setSelectedType: (type: string) => void;
};

function SelectProductType({
  productId,
  selectedType,
  setSelectedType,
}: SelectProductTypeProps) {
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        const productTypes = await fetchProductTypes(productId);
        setTypes(productTypes);
      } catch (error) {
        console.error("Failed to fetch product types:", error);
      } finally {
        setLoading(false);
      }
    };
    loadTypes();
  }, [productId]);

  if (loading) return <div>Loading types...</div>;

  return (
    <div className="mt-4">
      <h4 className="mb-2">Type:</h4>
      <Select value={selectedType} onValueChange={setSelectedType}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select type" />
        </SelectTrigger>
        <SelectContent>
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectProductType;
