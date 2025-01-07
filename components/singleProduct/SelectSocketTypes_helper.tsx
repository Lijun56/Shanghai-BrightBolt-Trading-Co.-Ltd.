"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GroupedSpecs, ProductSpec } from "@/utils/types";
import { parseCSVData } from "@/utils/helpers";

type SelectProductTypesProps = {
  specs: GroupedSpecs;
  onChange: (spec: ProductSpec) => void;
};

function SelectSocketTypes({ specs, onChange }: SelectProductTypesProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedPitch, setSelectedPitch] = useState<string>("");
  const [selectedLength, setSelectedLength] = useState<string>("");

  useEffect(() => {
    if (selectedSize && selectedPitch && selectedLength) {
      onChange({
        size: selectedSize,
        pitch: selectedPitch,
        length: selectedLength,
      });
    }
  }, [selectedSize, selectedPitch, selectedLength, onChange]);

  const sizes = Object.keys(specs);
  const pitches = selectedSize ? Object.keys(specs[selectedSize]) : [];
  const lengths =
    selectedSize && selectedPitch ? specs[selectedSize][selectedPitch] : [];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="mb-2">Size:</h4>
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="mb-2">Pitch:</h4>
        <Select
          value={selectedPitch}
          onValueChange={setSelectedPitch}
          disabled={!selectedSize}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select pitch" />
          </SelectTrigger>
          <SelectContent>
            {pitches.map((pitch) => (
              <SelectItem key={pitch} value={pitch}>
                {pitch}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h4 className="mb-2">Length:</h4>
        <Select
          value={selectedLength}
          onValueChange={setSelectedLength}
          disabled={!selectedPitch}
        >
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Select length" />
          </SelectTrigger>
          <SelectContent>
            {lengths.map((length) => (
              <SelectItem key={length} value={length}>
                {length}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default SelectSocketTypes;
