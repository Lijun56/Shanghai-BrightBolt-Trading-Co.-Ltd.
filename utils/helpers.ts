import { GroupedSpecs } from "./types";

export const parseCSVData = (csvData: string): GroupedSpecs => {
  const lines = csvData.split('\n').slice(1); // Skip header
  const specs: GroupedSpecs = {};

  lines.forEach(line => {
    const [spec] = line.split('*');
    if (!spec) return;
    
    const size = spec.match(/M\d+(\.\d+)?/)?.[0] || '';
    const pitch = spec.match(/\*(\d+(\.\d+)?)\*/)?.[1] || '';
    const length = spec.match(/(\d+(\.\d+)?D)$/)?.[0] || '';

    if (!specs[size]) specs[size] = {};
    if (!specs[size][pitch]) specs[size][pitch] = [];
    if (!specs[size][pitch].includes(length)) {
      specs[size][pitch].push(length);
    }
  });

  return specs;
};